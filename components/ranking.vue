<template>
  <section>
    <div>松江城攻略室 ~ 鉄壁の城を攻略せよ!! ~</div>
    <h2>スコアボード</h2>
    <div>
      <div class="stageSelector">
        <div class="stageSelector__item" @click="stage = 'stage:1'" :class="{ active: stage === 'stage:1' }">其ノ一 お堀</div>
        <div class="stageSelector__item" @click="stage = 'stage:2'" :class="{ active: stage === 'stage:2' }">其ノ二 石垣</div>
        <div class="stageSelector__item" @click="stage = 'stage:3'" :class="{ active: stage === 'stage:3' }">其ノ三 大手門</div>
        <div class="stageSelector__item" @click="stage = 'stage:4'" :class="{ active: stage === 'stage:4' }">其ノ四 附櫓</div>
        <div class="stageSelector__item" @click="stage = 'stage:5'" :class="{ active: stage === 'stage:5' }">其ノ五 天守</div>
      </div>

      <div class="rankingBoard">
        <div class="ranking rank">順位</div>
        <div class="ranking score">スコア</div>
        <div class="ranking nickname">プレイヤー</div>
      </div>
      <div v-for="ranking in rankings[stage]" :key="ranking.rank" class="rankingBoard">
        <div class="ranking rank">{{ ranking.rank }}</div>
        <div class="ranking score">{{ ranking.score }}</div>
        <div class="ranking nickname">{{ ranking.nickname }}</div>
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
        const response = await axios.get('/latestranking.json');
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
.stageSelector {
  display: flex;
  justify-content: flex-start;
  border: 1px solid #000;
  padding: 10px;
  .stageSelector__item {
    width: 100px;
    border: 1px solid #000;
    padding: 10px;
    cursor: pointer;
    &.active {
      background-color: #000;
      color: #fff;
    }
  }
}
.rankingBoard {
  display: flex;
  justify-content: flex-start;
  border: 1px solid #000;
  padding: 10px;
  .ranking {
    width: 100px;
  }
}
</style>