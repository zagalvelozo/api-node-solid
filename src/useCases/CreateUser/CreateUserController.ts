import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController{
    constructor(
        private createUserUseCase: CreateUserUseCase
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{

        const {username, email} = request.body;
        
        try {
            await this.createUserUseCase.execute({
                username, email
            });
            return response.status(201).send();
        } catch (error: unknown) {
            return response.status(400).json({
                message: error instanceof Error ? error.message : 'Unexpected Error.'
            });
        }
    }
}