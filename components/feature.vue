<template>
  <section style="padding-top: 4%; scroll-margin-top: 80px;">
    <div class="feature fade-enter-from" v-observe="'inview'">
      <h2 class="feature-title">松江城の特徴</h2>
      <div class="builder">
        築城主
      </div>
      <div class="feature-content" style="margin-top: 0;">
        <img src="/img/feature/yoshiharu.jpg" alt="feature" class="content-image">
        <div class="content-text">
          <h1 class="content-title yellow">堀尾 吉晴</h1>
          <div class="content-copy">
            城攻めの経験と戦略に<br>長けた名将
          </div>
          <p class="content-explain">
            豊臣秀吉に仕え、一代で大名に昇りつめた堀尾吉晴。<br>
            戦場での豊富な経験と多くの武功を積んだ彼は、温厚な人柄と卓越した戦略眼で知られている。１６０７年、出雲・隠岐の領地を守るため、堅牢な防御を備えた松江城の築城に着手しその後の城下町発展の礎を築いた。そのことから「松江開府の祖」と呼ばれる。
          </p>
        </div>
        <img src="/img/feature/yoshiharuIcon.png" alt="yoshiharuIcon" class="content-icon yoshiharu">
      </div>
      <div class="feature-content">
        <img src="/img/feature/ohori.jpg" alt="feature" class="content-image">
        <div class="content-text">
          <h1 class="content-title">水堀</h1>
          <div class="content-copy">
            城を囲む水の防壁
          </div>
          <p class="content-explain">
            築城時からほぼ同じ形を残す城全体を囲む広大な水路で、外敵の侵入を阻む強力な防壁の役割を担った。<br class="sp-only">豊かな水量が保たれたこの堀は、戦略的にも巧みに設計され、今では周囲の自然景観と調和する美しい水辺となっている。
          </p>
          <div class="content-overview">
            <h3 class="content-overview-title">ゲーム概要</h3>
            <p class="content-overview-text">
              様々な障害物を避けながら、<br>
              城内への侵入を目指して水堀を攻略せよ!!
            </p>
          </div>
        </div>
        <img src="/img/feature/ohoriIcon.png" alt="ohoriIcon" class="content-icon ohori">
      </div>
      <div class="feature-content">
        <img src="/img/feature/ishigaki.jpg" alt="feature" class="content-image">
        <div class="content-text">
          <h1 class="content-title">石垣</h1>
          <div class="content-copy">
            堅牢な石の要塞
          </div>
          <p class="content-explain">
            隙間なく積み上げられた堅牢な構造で、敵の侵入を阻む防御の要を担った。<br class="sp-only">地形を巧みに利用した石垣は、緩やかな傾斜でありながら圧倒的な威圧感を放ち、見る者に松江城の力強さを感じさせる。
          </p>
          <div class="content-overview">
            <h3 class="content-overview-title">ゲーム概要</h3>
            <p class="content-overview-text">
              頭上から落ちる石や樽を避けながら、<br>
              石垣の最上部を目指し攻略せよ!!
            </p>
          </div>
        </div>
        <img src="/img/feature/ishigakiIcon.png" alt="ishigakiIcon" class="content-icon ishigaki">
      </div>
      <div class="feature-content">
        <img src="/img/feature/ootemon.jpg" alt="feature" class="content-image">
        <div class="content-text">
          <h1 class="content-title">大手門</h1>
          <div class="content-copy">
            威厳と防御の象徴
          </div>
          <p class="content-explain">
            大手門は、城への唯一の正式な入口として重要な役割を担った。明治時代の廃城令によって取り壊され、現存していない。<br class="sp-only">今回は松江城絵図などから再現。大手門を抜けることで、壮大な松江城の構えを肌で感じられる。
          </p>
          <div class="content-overview">
            <h3 class="content-overview-title">ゲーム概要</h3>
            <p class="content-overview-text">
              弓矢による波状攻撃を避けながら、<br>
              兵士の力を溜めて大手門に突撃し攻略せよ!!
            </p>
          </div>
        </div>
        <img src="/img/feature/ootemonIcon.png" alt="ootemonIcon" class="content-icon ootemon">
      </div>
      <div class="feature-content">
        <img src="/img/feature/tsukeyagura.jpg" alt="feature" class="content-image">
        <div class="content-text">
          <h1 class="content-title">附櫓</h1>
          <div class="content-copy">
            天守を守る最終防衛機能
          </div>
          <p class="content-explain">
            附櫓（つけやぐら）は、天守の入口に配置された重要な防衛施設。<br class="sp-only">堅牢で機能的な附櫓は、天守の守りを一層強化し、城を守る最後の砦として機能する。
          </p>
          <div class="content-overview">
            <h3 class="content-overview-title">ゲーム概要</h3>
            <p class="content-overview-text">
              全方位からの激しい攻撃を避けながら、<br>
              天守突入を目指し、鍵を集めて攻略せよ!!
            </p>
          </div>
        </div>
        <img src="/img/feature/tsukeyaguraIcon.png" alt="tsukeyaguraIcon" class="content-icon tsukeyagura">
      </div>
      <div class="feature-content">
        <img src="/img/feature/tensyu.jpg" alt="feature" class="content-image">
        <div class="content-text">
          <h1 class="content-title">天守</h1>
          <div class="content-copy">
            堂々たる松江城の象徴
          </div>
          <p class="content-explain">
            城山の中心にそびえ立つ松江のシンボル。全国に１２城しか残っていない「現存天守」の１つであり、高さ約３０メートルの威容は防御の拠点でありながら、美しい黒の下見板張りと白壁が見事に調和し、戦略性と美しさを兼ね備える。
          </p>
          <div class="content-overview">
            <h3 class="content-overview-title">ゲーム概要</h3>
            <p class="content-overview-text">
              迫りくるたくさんの兵士を攻撃し、<br>
              ボス戦に挑み攻略せよ!!
            </p>
          </div>
        </div>
        <img src="/img/feature/tensyuIcon.png" alt="tensyuIcon" class="content-icon tensyu">
      </div>
      <div class="feature-content">
        <img src="/img/feature/ido.jpg" alt="feature" class="content-image">
        <div class="content-text">
          <h1 class="content-title">地階の井戸</h1>
          <div class="content-copy">
            本丸の地下に眠る生命線
          </div>
          <p class="content-explain">
            松江城天守にある井戸は、籠城時にも水を確保するために掘られた生命線で、この井戸は深く掘り抜かれており、城がいかなる状況にも耐えられるよう設計されている。地下にひっそりと佇むこの井戸が、松江城の防衛体制を陰ながら支えている。天守内に井戸が現存しているのは、国内において松江城のみである。
          </p>
        </div>
      </div>
      <img src="/img/feature/ninja_new2.png" alt="feature" class="ninja">
    </div>
  </section>
</template>

<style lang="scss" scoped>
.feature {
  padding: 4%;
  background-image: url('/img/feature/featureBG.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 800px;
  height: 2816px;
  font-size: 12px;
  line-height: 2;
  margin: 0 auto;
  position: relative;
  @include mixins.max-screen(800px) {
    background-image: url('/img/feature/featureBG-sp.jpg');
    width: 90vw;
    height: auto;
    padding-bottom: 10%;
  }
  .feature-title {
    background-image: url('/img/subtract.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    width: 432px;
    height: 64px;
    text-align: center;
    color: #fff;
    font-size: 28px;
    line-height: 64px;
    margin: 0 auto;
    margin-top: -80px;
    @include mixins.max-screen(800px) {
      background-image: url('/img/subtract-sp.png');
      width: 70vw;
      height: 15vw;
      font-size: 5vw;
      line-height: 15vw;
      margin-top: -11.5vw;
    }
  }
  .builder {
    background-image: url('/img/feature/featureSubtract.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    width: 140px;
    height: 38px;
    text-align: center;
    font-size: 18px;
    line-height: 45px;
    margin: 30px 0 0 50px;
    @include mixins.max-screen(800px) {
      margin: 3vw 0 0 3vw;
      width: 35vw;
      height: 9vw;
      font-size: 4vw;
      line-height: 10vw;
    }
  }
  .feature-content {
    width: 636px;
    margin: 0 auto;
    margin-top: 25px;
    background-image: url('/img/feature/featureFlame.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding: 13px;
    display: flex;
    position: relative;
    @include mixins.max-screen(800px) {
      background-image: url('/img/feature/featureFlame-sp.jpg');
      width: 98%;
      margin-top: 3vw;
      display: block;
      overflow: hidden;
      padding: 5vw 3.5vw;
    }
    .content-image {
      width: 285px;
      height: 285px;
      border: 2px solid #002D18;
      @include mixins.max-screen(800px) {
        width: 100%;
        height: 63vw;
        object-fit:cover;
        object-position: left 0 bottom 0;
      }
    }
    .content-title {
      font-size: 20px;
      background-color: #006837;
      border: 2px solid #002D18;
      color: #fff;
      margin-top: 3%;
      width: 180px;
      padding-left: 20px;
      border-left: none;
      &.yellow {
        background-color: #E6B424;
        color: #000;
      }
      @include mixins.max-screen(800px) {
        margin-left: -2.2vw;
        width: 35vw;
        height: 10vw;
        font-size: 4.5vw;
        line-height: 9.5vw;
        padding-left: 0;
        text-align: center;
        small {
          font-size: 2.5vw !important;
        }
      }
    }
    .content-copy {
      font-size: 20px;
      margin-top: 1%;
      width: 270px;
      padding-left: 20px;
      @include mixins.max-screen(800px) {
        padding-left: 0;
        font-size: 4.3vw;
        width: 100%;
        line-height: 1.3;
        margin-top: 5%;
      }
    }
    .content-explain {
      font-size: 14px;
      width: 310px;
      padding-left: 20px;
      line-height: 1.7;
      @include mixins.max-screen(800px) {
        width: 100%;
        padding-left: 0;
        font-size: 3.1vw;
        line-height: 1.7;
        margin-top: 3%;
      }
    }
    .content-overview {
      margin: 10px 0;
      font-size: 14px;
      width: 284px;
      padding-left: 20px;
      line-height: 1.7;
      @include mixins.max-screen(800px) {
        margin: 5% 0 3%;
        padding-left: 0;
        font-size: 3.1vw;
        line-height: 1.7;
        width: 100%;
      }
      .content-overview-title {
        font-size: 12px;
        color: #002D18;
        border: 1px solid #002D18;
        width: 84px;
        text-align: center;
        margin-bottom: 5px;
        @include mixins.max-screen(800px) {
          width: 23vw;
          font-size: 3.2vw;
        }
      }
      .content-overview-text {
        line-height: 1.7;
        width: 284px;
        @include mixins.max-screen(800px) {
          width: 100%;
        }
      }
    }
    .content-icon {
      width: 72px;
      position: absolute;
      top: -3%;
      right: -2%;
      @include mixins.max-screen(800px) {
        width: 33vw;
        top: 45%;
        right: 4%;
      }
      &.yoshiharu {
        width: 159px;
        @include mixins.max-screen(800px) {
          width: 33vw;
          top: 45%;
          right: 4%;
        }
      }
      &.ohori {
        width: 173px;
        @include mixins.max-screen(800px) {
          width: 41vw;
          top: 40%;
          right: -2%;
        }
      }
      &.ishigaki {
        width: 115px;
        right: 2%;
        @include mixins.max-screen(800px) {
          width: 34vw;
          top: 37%;
          right: 0;
        }
      }
      &.ootemon {
        width: 143px;
        @include mixins.max-screen(800px) {
          width: 41vw;
          top: 37%;
          right: -2%;
        }
      }
      &.tsukeyagura {
        width: 118px;
        top: 0%;
        right:-3%;
        @include mixins.max-screen(800px) {
          width: 34vw;
          top: 39%;
          right: -3%;
        }
      }
      &.tensyu {
        width: 103px;
        top: 0%;
        right: 0%;
        @include mixins.max-screen(800px) {
          width: 26vw;
          top: 41.5%;
          right: 0%;
        }
      }
    }
  }
  .ninja {
    width: 60px;
    position: absolute;
    bottom: 50px;
    left: 4.5%;
    @include mixins.max-screen(800px) {
      display: none;
    }
  }
}
</style>

