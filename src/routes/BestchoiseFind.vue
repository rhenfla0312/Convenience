<script>
export default {
  data() {
    return {
      Loading : false,
      title : this.$route.params.title,
      name : this.$route.params.name,
      content : this.$route.params.content,
      date : this.$route.params.date,
      items : this.$route.params.item
    }
  },
  mounted() {
    this.Loading = true
  }
}
</script>


<template>
  <div class="bestchoiseFind">
    <div class="bestchoiseFind__inner">
      <div class="bestchoiseFind__name">상세보기</div>
      <div class="bestchoiseFind__main">
        <div>{{ title }}</div>
        <div>{{ name }}</div>
        <div>{{ content }}</div>
        <div>{{ date }}</div>
        <div v-for="item in items" :key="item">
          <div>{{ JSON.stringify(item.name) }}</div>
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
  .bestchoiseFind {
    position: relative;
    top: 125px;
    height: 750px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .bestchoiseFind__inner {
      width: 1200px;
      margin: auto;
      position: relative;
      .bestchoiseFind__name {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        line-height: 3;
      }

      // 메인
      .bestchoiseFind__main {
        display: flex;
      }
      // 스켈레톤 UI
      // .skeletons__menu {
      //   display: flex;
      //   margin-top: 20px;
      //   .skeletons__img {
      //     width: 500px;
      //     height: 500px;
      //     background: #e0e0e0;
      //     border-radius: 20px;
      //     animation: skeletons__img 1.8s infinite ease-in-out;
      //       @keyframes skeletons__img {
      //         0% {
      //           background-color: rgba(165, 165, 165, 0.1);
      //         }
      //         50% {
      //           background-color: rgba(165, 165, 165, 0.3);
      //         }
      //         100% {
      //           background-color: rgba(165, 165, 165, 0.1);
      //         }
      //       }
      //   }
      //   .skeletons__text {
      //     margin-left: 200px;
      //     .skeletons__nameBox {
      //       background: #e0e0e0;
      //       width: 500px;
      //       height: 110px;
      //       border-radius: 10px;
      //       animation: skeletons__nameBox 1.8s infinite ease-in-out;
      //       @keyframes skeletons__nameBox {
      //         0% {
      //           background-color: rgba(165, 165, 165, 0.1);
      //         }
      //         50% {
      //           background-color: rgba(165, 165, 165, 0.3);
      //         }
      //         100% {
      //           background-color: rgba(165, 165, 165, 0.1);
      //         }
      //       }
      //     }
      //     .skeletons__typeBox {
      //       background: #e0e0e0;
      //       width: 500px;
      //       height: 100px;
      //       border-radius: 10px;
      //       margin-top: 50px;
      //       animation: skeletons__typeBox 1.8s infinite ease-in-out;
      //       @keyframes skeletons__typeBox {
      //         0% {
      //           background-color: rgba(165, 165, 165, 0.1);
      //         }
      //         50% {
      //           background-color: rgba(165, 165, 165, 0.3);
      //         }
      //         100% {
      //           background-color: rgba(165, 165, 165, 0.1);
      //         }
      //       }
      //     }
      //     .skeletons__priceBox {
      //       background: #e0e0e0;
      //       width: 500px;
      //       height: 100px;
      //       border-radius: 10px;
      //       margin-top: 50px;
      //       animation: skeletons_itemBox 1.8s infinite ease-in-out;
      //       @keyframes skeletons_itemBox {
      //         0% {
      //           background-color: rgba(165, 165, 165, 0.1);
      //         }
      //         50% {
      //           background-color: rgba(165, 165, 165, 0.3);
      //         }
      //         100% {
      //           background-color: rgba(165, 165, 165, 0.1);
      //         }
      //       }
      //     }
      //   }
      // }
    }
  }
</style>