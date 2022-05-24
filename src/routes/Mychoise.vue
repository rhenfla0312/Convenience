<script>
export default {

}
</script>


<template>
  <div class="mychoise">
    <div class="mychoise__name">나만의 조합</div>
    <div class="mychoise__left">닫아라 준비중이다</div>
    <div class="mychoise__right">닫아라 준비중이다</div>
  </div>
</template>

<style lang="scss" scoped>
  .mychoise {
    position: relative;
    top: 125px;
    height: 700px;
    padding: 0 0 80px 0;
    min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .mychoise__name {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      line-height: 3;
    }
    .mychoise__left {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      position: absolute;
      padding: 20px;
      left: 350px;
      top: 120px;
      width: 400px;
      height: 500px;
      background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
      border-radius: 100px;
      box-shadow: inset 5px 5px 15px rgba(0,0,0,0.15),
                  inset -5px -5px 15px rgba(255,255,255, 0.15),
                        5px 5px 15px rgba(0,0,0,0.15),
                        -5px -5px 15px rgba(255,255,255, 0.15);
      &::before {
        content: '조합만들기';
        position: absolute;
        inset: 5px;
        background: #fff;
        border-radius: 100px;
        transition: .5s;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
      }
      &:hover::before {
        content: '';
        transform-origin: left;
        transform: rotateY(-105deg);
        box-shadow: -30px 30px 50px rgba(0,0,0,0.5);
        transition: .5s;
      }
    }
    .mychoise__right {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      position: absolute;
      right: 350px;
      top: 120px;
      width: 400px;
      height: 500px;
      background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
      border-radius: 100px;
      box-shadow: inset 5px 5px 15px rgba(0,0,0,0.15),
                  inset -5px -5px 15px rgba(255,255,255, 0.15),
                        5px 5px 15px rgba(0,0,0,0.15),
                        -5px -5px 15px rgba(255,255,255, 0.15);
      &::before {
        content: '랭킹 보기';
        position: absolute;
        inset: 5px;
        background: #fff;
        border-radius: 100px;
        transition: .5s;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
      }
      &:hover::before {
        content: '';
        transform-origin: right;
        transform: rotateY(-105deg);
        box-shadow: -30px 30px 50px rgba(0,0,0,0.5);
        transition: .5s;
      }
    }
  }
</style>