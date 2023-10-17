/**  /src/lib/store/mystore.js  */

import { source } from 'sveltekit-sse'

const event = source('/event').onError(event => console.error({ event }))

export { event }
