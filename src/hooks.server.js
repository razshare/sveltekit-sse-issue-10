import { long_running_task } from '$lib/server/long_running_task'

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  if (event.url.pathname.startsWith('/hooked_event')) {
    return long_running_task()
  }

  const response = await resolve(event)
  return response
}
