/**  /src/lib/store/mystore.js  */

import { source } from 'sveltekit-sse'

const hooked_event = source('/hooked_event').onError(event =>
  console.error({ event }),
)

export { hooked_event }
