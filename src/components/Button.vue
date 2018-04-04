<template>
  <div class="starwars__button">
      {{title}}
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: [
      'title',
  ],
}
</script>

<style lang="scss" scoped>
.starwars__button{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0984e3;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 1px;
}
</style>
