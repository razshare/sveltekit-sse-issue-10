/**  /src/lib/store/mystore.js  */

import { source } from 'sveltekit-sse'

const value = source('/events').onError(event => console.error({ event }))

export { value }
