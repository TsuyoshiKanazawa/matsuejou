<template>
  <section class="events fade-enter-from" v-observe="'inview'" style="">
    <div class="events-title">
      <h2>関連イベント</h2>
      <p>（２０２５年）</p>
    </div>
    <div class="events-inner">
      <p class="events-inner-text">松江城天守国宝指定１０周年を<br class="sp-only">迎える２０２５年には、<br class="sp-only">様々なイベントが企画されているぞ！</p>
      <div class="events-inner-item">
        <div class="events-inner-item-day">
          ３月２６日（水）～<br class="pc-only">
          ４月９日（水）
        </div>
        <a href="https://www.kankou-matsue.jp/event_calendar/desc/?event=110629" target="_blank" class="events-inner-item-title">
          お城まつり
        </a>
        <div class="events-inner-item-text">
          春の松江城を舞台に伝統文化のステージや武者と触れ合えるイベントを企画！桜のライトアップも！
        </div>
      </div>
      <div class="events-inner-item">
        <div class="events-inner-item-day">
          ４月５日（土）
        </div>
        <a href="https://www.musha-gyoretsu.jp/index.html" target="_blank" class="events-inner-item-title">
          松江武者行列
        </a>
        <div class="events-inner-item-text">
          堀尾衆一行が ４００ 年の時を越えて松江城に入城する様子を再現した絢爛豪華な時代絵巻！
        </div>
      </div>
      <div class="events-inner-item">
        <div class="events-inner-item-day">
          ６月２８日（土）<br class="pc-only">
          ６月２９日（日）
        </div>
        <a href="https://www.kankou-matsue.jp/event_calendar/desc/?event=110912" target="_blank" class="events-inner-item-title">
          特別版お城EXPO <br class="pc-only">in 松江
        </a>
        <div class="events-inner-item-text">
          ２０２５年特別開催！城郭研究者による講演や全国の自治体出展ブースなど、老若男女が楽しめるお城の祭典を松江にて！
        </div>
      </div>
      <div class="events-inner-item">
        <div class="events-inner-item-day">
          ７月下旬 ～<br class="pc-only">
          ８月下旬（予定）
        </div>
        <a href="https://www.city.matsue.lg.jp/kanko_bunka_sports/rekishi_bunkazai/3/mamorukai/15305.html" target="_blank" class="events-inner-item-title">
          国宝五城<br class="pc-only">
          天守合同床磨き
        </a>
        <div class="events-inner-item-text">
          松江城を守る会主催の「親子で国宝松江城天守床磨き」を国宝五城天守合同床磨きとして開催します！
        </div>
      </div>
      <div class="events-inner-item">
        <div class="events-inner-item-day">
          ９月中旬 ～<br class="pc-only">
          １０月中旬（予定）
        </div>
        <a href="https://www.suitouro.jp/" target="_blank" class="events-inner-item-title">
          松江水燈路
        </a>
        <div class="events-inner-item-text">
          秋の松江を照らす光のイベント！<br>
          手作りの行燈や温かな光で松江城を包み込みます。
        </div>
      </div>
    </div>
    <a href="https://www.kankou-matsue.jp/event_calendar" target="_blank" class="events-btn">
      松江市内のイベント情報
    </a>
    <img src="/img/events/player4_new1.png" alt="ninja" class="ninja">
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
section {
  scroll-margin-top: 120px;
  @include mixins.max-screen(800px) {
    scroll-margin-top: 8vw;
  }
}
.events {
  padding: 0 6% 4%;
  background-image: url('/img/events/eventsBG.jpg');
  background-size: 100% 100%;
  background-position: center;
  width: 800px;
  height: 691px;
  margin: 7% auto 0%;
  position: relative;
  @include mixins.max-screen(800px) {
    background-image: url('/img/events/eventsBG-sp.jpg');
    width: 90vw;
    height: auto;
    padding: 4% 5% 15%;
    margin: 20% auto 0%;
  }
  .events-title {
    background-image: url('/img/subtract.png');
    background-size: 100% 100%;
    background-position: center;
    width: 440px;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
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
        font-size: 5vw;
      }
    }
    p {
      font-size: 18px;
      margin-top: 8px;
      @include mixins.max-screen(800px) {
        font-size: 3vw;
      }
    }
  }
  .events-inner {
    .events-inner-text {
      font-size: 14px;
      text-align: center;
      margin-bottom: 20px;
      @include mixins.max-screen(800px) {
        font-size: 3.3vw;
        line-height: 1.9;
        margin-bottom: 5vw;
        margin-top: -4vw;
      }
    }
    .events-inner-item {
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      border-top: 1px solid #000;
      height: 90px;
      line-height: 1.5;
      @include mixins.max-screen(800px) {
        display: block;
        height: auto;
        padding: 3vw 0;
        border-top: 1px solid #006837;
      }
      &:last-child {
        border-bottom: 1px solid #000;
        @include mixins.max-screen(800px) {
          border-bottom: 1px solid #006837;
        }
      }
      .events-inner-item-day {
        width: 27%;
        @include mixins.max-screen(800px) {
          width: 100%;
          text-align: center;
          font-size: 3.3vw;
        }
      }
      .events-inner-item-title {
        width: 28%;
        font-size: 18px;
        text-decoration: underline;
        transition: color 0.1s;
        @include mixins.max-screen(800px) {
          margin: 0 auto;
          display: block;
          text-align: center;
          width: auto;
          font-size: 5vw;
          margin: 2vw 0;
          color: #7C0664;
        }
        @include mixins.min-screen(801px) {
          &:hover {
            color: #E68224;
          }
        }
      }
      .events-inner-item-text {
        width: 65%;
        @include mixins.max-screen(800px) {
          width: 100%;
          font-size: 3.3vw;
        }
      }
    }
  }
  .events-btn {
    display: block;
    text-align: center;
    margin: 5% auto 0;
    width: 300px;
    height: 40px;
    background-color: #E68224;
    color: #fff;
    font-size: 16px;
    border-radius: 80px;
    line-height: 40px;
    border: 2px solid #000;
    box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 1);
    transition: color 0.3s, background-color 0.1s, transform 0.1s;
    @include mixins.max-screen(800px) {
      width: 100%;
      height: 11vw;
      line-height: 11vw;
      font-size: 4vw;
      margin: 8vw auto 0;
    }
  }
  .ninja {
    position: absolute;
    bottom: 1.8%;
    right: 0;
    @include mixins.max-screen(800px) {
      width: 25vw;
      bottom: -4%;
    }
  }
}
</style>