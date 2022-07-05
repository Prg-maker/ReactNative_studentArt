import {PrismaUserRepository} from '../repositorys/prisma/prisma-user-repository'

interface CreateUserResponse{
  email:string;
  course:string;
  password:string
}


export class CreateUserUseCase{

  constructor(
    prismaUserRepository: PrismaUserRepository
  ){}

  async execute(response:CreateUserResponse){
    const {email,course,password} = response

    if(!email){
      throw new Error('email is not provided')
    }

  }
}