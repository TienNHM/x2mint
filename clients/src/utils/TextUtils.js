import slug from 'vietnamese-slug'

export const makeSlug = (plainText) => {
    if (!plainText || plainText.trim().length === 0) {
        return '' + Date.now()
    }
    return slug(plainText.trim()) + '-' + Date.now()
}