export default {
    esSubtitulo(slice) {
        return slice.slice_type == 'contenido' && slice.primary.subtitulo.length;
    },
    subtitulo(slice) {
        return slice?.primary?.subtitulo[0]?.text || '';
    },
    esContenido(slice) {
        return slice.slice_type == 'contenido' && slice.primary.contenido.length;
    },
    contenido(slice) {
        return this.$prismic.asHtml(slice.primary.contenido);
    },
    esImagenExtendida(slice) {
        return slice.slice_type == 'imagen_extendida';
    },
    esTextoImagen(slice) {
        return slice.slice_type == 'texto_e_imagen';
    },
    esBloqueDeImagenes(slice) {
        return slice.slice_type == 'bloque_de_imagenes' && slice.items.length
    },
}