<template>
  <div class="index">
    <div>
      <Fv id="fv" />
      <div class="contents">
        <div class="border">
          <Exp id="exp" />
          <div class="float">
            <div class="float-button__wrapper">
              <img src="/img/musha.png" alt="play" class="musha">
              <a class="float-button">
                <p style="font-size: 14px;">鉄壁の城を攻略せよ!!</p>
                <p style="font-size: 30px; margin-top: -9px;">GAME PLAY</p>
              </a>
            </div>
            <Feature id="feature" />
            <Guide id="guide" />
            <Highlight id="highlight" />
            <Events id="events" />
            <Spot id="spot" />
            <Ranking id="ranking" />
          </div>
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
  },
}
</script>

<style lang="scss" scoped>
.index {
  background-color: #383838;
  display: flex;
  justify-content: center;
  .contents {
    position: relative;
    padding-bottom: 6%;
    .border {
      border-left: 3px solid #fff;
      border-right: 3px solid #fff;
      .float-button__wrapper {
        position: sticky;
        top: 80%;
        z-index: 100;
        .float-button {
          display: block;
          margin-right: 1%;
          margin-left: auto;
          cursor: pointer;
          background-color: #EC0000;
          padding: 10px;
          border-radius: 80px;
          width: 240px;
          height: 70px;
          color: #fff;
          text-align: center;
          line-height: 1.5;
          border: 2px solid #000;
          box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 1);
          transition: color 0.3s, background-color 0.1s, transform 0.1s;
          &:hover {
            background-color: #fff;
            color: #EC0000;
            transform: translateY(-5px);
          }
        }
        .musha {
          width: 94px;
          position: absolute;
          top: -86px;
          right: 4%;
          z-index: -10;
        }
      }

    }
    width: 1120px;
    background-image: url('/img/contentsBG.jpg');
    background-size: contain;
    background-repeat: repeat-y;
    border-left: 3px solid #002D18;
    border-right: 3px solid #002D18;
  }
}
</style>

