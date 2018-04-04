<template>
  <div class="starwars__home">
    <starwarslogo></starwarslogo>
    <starwarsbtn title="Start the Game" link="play"></starwarsbtn>
  </div>
</template>

<script>
import Logo from '@/components/Logo';
import Button from '@/components/Button';

export default {
  name: 'Home',
  components:{
      'starwarsbtn' : Button,
      'starwarslogo': Logo,
  }
}
</script>

<style lang="scss">
.starwars__home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}
</style>
