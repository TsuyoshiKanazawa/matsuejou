<template>
  <section class="ranking fade-enter-from" v-observe="'inview'" style="scroll-margin-top: 120px;">
    <div class="ranking-title">
      <div>松江城攻略室<br>鉄壁の城を攻略せよ!!</div>
      <h2>スコアボード</h2>
    </div>
    <div class="ranking-text">
      各ステージの「無限モード」における優秀なプレイヤーとスコアを発表するぞ!!<br>
      ※スコアボードは毎時00分に更新されます。
    </div>
    <div class="ranking-inner">
      <div class="stageSelector">
        <div class="stageSelector__item" @click="stage = 'stage:1'" :class="{ active: stage === 'stage:1' }">
          <p class="stageSelector__item__stage">其ノ一</p><p class="stageSelector__item__stageName"> お堀</p>
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
      <div v-for="ranking in rankings[stage]" :key="ranking.rank" class="rankingBoard">
        <div class="rankingScore rank">{{ ranking.rank }}位</div>
        <div class="rankingScore score">{{ comma(ranking.score) }}</div>
        <div class="rankingScore nickname">
          <img v-if="ranking.icon !== 9" :src="`/matsue-castle-kouryakushitsu/img/icons/icon${ranking.icon}.png`" alt="icon">
          <img v-else :src="`/matsue-castle-kouryakushitsu/img/icons/icon${ranking.icon}.jpg`" alt="icon">
          {{ ranking.nickname }}
        </div>
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

    onMounted(async () => {
      try {
        // キャッシュを無視するために、現在のタイムスタンプをクエリパラメータとして追加
        const response = await axios.get(`/matsue-castle-kouryakushitsu/latestranking.json?timestamp=${Date.now()}`);
        rankings.value = response.data['mode:2'];
        console.log(rankings.value['stage:1']);
      } catch (error) {
        console.error('Error fetching rankings:', error);
      }
    });

    return {
      rankings,
    }
  },
  data() {
    return {
      stage: 'stage:1',
    }
  }
}
</script>

<style lang="scss" scoped>
.ranking {
  background-image: url('/img/rankingBackground.png');
  background-size: 100% 100%;
  background-position: center;
  width: 800px;
  height: 702px;
  margin: 7% auto 0%;

  .ranking-title {
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
  .ranking-text {
    font-size: 12px;
    text-align: center;
    margin: 0 auto 4%;
  }
  .ranking-inner {
    background-image: url('/img/rankingBoardBG.png');
    background-size: 100% 100%;
    background-position: center;
    width: 632px;
    height: 501px;
    margin: 0 auto;
    .stageSelector {
      display: flex;
      justify-content: center;
      gap: 5px;
      padding: 5% 10px 3%;
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
        .stageSelector__item__stage {
          font-size: 10px;
          width: fit-content;
        }
        .stageSelector__item__stageName {
          font-size: 16px;
          width: fit-content;
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

    }
  }
}
</style>