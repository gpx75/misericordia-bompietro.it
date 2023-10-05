<template>
  <div :key="$route.params.slug">
    <section class="h-screen w-screen m-auto">
      <h1>{{ $route.params.slug }}</h1>
    </section>
  </div>
</template>
<script>
export default {};
</script>
