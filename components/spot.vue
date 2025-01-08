<template>
  <section class="spot fade-enter-from" v-observe="'inview'">
    <div class="spot-title">
      <h2>周辺スポット</h2>
    </div>
    <div class="spot-inner">
      <a href="https://www.kankou-matsue.jp/kankou/desc/?cat=%E8%A6%B3%E5%85%89%E6%96%BD%E8%A8%AD&spot=27673" target="_blank" class="spot-inner-content">
        <img src="/img/spot/rekishikan.jpg" alt="spot">
        <div class="spot-inner-content-title">
          松江歴史館
        </div>
      </a>
      <a href="https://www.kankou-matsue.jp/kankou/desc/?cat=%E8%A6%B3%E5%85%89%E6%96%BD%E8%A8%AD&spot=27614" target="_blank" class="spot-inner-content">
        <img src="/img/spot/horikawayuuransen.jpg" alt="spot">
        <div class="spot-inner-content-title">
          堀川遊覧船
        </div>
      </a>
      <a href="https://www.kankou-matsue.jp/kankou/desc/?cat=%E8%A6%B3%E5%85%89%E6%96%BD%E8%A8%AD&spot=27636" target="_blank" class="spot-inner-content">
        <img src="/img/spot/bukeyashiki.jpg" alt="spot">
        <div class="spot-inner-content-title">
          武家屋敷
        </div>
      </a>
      <a href="https://www.kankou-matsue.jp/kankou/desc/?cat=%E8%A6%B3%E5%85%89%E6%96%BD%E8%A8%AD&spot=27888" target="_blank" class="spot-inner-content">
        <img src="/img/spot/meimeian.jpg" alt="spot">
        <div class="spot-inner-content-title">
          明々庵
        </div>
      </a>
    </div>
  </section>
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
.spot {
  padding: 0 4% 4%;
  background-image: url('/img/spot/spotBG.jpg');
  background-size: 100% 100%;
  background-position: center;
  width: 800px;
  height: 668px;
  margin: 7% auto 0%;
  position: relative;
  .spot-title {
    background-image: url('/img/rankingTitle.png');
    background-size: 100% 100%;
    background-position: center;
    width: 440px;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 10px;
    margin: 0 auto;
    transform: translateY(-50%);
    h2 {
      font-size: 28px;
    }
  }
  .spot-inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .spot-inner-content {
      margin-bottom: 30px;
      border: 2px solid #002D18;
      position: relative;
      img {
        width: 340px;
      }
      .spot-inner-content-title {
        position: absolute;
        top: 7%;
        left: 0;
        font-size: 18px;
        text-align: center;
        background-image: url('/img/spot/spotFlame.jpg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 130px;
        height: 40px;
        line-height: 40px;
      }
    }
  }

  .ninja {
    position: absolute;
    bottom: 1.8%;
    right: 0;
  }
}
</style>