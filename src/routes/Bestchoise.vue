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
      Loading : false
    }
  },
  methods: {
    paramId(data,index) {
      this.$router.push({
        // push로 파라미터를 날릴땐 path가 아닌 name으로 해야한다?
        name: 'bestChoiseFind',
        params: {
          title : data.title,
          name : data.nickname,
          content : data.content,
          date : data.create_date,
          item: data.a
        }
      })
    }
  },
  mounted() {
    axios.get("http://54.180.193.83:8081/Main/")
    .then((res) => {
      console.log(res)
      this.datas = res.data.results
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
      <div class="bestchoise__main" v-if="Loading">
        <div class="item" v-for="(data, index) in datas" :key="data" @click="paramId(data,index)">
          <div class="itemBox">
            <img class="__img" :src="`/DRF/media/${data.a[0].image}`" />
            <div class="__text">
              <div class="name">제목 : {{ data.title }}</div>
              <div class="nickname">닉네임 : {{ data.nickname }}</div>
              <div class="star__name">좋아요 : {{ (!data.likes_cnt ? 0 : data.likes_cnt) }}</div>
            </div>
          </div>
        </div>
        <Page style="grid-column: 1/5" />
      </div>
      <!-- 스켈레톤 UI -->
      <div class="bestchoise__main" v-else>
        <div class="item"  v-for="data in datas" :key="data">
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
      width: 1320px;
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
              background: #fff;
              height: 306px;
              padding: 20px;
              border-radius: 20px;
              margin: 12px;
            }
            .__text {
              text-align: center;
              margin-right: 17px;
              background: #fff;
              padding: 10px;
              border-radius: 20px;
              margin: 12px;
            }
            &:hover {
              border: 5px solid #1de9b6;
              border-radius: 20px;
              cursor: pointer;
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
            height: 70px;
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
      }
    }
  }
</style>