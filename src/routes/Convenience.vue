<script>
export default {
  data() {
    return {
      // hotNuddle : "치즈불닭볶음면",
      totalDatas : [
        "준비중","준비중","준비중","준비중","준비중","준비중",
        "준비중","준비중","준비중","준비중","준비중","준비중",
        "준비중","준비중","준비중"
      ],
      cuDatas : [
        "cu","cu","cu","cu","cu","cu",
        "cu","cu","cu","cu","cu","cu",
        "cu","cu","cu"
      ],
      gsDatas : [
        "gs","gs","gs","gs","gs","gs",
        "gs","gs","gs","gs","gs","gs",
        "gs","gs","gs"
      ],
      ministopDatas : [
        "ministop","ministop","ministop","ministop","ministop","ministop",
        "ministop","ministop","ministop","ministop","ministop","ministop",
        "ministop","ministop","ministop"
      ],
      Loading : false
    }
  },
  methods: {
    asyncMethod() {
      // 네트워크통신할땐 -> axios로 변경
      setTimeout(() => {
        this.Loading = !this.Loading
      },2000)
    },
    cuEvent() {
      this.totalDatas = this.cuDatas
    },
    gsEvent() {
      this.totalDatas = this.gsDatas
    },
    ministopEvent() {
      this.totalDatas = this.ministopDatas
    },
    reload() {
      // this.$router.go()
      alert('준비중입니다')
    }
  },
  mounted() {
    this.asyncMethod();
  }
}
</script>

<template>
<!-- 크롤링 페이지 -->
  <div class="convenience">
    <div class="convenience__name">이벤트 상품</div>
    <div class="inner">
      <div class="menubar">
        <div @click="reload" class="__item">전체상품</div>
        <div @click="cuEvent" class="__item">cu</div>
        <div @click="gsEvent" class="__item">gs</div>
        <div @click="ministopEvent" class="__item">mini<br>stop</div>
      </div>
      <!-- totalData -->
      <div class="bestchoise__main" v-if="Loading">
        <div class="item" v-for="totalData in totalDatas" :key="totalData">
          <div class="itemBox">
            <div class="__img">{{ totalData }}</div>
          </div>
        </div>
      </div>
      <!-- cuData-->
      <!-- <div class="bestchoise__main" v-if="cuEvent()">
        <div class="item" v-for="cuData in cuDatas" :key="cuData">
          <div class="itemBox">
            <div class="__img">{{ cuData }}</div>
          </div>
        </div>
      </div> -->
      <!-- 스켈레톤 UI -->
      <div class="bestchoise__main" v-else>
        <div class="item"  v-for="totalData in totalDatas" :key="totalData">
          <div class="skeletons_itemBox">
          </div>
          <div class="skeletons_textBox">
          </div>
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
  .convenience {
    position: relative;
    top: 125px;
    padding: 0 0 80px 0;
    // min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .convenience__name {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      line-height: 3;
    }
    .inner {
      width: 1100px;
      margin: auto;
      position: relative;
      .menubar {
        transition: .5s;
        position: fixed;
        top: 250px;
        right: 150px;
        width: 70px;
        height: 350px;
        border-radius: 50px;
        background: #fff;
        padding: 20px;
        text-align: center;
        .__item {
          cursor: pointer;
          margin-top: 35px;
          &:hover {
            font-weight: bold;
            font-size: 17px;
          }
        }
      }
      .bestchoise__main {
        display: grid;
        // column 배치
        grid-template-columns: repeat(5, 1fr);
        .item {
          .itemBox {
            .__img {
              display: flex;
              justify-content: center;
              align-items: center;
              background: #e0e0e0;
              width: 206px;
              height: 206px;
              border-radius: 20px;
              margin: 12px;
            }
          }
          // 스켈레톤 UI
          .skeletons_itemBox {
            background: #e0e0e0;
            width: 206px;
            height: 206px;
            border-radius: 20px;
            margin: 12px;
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