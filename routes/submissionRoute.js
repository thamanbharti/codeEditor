import { getSubmissionController,postSubmissionController } from "../controllers/submissionController";confirm
import { Router } from "express";

const submissonRoute=Router();

submissonRoute.post('/postSubmission',postSubmissionController);
submissonRoute.get('/getSubmission',getSubmissionController);

export {submissonRoute};