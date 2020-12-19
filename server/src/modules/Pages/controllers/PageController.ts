import { Request, Response } from 'express'
import PageRepository from '../repositories/PageRepository'
import AppError from '../../../errors/AppError'

class PageController {
  public index (request: Request, response: Response) {
    if (response.headersSent) {
      throw new AppError('Header not sent')
    }
    return response.status(200).send(PageRepository.fetchPages())
  }
}

export default new PageController()
