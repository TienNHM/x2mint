// 563492ad6f91700001000001e3ed7b53da4e4bd99fc84afc9b38fafb
// https://www.pexels.com/vi-vn/api/documentation/

import React from 'react'
import { createClient } from 'pexels'

function Demo() {
    const client = createClient(
        '563492ad6f91700001000001e3ed7b53da4e4bd99fc84afc9b38fafb'
    )
    const query = 'Nature';

    client.photos
        .search({ query, per_page: 1 })
        .then((photos) => console.log(photos))

    return (<p>Hello</p>)
}

export default Demo