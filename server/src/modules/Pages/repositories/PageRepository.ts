import pages from '../../../database/pages.json'

class PageRepository {
  public fetchPages () {
    return pages
  }
}

export default new PageRepository()
