import { long_running_task } from '../../lib/server/long_running_task'

export function GET() {
  return long_running_task()
}
