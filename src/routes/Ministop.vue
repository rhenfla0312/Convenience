<script>
import axios from 'axios'
export default {
  data() {
    return {
      width : '100%',
      searchData: "",
      nextData: "",
      totalData: true,
      oneData: false,
      twoData: false,
      eventData: false,
      eventItemBox: false,
      datas : [],
      Loading : false
    }
  },
  methods: {
    totalDataBtn() {
      this.Loading = false
      this.totalData = true
      this.oneData = false
      this.twoData = false
      this.eventData = false
      axios({
        method: "GET",
        url: "http://54.180.193.83:8081/Main/event/MINISTOP/",
      }).then((res) => {
        console.log(res)
        this.datas = res.data.results
        this.Loading = true
      }).catch((error) => {
        console.log(error)
      })
    },
    oneDataBtn() {
      this.Loading = false
      this.totalData = false
      this.oneData = true
      this.twoData = false
      this.eventData = false
      axios.get("http://54.180.193.83:8081/Main/event/MINISTOP/typesearch/",{
        params: {
          data: "1+1"
        }
      }).then((res) => {
        console.log(res)
        this.datas = res.data.results
        if(res.data.next) {
          this.nextData = res.data.next
          this.Loading = true
        } else {
          this.nextData = null
          this.Loading = true
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    twoDataBtn() {
      this.Loading = false
      this.totalData = false
      this.oneData = false
      this.twoData = true
      this.eventData = false
      axios.get("http://54.180.193.83:8081/Main/event/MINISTOP/typesearch/",{
        params: {
          data: "2+1"
        }
      }).then((res) => {
        console.log(res)
        this.datas = res.data.results
        if(res.data.next) {
          this.nextData = res.data.next
          this.Loading = true
        } else {
          this.nextData = null
          this.Loading = true
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    eventDataBtn() {
      this.Loading = false
      this.totalData = false
      this.oneData = false
      this.twoData = false
      this.eventData = true
      axios.get("http://54.180.193.83:8081/Main/event/MINISTOP/typesearch/",{
        params: {
          data: "덤증정"
        }
      }).then((res) => {
        console.log(res)
        this.datas = res.data.results
        if(res.data.next) {
          this.nextData = res.data.next
          this.Loading = true
        } else {
          this.nextData = null
          this.Loading = true
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    nextPage() {
      // this.Loading = false
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
        // this.Loading = !this.Loading
      })
    },
    handleScroll() {
      window.scrollTo(0, 0);
    },
    search() {
      this.Loading = false
      if(this.oneData) {
        // 1+1데이터
        axios.get("http://54.180.193.83:8081/Main/event/MINISTOP/typesearch/",{
          params: {
            data: "1+1",
            search : this.searchData
          }
        }).then((res) => {
          console.log(res)
          this.datas = res.data.results
          if(res.data.next) {
            this.nextData = res.data.next
            this.Loading = true
          } else {
            this.nextData = null
            this.Loading = true
          }
        }).catch((error) => {
          console.log(error)
        })
      } else if(this.twoData) {
        // 2+2데이터
        axios.get("http://54.180.193.83:8081/Main/event/MINISTOP/typesearch/",{
          params: {
            data: "2+1",
            search : this.searchData
          }
        }).then((res) => {
          console.log(res)
          this.datas = res.data.results
          if(res.data.next) {
            this.nextData = res.data.next
            this.Loading = true
          } else {
            this.nextData = null
            this.Loading = true
          }
        }).catch((error) => {
          console.log(error)
        })
      } else if(this.eventData) {
        // 덤증정데이터
        axios.get("http://54.180.193.83:8081/Main/event/MINISTOP/typesearch/",{
          params: {
            data: "덤증정",
            search : this.searchData
          }
        }).then((res) => {
          console.log(res)
            this.datas = res.data.results
          if(res.data.next) {
            this.nextData = res.data.next
            this.Loading = true
          } else {
            this.nextData = null
            this.Loading = true
          }
        }).catch((error) => {
          console.log(error)
        })
      } else {
        // 전체데이터
        axios({
          method: "GET",
          url: `http://54.180.193.83:8081/Main/event/MINISTOP/?search=${this.searchData}`
        }).then((res) => {
          console.log(res)
          this.datas = res.data.results
          if(res.data.next) {
            this.nextData = res.data.next
            this.Loading = true
          } else {
            this.nextData = null
            this.Loading = true
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    paramId(totalData,index) {
      this.$router.push({
        // push로 파라미터를 날릴땐 path가 아닌 name으로 해야한다?
        name: 'ministopConvenienceFind',
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
    axios({
      method: "GET",
      url: "http://54.180.193.83:8081/Main/event/MINISTOP/"
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
        <RouterLink to="/convenience/cu" class="__name">CU</RouterLink>
        <RouterLink to="/convenience/gs" class="__name">GS25</RouterLink>
        <RouterLink to="/convenience/ministop" class="__name __ministopName">MINISTOP</RouterLink>
      </div>
      <!-- 검색 -->
      <div class="convenien__search">
        <input v-model="searchData" type="text" class="__search" @keydown.enter.prevent="search">
        <i class="fa-solid fa-magnifying-glass search__icon" @click="search"></i>
      </div>
      <!-- 전체데이터, 1+1, 2+2, 덤증정 -->
      <div class="eventContainer">
        <ul class="eventItem">
          <li @click="totalDataBtn" :class="{ totalData : totalData }"><span>전체</span></li>
          <li @click="oneDataBtn" :class="{ oneData : oneData }"><span>1+1</span></li>
          <li @click="twoDataBtn" :class="{ twoData : twoData }"><span>2+1</span></li>
          <li @click="eventDataBtn" :class="{ eventData : eventData }"><span>덤증정</span></li>
        </ul>
      </div>
      <!-- totalData -->
      <!-- totalData -->
      <div class="convenience__main" v-if="Loading">
        <div class="item" v-for="(totalData,index) in datas" :key="totalData" @click="paramId(totalData,index)">
          <!-- 덤증정이 없을경우 전체데이터 -->
          <div class="itemBox" @mouseover="eventItemBox = true" @mouseleave="eventItemBox = false">
            <div class="item__type">{{ totalData.type }}</div>
            <img class="__img" :src="totalData.image" />
            <div class="item__name">{{ (totalData.name) }}</div>
            <div class="item__price">{{ (totalData.price) }}</div>
          </div>
          <!-- 덤증정이 있을경우 그 아이템만 덤증정데이터 마우스올릴때 불러오기 -->
          <div class="itemBox" style="display: none" :style="[totalData.GIFTimage ? { width : width } : totalData.image ]" :class="{ eventItemBox : eventItemBox }">
            <div class="item__type">{{ (!totalData.GIFTimage ? "" : totalData.type) }}</div>
            <img class="__img" :src="(!totalData.GIFTimage ? '' : totalData.GIFTimage)" />
            <!-- <div class="item__name">{{ (!totalData.GIFTname ? "" : totalData.GIFTname) }}</div> -->
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
      }
      .__ministopName {
        font-weight: bold;
      }
      .convenien__search {
        position: absolute;
        right: 20px;
        top: 17px;
        .__search {
          width: 200px;
          border-radius: 10px;
          outline: none;
          padding: 3px;
          border: 1px solid #eeeeee;
        }
        .search__icon {
          position: absolute;
          right: 10px;
          top: 5px;
          padding: 3px;
          color: #333;
          cursor: pointer;
        }
      }
      .eventContainer {
        display: grid;
        margin: 20px;
        .eventItem {
          float: left;
          list-style: none;
          display: flex;
          padding: 0;
          text-align: center;
          li {
            width: 290px;
            border: 1px solid #333;
            border-bottom: 1px solid #397ca8;
            cursor: pointer;
            padding: 10px;
            &:hover {
              font-weight: bold;
              border-top: 4px solid #333;
              border-bottom: none;
            }
          }
          .totalData {
            border-bottom: none;
            font-weight: bold;
            border-top: 4px solid #333;
          }
          .oneData {
            border-bottom: none;
            font-weight: bold;
            border-top: 4px solid #333;
          }
          .twoData {
            border-bottom: none;
            font-weight: bold;
            border-top: 4px solid #333;
          }
          .eventData {
            border-bottom: none;
            font-weight: bold;
            border-top: 4px solid #333;
          }
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
              top: 10px;
              padding: 0 12px;
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
            }
            .item__name {
              margin-top: 10px;
            }
            .item__price {
              margin-top: 5px;
            }
          }
          .eventItemBox {
            display: block !important;
            position: absolute;
            z-index: 10;
            top: 0;
            right: 0;
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
            box-sizing: border-box;
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