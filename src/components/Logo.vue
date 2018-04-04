<template>
    <img class="starwars__logo" src="../assets/starwars-logo.png" alt="Logo Star Wars">
</template>

<script>
export default {
  name: 'Logo',
}
</script>

<style lang="scss">
.starwars__logo{
    width: 100%;
    margin-bottom: 50px;
    animation: pulse 5s infinite;
}


//Animação de pulse para logo
@keyframes pulse {
    0% { transform: scale(1); }
    30% { transform: scale(1); }
    40% { transform: scale(1.08); }
    50% { transform: scale(1); }
    60% { transform: scale(1); }
    70% { transform: scale(1.05); }
    80% { transform: scale(1); }
    100% { transform: scale(1); }
}
</style>
