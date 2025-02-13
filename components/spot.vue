<template>
  <section class="spot fade-enter-from" v-observe="'inview'" style="scroll-margin-top: 120px;">
    <div class="spot-title">
      <h2>周辺スポット</h2>
    </div>
    <div class="spot-inner">
      <p style="font-size: 14px;  margin: 0 auto 20px;">松江城のお堀沿いにも見どころが沢山！城とあわせて巡ると、より楽しいぞ！</p>
      <div class="spot-inner-content">
        <img src="/img/spot/rekishikan.jpg" alt="spot">
        <div class="spot-inner-content-title">
          松江歴史館
        </div>
        <a href="https://www.kankou-matsue.jp/kankou/desc/?cat=%E8%A6%B3%E5%85%89%E6%96%BD%E8%A8%AD&spot=27673" target="_blank" class="spot-btn">
          詳細はこちら
        </a>
      </div>
      <div class="spot-inner-content">
        <img src="/img/spot/horikawayuuransen.jpg" alt="spot">
        <div class="spot-inner-content-title">
          堀川遊覧船
        </div>
        <a href="https://www.kankou-matsue.jp/kankou/desc/?cat=%E8%A6%B3%E5%85%89%E6%96%BD%E8%A8%AD&spot=27614" target="_blank" class="spot-btn">
          詳細はこちら
        </a>
      </div>
      <div class="spot-inner-content">
        <img src="/img/spot/bukeyashiki.jpg" alt="spot">
        <div class="spot-inner-content-title">
          武家屋敷
        </div>
        <a href="https://www.kankou-matsue.jp/kankou/desc/?cat=%E8%A6%B3%E5%85%89%E6%96%BD%E8%A8%AD&spot=27636" target="_blank" class="spot-btn">
          詳細はこちら
        </a>
      </div>
      <div class="spot-inner-content">
        <img src="/img/spot/meimeian.jpg" alt="spot">
        <div class="spot-inner-content-title">
          明々庵
        </div>
        <a href="https://www.kankou-matsue.jp/kankou/desc/?cat=%E8%A6%B3%E5%85%89%E6%96%BD%E8%A8%AD&spot=27888" target="_blank" class="spot-btn">
          詳細はこちら
        </a>
      </div>
      <img src="/img/spot/armor_new1.png" alt="ninja" class="ninja">
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
  height: 757px;
  margin: 7% auto 0%;
  position: relative;
  @include mixins.max-screen(800px) {
    background-image: url('/img/spot/spotBG-sp.jpg');
    width: 90vw;
    height: 267vw;
    padding: 4% 5%;
    margin: 20% auto 0%;
  }
  .spot-title {
    background-image: url('/img/subtract.png');
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
    color: #fff;
    @include mixins.max-screen(800px) {
      background-image: url('/img/subtract-sp.png');
      width: 70vw;
      height: 15vw;
      font-size: 5vw;
      line-height: 15vw;
      margin-top: -3.5vw;
    }
    h2 {
      font-size: 28px;
      @include mixins.max-screen(800px) {
        font-size: 5.5vw;
      }
    }
  }
  .spot-inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    line-height: 1.8;
    @include mixins.max-screen(800px) {
      justify-content: center;
    }
    .spot-inner-content {
      margin: 5px 0 50px;
      border: 2px solid #002D18;
      position: relative;
      @include mixins.max-screen(800px) {
        margin: 0 0 10%;
      }
      img {
        display: block;
        width: 340px;
        @include mixins.max-screen(800px) {
          width: 81vw;
          height: 45vw;
          object-fit: cover;
          object-position: 50% 100%;
        }
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
      .spot-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 14px;
        color: #fff;
        background-color: #E68224;
        width: 130px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        transform: translateY(50%);
        border-radius: 80px;
        border: 2px solid #000;
        box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 1);
        transition: color 0.3s, background-color 0.1s, transform 0.1s;
        &:hover {
          background-color: #fff;
          color: #E68224;
          transform: translateY(40%);
        }
      }
    }
  }

  .ninja {
    position: absolute;
    bottom: 1.8%;
    left: 3%;
    @include mixins.max-screen(800px) {
      width: 13vw;
      bottom: 2.3vw;
      left: 4.7vw;
    }
  }
}
</style>