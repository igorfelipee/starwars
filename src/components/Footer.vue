<template>
  <div class="starwars__footer">
      <p>Made with <img src="../assets/like.svg" alt="Heart"/> and Vuejs by Igor Felipe</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
.starwars__footer{
    width: 100%;
    margin-top: 35px;

    p{
        color: white;
        font-family: sans-serif;
        text-align: center;

        img{
            display: inline;
            width: 18px;
            vertical-align: middle;
        }
    }
}
</style>
