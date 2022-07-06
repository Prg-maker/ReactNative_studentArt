import {Request , Response} from 'express'
import {PrismaUserRepository} from '../repositorys/prisma/prisma-user-repository'
import {CreateUserUseCase} from '../use-cases/create-user-use-case'

import bcrypto from 'bcryptjs'

export class CreateUserController{
  async handle(request: Request, response:Response){
    const {
      email,
      course,
      password
    } = request.body

    const prismaUserRepository = new PrismaUserRepository()
    const createUserUseCase = new CreateUserUseCase(prismaUserRepository)




    try{
      const passwordHash = await bcrypto.hash(password , 10)

      await createUserUseCase.execute({
        email,
        course,
        password:passwordHash
      })

      return response.status(201).send('')
    }catch(err){
      return response.status(400).send(err)
    }


  }
}