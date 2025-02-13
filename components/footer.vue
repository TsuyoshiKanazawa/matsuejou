<template>
  <footer>
    <div class="footer-wrapper">
      <img src="/img/footerPic.png" alt="pic" class="footerPic">
      <div class="footer-contents-wrapper">
        <div class="footer-logo">
          <img src="/img/footerLogo.png" alt="pic" class="footer-logo-img">
          <p>
            国宝指定10周年記念
            <br>松江城攻略室
          </p>
        </div>
        <div class="footer-contents">
          <div class="footer-contents-banner">
            <a href="https://www.matsue-castle.jp/" target="_blank">
              <img src="/img/matsuejouBanner.jpg" alt="pic" class="footer-contents-banner-img">
            </a>
            <a href="https://www.kankou-matsue.jp/" target="_blank">
              <img src="/img/hpBanner.jpg" alt="pic" class="footer-contents-banner-img">
            </a>
          </div>
        </div>
        <div class="footer-contents-link">
          <p>松江の観光情報はこちら</p>
          <a href="https://www.kankou-matsue.jp/machiaruki/course" target="_blank" class="text-hover">
            観光ガイド　　▶
          </a>
          <a href="https://www.kankou-matsue.jp/gourmet/list" target="_blank" class="text-hover">
            グルメ情報　　▶
          </a>
          <a href="https://www.kankou-matsue.jp/event_calendar" target="_blank" class="text-hover">
            イベント情報　▶
          </a>
          <a href="https://www.kankou-matsue.jp/shukuhaku/reserve" target="_blank" class="text-hover"  >
            宿泊情報　　　▶
          </a>
          <a href="https://www.kankou-matsue.jp/kankou" target="_blank" class="text-hover">
            スポット情報　▶
          </a>
        </div>
      </div>
      <div class="footer-copyright">
        <img src="/img/player5_new1.png" alt="pic" class="footer-copyright-img">
        <p>Copyright（一社）松江観光協会 ２０２５.</p>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
footer {
  background-color: #383838;
  width: 100%;
  .footer-wrapper {
    max-width: 1120px;
    height: 300px;
    background-color: #000;
    margin: 0 auto;
    position: relative;
    padding: 2% 5%;
    @include mixins.max-screen(800px) {
      width: 100vw;
      height: auto;
      padding: 5% 8%;
    }
    .footerPic {
      position: absolute;
      top: -41%;
      left: 3%;
      width: 102px;
      @include mixins.max-screen(800px) {
        top: -17%;
        width: 20vw;
      }
    }

    .footer-contents-wrapper {
      display: flex;
      justify-content: flex-start;
      gap: 5%;
      @include mixins.max-screen(800px) {
        display: block;
        width: fit-content;
      }
      .footer-logo {
        color: #fff;
        text-align: center;
        @include mixins.max-screen(800px) {
          text-align: left;
        }
        .footer-logo-img {
          width: 158px;
          @include mixins.max-screen(800px) {
            width: 40vw;
          }
        }
        p {
          font-size: 14px;
          line-height: 2;
          margin-top: 5%;
          @include mixins.max-screen(800px) {
            text-align: center;
            width: 40vw;
            font-size: 4vw;
          }
        }
      }
      .footer-contents {
        .footer-contents-banner {
          margin-top: 3%;
          a {
            display: block;
          }
          .footer-contents-banner-img {
            width: 221px;
            margin-bottom: 7%;
            @include mixins.max-screen(800px) {
              width: 62vw;
            }
          }
        }
      }
      .footer-contents-link {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        width: 290px;
        height: 136px;
        margin-top: 85px;
        margin-left: -2%;
        @include mixins.max-screen(800px) {
          margin-top: 2%;
          margin-left: 0;
          margin: 2% 0 35%;
          width: 100%;
          height: 35vw;
        }
        p {
          color: #fff;
          font-size: 14px;
          height: fit-content;
          @include mixins.max-screen(800px) {
            font-size: 4vw;
          }
        }
        a {
          display: block;
          color: #fff;
          font-size: 12px;
          height: fit-content;
          width: 130px;
          @include mixins.max-screen(800px) {
            font-size: 3.4vw;
            margin-right: 10%;
            width: 30vw;
          }
        }
      }

    }
    .footer-copyright {
      position: absolute;
      bottom: 0;
      right: 2%;
      @include mixins.max-screen(800px) {
        right: 0;
        bottom: 1%;
      }
      .footer-copyright-img {
        width: 100px;
        display: block;
        margin: 0 0 0 auto;
      }
      p {
        color: #fff;
        font-size: 14px;
        line-height: 2;
        @include mixins.max-screen(800px) {
          font-size: 3vw;
        }

      }
    }
  }

}
</style>
