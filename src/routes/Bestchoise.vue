<script>
import Page from '../components/Page.vue'
export default {
  components: {
    Page
  },
  data() {
    return {
      // hotNuddle : "치즈불닭볶음면",
      hotNuddles : [
        "준비중","준비중","준비중","준비중","준비중","준비중",
        "준비중","준비중","준비중","준비중","준비중","준비중",
        "준비중","준비중","준비중","준비중"
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
    }
  },
  mounted() {
    this.asyncMethod();
  }
}
</script>


<template>
  <div class="bestchoise">
    <div class="inner">
    <div class="bestchoise__name">이달의 꿀조합</div>
      <div class="bestchoise__main" v-if="Loading">
        <div class="item" v-for="hotNuddle in hotNuddles" :key="hotNuddle">
          <div class="itemBox">
            <div class="__img">이미지 준비중</div>
            <div class="__text">
              <div class="name">이름 : {{ hotNuddle }}</div>
              <div class="star__name">평점 : {{ hotNuddle }}</div>
            </div>
          </div>
        </div>
        <Page style="grid-column: 1/5" />
      </div>
      <!-- 스켈레톤 UI -->
      <div class="bestchoise__main" v-else>
        <div class="item"  v-for="hotNuddle in hotNuddles" :key="hotNuddle">
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
  .bestchoise {
    position: relative;
    top: 125px;
    // width: 100%;
    padding: 0 0 80px 0;
    // min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .inner {
      width: 1400px;
      margin: auto;
      .bestchoise__name {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        line-height: 3;
      }
      .bestchoise__main {
        display: grid;
        // column 배치
        grid-template-columns: repeat(4, 1fr);
        .item {
          .itemBox {
            .__img {
              display: flex;
              justify-content: center;
              align-items: center;
              background: #e0e0e0;
              height: 306px;
              border-radius: 20px;
              margin: 12px;
            }
            .__text {
              text-align: center;
              margin-right: 17px;
              background: #e0e0e0;
              height: 50px;
              border-radius: 20px;
              margin: 12px;
            }
          }
          // 스켈레톤 UI
          .skeletons_itemBox {
            background: #e0e0e0;
            height: 306px;
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
          .skeletons_textBox {
            background: #e0e0e0;
            height: 50px;
            border-radius: 20px;
            margin: 12px;
            animation: skeletons_textBox 1.8s infinite ease-in-out;
            @keyframes skeletons_textBox {
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