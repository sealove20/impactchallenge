import { Router } from 'express'

import PostController from '../../modules/Posts/controllers/PostController'

const postRouter = Router()

postRouter.get('/', PostController.index)

export default postRouter
