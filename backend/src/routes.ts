import {Router} from 'express'
import {CreateUserController} from './controllers/create-user-controller'
const routes = Router()

routes.post('/' , new CreateUserController().handle )




export {routes}
