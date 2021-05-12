import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const {name, email } = request.body

    this.listAllUsersUseCase.execute({name, email})

    return response.status(201).send()
  }
}

export { ListAllUsersController };
