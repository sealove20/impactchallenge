import { Router } from 'express'

import postRoutes from '../routes/Posts/posts.routes'
import pagesRoutes from '../routes/Pages/pages.routes'

const routes = Router()

routes.use('/posts', postRoutes)
routes.use('/pages', pagesRoutes)

export default routes
