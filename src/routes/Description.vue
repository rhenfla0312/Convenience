<script>
export default {

}
</script>


<template>
  <div class="description">
    <div class="description__name">꿀조합이란?</div>
    <div class="description__main">
      <div class="__head">편의점 재료를 병합하여<br> 새로운 메뉴를 찾아내는 페이지입니다</div>
      <div class="__main">
        <p>□ 임의의 재료 + 임의의 재료 = ?</p>
        <p>□ 임의의 재료 + 임의의 재료 = ?</p>
        <p>□ 임의의 재료 + 임의의 재료 = ?</p>
        <p>□ 임의의 재료 + 임의의 재료 = ?</p>
        <p>□ 임의의 재료 + 임의의 재료 = ?</p>
        <p>□ 임의의 재료 + 임의의 재료 = ?</p>
        <p>□ 임의의 재료 + 임의의 재료 = ?</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .description {
    position: relative;
    top: 125px;
    height: 700px;
    width: 100%;
    min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .description__name {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      line-height: 3;
      margin-bottom: 40px;
    }
    .description__main {
      position: absolute;
      width: 500px;
      height: 500px;
      right: 0;
      left: 0;
      margin: auto;
      padding: 20px;
      border: 1px solid black;
      box-sizing: border-box;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transform: perspective(1100px) rotateY(20deg);
      .__head {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 40px;
      }
      .__main {
        font-size: 18px;
        
      }
    }
  }
</style>