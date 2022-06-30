<script>
import axios from 'axios'
import Page from '../components/Page.vue'
export default {
  components: {
    Page
  },
  data() {
    return {
      datas : [],
      nextData: "",
      Loading : false,
      search__data : "",
      search__count : 0,
    }
  },
  methods: {
    paramId(data) {
      this.$router.push({
        // push로 파라미터를 날릴땐 path가 아닌 name으로 해야한다?
        name: 'bestChoiseFind',
        params: {
          id : data.id
        }
      })
    },
    goodBtn(id) {
      axios({
        method: "POST",
        url : "http://54.180.193.83:8081/best/",
        data : {
          postid : id,
          userid : localStorage.getItem('id')
        }
      }).then((res) => {
        console.log(res)
        this.$router.go()
      }).catch((error) => {
        console.log(error)
      })
    },
    nextPage() {
      axios({
        method: "GET",
        url: this.nextData
      }).then((res) => {
        console.log(res)
        this.nextData = res.data.next
        this.datas = this.datas.concat(res.data.results)
      }).catch((error) => {
        console.log(error)
      })
    },
    handleScroll() {
      window.scrollTo(0, 0);
    },
    search() {
      axios.get(`http://54.180.193.83:8081/Main/?search=${this.search__data}`)
      .then((res) => {
        console.log(res)
        this.datas = res.data.results
        this.search__count = res.data.count
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mounted() {
    axios.get("http://54.180.193.83:8081/Main/")
    .then((res) => {
      console.log(res)
      this.datas = res.data.results
      this.search__count = res.data.count
      this.nextData = res.data.next
      this.Loading = true
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>


<template>
  <div class="bestchoise">
    <div class="inner">
    <div class="bestchoise__name">꿀조합</div>
      <!-- 검색 -->
      <div class="bestchoise__search">
        <input type="text" class="__search" v-model="search__data" @keydown.enter.prevent="search()">
        <i class="fa-solid fa-magnifying-glass search__icon" @click="search()"></i>
      </div>
      <div class="bestchoise__main" v-if="search__count >= 1">
        <div class="item" v-for="data in datas" :key="data">
          <div class="itemBox">
            <img class="__img" :src="`/DRF/media/${data.a[0].image}`" @click="paramId(data)" />
            <div class="__text">
              <div class="name">제목 : {{ data.title }}</div>
              <div class="nickname">닉네임 : {{ data.nickname }}</div>
              <div class="star__name" @click="goodBtn(data.id)">좋아요 : {{ data.likes_cnt }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 데이터가 없을 경우 -->
      <div class="no__data" v-else>등록된 조합이 없습니다</div>
      <!-- 스켈레톤 UI -->
      <div class="skeletons__main" v-show="!this.Loading">
        <div class="item" v-for="data in datas" :key="data">
          <div class="skeletons__itemBox"></div>
          <div class="skeletons__textBox"></div>
        </div>
      </div>
      <div class="pagenation">
        <div class="page" @click="nextPage">더보기</div>
        <div class="page" @click="handleScroll()">맨위로</div>
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
      width: 1320px;
      margin: auto;
      position: relative;
      .bestchoise__name {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        line-height: 3;
      }
      .bestchoise__search {
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
              background: #fff;
              height: 306px;
              padding: 20px;
              border-radius: 20px;
              margin: 12px;
              &:hover {
                border: 5px solid #1de9b6;
                border-radius: 20px;
                cursor: pointer;
              }
            }
            .__text {
              text-align: center;
              margin-right: 17px;
              background: #fff;
              padding: 10px;
              border-radius: 20px;
              margin: 12px;
              .star__name {
                &:hover {
                  color: #0d47a1;
                  font-weight: bold;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
      // 스켈레톤 UI
      .skeletons__main {
        position: relative;
        z-index: 100;
        .skeletons__itemBox {
          background: #e0e0e0;
          height: 306px;
          width: 306px;
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
        .skeletons__textBox {
          background: #e0e0e0;
          width: 306px;
          height: 92px;
          border-radius: 20px;
          padding: 10px;
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
      .pagenation {
        display: grid;
        grid-template-columns: 2fr 1fr;
        text-align: center;
        margin: 12px;
        gap: 20px;
        grid-column: 1/5;
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
      .no__data {
        height: 400px;
        text-align: center;
        margin-top: 60px;
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
</style>