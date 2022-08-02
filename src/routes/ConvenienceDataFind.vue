<script>
import axios from 'axios'
export default {
  data() {
    return {
      Loading : false,
      cuData : false,
      gsData : false,
      ministopData : false,

      cuNextPage :"",
      gsNextPage :"",
      ministopNextPage :"",
      datas : [],
      SearchData : [],
    }
  },
  methods: {
    handleScroll() {
      window.scrollTo(0, 0);
    },
    cuClick() {
      this.Loading = false
      this.cuData = true
      this.gsData = false
      this.ministopData = false
        axios.get("http://54.180.193.83:8081/objects/",{
          params: {
            data: "CU"
          }
        }).then((res) => {
          console.log(res)
          this.datas = res.data.results
          this.Loading = true
        }).catch((error) => {
          console.log(error)
        })
    },
    gsClick() {
      this.Loading = false
      this.cuData = false
      this.gsData = true
      this.ministopData = false
        axios.get("http://54.180.193.83:8081/objects/",{
          params: {
            data: "GS25"
          }
        }).then((res) => {
          console.log(res)
          this.datas = res.data.results
          this.Loading = true
        }).catch((error) => {
          console.log(error)
        })
    },
    ministopClick() {
      this.Loading = false
      this.cuData = false
      this.gsData = false
      this.ministopData = true
        axios.get("http://54.180.193.83:8081/objects/",{
          params: {
            data: "MINISTOP"
          }
        }).then((res) => {
          console.log(res)
          this.datas = res.data.results
          this.Loading = true
        }).catch((error) => {
          console.log(error)
        })
    },
    nextPage() {
      this.Loading = false
      if(this.cuData) {
        axios.get(this.cuNextPage,{
          params: {
            data: "CU"
          }
        }).then((res) => {
          console.log(res)
          this.datas = this.datas.concat(res.data.results)
          this.cuData = true
          this.cuNextPage = res.data.next
          this.Loading = true
        }).catch((error) => {
          console.log(error)
          this.Loading = true
        })
      } else if(this.gsData) {
        axios.get(this.gsNextPage,{
          params: {
            data: "GS25"
          }
        }).then((res) => {
          console.log(res)
          this.datas = this.datas.concat(res.data.results)
          this.gsNextPage = res.data.next
        }).catch((error) => {
          console.log(error)
          this.Loading = true
        })
      } else if(this.ministopData) {
        axios.get(this.ministopNextPage,{
          params: {
            data: "MINISTOP"
          }
        }).then((res) => {
          console.log(res)
          this.ministopNextPage = res.data.next
          this.datas = this.datas.concat(res.data.results)
        }).catch((error) => {
          console.log(error)
          this.Loading = true
        })
      } else {
        this.Loading = true
      }
    },
    detailSearch(id) {
      axios({
        method: 'GET',
        url : 'http://54.180.193.83:8081/objectssearch/',
        params : {
          objects_id : id
        }
      }).then((res) => {
        console.log(res)
        this.SearchData = res.data.results
        if(res.data.results.length === 0) {
          return
        } else {
          this.$router.push({
            name : 'bestChoise',
            params : {
              searchData : JSON.stringify(this.SearchData),
              searchDataLength : this.SearchData.length,
              nextData : res.data.next === null ? "NO" : res.data.next
            }
          })
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mounted() {
    // cu - default
    axios.get("http://54.180.193.83:8081/objects/",{
      params: {
        data: "CU"
      }
    }).then((res) => {
      console.log(res)
      this.datas = res.data.results
      this.cuData = true
      this.cuNextPage = res.data.next
      this.Loading = true
    }).catch((error) => {
      console.log(error)
    })

    // gs
    axios.get("http://54.180.193.83:8081/objects/",{
      params: {
        data: "GS25"
      }
    }).then((res) => {
      console.log(res)
      this.gsNextPage = res.data.next
    }).catch((error) => {
      console.log(error)
    })

    // ministop
    axios.get("http://54.180.193.83:8081/objects/",{
      params: {
        data: "MINISTOP"
      }
    }).then((res) => {
      console.log(res)
      this.ministopNextPage = res.data.next
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<template>
<!-- 크롤링 페이지 -->
  <div class="convenience">
    <div class="inner">
      <div class="convenience__name">
        <div @click="cuClick" :class="{ cuData : cuData }" class="__name">CU</div>
        <div @click="gsClick" :class="{ gsData : gsData }" class="__name">GS25</div>
        <div @click="ministopClick" :class="{ ministopData : ministopData }" class="__name">MINISTOP</div>
      </div>
      <!-- 검색 -->
      <!-- <div class="convenien__search"> -->
        <!-- <input v-model="searchData" type="text" class="__search" @keydown.enter.prevent="search"> -->
        <!-- <i class="fa-solid fa-magnifying-glass search__icon" @click="search"></i> -->
      <!-- </div> -->
      <div class="description">
        <p>해당 상품들은 조합아이템에 포함되는 상품들입니다.</p>
        <p>상품을 클릭하면 해당 상품이 포함된 조합을 보실 수 있습니다.</p>
      </div>

      <div class="convenience__main" v-if="Loading">
        <div class="item" v-for="data in datas" :key="data" @click="detailSearch(data.id)">
          <div class="itemBox">
            <img class="__img" :src="`/DRF${data.image}`"  onerror="this.src='https://www.montvertcc.com/static/mo/images/common/no_img.png'">
            <div class="item__name">{{ data.name }}</div>
            <div class="item__price">{{ data.price }}원</div>
          </div>
        </div>
        <!-- page -->
        <div class="pagenation">
          <div class="page" @click="nextPage()">더보기</div>
          <div class="page" @click="handleScroll()">맨위로</div>
        </div>
      </div>
      <!-- 스켈레톤 UI -->
      <div class="convenience__main" v-else>
        <div class="item" v-for="totalData in datas" :key="totalData">
          <div class="skeletons_itemBox"></div>
          <div class="skeletons_textBox"></div>
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
          margin: 0 40px;
          &:hover {
            font-weight: bold;
            cursor: pointer;
          }
        }
        .cuData {
          font-weight: bold;
        }
        .gsData {
          font-weight: bold;
        }
        .ministopData {
          font-weight: bold;
        }
      }
      .description {
        text-align: center;
        margin: 20px;
        background: #fff;
        padding: 15px 0 5px 0;
        border-radius: 10px;
        border-radius: 10px px;
        box-shadow: 0 7px 25px #00000014;
        font-weight: bold;
      }
      .__cuName {
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
      .convenience__main {
        display: grid;
        // column 배치
        grid-template-columns: repeat(5, 1fr);
        .item {
          position: relative;
          height: 340px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 7px 25px #00000014;
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
              border-radius: 10px;
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
              border-radius: 10px;
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
            border-radius: 10px;
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
            border-radius: 10px;
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
            border: 5px solid transparent;
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