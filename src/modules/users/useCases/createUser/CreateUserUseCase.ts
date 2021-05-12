import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest):User {
    const emailAlreadyExists = this.usersRepository.findByEmail(email);
    if(emailAlreadyExists)
      throw new Error("este email ja está sendo usado")
    
      
    

  return this.usersRepository.create({
      name,
      email
    })
  }
}

export { CreateUserUseCase };
