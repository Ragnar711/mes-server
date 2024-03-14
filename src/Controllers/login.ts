import { Request, Response } from "express";
import { prisma } from "../Utils/prisma";
import {
    BadRequestError,
    NotAuthorizedError,
    NotFoundError,
} from "../Utils/errors";

const login = async (req: Request, res: Response): Promise<void> => {
    const { matricule, password } = req.body;

    const isUser = await prisma.users.findUnique(matricule);

    if (!isUser) {
        throw new NotFoundError("Utilisateur n'existe pas");
    }

    if (isUser.password !== password) {
        throw new BadRequestError("Mot de passe incorrect");
    }

    if (isUser.categorie !== "admin") {
        throw new NotAuthorizedError();
    }

    const user = `${isUser.prenom} ${isUser.nom}`;

    res.status(200).json({ user });
};

export default login;
