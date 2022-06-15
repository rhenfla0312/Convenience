<script>
export default {
  data() {
    return {
      Loading : false,
      name : this.$route.params.contentId,
      img : this.$route.params.contentImg,
      type : this.$route.params.contentType,
      price : this.$route.params.contentPrice,
    }
  },
  mounted() {
    this.Loading = !this.Loading
  }
}
</script>


<template>
  <div class="convenienceFind">
    <div class="convenienceFind__inner">
      <div class="convenienceFind__name">상세보기</div>
      <!-- 메인 -->
      <div class="convenienceFind__menu" v-if="Loading">
        <img :src="img" class="convenienceFind__img" />
        <div class="convenienceFind__text">
          <div class="convenienceFind__box">
            <div class="convenienceFind__title">상품명</div>
            <div class="convenienceFind__data">{{ name }}</div>
          </div>
          <div class="convenienceFind__box">
            <div class="convenienceFind__title">이벤트 상품</div>
            <div class="convenienceFind__data">{{ type }}</div>
          </div>
          <div class="convenienceFind__box">
            <div class="convenienceFind__title">가격</div>
            <div class="convenienceFind__data">{{ price }}</div>
          </div>
        </div>
      </div>

      <!-- 스켈레톤 UI -->
      <div class="skeletons__menu" v-else>
        <div class="skeletons__img"></div>
        <div class="skeletons__text">
          <div class="skeletons__nameBox"></div>
          <div class="skeletons__typeBox"></div>
          <div class="skeletons__priceBox"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: #333;
  }
  .convenienceFind {
    position: relative;
    top: 125px;
    height: 750px;
    // padding: 0 0 80px 0;
    // min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .convenienceFind__inner {
      width: 1200px;
      margin: auto;
      position: relative;
      .convenienceFind__name {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        line-height: 3;
      }

      // 메인
      .convenienceFind__menu {
        display: flex;
        margin-top: 20px;
        .convenienceFind__img {
          width: 500px;
          height: 500px;
          background: #fff;
          border-radius: 20px;
          padding: 20px;
        }
        .convenienceFind__text {
          margin-left: 200px;
          .convenienceFind__box {
            .convenienceFind__title {
              font-size: 25px;
              font-weight: bold;
              padding-bottom: 10px;
              border-bottom: 2px solid #333;
              width: 500px;
            }
            .convenienceFind__data {
              font-size: 20px;
              margin-top: 20px;
              margin-bottom: 50px;
              padding: 5px;
              width: 500px; 
            }
          }
        }
      }
      // 스켈레톤 UI
      .skeletons__menu {
        display: flex;
        margin-top: 20px;
        .skeletons__img {
          width: 500px;
          height: 500px;
          background: #e0e0e0;
          border-radius: 20px;
          animation: skeletons__img 1.8s infinite ease-in-out;
            @keyframes skeletons__img {
              0% {
                background-color: rgba(165, 165, 165, 0.1);
              }
              50% {
                background-color: rgba(165, 165, 165, 0.3);
              }
              100% {
                background-color: rgba(165, 165, 165, 0.1);
              }
            }
        }
        .skeletons__text {
          margin-left: 200px;
          .skeletons__nameBox {
            background: #e0e0e0;
            width: 500px;
            height: 110px;
            border-radius: 10px;
            animation: skeletons__nameBox 1.8s infinite ease-in-out;
            @keyframes skeletons__nameBox {
              0% {
                background-color: rgba(165, 165, 165, 0.1);
              }
              50% {
                background-color: rgba(165, 165, 165, 0.3);
              }
              100% {
                background-color: rgba(165, 165, 165, 0.1);
              }
            }
          }
          .skeletons__typeBox {
            background: #e0e0e0;
            width: 500px;
            height: 100px;
            border-radius: 10px;
            margin-top: 50px;
            animation: skeletons__typeBox 1.8s infinite ease-in-out;
            @keyframes skeletons__typeBox {
              0% {
                background-color: rgba(165, 165, 165, 0.1);
              }
              50% {
                background-color: rgba(165, 165, 165, 0.3);
              }
              100% {
                background-color: rgba(165, 165, 165, 0.1);
              }
            }
          }
          .skeletons__priceBox {
            background: #e0e0e0;
            width: 500px;
            height: 100px;
            border-radius: 10px;
            margin-top: 50px;
            animation: skeletons_itemBox 1.8s infinite ease-in-out;
            @keyframes skeletons_itemBox {
              0% {
                background-color: rgba(165, 165, 165, 0.1);
              }
              50% {
                background-color: rgba(165, 165, 165, 0.3);
              }
              100% {
                background-color: rgba(165, 165, 165, 0.1);
              }
            }
          }
        }
      }
    }
  }
</style>