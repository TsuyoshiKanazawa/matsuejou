<template>
  <section>
    <div class="highlight fade-enter-from" v-observe="'inview'">
      <h2 class="highlight-title">武者のおすすめ6選</h2>
      <div class="highlight-inner">
        <div class="highlight-name">
          天守外
        </div>
        <div class="highlight-content-wrapper">
          <div class="highlight-content">
            <img src="/img/highlight/umadamari.jpg" class="highlight-content-img" alt="umadamari">
            <div class="highlight-content-name">馬溜<small>（枡形小口）</small></div>
            <div class="highlight-content-text">
              <img src="/img/highlight/umadamariIcon.png" class="highlight-content-icon" alt="umadamariIcon" style="top: -140%;">
              敵を殲滅するために四方を囲まれた空間。その先に待ち構えるは大手門！
            </div>
          </div>
          <div class="highlight-content">
            <img src="/img/highlight/ishigaki.jpg" class="highlight-content-img" alt="ishigaki">
            <div class="highlight-content-name">石垣の刻印</div>
            <div class="highlight-content-text">
              <img src="/img/highlight/ishigakiIcon.png" class="highlight-content-icon" alt="ishigakiIcon" style="top: -60%;">
              石垣には殿（堀尾氏）の家紋である「分銅紋」をはじめとした様々な紋様があるぞ！
            </div>
          </div>
          <div class="highlight-content">
            <img src="/img/highlight/tensyu.jpg" class="highlight-content-img" alt="tensyu">
            <div class="highlight-content-name">天守の鯱</div>
            <div class="highlight-content-text">
              <img src="/img/highlight/tensyuIcon.png" class="highlight-content-icon" alt="tensyuIcon" style="top: -100%;">
              現存12天守の中で最大の大きさを誇る鯱（しゃちほこ）。
            </div>
          </div>
        </div>
      </div>
      <div class="highlight-inner" style="margin-top: 0%;">
        <div class="highlight-name">
          天守内
        </div>
        <div class="highlight-content-wrapper">
          <div class="highlight-content">
            <img src="/img/highlight/tooshihashira.jpg" class="highlight-content-img" alt="tooshihashira">
            <div class="highlight-content-name">通し柱</div>
            <div class="highlight-content-text">
              <img src="/img/highlight/tooshihashiraIcon.png" class="highlight-content-icon" alt="tooshihashiraIcon" style="top: -100%;">
              1階と2階を貫くように配置され、荷重を分散させる構造となっておるぞ。当時最新の築城技術じゃ！
            </div>
          </div>
          <div class="highlight-content">
            <img src="/img/highlight/tsutsumiita.jpg" class="highlight-content-img" alt="tsutsumiita">
            <div class="highlight-content-name">包板の柱</div>
            <div class="highlight-content-text">
              <img src="/img/highlight/tsutsumiitaIcon.png" class="highlight-content-icon" alt="tsutsumiitaIcon" style="top: -100%;">
              柱を板状の部材で囲み、金輪やかすがいで固定した松江城特有の柱じゃ！
            </div>
          </div>
          <div class="highlight-content">
            <img src="/img/highlight/kitourei.jpg" class="highlight-content-img" alt="kitourei">
            <div class="highlight-content-name">祈祷札</div>
            <div class="highlight-content-text">
              <img src="/img/highlight/kitoureiIcon.png" class="highlight-content-icon" alt="kitoureiIcon" style="top: -60%;">
              天守内では松江城天守を国宝へと押し上げた貴重な史料のれぷりかが見れるぞ！
            </div>
          </div>
        </div>
      </div>
      <img src="/img/highlight/SNinja_nosword_idle.png" class="ninja" alt="ninja">
    </div>
  </section>
</template>

<style lang="scss" scoped>
.highlight {
  padding: 4% 0;
  width: 720px;
  height: 1343px;
  margin: 0px auto 0;
  position: relative;
  .highlight-title {
    width: 260px;
    height: 40px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    line-height: 40px;
    margin: 0 auto;
    background-color: #006837;
    border: 2px solid #002D18;
  }
  .highlight-inner {
    margin-top: 3%;
    .highlight-name {
      background-image: url('/img/highlight/highlightFlame1.jpg');
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
      width: 104px;
      height: 36px;
      text-align: center;
      color: #002D18;
      font-size: 22px;
      line-height: 36px;
      margin: 0 auto;
    }
    .highlight-content-wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 5%;
      margin: 3% 0 0 0;
      .highlight-content {
        position: relative;
        margin: 0 0 2% 0;
        .highlight-content-img {
          border: 2px solid #002D18;
          width: 340px;
        }
        .highlight-content-name {
          position: absolute;
          top: 5%;
          left: 2px;
          background-image: url('/img/highlight/highlightFlame2.jpg');
          width: 110px;
          height: 32px;
          font-size: 14px;
          text-align: center;
          line-height: 32px;
          small {
            font-size: 10px;
          }
        }
        .highlight-content-text {
          position: relative;
          width: 340px;
          padding: 2% 0 0 20%;
          font-size: 14px;
          line-height: 1.5;
          img {
            position: absolute;
            right: 80%;
          }
        }
      }
    }

  }
  .ninja {
    position: absolute;
    bottom: -115px;
    left: -90px;
    width: 220px;
  }
}
</style>