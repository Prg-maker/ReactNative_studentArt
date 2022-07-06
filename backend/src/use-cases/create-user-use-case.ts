import {PrismaUserRepository} from '../repositorys/prisma/prisma-user-repository'

interface CreateUserResponse{
  email:string;
  course:string;
  password:string
}


export class CreateUserUseCase{

  constructor(
    private prismaUserRepository: PrismaUserRepository
  ){}

  async execute(response:CreateUserResponse){
    const {email,course,password} = response

    if(!email){
      throw new Error('email is not provided')
    }
    if(!course){
      throw new Error('course is not provided')
    }
    if(!password){
      throw new Error('password is not provided')
    }

    await this.prismaUserRepository.create({
      email,
      course,
      password
    })



  }
}