import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { deleteUserController } from "./useCases/DeleteUser";
import { getAllUserController } from "./useCases/GetAllUsers";


const router = Router()

router.get('/', (request, response) => {
    return response.json({"status": "UP"})
});

router.get('/users', (request, response) => {
    return getAllUserController.handle(request, response);
});

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

router.delete('/users/:uuid', (request, response) => {
    return deleteUserController.handle(request, response);
});


export { router }