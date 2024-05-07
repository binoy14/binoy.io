<script lang="ts">
  export let className = '';
</script>

<div class={`mb-8 rounded-lg bg-white p-5 text-black shadow sm:mb-0 ${className}`}>
  <slot />
</div>
