const express=require('express');
const axios=require('axios')
require('dotenv').config();
const app=express();
const PORT=process.env.PORT||3001;
const cors = require('cors');

app.use(cors())
app.use(express.json());
app.post("/auth/google/callback", async (req, res) => {
     const { code } = req.body; // Code received from React frontend
   
     try {
       // Exchange authorization code for access token
       const tokenResponse = await axios.post(
         "https://oauth2.googleapis.com/token",
         new URLSearchParams({
           code,
           client_id: process.env.GOOGLE_CLIENTID,
           client_secret: process.env.CLIENT_SECRET,
           redirect_uri: "http://localhost:3000", // Your frontend callback URL
           grant_type: "authorization_code",
         })
       );
   
       const accessToken = tokenResponse.data.access_token;
   
       // Use the access token to get user info from Google
       const userResponse = await axios.get("https://www.googleapis.com/oauth2/v2/userinfo", {
         headers: { Authorization: `Bearer ${accessToken}` },
       });
   
       // Send the user data back to the frontend
       res.json({ user: userResponse.data, accessToken });
     } catch (error) {
       console.error("Error during token exchange:", error);
       res.status(500).send("Error during authentication");
     }
   });

app.listen(PORT,()=>{
     console.log("server running on port ", PORT)
})