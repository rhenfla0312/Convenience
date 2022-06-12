<script>
import axios from 'axios'
import Page from '../components/Page.vue'
export default {
  components: {
    Page
  },
  data() {
    return {
      nextData: "",
      datas : [
        "준비중","준비중","준비중","준비중","준비중","준비중",
        "준비중","준비중","준비중","준비중","준비중","준비중",
        "준비중","준비중","준비중"
      ],
      event_one : [
        "1+1","1+1","1+1","1+1","1+1","1+1",
        "1+1","1+1","1+1","1+1","1+1","1+1",
        "1+1","1+1","1+1"
      ],
      event_two : [
        "2+2","2+2","2+2","2+2","2+2","2+2",
        "2+2","2+2","2+2","2+2","2+2","2+2",
        "2+2","2+2","2+2"
      ],
      Loading : true
    }
  },
  methods: {
    asyncMethod() {
      // 네트워크통신할땐 -> axios로 변경
      // setTimeout(() => {
      //   this.Loading = !this.Loading
      // },2000)
    },
    cuBtn() {
      axios({
        method: "POST",
        url: "http://54.180.193.83:8081/Main/event/CU/"
      }).then((res) => {
        console.log(res)
        this.datas = res.data.results
        // this.Loading = !this.Loading
      }).catch((error) => {
        console.log(error)
      })
    },
    gsBtn() {
      axios({
        method: "GET",
        url: "http://54.180.193.83:8081/Main/event/GS25/",
      }).then((res) => {
        console.log(res)
        this.datas = res.data.results
        // this.Loading = !this.Loading
      }).catch((error) => {
        console.log(error)
      })
    },
    ministopBtn() {
      axios({
        method: "GET",
        url: "http://54.180.193.83:8081/Main/event/MINISTOP/",
      }).then((res) => {
        console.log(res)
        this.datas = res.data.results
        // this.Loading = !this.Loading
      }).catch((error) => {
        console.log(error)
      })
    },
    reload() {
      // this.$router.go()
    },
    nextPage() {
      axios({
        method: "GET",
        url: this.nextData
      }).then((res) => {
        console.log(res)
        this.nextData = res.data.next
        this.datas = this.datas.concat(res.data.results)
        // this.Loading = !this.Loading
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.asyncMethod();
      axios({
        method: "GET",
        url: "http://54.180.193.83:8081/Main/event/CU/"
      }).then((res) => {
        console.log(res)
        this.datas = res.data.results
        this.nextData = res.data.next
        // this.Loading = !this.Loading
      }).catch((error) => {
        console.log(error)
      })
  },
}
</script>

<template>
<!-- 크롤링 페이지 -->
  <div class="convenience">
    <div class="convenience__name">
      <div @click="cuBtn" class="__name">CU</div>
      <div @click="gsBtn" class="__name">GS25</div>
      <div @click="ministopBtn" class="__name">MINISTOP</div>
    </div>
    <div class="inner">
      <!-- totalData -->
      <div class="bestchoise__main" v-if="Loading">
        <div class="item" v-for="totalData in datas" :key="totalData">
          <div class="itemBox">
            <!-- <div class="__img">{{ totalData }}</div> -->
            <img class="__img" :src="totalData.image" />
          </div>
        </div>
      </div>
      <!-- 스켈레톤 UI -->
      <div class="bestchoise__main" v-else>
        <div class="item" v-for="totalData in datas" :key="totalData">
          <div class="skeletons_itemBox">
          </div>
          <div class="skeletons_textBox">
          </div>
        </div>
      </div>
      <!-- 1 + 1 event -->
      <!-- <div class="bestchoise__main" >
        <div class="item" v-for="totalData in totalDatas[0].event_one" :key="totalData">
          <div class="itemBox">
            <div class="__img">{{ totalData }}</div>
          </div>
        </div>
      </div> -->
      <!-- 2 + 2 event -->
      <!-- <div class="bestchoise__main">
        <div class="item" v-for="totalData in totalDatas[0].event_two" :key="totalData">
          <div class="itemBox">
            <div class="__img">{{ totalData }}</div>
          </div>
        </div>
      </div> -->
      <Page @click="nextPage" style="margin-left: 45px;" />
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
      display: flex;
      justify-content: center;
      font-size: 20px;
      line-height: 3;
      .__name {
        // margin-right: 10px;
        margin-left: 100px;
        &:hover {
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
    .inner {
      width: 1100px;
      margin: auto;
      position: relative;
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