import {CreateUserUseCase} from './create-user-use-case'

const createSpy = jest.fn()

const createUserUseCase = new CreateUserUseCase({
  create:createSpy
})

describe('testing create-user-use-case', ()=> {

  it('should verify if the email is provided, else return error', async ()=> {
    await expect(createUserUseCase.execute({
      email:'',
      course:'',
      password:'',
    })).rejects.toThrow()
  })

})  