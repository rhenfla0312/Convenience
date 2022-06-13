<script>
import axios from 'axios'

export default {
  data() {
    return {
      searchData: "",
      cuClick: false,
      gsClick: false,
      ministopClick: false,
      nextData: "",
      readImg: "var/www/html/readImg.jpg",
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
      Loading : false
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
      this.Loading = false
      this.cuClick = true
      this.gsClick = false
      this.ministopClick = false
      // this.$router.go()
      axios({
        method: "GET",
        url: "http://54.180.193.83:8081/Main/event/CU/"
      }).then((res) => {
        console.log(res)
        this.datas = res.data.results
        this.Loading = !this.Loading
      }).catch((error) => {
        console.log(error)
      })
    },
    gsBtn() {
      this.Loading = false
      this.cuClick = false
      this.gsClick = true
      this.ministopClick = false
      // this.$router.go()
      axios({
        method: "GET",
        url: "http://54.180.193.83:8081/Main/event/GS25/",
      }).then((res) => {
        console.log(res)
        this.datas = res.data.results
        this.Loading = !this.Loading
      }).catch((error) => {
        console.log(error)
      })
    },
    ministopBtn() {
      this.Loading = false
      this.cuClick = false
      this.gsClick = false
      this.ministopClick = true
      // this.$router.go()
      axios({
        method: "GET",
        url: "http://54.180.193.83:8081/Main/event/MINISTOP/",
      }).then((res) => {
        console.log(res)
        this.datas = res.data.results
        this.Loading = !this.Loading
      }).catch((error) => {
        console.log(error)
      })
    },
    // reload() {
      // this.$router.go()
    // },
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
    },
    handleScroll() {
      window.scrollTo(0, 0);
    },
    search() {
      axios({
        method: "GET",
        url: `http://54.180.193.83:8081/Main/event/CU/?search=${this.searchData}`
      }).then((res) => {
        console.log(res)
        this.datas = res.data.results
      }).catch((error) => {
        console.log(error)
      })
    },
    paramId(totalData,index) {
      this.$router.push({
        // push로 파라미터를 날릴땐 path가 아닌 name으로 해야한다?
        name: 'convenienceFind',
        params: {
          contentId : totalData.name,
          contentImg : totalData.image,
          contentType : totalData.type,
          contentPrice : totalData.price
        }
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
        this.Loading = !this.Loading
      }).catch((error) => {
        console.log(error)
      })
  },
}
</script>

<template>
<!-- 크롤링 페이지 -->
  <div class="convenience">
    <div class="inner">
      <div class="convenience__name">
        <div :class="{ cuAtive : cuClick }" @click="cuBtn" class="__name">CU</div>
        <div :class="{ gsAtive : gsClick }" @click="gsBtn" class="__name">GS25</div>
        <div :class="{ ministopAtive : ministopClick }" @click="ministopBtn" class="__name">MINISTOP</div>
      </div>
      <!-- 검색 -->
      <div class="convenien__search">
        <input v-model="searchData" type="text" class="__search" @keydown.enter.prevent="search">
      </div>
      <!-- totalData -->
      <div class="convenience__main" v-if="Loading">
        <div class="item" v-for="(totalData,index) in datas" :key="totalData" @click="paramId(totalData,index)">
          <!-- <RouterLink to="/convenience/convenienceFind" class="itemBox"> -->
          <div class="itemBox">
            <div class="item__type" :style="[ totalData.type == '1+1' ? oneColor : twoColor ]">{{ totalData.type }}</div>
            <img class="__img" :src="[!totalData.image ? readImg : totalData.image ]" />
            <div class="item__name">{{ totalData.name }}</div>
            <div class="item__price">{{ totalData.price }}원</div>
          </div>
        </div>
        <!-- page -->
        <div class="pagenation">
          <div class="page" @click="nextPage">더보기</div>
          <div class="page" @click="handleScroll()">맨위로</div>
        </div>
      </div>
      <!-- 스켈레톤 UI -->
      <div class="convenience__main" v-else>
        <div class="item" v-for="totalData in datas" :key="totalData">
          <div class="skeletons_itemBox">
          </div>
          <div class="skeletons_textBox">
          </div>
        </div>
      </div>
      <!-- 1 + 1 event -->
      <!-- <div class="convenience__main" >
        <div class="item" v-for="totalData in totalDatas[0].event_one" :key="totalData">
          <div class="itemBox">
            <div class="__img">{{ totalData }}</div>
          </div>
        </div>
      </div> -->
      <!-- 2 + 2 event -->
      <!-- <div class="convenience__main">
        <div class="item" v-for="totalData in totalDatas[0].event_two" :key="totalData">
          <div class="itemBox">
            <div class="__img">{{ totalData }}</div>
          </div>
        </div>
      </div> -->
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
    .inner {
      width: 1200px;
      margin: auto;
      position: relative;
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
        .cuAtive {
          font-weight: bold;
        }
        .gsAtive {
          font-weight: bold;
        }
        .ministopAtive {
          font-weight: bold;
        }
      }
      .convenien__search {
        position: absolute;
        right: 20px;
        top: 16px;
        .__search {
          width: 200px;
          border-radius: 10px;
          outline: none;
          
        }
      }
      .convenience__main {
        display: grid;
        // column 배치
        grid-template-columns: repeat(5, 1fr);
        .item {
          position: relative;
          height: 340px;
          background: #fff;
          border-radius: 20px;
          /* padding: 30px; */
          cursor: pointer;
          transition: .3s;
          margin: 15px;
          // padding: 50px 10px 50px 10px;
          .itemBox {
            text-align: center;
            .item__type {
              position: absolute;
              right: 20px;
              top: 15px;
              padding: 1px 12px;
              text-align: center;
              background-image: linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%);
              font-size: 14px;
              color: #000;
              font-weight: bold;
              border-radius: 20px;
            }
            .oneColor {
              background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%) !important;
            }
            .twoColor {
              background-image: linear-gradient(-20deg, #dcb0ed 0%, #99c99c 100%) !important;
            }
            .__img {
              display: flex;
              justify-content: center;
              align-items: center;
              background: #fff;
              // padding: 30px;
              // width: 206px;
              height: 206px;
              border-radius: 20px;
              margin-top: 35px;
              padding: 20px;
            }
            .item__name {
              margin-top: 10px;
            }
            .item__price {
              margin-top: 5px;
            }
          }
          // 스켈레톤 UI
          .skeletons_itemBox {
            background: #e0e0e0;
            // width: 206px;
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
          .skeletons_textBox {
            background: #e0e0e0;
            // width: 206px;
            height: 95px;
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
          &:hover {
            border: 5px solid #1de9b6;
          }
        }
        .pagenation {
          display: grid;
          grid-template-columns: 2fr 1fr;
          text-align: center;
          margin: 12px;
          gap: 20px;
          grid-column: 1/6;
          .page {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border-radius: 10px;
            height: 35px;
            background: #e0e0e0;
          }
        }
      }
    }
  }

</style>