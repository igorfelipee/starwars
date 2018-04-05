<template>
  <div class="starwars__footer">
    <p>Made with <img src="../assets/like.svg" alt="Heart"/> and Vuejs by <router-link :to="{ path: '/about' }">Igor Felipe</router-link></p>
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

        a{
            text-decoration: none;
            color: white;
            border-bottom: 1px solid #fdcb6e;
        }
    }
}
</style>
