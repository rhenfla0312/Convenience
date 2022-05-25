<script>
export default {
  methods: {
    alert() {
      alert("준비중입니다")
    },
    handleScroll() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<template>
  <div class="pagenation">
    <div class="page" @click="alert()">더보기</div>
    <div class="page" @click="handleScroll()">맨위로</div>
  </div>
</template>

<style lang="scss" scoped>
  .pagenation {
    margin-left: 263px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 1360px;
    text-align: center;
    margin-top: 30px;
    gap: 20px;
    .page {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 100%;
      margin: auto;
      border-radius: 10px;
      height: 35px;
      background: #e0e0e0;
    }
  }
</style>