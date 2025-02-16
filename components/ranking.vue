<template>
  <section class="ranking fade-enter-from" v-observe="'inview'" style="scroll-margin-top: 120px;">
    <div class="ranking-wrapper" :class="{ open: open }">
      <div class="ranking-title">
        <div>松江城攻略室<br>鉄壁の城を攻略せよ!!</div>
        <h2>スコアボード</h2>
      </div>
      <div class="ranking-text">
        各ステージの「無限モード」における<br class="sp-only">優秀なプレイヤーとスコアを発表するぞ!!<br>
        ※スコアボードは毎時００分に更新されます。
      </div>
      <div class="ranking-inner" :class="{ open: open }">
        <div class="stageSelector">
          <div class="stageSelector__item" @click="stage = 'stage:1'" :class="{ active: stage === 'stage:1' }">
            <p class="stageSelector__item__stage">其ノ一</p><p class="stageSelector__item__stageName"> 水堀</p>
          </div>
          <div class="stageSelector__item" @click="stage = 'stage:2'" :class="{ active: stage === 'stage:2' }">
            <p class="stageSelector__item__stage">其ノ二</p><p class="stageSelector__item__stageName"> 石垣</p>
          </div>
          <div class="stageSelector__item" @click="stage = 'stage:3'" :class="{ active: stage === 'stage:3' }">
            <p class="stageSelector__item__stage">其ノ三</p><p class="stageSelector__item__stageName"> 大手門</p>
          </div>
          <div class="stageSelector__item" @click="stage = 'stage:4'" :class="{ active: stage === 'stage:4' }">
            <p class="stageSelector__item__stage">其ノ四</p><p class="stageSelector__item__stageName"> 附櫓</p>
          </div>
          <div class="stageSelector__item" @click="stage = 'stage:5'" :class="{ active: stage === 'stage:5' }">
            <p class="stageSelector__item__stage">其ノ五</p><p class="stageSelector__item__stageName"> 天守</p>
          </div>
        </div>

        <div class="rankingBoardTitle">
          <div class="rankingTitle rank">順位</div>
          <div class="rankingTitle score">スコア</div>
          <div class="rankingTitle nickname">プレイヤー</div>
        </div>
        <div v-if="windowSize.width > 800" v-for="ranking in rankings[stage]" :key="ranking.rank" class="rankingBoard">
          <div class="rankingScore rank">{{ ranking.rank }}位</div>
          <div class="rankingScore score">{{ comma(ranking.score) }}</div>
          <div class="rankingScore nickname">
            <img v-if="ranking.icon !== 9" :src="`/matsue-castle-kouryakushitsu/img/icons/icon${ranking.icon}.png`" alt="icon">
            <img v-else :src="`/matsue-castle-kouryakushitsu/img/icons/icon${ranking.icon}.jpg`" alt="icon">
            {{ ranking.nickname }}
          </div>
        </div>
        <div v-if="windowSize.width < 800" v-for="ranking in (open ? rankings[stage] : rankings[stage]?.slice(0, 5))" :key="ranking.rank" class="rankingBoard-sp">
          <div class="rankingScore rank">
            <div class="rankingScore__label">順位</div>
            <div class="rankingScore__value">{{ ranking.rank }}位</div>
          </div>
          <div class="rankingScore score">
            <div class="rankingScore__label">スコア</div>
            <div class="rankingScore__value">{{ comma(ranking.score) }}</div>
          </div>
          <div class="rankingScore nickname">
            <img v-if="ranking.icon !== 9" :src="`/matsue-castle-kouryakushitsu/img/icons/icon${ranking.icon}.png`" alt="icon">
            <img v-else :src="`/matsue-castle-kouryakushitsu/img/icons/icon${ranking.icon}.jpg`" alt="icon">
            <div class="rankingScore__value">{{ ranking.nickname }}</div>
          </div>
        </div>
        <button class="rankingBoard-sp__button" v-if="windowSize.width < 800" @click="open = !open">
          {{ open ? '▲閉じる' : '▼10位まで表示' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const rankings = ref([]);

    const toFullWidth = (num) => {
      return num.toString().replace(/[0-9]/g, (d) => String.fromCharCode(d.charCodeAt(0) + 0xFEE0));
    };

    onMounted(async () => {
      try {
        // キャッシュを無視するために、現在のタイムスタンプをクエリパラメータとして追加
        const response = await axios.get(`/matsue-castle-kouryakushitsu/latestranking.json?timestamp=${Date.now()}`);
        rankings.value = response.data['mode:2'];
        //console.log(rankings.value['stage:1']);
      } catch (error) {
        console.error('Error fetching rankings:', error);
      }
    });

    const getWindowSize = () => {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    };

    const windowSize = ref(getWindowSize());

    const updateWindowSize = () => {
      windowSize.value = getWindowSize();
    };

    onMounted(() => {
      window.addEventListener('resize', updateWindowSize);
    });

    // コンポーネントが破棄される際にリスナーを解除
    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateWindowSize);
    });
    //console.log(windowSize.value.width);

    return {
      rankings,
      toFullWidth,
      windowSize
    }
  },
  data() {
    return {
      stage: 'stage:1',
      open: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.ranking {
  margin: 7% auto 0%;
  
  .ranking-wrapper {
    background-image: url('/img/rankingBackground.png');
    background-size: 100% 100%;
    background-position: center;
    width: 800px;
    height: 702px;
    margin: 0 auto;
    @include mixins.max-screen(800px) {
      background-image: url('/img/rankingBackground2-sp.jpg');
      width: 90vw;
      height: auto;
      padding: 2% 5% 10%;
      margin: 20% auto 0%;
      &.open {
        background-image: url('/img/rankingBackground-sp.jpg');
      }
    }
  }
  .ranking-title {
    background-image: url('/img/subtract.png');
    background-size: 100% 100%;
    background-position: center;
    width: 440px;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    margin: 0 auto;
    transform: translateY(-50%);
    color: #fff;
    line-height: 1.5;
    h2 {
      font-size: 28px;
      @include mixins.max-screen(800px) {
        font-size: 5.5vw;
      }
    }
    @include mixins.max-screen(800px) {
      background-image: url('/img/subtract-sp.png');
      width: 70vw;
      height: 15vw;
      font-size: 2.5vw;
      line-height: 1.5;
      margin-top: -2.5vw;
    }
  }
  .ranking-text {
    font-size: 14px;
    text-align: center;
    margin: -2% auto 2%;
    line-height: 2;
    @include mixins.max-screen(800px) {
      font-size: 3.1vw;
      line-height: 2;
      margin: -4% auto 2%;
    }
  }
  .ranking-inner {
    background-image: url('/img/rankingBoardBG.png');
    background-size: 100% 100%;
    background-position: center;
    width: 632px;
    height: 501px;
    margin: 0 auto;
    @include mixins.max-screen(800px) {
      width: 100%;
      height: auto;
      background-image: url('/img/rankingBoardBG2-sp.jpg');
      padding-bottom: 1.3vw;
      &.open {
        background-image: url('/img/rankingBoardBG-sp.jpg');
      }
    }
    .stageSelector {
      display: flex;
      justify-content: center;
      gap: 5px;
      padding: 5% 10px 3%;
      @include mixins.max-screen(800px) {
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        padding: 7vw 6vw 6vw;
      }
      .stageSelector__item {
        padding: 10px;
        cursor: pointer;
        background-image: url('/img/stageSelecter0.png');
        background-size: 100% 100%;
        background-position: center;
        width: 110px;
        height: 50px;
        font-size: 16px;
        line-height: 35px;
        display: flex;
        justify-content: center;
        gap: 4px;
        @include mixins.max-screen(800px) {
          width: 33vw;
          height: 13vw;
          font-size: 2.5vw;
          line-height: 10vw;
        }
        .stageSelector__item__stage {
          font-size: 10px;
          width: fit-content;
          display: block;
          @include mixins.max-screen(800px) {
            font-size: 3vw;
          }
        }
        .stageSelector__item__stageName {
          font-size: 16px;
          width: fit-content;
          @include mixins.max-screen(800px) {
            font-size: 4.5vw;
          }
        }
        &.active {
          background-image: url('/img/stageSelecter1.png');
        }
      }
    }
    .rankingBoardTitle {
      display: flex;
      justify-content: flex-start;
      padding: 0 6px;
      margin: 0 auto;
      .rankingTitle {
        width: 132px;
        height: 36px;
        background-color: #006837;
        border-left: 2px solid #fff;
        color: #fff;
        font-size: 16px;
        text-align: center;
        line-height: 36px;
        img {
          width: 30px;
        }
        &.nickname {
          width: 367px;
        }
        &:first-child {
          border-left: none;
        }
      }
      @include mixins.max-screen(800px) {
        display: none;
      }
    }
    .rankingBoard {
      display: flex;
      justify-content: flex-start;
      padding: 0 6px;
      margin: 0 auto;
      .rankingScore {
        width: 132px;
        height: 36px;
        border-left: 2px solid #000;
        line-height: 36px;
        font-size: 16px;
        img {
          width: 30px;
        }
        &.nickname {
          width: 367px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding-left: 20px;
          font-size: 12px;
        }
        &.rank {
          text-align: center;
        }
        &.score {
          text-align: center;
        }
        &:first-child {
          border-left: none;
        }
      }
      &:nth-child(even) {
        .rankingScore {
          background-color: #FFFECC;
        }
      }
      @include mixins.max-screen(800px) {
        display: none;
      }
    }
    .rankingBoard-sp {
      width: 96%;
      margin: 0 auto;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 3% 5%;
      .rankingScore {
        width: 50%;
        height: 7vw;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        &.rank {
          width: 40%;
          display: flex;
          justify-content: flex-start;
          gap: 1vw;
          .rankingScore__label {
            background-color: #006837;
            color: #fff;
            width: 12vw;
            height: 6vw;
            text-align: center;
            line-height: 6vw;
            font-size: 3.5vw;
            margin-right: 4%;
          }
          .rankingScore__value {
            font-size: 4.4vw;
            line-height: 6vw;
          }
        }
        &.score {
          width: 48%;
          display: flex;
          justify-content: flex-start;
          gap: 1vw;
          .rankingScore__label {
            background-color: #006837;
            color: #fff;
            width: 14vw;
            height: 6vw;
            text-align: center;
            line-height: 6vw;
            font-size: 3.5vw;
            margin-right: 4%;
          }
          .rankingScore__value {
            font-size: 4.4vw;
            line-height: 6vw;
            text-align: center;
          }
        }
        &.nickname {
          width: 100%;
          font-size: 4vw;
          overflow-wrap: break-word;
          img {
            width: 10vw;
            height: 10vw;
            margin-right: 4vw;
          }
          .rankingScore__value {
            width: 50vw;
            height: fit-content;
            margin: auto 0;
          }
        }

      }
      &:nth-child(even) {
        background-color: #FFFECC;
      }
      @include mixins.min-screen(801px) {
        display: none;
      }
    }
    .rankingBoard-sp__button {
      width: 40vw;
      height: 10vw;
      font-size: 4vw;
      background-color: #E68224;
      color: #fff;
      border: none;
      cursor: pointer;
      margin: 2vw auto 5vw;
      display: block;
      border-radius: 80px;
      border: 2px solid #000;
      box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 1);
    }
  }
}
</style>