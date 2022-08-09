<script>
import axios from 'axios'
export default {
  data() {
    const update_id = this.$route.params.id
    const update_title = this.$route.params.title
    const update_item = this.$route.params.item 
    const update_content = this.$route.params.content
    const update_image = this.$route.params.image
    return {
      // update
      update_id : update_id,
      update_title : update_title,
      update_item : update_item,
      update_content : update_content,

      cuData: true,
      gsData: false,
      ministopData: false,
      datas: [],
      title: update_title !== undefined ? update_title : "",
      checkboxDatas : update_item !== undefined ? update_item : [],
      content: update_content !== undefined ? update_content : "",
      userName: "",
      imgFile : "",

      // errorData
      errorTitle: "제목을 입력해주세요.",
      errorItem: "조합아이템을 선택해주세요.",
      errorContent: "내용을 입력해주세요.",
      errorTilteCount: false,
      errorItemCount: false,
      errorContentCount: false,
      Loading: false
    }
  },
  methods: {
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
    checkboxDataClick() {
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('content', this.content);
      formData.append('item', this.checkboxDatas);
      formData.append('nickname', localStorage.getItem('name'));
      formData.append('image', this.imgFile);
      axios({
        method: "POST",
        url: "http://54.180.193.83:8081/posts/",
        headers: {
          Authorization : `Bearer ${localStorage.getItem('access')}`
        },
        data : formData
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
          const titleScorll = this.$refs.title.offsetTop
          window.scrollTo({top:titleScorll, behavior:'smooth'});
        } else if(error.response.data == 2) {
          this.errorTilteCount = false
          this.errorItemCount = true
          this.errorContentCount = false
          const itemScroll = this.$refs.item.offsetTop
          window.scrollTo({top:itemScroll, behavior:'smooth'});
        } else if(error.response.data == 3) {
          this.errorTilteCount = false
          this.errorItemCount = false
          this.errorContentCount = true
          const descriptionScorll = this.$refs.description.offsetTop
          console.log(descriptionScorll)
          window.scrollTo({top:descriptionScorll, behavior:'smooth'});
        }
      })
    },
    update() {
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('content', this.content);
      formData.append('item', this.checkboxDatas);
      formData.append('nickname', localStorage.getItem('name'));
      if(this.imgFile !== null) {
        formData.append('image', this.imgFile);
      }
      axios({
        url : `http://54.180.193.83:8081/posts/${this.update_id}/`,
        method: 'PATCH',
        headers: {
          Authorization : `Bearer ${localStorage.getItem('access')}`
        },
        data : formData
      }).then((res) => {
        console.log(res)
        this.$router.push('/bestChoise')
      }).catch((error) => {
        console.log(error)
      })
    },
    imgFileChange(e) {
      console.log(e)
      this.imgFile = e.target.files[0]
    },
    loginCheck() {
      if(!localStorage.getItem('name')) {
        alert("로그인 후 사용할 수 있는 서비스 입니다.")
        this.$router.push('/login')
      } 
    },
  },
  mounted() {
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
    this.userName = localStorage.getItem('name')
  }
}
</script>


<template>
  <div class="mychoise">
    <div class="mychoise__inner">
    <div class="mychoise__name"></div>
      <div class="mychoise__menu">
        <div class="inner">
          <div class="mycohise_title">
            <div class="__title" ref="title">제목</div>
            <div class="title__input">
              <input type="text" v-model="title" />
            </div>
            <div v-if="errorTilteCount" class="errorTitle">{{ errorTitle }}</div>
          </div>
          <div class="mychoise__alias">
            <div class="__alias" ref="alias">닉네임</div>
            <div class="alias__input">
              <input type="text" :value="this.userName" readonly />
            </div>
          </div>
          <div class="imgFile">
            <div class="__file">대표이미지</div>
            <input type="file" class="file" @change="imgFileChange" />
          </div>
          <!-- 조합아이템 -->
          <div class="mychoise__itemBox">
            <div class="__itemName" ref="item">조합아이템</div>
            <div v-if="errorItemCount" class="errorItem">{{ errorItem }}</div>
            <div class="__itemMenu">
              <div @click="cuClick" :class="{ cuData : cuData }" class="cu menu">CU</div>
              <div @click="gsClick" :class="{ gsData : gsData }" class="gs menu">GS25</div>
              <div @click="ministopClick" :class="{ ministopData : ministopData }" class="ministop menu">MINISTOP</div>
            </div>
            <div class="__items" v-if="Loading">
              <label class="__item" :for="index" v-for="(data, index) in datas" :key="data">
                <input :id="index" type="checkbox" class="__checkbox" :value="data.id" v-model="checkboxDatas">
                <img class="__img" :src="`/DRF${data.image}`">
                <div class="__name">{{ data.name }}</div>
                <div class="__price">{{ data.price }}원</div>
              </label>
            </div>
            <!-- 스켈레톤 -->
            <div class="skeletons__item" v-else>
              <div class="__item" :for="index" v-for="(data, index) in datas" :key="data"></div>
            </div>
          </div>
          <!-- 설명 -->
          <div class="description">
            <div class="__description" ref="description">설명</div>
            <div class="description__input">
              <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
            </div>
            <div v-if="errorContentCount" class="errorContent">{{ errorContent }}</div>
          </div>
          <!-- button -->
          <div class="mychoise__btn">
            <button ref="click" @click="loginCheck(), update_title !== undefined ? update() : checkboxDataClick()" class="__btn">{{ update_title !== undefined ? '수정' : '조합' }}</button>
          </div>
          <!-- description -->
          <div class="mychoise__description">
            <div class="__title">나만의조합은?</div>
            <div class="__description">
              지금까지 편의점에서 먹어봤던 본인만의 최고의 조합을 사람들한테 알려주기 위해 만들어진 페이지입니다.<br>
              본인이 알고있는 조합 및 새로운조합을 만들어 다른 유저들과 공유해주세요.
            </div>
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
  .mychoise {
    position: relative;
    top: 125px;
    // height: 700px;
    padding: 0 0 80px 0;
    .mychoise__inner {
      width: 1200px;
      margin: auto;
      position: relative;
      .mychoise__name {
        padding-top: 50px;
      }
      .mychoise__menu {
        width: 100%;
        padding: 0 0 60px 0;
        position: relative;
        box-shadow: 0 7px 25px #00000014;
        border-radius: 10px;
        .inner {
          width: 1000px;
          margin: auto;
          text-align: start;
          .mycohise_title {
            margin-top: 30px;
            display: flex;
            padding-top: 30px;
            .__title {
              font-size: 20px;
              font-weight: bold;
              padding-top: 10px;
            }
            .title__input {
              margin-left: 70px;
              input {
                width: 500px;
                border: none;
                border-bottom: 1px solid #333;
                outline: none;
                padding: 5px;
                font-size: 20px;
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
            display: flex;
            .__alias {
              font-size: 20px;
              font-weight: bold;
              margin-top: 6px;
            }
            .alias__input {
              margin-left: 48px;
              input {
                width: 500px;
                border: none;
                border-bottom: 1px solid #333;
                outline: none;
                padding: 5px;
                font-size: 20px;
              }
            }
          }
          .mychoise__itemBox {
            margin-top: 30px;
            .__itemName {
              font-size: 20px;
              font-weight: bold;
            }
            .__itemMenu {
              margin-top: 30px;
              font-size: 20px;
              display: flex;
              .menu {
                cursor: pointer;
                margin-right: 20px;
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
              text-align: center;
              margin-left: -20px;
              .__item {
                position: relative;
                height: 250px;
                width: 160px;
                background: #fff;
                border-radius: 10px;
                margin: 10px;
                box-shadow: 0 7px 25px #00000014;
                transition: .2s;
                cursor: pointer;
                &:hover {
                  border: 2px solid transparent;
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
            .skeletons__item {
              .__item {
                width: 160px;
                height: 250px;
                border-radius: 10px;
                background: #e0e0e0;
                margin: 10px;
                animation: __item 1.8s infinite ease-in-out;
                @keyframes __item {
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
            .errorItem {
              color: red;
              margin-top: 5px;
              font-weight: 500;
            }
          }
          .description {
            margin-top: 30px;
            .__description {
              font-size: 20px;
              font-weight: bold;
            }
            .description__input {
              margin-top: 10px;
              textarea {
                width: 700px;
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
          .imgFile {
            margin-top: 30px;
            display: flex;
            .__file {
              font-size: 20px;
              font-weight: bold;
              margin-top: 3px;
            }
            .file {
              margin-left: 50px;
              margin-top: 4px;
            }
          }
          .mychoise__btn {
            margin-top: 80px;
            margin-bottom: 50px;
            .__btn {
              border-radius: 10px;
              background: #3b4890;
              border-color: #29367c;
              color: #fff;
              width: 500px;
              font-size: 20px;
              height: 50px;
              padding: 10px;
              &:hover {
                opacity: .8;
              }
            }
          }
          .mychoise__description {
            display: none;
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
  }
</style>