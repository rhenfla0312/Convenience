<script>
import axios from 'axios'
export default {
  data() {
    return {
      Loading : false,
      id : this.$route.params.id,
      menu : "",
      datas : "",
    }
  },
  mounted() {
    axios.get(`http://54.180.193.83:8081/posts/${this.id}`)
    .then((res) => {
      console.log(res)
      this.menu = res.data
      this.datas = res.data.a
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>


<template>
  <div class="bestchoiseFind">
    <div class="bestchoiseFind__inner">
      <div class="bestchoiseFind__name">상세보기</div>
      <div class="bestchoiseFind__main">
        <div class="__title">제목 : {{ menu.title }}</div>
        <div class="__name">닉네임 : {{ menu.nickname }}</div>
        <div class="__date">생성시간 : {{ menu.create_date.slice(0,-22) }}</div>
        <div class="__content">설명 : {{ menu.content }}</div>
        <div class="__items">
          <div class="__mixItem" v-for="data in datas" :key="data">
            <img class="__img" :src="`/DRF/media/${data.image}`" />
            <div class="__text">
              <div>{{ data.name }}</div>
              <div>{{ data.price }}원</div>
            </div>
            <i class="fa-solid fa-plus __plus"></i>
          </div>
        </div>
        <!-- <div>{{ menu.likes_cnt }}</div> -->
        <!-- <button @click="goodBtn">좋아요</button> -->
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
    // height: 750px;
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
        margin-top: 30px;
        text-align: center;
        font-size: 25px;
        .__name {
          margin-top: 30px;
        }
        .__content {
          margin-top: 30px;
        }
        .__date {
          margin-top: 30px;
        }
        .__items {
          padding: 50px;
          margin-top: 30px;
          margin-bottom: 30px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          .__mixItem {
            position: relative;
            margin: 15px;
            width: 200px;
            background: #fff;
            border-radius: 20px;
            margin: auto;
            .__img {
              width: 200px;
              border-radius: 20px;
            }
            .__text {
              font-size: 15px;
              padding: 5px;
            }
            .__plus {
              position: absolute;
              right: -50px;
              bottom: 50%;
            }
          }
        }
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