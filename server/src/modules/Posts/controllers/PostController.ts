import { Request, Response } from 'express'
import PostRepository from '../repositories/PostRepository'
import AppError from '../../../errors/AppError'

class PostController {
  public index (request: Request, response: Response) {
    if (response.headersSent) {
      throw new AppError('Header not sent')
    }
    return response.status(200).send(PostRepository.fetchPosts())
  }
}

export default new PostController()
