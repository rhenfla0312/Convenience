<script>
import axios from 'axios'
export default {
  data() {
    return {
      cuData: true,
      gsData: false,
      ministopData: false,
      datas: [],
      title: "",
      content: "",
      checkboxDatas : [],
      // maxChecked : 5,
      // totalChecked : 0,
      userName: '',
      
      // errorData
      errorTitle: "제목을 입력해주세요.",
      errorItem: "조합아이템을 선택해주세요.",
      errorContent: "내용을 입력해주세요.",
      errorTilteCount: false,
      errorItemCount: false,
      errorContentCount: false,
    
    }
  },
  methods: {
    cuClick() {
      this.cuData = true
      this.gsData = false
      this.ministopData = false
        axios.get("http://54.180.193.83:8081/objects/",{
          params: {
            data: "CU"
          }
        }).then((res) => {
          console.log(res)
          this.datas = res.data
        }).catch((error) => {
          console.log(error)
        })
    },
    gsClick() {
      this.cuData = false
      this.gsData = true
      this.ministopData = false
        axios.get("http://54.180.193.83:8081/objects/",{
          params: {
            data: "GS25"
          }
        }).then((res) => {
          console.log(res)
          this.datas = res.data
        }).catch((error) => {
          console.log(error)
        })
    },
    ministopClick() {
      this.cuData = false
      this.gsData = false
      this.ministopData = true
        axios.get("http://54.180.193.83:8081/objects/",{
          params: {
            data: "MINISTOP"
          }
        }).then((res) => {
          console.log(res)
          this.datas = res.data
        }).catch((error) => {
          console.log(error)
        })
    },
    checkboxDataClick() {
      axios({
        method: "POST",
        url: "http://54.180.193.83:8081/posts/",
        data: {
          title : this.title,
          nickname : this.userName,
          content : this.content,
          item : this.checkboxDatas
        }
      }).then((res) => {
        console.log(res)
        alert("조합에 성공하셨습니다")
        this.$router.push('bestChoise')
      }).catch((error) => {
        console.log(error)
        if(error.response.data == 1) {
          this.errorTilteCount = true
          this.errorItemCount = false
          this.errorContentCount = false
        } else if(error.response.data== 2) {
          this.errorTilteCount = false
          this.errorItemCount = true
          this.errorContentCount = false
        } else {
          this.errorTilteCount = false
          this.errorItemCount = false
          this.errorContentCount = true
        }
      })
    },
    // countChecked(data) {
      // console.log(data)
      // if (data.checked) {
      //   this.totalChecked += 1;
      // } else {
      //   this.totalChecked -= 1;
      // }

      // if (this.totalChecked > this.maxChecked) {
      //   alert ("최대 5개 까지만 가능합니다.");
      //   data.checked = false;
      //   this.totalChecked -= 1;
      // }
    // }
  },
  mounted() {
    axios.get("http://54.180.193.83:8081/objects/",{
      params: {
        data: "CU"
      }
    }).then((res) => {
      console.log(res)
      this.datas = res.data
    }).catch((error) => {
      console.log(error)
    })
    this.userName = localStorage.getItem('name')
  }
}
</script>


<template>
  <div class="mychoise">
    <div class="mychoise__inner">
    <div class="mychoise__name">나만의 조합</div>
      <div class="mychoise__menu">
        <!-- title -->
        <div class="mycohise_title">
          <div class="__title">제목</div>
          <div class="title__input">
            <input type="text" v-model="title" />
          </div>
          <div v-if="errorTilteCount" class="errorTitle">{{ errorTitle }}</div>
        </div>
        <!-- alias -->
        <div class="mychoise__alias">
          <div class="__alias">닉네임</div>
          <div class="alias__input">
            <input type="text" :value="this.userName" readonly />
          </div>
        </div>
        <!-- 조합아이템 -->
        <div class="mychoise__itemBox">
          <div class="__itemName">조합아이템</div>
          <div class="__itemMenu">
            <div @click="cuClick" :class="{ cuData : cuData }" class="cu menu">CU</div>
            <div @click="gsClick" :class="{ gsData : gsData }" class="gs menu">GS25</div>
            <div @click="ministopClick" :class="{ ministopData : ministopData }" class="ministop menu">MINISTOP</div>
          </div>
          <div class="__items">
            <label class="__item" :for="index" v-for="(data, index) in datas" :key="data">
              <input :id="index" type="checkbox" class="__checkbox" :value="data.id" v-model="checkboxDatas">
              <img class="__img" :src="`/DRF${data.image}`">
              <div class="__name">{{ data.name }}</div>
              <div class="__price">{{ data.price }}원</div>
            </label>
          </div>
          <div v-if="errorItemCount" class="errorItem">{{ errorItem }}</div>
        </div>
        <!-- 설명 -->
        <div class="description">
          <div class="__description">설명</div>
          <div class="description__input">
            <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
          </div>
          <div v-if="errorContentCount" class="errorContent">{{ errorContent }}</div>
        </div>
        <!-- button -->
        <div class="mychoise__btn">
          <button @click="checkboxDataClick" class="__btn">조합하기</button>
        </div>
        <!-- description -->
        <!-- <div class="mychoise__description">
          <div class="__title">나만의조합은?</div>
          <div class="__description">
            지금까지 편의점에서 먹어봤던 본인만의 최고의 조합을 사람들한테 알려주기 위해 만들어진 페이지입니다.<br>
            본인이 알고있는 조합 및 새로운조합을 만들어 다른 유저들과 공유해주세요.
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: #333;
  }
  .mychoise {
    position: relative;
    top: 125px;
    // height: 700px;
    padding: 0 0 80px 0;
    // min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .mychoise__inner {
      width: 1200px;
      margin: auto;
      position: relative;
      .mychoise__name {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        line-height: 3;
      }
      .mychoise__menu {
        position: relative;
        height: 2100px;
        border: 1px solid #333;
        border-radius: 20px;
        .mycohise_title {
          margin-top: 30px;
          text-align: center;
          .__title {
            font-size: 25px;
            font-weight: bold;
          }
          .title__input {
            margin-top: 10px;
            input {
              text-align: center;
              width: 500px;
              border-radius: 10px;
              border: 1px solid #333;
              outline: none;
              padding: 5px;
              &:focus {
                border: 2px solid #333;
              }
            }
          }
          .errorTitle {
            color: red;
            margin-top: 5px;
            font-weight: 500;
          }
        }
        .mychoise__alias {
          margin-top: 30px;
          text-align: center;
          .__alias {
            font-size: 25px;
            font-weight: bold;
          }
          .alias__input {
            margin-top: 10px;
            input {
              text-align: center;
              width: 500px;
              border-radius: 10px;
              border: 1px solid #333;
              outline: none;
              padding: 5px;
              &:focus {
                border: 2px solid #333;
              }
            }
          }
        }
        .mychoise__itemBox {
          text-align: center;
          margin-top: 30px;
          .__itemName {
            font-size: 25px;
            font-weight: bold;
          }
          .__itemMenu {
            margin-top: 30px;
            font-size: 20px;
            display: flex;
            justify-content: center;
            .menu {
              cursor: pointer;
              margin-left: 60px;
              margin-right: 10px;
              &:hover {
                font-weight: bold;
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
          .__items {
            width: 1000px;
            margin-top: 20px;
            margin: auto;
            display: grid;
            grid-template-columns: repeat(5,1fr);
            .__item {
              position: relative;
              height: 250px;
              width: 160px;
              background: #fff;
              border-radius: 20px;
              margin: 10px;
              &:hover {
                border: 2px solid #1de9b6;
              }
              .__img {
                width: 150px;
              }
              .__checkbox {
                width: 100px;
                height: 15px;
                margin-top: 5px;
              }
            }
          }
          .errorItem {
            color: red;
            margin-top: 5px;
            font-weight: 500;
          }
        }
        .description {
          margin-top: 30px;
          text-align: center;
          .__description {
            font-size: 25px;
            font-weight: bold;
          }
          .description__input {
            margin-top: 10px;
            textarea {
              width: 500px;
              border-radius: 10px;
              border: 1px solid #333;
              outline: none;
              padding: 5px;
              resize: none;
              &:focus {
                border: 2px solid #333;
              }
            }
          }
          .errorContent {
            color: red;
            margin-top: 5px;
            font-weight: 500;
          }
        }
        .mychoise__btn {
          text-align: center;
          margin-top: 80px;
          margin-bottom: 50px;
          .__btn {
            width: 400px;
            height: 50px;
            border-radius: 10px;
            background: #fff;
            font-weight: bold;
            transition: .3s;
            &:hover {
              background: #1de9b6;
              color: #fff;
              transition: .3s;
              border: 1px solid #1de9b6;
            }
          }
        }
        .mychoise__description {
          // position: absolute;
          width: 100%;
          text-align: center;
          background: #bdbdbd;
          border-radius: 0 0 19px 19px;
          .__title {
            font-size: 20px;
            padding: 15px;
            margin-bottom: 10px;
          }
          .__description {
            padding: 15px;
          }
        }
      }
    }
  }
</style>