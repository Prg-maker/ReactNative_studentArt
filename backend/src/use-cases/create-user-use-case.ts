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

  async execute(){

  }
}