<template>
    <div class="starwars__error">
        <img src="../assets/darth.png" alt="Darth Vader">
        <p>
            <strong>Oops!</strong><br>
            It seems we having some gripe, Padawan
        </p>
        <p>
            <small>Reload the game <router-link :to="{ path: '/' }">clicking here </router-link></small>
        </p>
    </div>
</template>

<script>
export default {
  name: 'ErrorBox',
}
</script>

<style lang="scss" scoped>
.starwars__error{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,.9);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 80px;
        height: 80px;
    }
    p{
        font-family: sans-serif;
        text-align: center;

        small{

            a{  
                text-decoration: none;
                color: #fdcb6e;
            }
        }
    }
}
</style>
