<template>
  <div class="index">
    <div>
      <Fv />
      <div class="contents">
        <div class="border">
          <Exp />
          <Feature />
          <Guide />
          <Highlight />
          <Events />
          <Spot />
          <Ranking id="ranking" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  background-color: #383838;
  display: flex;
  justify-content: center;
  .contents {
    .border {
      border-left: 3px solid #fff;
      border-right: 3px solid #fff;
    }
    width: 1120px;
    background-image: url('/img/contentsBG.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: repeat-y;
    border-left: 3px solid #002D18;
    border-right: 3px solid #002D18;
  }
}
</style>

