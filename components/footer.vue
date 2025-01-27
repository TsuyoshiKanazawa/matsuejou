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
    .footerPic {
      position: absolute;
      top: -41%;
      left: 3%;
      width: 102px;
    }
    .footer-contents-wrapper {
      display: flex;
      justify-content: flex-start;
      gap: 5%;
      .footer-logo {
        color: #fff;
        text-align: center;
        .footer-logo-img {
          width: 158px;
        }
        p {
          font-size: 14px;
          line-height: 2;
          margin-top: 5%;
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
        p {
          color: #fff;
          font-size: 14px;
          height: fit-content;
        }
        a {
          display: block;
          color: #fff;
          font-size: 12px;
          height: fit-content;
          width: 130px;
        }
      }
    }
    .footer-copyright {
      position: absolute;
      bottom: 0;
      right: 2%;
      .footer-copyright-img {
        width: 100px;
        display: block;
        margin: 0 0 0 auto;
      }
      p {
        color: #fff;
        font-size: 14px;
        line-height: 2;
      }
    }
  }

}
</style>
