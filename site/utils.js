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
