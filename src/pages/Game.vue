<template>
  <div class="starwars__game">
      <starwarserror v-if="showError"></starwarserror>
      <starwarsloader v-if="isLoading"></starwarsloader>
      <starwarscard :planet="this.planet"></starwarscard>
      <starwarsgamebtn :go="getPlanet.bind()"></starwarsgamebtn>
      <starwarsbtn title="Go back to home" link="/"></starwarsbtn>
  </div>
</template>

<script>
import Card from '@/components/Card';
import GameButton from '@/components/GameButton';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import ErrorBox from '@/components/Error';

export default {
  name: 'Game',
  data(){
      return{
          planet:'',
          isLoading: true,
          showError: false,
      }
  },
  components: {
    'starwarscard': Card,
    'starwarsgamebtn': GameButton,
    'starwarsloader': Loader,
    'starwarserror' : ErrorBox,
    'starwarsbtn' : Button,
  },
  created() {
      this.getPlanet();
  },
  methods:{
      getPlanet: function(){
        this.isLoading = true;
        let planetnumber = Math.floor(Math.random() * 61) + 1; 

        this.$http.get('https://swapi.co/api/planets/'+planetnumber)
        .then( response => {
            this.planet = response.body;
            setTimeout( () => {
                this.isLoading = false;
            }, 1000);
        }, err => {
            this.isLoading = false;
            this.showError = true;
        });

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
