import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController{
    constructor(
        private updateUserUseCase: UpdateUserUseCase
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;

        const { username, email} = request.body;
        
        try {
            await this.updateUserUseCase.execute({
                id: id as string, username, email
            });
            return response.status(201).send();
        } catch (error: unknown) {
            return response.status(400).json({
                message: error instanceof Error ? error.message : 'Unexpected Error.'
            });
        }
    }
}