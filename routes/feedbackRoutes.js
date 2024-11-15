import express from "express";


import { createAdmin, createAlumni, createStudent, getAllusers } from "../controller/userController.js";
import { createCompany } from "../controller/companyController.js";
import { getCompanies} from "../controller/companyController.js";
import { createReview ,getAllReviews } from "../controller/reviewController.js"
import { likeReviews } from "../controller/likesController.js";
import{isAdmin} from "../middelware/Middleware.js";

const router= express.Router()

router.post("/admin/create",createAdmin );
router.post("/alumni/create", createAlumni);  
router.post("/student/create", createStudent);
router.get("/user/get/create", getAllusers);

router.post("/company/create",isAdmin,createCompany);
router.get("/company/get/create",getCompanies);

router.post("/review/create", createReview);
router.get("/review/get/create", getAllReviews );

router.post("/like/add", likeReviews);

export default router;