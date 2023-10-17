<script>
  import { value } from '../store/my_store'

  $: console.log($value)
</script>

<p>data from server:</p>
<pre>{$value}</pre>
