import posts from '../../../database/posts.json'

class PostRepository {
  public fetchPosts () {
    return posts
  }
}

export default new PostRepository()
