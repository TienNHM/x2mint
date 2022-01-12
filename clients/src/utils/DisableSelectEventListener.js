export const onSelectStart = node => {
    if (!node) return
    node.addEventListener('selectstart', e => {
        e.preventDefault()
        return false
    })
}