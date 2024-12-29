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
  .site-logo {
    width: 397px;
    margin-top: 70px;
  }
  .matsuejou-logo {
    position: absolute;
    bottom: 3%;
    right: 1.5%;
    width: 128px;
  }
}
</style>