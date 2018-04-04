<template>
  <div id="app">
    <router-view/>
    <starwarsfooter></starwarsfooter>
  </div>
</template>

<script>
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components:{
    'starwarsfooter': Footer,
  },
};
</script>

<style>
body{
  margin: 0;
  background-image: url(./assets/bg.gif);
}
#app{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
