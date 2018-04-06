<template>
  <div class="starwars__loader">
      <div class="starwars__loader__wrapper">
          <img src="../assets/yoda.png" alt="Yoda icon">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
}
</script>

<style lang="scss" scoped>
.starwars__loader{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .starwars__loader__wrapper{
        width: 250px;
        height: 250px;
        border-radius: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        animation: spin 1s infinite;

        img{
            width: 100%;
        }
    }
}
//
@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
</style>
