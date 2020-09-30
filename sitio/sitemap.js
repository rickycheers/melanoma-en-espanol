import dotenv from 'dotenv'
import Prismic from 'prismic-javascript'
import {format} from 'date-fns'
import linkResolver from './plugins/link-resolver'

dotenv.config()

export default async function sitemapRoutes() {
  const api = await Prismic.getApi(process.env.PRISM_API_URL, {accessToken: process.env.PRISM_ACCESS_TOKEN})
  const response = await api.query(Prismic.Predicates.at('document.type', 'pagina'), {pageSize: 100})
  const results = response.results

  const urls = results.map(result => {
    const updatedAt = format(new Date(result.last_publication_date), 'Y-MM-dd')
    const url = linkResolver(result)

    return {
      url: url,
      lastmod: updatedAt,
      changefreq: 'monthly',
    }
  })

  return urls
}
