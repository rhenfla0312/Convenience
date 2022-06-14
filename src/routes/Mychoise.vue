<script>
export default {

}
</script>


<template>
  <div class="mychoise">
    <div class="mychoise__inner">
    <div class="mychoise__name">나만의 조합</div>
      <div class="mychoise__menu">
        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: #333;
  }
  .mychoise {
    position: relative;
    top: 125px;
    height: 700px;
    padding: 0 0 80px 0;
    // min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .mychoise__inner {
      width: 1100px;
      margin: auto;
      position: relative;
      .mychoise__name {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        line-height: 3;
      }
    }
  }
</style>