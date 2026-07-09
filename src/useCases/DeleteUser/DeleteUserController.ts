import { Request, Response } from "express";
import {  DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController{
    constructor(
        private deleteUserUseCase: DeleteUserUseCase
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{

        const { email } = request.params;
        
        try {
            await this.deleteUserUseCase.execute({
                email: email as string,
            });
            return response.status(200).send();
        } catch (error: unknown) {
            return response.status(400).json({
                message: error instanceof Error ? error.message : 'Unexpected Error.'
            });
        }
    }
}