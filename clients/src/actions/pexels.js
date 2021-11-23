// 563492ad6f91700001000001e3ed7b53da4e4bd99fc84afc9b38fafb
// https://www.pexels.com/vi-vn/api/documentation/

import { createClient } from 'pexels'

function Demo({ query, setResult }) {
    const client = createClient(
        '563492ad6f91700001000001e3ed7b53da4e4bd99fc84afc9b38fafb'
    )

    client.photos
        .search({ query, per_page: 1 })
        .then((photos) => setResult(photos))
}

export default Demo