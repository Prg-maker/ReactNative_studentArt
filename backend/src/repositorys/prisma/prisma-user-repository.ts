import { prisma } from "../../prisma";
import { UserData, UserRepository } from "../user-repository";


export class PrismaUserRepository implements UserRepository{
  async create(data: UserData){

    const {email,course,password} = data

    await prisma.user.create({
      data:{
        email,
        course,
        password
      }
    })
  }
}