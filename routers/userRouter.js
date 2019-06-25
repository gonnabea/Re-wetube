import express from "express";
import routes from "../routes";
import {
    changePassword,
    userDetail,
    editProfile
} from "../controllers/userController";

export const userRouter = express.Router();


export default userRouter;
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);
/*
M data -> database
V how does the data look
C function that looks for the data
*/