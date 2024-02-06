export const getImagePath = path => {

    return new URL(`/assets/${path}`,import.meta.url).href
}