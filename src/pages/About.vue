<template>
  <div class="about-me">
      <img src="../assets/me.jpg" alt="A photo of myself">
      <h1>find me</h1>
      <p>Get in touch with me, you should!</p>
      <p><a href="https://github.com/igorfelipee/" target="_blank">github</a></p>
      <p><a href="https://www.linkedin.com/in/igorfelipee1/" target="_blank">linkedin</a></p>
      <p><router-link class="back" :to="{path: '/'}">Back to home</router-link></p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.about-me{
    width: 100%;
    height: auto;
    background-color: #000;
    border-radius: 4px;
    border: 3px solid #fdcb6e;

    img{
        width: 100px;
        border-radius: 100%;
        margin: -50px auto 0 auto;
        border: 3px solid #fdcb6e;
        display: block;
    }
    h1{
        font-family: sans-serif;
        font-size: 28px;
        text-align: center;
        color: white;
    }
    p{
        font-family: sans-serif;
        text-align: center;
        color: white; 
        a{
            text-decoration: none;
            color: #fdcb6e;

            &.back{
                color: white;
                font-size: 14px;
            }
        }
    }
}
</style>
