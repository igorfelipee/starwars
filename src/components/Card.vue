<template>
    <div class="starwars__card">
        <h1>
            <small>The planet is:</small>
            {{planet.name}}
        </h1>
        <div class="starwars__card__planet-infos">
            <p><strong>Population: </strong>{{planet.population}}</p>
            <p><strong>Climate: </strong>{{planet.climate}}</p>
            <p><strong>Terrain: </strong>{{planet.terrain}}</p>
            <p><strong>Gravity: </strong>{{planet.gravity}}</p>
            <p>Featured in <span>{{planet.films.length}}</span> films</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props:[
      'planet'
  ]
}
</script>

<style lang="scss" scoped>
.starwars__card{
    width: 100%;
    height: auto;
    padding: 0 0 30px 0;
    background-color: #000;
    border: 3px solid #fdcb6e;
    overflow: hidden;
    box-sizing: border-box;
    margin-bottom: 20px;

    h1{
        background-color: #fdcb6e;
        text-align: center;
        font-family: sans-serif;
        letter-spacing: 1px;
        padding: 15px 0px;
        margin-top: 0;
        font-weight: bold;

        small{
            display: block;
            font-size: 18px;
            font-weight: normal;
        }
    }
    .starwars__card__planet-infos{
        width: 90%;
        margin: 0 auto;
        text-align: center;
        p{
            color:white;
            font-family: sans-serif;
            font-size: 14px;
            text-transform: capitalize;
            strong{
                color: #fdcb6e;
                font-size: 16px;
            }
            &:last-child{
                text-transform: none;
                font-size: 12px;
            }
        }
    }
}
</style>
