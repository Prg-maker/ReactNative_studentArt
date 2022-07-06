import {CreateUserUseCase} from './create-user-use-case'

const createSpy = jest.fn()

const createUserUseCase = new CreateUserUseCase({
  create:createSpy
})

describe('testing create-user-use-case', ()=> {

  it('should verify if the email is provided, else return error', async ()=> {
    await expect(createUserUseCase.execute({
      email:'',
      course:'course_fake',
      password:'',
    })).rejects.toThrow()
  })

  it('should verify if the course is provided, else return error', async ()=> {
    await expect(createUserUseCase.execute({
      email:'email_fake',
      course:'',
      password:'password_fake',
    })).rejects.toThrow()
  })



  it('should verify if the password is provided, else return error', async ()=> {
    await expect(createUserUseCase.execute({
      email:'email_fake',
      course:'course_fake',
      password:'',
    })).rejects.toThrow()
  })

  it('should return success', async ()=> {
    await expect(createUserUseCase.execute({
      email:'email_fake',
      course:'course_fake',
      password:'password_fake',
    })).resolves.not.toThrow()
  })
})  