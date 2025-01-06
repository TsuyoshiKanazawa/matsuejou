<template>
  <div ref="parallaxContainer">
    <img ref="parallaxImage" src="/img/Ninja_brack-s3.png" alt="ninja" class="ninja-climb">
  </div>
</template>

<script>
export default {
  name: 'NinjaClimb',
  data() {
    return {
      observer: null,
      isInView: false,
      lastFlipScrollTop: 0,
      currentFlip: 1,
    }
  },
  mounted() {
    // --- Intersection Observer ---
    const callback = (entries) => {
      entries.forEach((entry) => {
        // 画面内に入った
        if (entry.isIntersecting) {
          this.isInView = true;
          // スクロールリスナー登録
          window.addEventListener('scroll', this.handleScroll, { passive: true });
        } else {
          this.isInView = false;
          // 画面外に出たらスクロールリスナーを外す
          window.removeEventListener('scroll', this.handleScroll);
        }
      });
    };

    this.observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 0, // 1ピクセルでも見えたら isIntersecting = true
    });

    // parallaxContainer 全体を監視対象に
    if (this.$refs.parallaxContainer) {
      this.observer.observe(this.$refs.parallaxContainer);
    }
  },
  beforeDestroy() {
    // コンポーネントが破棄される際にリスナーやobserverを解除
    if (this.observer) {
      this.observer.disconnect();
    }
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (!this.isInView) return;

      // 今回のスクロール量
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // パララックス係数（上に動く速度、適宜調整してください）
      const parallaxFactor = 0.7;

      // 「最後に反転した位置」と「今のスクロール位置」の距離を計算
      const distanceSinceFlip = Math.abs(scrollTop - this.lastFlipScrollTop);

      // ▼ 一定距離ごとに反転させる閾値（お好みで調整してください）
      const FLIP_THRESHOLD = 100;

      // distanceSinceFlip が一定値を超えたら反転
      if (distanceSinceFlip >= FLIP_THRESHOLD) {
        // 左右反転の状態を切り替え (1 → -1 → 1 → ...)
        this.currentFlip = -this.currentFlip;
        // 「反転した位置」を今の位置に更新
        this.lastFlipScrollTop = scrollTop;
        // 画像を translate + scaleX で動かす
        // 例: 下方向スクロールなら scaleX(1), 上なら scaleX(-1)
        if (this.$refs.parallaxImage) {
          this.$refs.parallaxImage.style.transform = `
            translateY(${scrollTop * parallaxFactor}px)
            scaleX(${this.currentFlip})
          `;
        }
      }

      // 今回のスクロール値を「前回分」として保持
      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    },
  },
}
</script>
