<template>
    <div v-on:click="go" class="starwars__button">
        Next Planet
    </div>  
</template>

<script>
export default {
  name: 'GameButton',
  props:[
      'go'
  ],
  methods: {
    go() {
      this.$emit('getPlanets');
    }
  },
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
    cursor: pointer;
    text-decoration: none;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 1px;
    margin-bottom: 5px;
}
</style>
