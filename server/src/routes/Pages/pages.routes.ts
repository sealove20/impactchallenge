import { Router } from 'express'

import PageController from '../../modules/Pages/controllers/PageController'

const pageRouter = Router()

pageRouter.get('/', PageController.index)

export default pageRouter
