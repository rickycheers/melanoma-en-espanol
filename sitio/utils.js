import sliceHelpers from "./sliceHelpers";

export const limpiar = (texto) => {
    let caracteres = ['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú', 'ñ', 'Ñ', 'ü', 'Ü'];
    let reemplazos = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', 'ni', 'NI', 'u', 'U'];

    for (let i = 0; i < caracteres.length; i++) {
        let regex = new RegExp(`${caracteres[i]}`, 'g');
        texto = texto.replace(regex, reemplazos[i]);
    }

    return texto;
}

export const generarId = (texto, separador = '_') => {
    return limpiar(texto).trim().toLocaleLowerCase().replace(/\s+/g, separador);
}

export const generaDescripcion = (body, $prismic) => {
    let texto = ''

    for (const slice of body) {
      if (texto.length == 0 && sliceHelpers.esContenido(slice)) {
        texto += $prismic.asText(slice.primary.contenido)
        break
      }
    }

    let partes = texto.split(' ').splice(0, 149)
    partes.push('...')

    return partes.join(' ')
}

export const obtenImagenPrincipal = (body) => {
    let url = ''

    for (const slice of body) {
        if (url.length == 0 && (sliceHelpers.esTextoImagen(slice) || sliceHelpers.esImagenExtendida(slice))) {
            url = slice.primary.imagen.url
            break
        }
    }

    return url
}