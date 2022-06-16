<script>
export default {
  
}
</script>


<template>
  <div class="loginInfo">
    <div class="loginInfo__inner">
      <div class="loginInfo__name">내정보</div>
      <div class="loginInfo__menu"></div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: #333;
  }
  .loginInfo {
    position: relative;
    top: 125px;
    height: 700px;
    padding: 0 0 80px 0;
    // min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .loginInfo__inner {
      width: 1200px;
      margin: auto;
      position: relative;
      .loginInfo__name {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        line-height: 3;
      }
    }
  }
</style>