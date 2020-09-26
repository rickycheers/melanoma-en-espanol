import {generarId} from '../utils.js'

export default function (doc) {
    if (doc.isBroken) {
      return '/not-found'
    }

    if (doc.type === 'pagina') {
      let path = generarId(doc.tags.join("/"), '-')
      path = path.length === 0 ? path : "/" + path
      return path + '/' + doc.uid
    }

    return '/not-found'
  }