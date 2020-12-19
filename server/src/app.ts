import express from 'express'
import cors from 'cors'
import routes from './routes'
import errorsHandler from './handlers/error'
import 'dotenv/config'

class App {
  public express: express.Application

  constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
    this.errorHandler()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    ''
  }

  private routes (): void {
    this.express.use(routes)
  }

  private errorHandler (): void {
    this.express.use(errorsHandler)
  }
}

export default new App().express
