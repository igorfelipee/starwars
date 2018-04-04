<template>
  <div class="starwars__game">
      <starwarsloader v-if="isLoading"></starwarsloader>
      <starwarscard :planet="this.planet"></starwarscard>
      <starwarsgamebtn :go="getPlanet.bind()"></starwarsgamebtn>
  </div>
</template>

<script>
import Card from '@/components/Card';
import GameButton from '@/components/GameButton';
import Loader from '@/components/Loader';

export default {
  name: 'Game',
  data(){
      return{
          planet:'',
          isLoading: true,
      }
  },
  components: {
    'starwarscard': Card,
    'starwarsgamebtn': GameButton,
    'starwarsloader': Loader,
  },
  created() {
      this.getPlanet();
      setTimeout( () => {
          this.isLoading = false;
      }, 1000);
  },
  methods:{
      getPlanet: function(){
        this.isLoading = true;
        let planetnumber = Math.floor(Math.random() * 61) + 1; 

        this.$http.get('https://swapi.co/api/planets/'+planetnumber)
        .then( response => {
            this.planet = response.body;
        }, err => {
            console.log(err);
        });
        setTimeout( () => {
          this.isLoading = false;
        }, 1000);
      },
  },
}
</script>

<style lang="scss">
.starwars__game{
    width: 100%;
    position: relative;
}
</style>
