<template>
  <div class="loading">
    <span class="icon-spinner9"></span>
  </div>
</template>

<style>
.loading {
  animation: spin 1s linear infinite;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
