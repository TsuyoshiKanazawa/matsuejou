<template>
  <section class="events fade-enter-from" v-observe="'inview'" style="scroll-margin-top: 120px;">
    <div class="events-title">
      <h2>関連イベント</h2>
    </div>
    <div class="events-inner">
      <p style="font-size: 14px; text-align: center; margin-bottom: 20px;">松江城天守国宝指定10周年を迎える2025年には、様々なイベントが企画されているぞ！</p>
      <div class="events-inner-item">
        <div class="events-inner-item-day">
          3月下旬～<br>
          4月中旬
        </div>
        <a href="/" target="_blank" class="events-inner-item-title">
          お城まつり
        </a>
        <div class="events-inner-item-text">
          春の松江城を舞台に伝統文化のステージや武者と触れ合えるイベントを企画！桜のライトアップも！
        </div>
      </div>
      <div class="events-inner-item">
        <div class="events-inner-item-day">
          4月5日（土）
        </div>
        <a href="/" target="_blank" class="events-inner-item-title">
          2025<br>
          松江武者行列
        </a>
        <div class="events-inner-item-text">
          堀尾衆一行が 400 年の刻をこえて松江城に入城する様子を再現した絢爛豪華な時代絵巻！
        </div>
      </div>
      <div class="events-inner-item">
        <div class="events-inner-item-day">
          6月28日（土）<br>
          6月29日（日）
        </div>
        <a href="/" target="_blank" class="events-inner-item-title">
          特別版お城EXPO <br>in 松江
        </a>
        <div class="events-inner-item-text">
          城郭研究者による講演や全国の自治体出展ブースなど、老若男女が楽しめるお城の祭典を松江にて！
        </div>
      </div>
      <div class="events-inner-item">
        <div class="events-inner-item-day">
          7月下旬～<br>8月下旬（予定）
        </div>
        <a href="/" target="_blank" class="events-inner-item-title">
          国宝五城<br>
          天守合同床磨き
        </a>
        <div class="events-inner-item-text">
          松江城を守る会主催の「親子で国宝松江城天守床磨き」を国宝五城天守合同床磨きとして開催します！
        </div>
      </div>
      <div class="events-inner-item">
        <div class="events-inner-item-day">
          9月中旬～<br>
          10月下旬
        </div>
        <a href="/" target="_blank" class="events-inner-item-title">
          松江水燈路
        </a>
        <div class="events-inner-item-text">
          秋の松江を照らす光のイベント！<br>
          手作りな行灯と温かな光で松江城を包み込みます。
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
.events {
  padding: 0 6% 4%;
  background-image: url('/img/events/eventsBG.jpg');
  background-size: 100% 100%;
  background-position: center;
  width: 800px;
  height: 691px;
  margin: 7% auto 0%;
  position: relative;
  .events-title {
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
    h2 {
      font-size: 28px;
    }
  }
  .events-inner {
    .events-inner-item {
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      border-top: 1px solid #000;
      height: 90px;
      line-height: 1.5;
      &:last-child {
        border-bottom: 1px solid #000;
      }
      .events-inner-item-day {
        width: 27%;
      }
      .events-inner-item-title {
        width: 28%;
        font-size: 18px;
        &:hover {
          text-decoration: underline;
        }
      }
      .events-inner-item-text {
        width: 65%;
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
    &:hover {
      background-color: #fff;
      color: #E68224;
      transform: translateY(-5px);
    }
  }
  .ninja {
    position: absolute;
    bottom: 1.8%;
    right: 0;
  }
}
</style>