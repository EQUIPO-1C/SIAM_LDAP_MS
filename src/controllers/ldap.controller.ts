import { NextFunction, Request, Response, Router } from "express";
import IUserLogin from "../interfaces/user.interface";
import ldapAuth from "../services/ldap.service";

const router = Router();

router.post("/login", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body as IUserLogin;
        const user = await ldapAuth(body.username, body.password);

        if (!user) {
            res.status(401).json({ message: "Invalid Credentials" });
        } else {
            console.log(user);
            res.status(200).json({ message: "Login Successful" });
        }
    } catch (err) {
        res.status(401).json({ message: "Invalid Credentials" });
    }
});

export default router;