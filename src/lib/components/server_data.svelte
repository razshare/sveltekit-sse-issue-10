<script>
  import { hooked_event } from '$lib/store/hooked_event'
  import { event } from '../store/event'

  $: console.log($event)
  $: console.log($hooked_event)
</script>

<p>event from server:</p>
<pre>{$event}</pre>

<hr />

<p>hooked event from server:</p>
<pre>{$hooked_event}</pre>
