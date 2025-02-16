<template>
  <section>
    <div class="fv">
      <img src="/img/logo.png" alt="logo" class="site-logo">
      <img src="/img/matsuejouLogo.jpg" alt="title" class="matsuejou-logo">
    </div>
  </section>
</template>

<style lang="scss" scoped>
.fv {
  background-image: url('/img/bg.jpg');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 1120px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @include mixins.max-screen(800px) {
    width: 100vw;
    height: 500px;
    background-image: url('/img/bg-sp.jpg');
  }
  .site-logo {
    width: 397px;
    margin-top: 70px;
    @include mixins.max-screen(800px) {
      width: 80vw;
      max-width: 291px;
      margin-top: -10%;
    }
  }
  .matsuejou-logo {
    position: absolute;
    bottom: 3%;
    right: 1.5%;
    width: 128px;
    @include mixins.max-screen(800px) {
      width: 40vw;
      max-width: 140px;
      right: 50%;
      transform: translateX(50%);
    }
  }
}

</style>