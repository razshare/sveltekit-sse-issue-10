/** src/lib/server/longrunningtask.js */

import { event } from 'sveltekit-sse'
import { delay } from '../delay'

export function long_running_task() {
  return event(async emit => {
    while (true) {
      emit(`${Date.now()}`)
      await delay({ milliseconds: 1000 })
    }
  }).toResponse()
}
