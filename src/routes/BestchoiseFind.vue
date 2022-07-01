<script>
import axios from 'axios'
export default {
  data() {
    return {
      Loading : false,
      id : this.$route.params.id,
      datas : "",
      menus : "",
      comment_data : "",
      comment_datas : []
    }
  },
  methods: {
    comment() {
      axios({
        method: 'POST',
        url : 'http://54.180.193.83:8081/comment/',
        data : {
          comment : this.comment_data,
          nickname : localStorage.getItem('name'),
          post_id : this.menus.id
        }
      }).then((res) => {
        console.log(res)
        this.$router.go()
      }).catch((error) => {
        console.log(error)
      })
    },
    itemUpadate() {
      axios({
        method : 'put',
        url : `http://54.180.193.83:8081/comment/${this.menus.id}/`,
        data : {
            comment : this.comment
        }
      }).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })
    },
    itemDelete() {
      axios({
        method: 'delete',
        url : `http://54.180.193.83:8081/comment/${this.menus.id}`,
      }).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })
    },
    deletes() {
      axios({
        method: 'delete',
        url : `http://54.180.193.83:8081/posts/${this.menus.id}`,
        data : {
          nickname : this.menus.nickname
        }
      }).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })
    },
    update() {
      axios({
        method: 'PUT',
        url : `http://54.180.193.83:8081/posts/${this.menus.id}`,
        data : {
          title : this.menus.title,
          content : this.menus.content,
          item : this.datas.image,
          nickname : localStorage.getItem('name')
        }
      }).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mounted() {
    axios.get(`http://54.180.193.83:8081/posts/${this.id}`)
    .then((res) => {
      console.log(res)
      // data만으로 그안의 a객체들을 반복문으로 나오게할라했는데 a에 대한거만 해야하므로 따로 만든다
      this.menus = res.data
      this.datas = res.data.a
      // 댓글
      this.comment_datas = res.data.post
      this.Loading = true
    }).catch((error) => {
      console.log(error)
      this.Loading = true
    })
  }
}
</script>


<template>
  <div class="bestchoiseFind">
    <div class="bestchoiseFind__inner">
      <div class="bestchoiseFind__name">상세보기</div>
      <div class="bestchoiseFind__main">
        <div class="__title">제목 : {{ menus.title }}</div>
        <div class="__name">닉네임 : {{ menus.nickname }}</div>
        <!-- <div class="__date">생성시간 : {{ menus.create_date.slice(0,-22) }}</div> -->
        <div class="__date">생성시간 : {{ menus.create_date }}</div>
        <div class="__content">설명 : {{ menus.content }}</div>
        <div class="__itemTitle">조합아이템</div>
        <div class="__items" v-if="Loading">
          <div class="__mixItem" v-for="data in datas" :key="data">
            <img class="__img" :src="`/DRF/media/${data.image}`" />
            <div class="__text">
              <div>{{ data.name }}</div>
              <div>{{ data.price }}원</div>
            </div>
            <i class="fa-solid fa-plus __plus"></i>
          </div>
        </div>
        <div class="skeletons__items" v-else>
          <div class="__mixItem" v-for="data in datas" :key="data"></div>
        </div>
        <!-- 수정, 삭제 -->
        <div class="btns">
          <button class="update__btn" @click="update()">수정</button>
          <button class="delete__btn" @click="delets()">삭제</button>
        </div> 
        <div class="comment">
          <div class="if" v-for="comment_data in comment_datas" :key="comment_data">
            <div class="__nickname">{{ comment_data.nickname }}</div>
            <div class="__comment">{{ comment_data.comment }}</div>
          </div>
          <!-- <div class="if" v-else>등록된 댓글이 없습니다</div> -->
          <div class="comment__box">
            <div class="comment__text">
              <textarea v-model="comment_data" class="__text"></textarea>
            </div>
            <div @click="comment" class="comment__btn">
              <button class="__btn">등록</button>
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
  .bestchoiseFind {
    position: relative;
    top: 125px;
    // height: 750px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .bestchoiseFind__inner {
      width: 1200px;
      margin: auto;
      position: relative;
      .bestchoiseFind__name {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        line-height: 3;
      }

      // 메인
      .bestchoiseFind__main {
        margin-top: 30px;
        text-align: center;
        font-size: 25px;
        .__name {
          margin-top: 30px;
        }
        .__content {
          margin-top: 30px;
        }
        .__itemTitle {
          margin-top: 30px;
        }
        .__date {
          margin-top: 30px;
        }
        .__items {
          padding: 50px;
          margin-top: 30px;
          margin-bottom: 30px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          .__mixItem {
            position: relative;
            margin: 15px;
            width: 200px;
            background: #fff;
            border-radius: 20px;
            margin: auto;
            .__img {
              width: 200px;
              border-radius: 20px;
            }
            .__text {
              font-size: 15px;
              padding: 5px;
            }
            .__plus {
              position: absolute;
              right: -50px;
              bottom: 50%;
            }
          }
        }
        .skeletons__items {
          padding: 50px;
          margin-top: 30px;
          margin-bottom: 30px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          .__mixItem {
            position: relative;
            margin: 15px;
            width: 200px;
            background: #e0e0e0;
            border-radius: 20px;
            margin: auto;
            animation: __mixItem 1.8s infinite ease-in-out;
            @keyframes __mixItem {
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
            .__img {
              width: 200px;
              border-radius: 20px;
            }
            .__text {
              font-size: 15px;
              padding: 5px;
            }
            .__plus {
              position: absolute;
              right: -50px;
              bottom: 50%;
            }
          }
        }
        .btns {
          display: flex;
          justify-content: center;
          padding-bottom: 50px;
          .update__btn,
          .delete__btn {
            width: 300px;
            border-radius: 10px;
            height: 35px;
            background: #fff;
            color: #000;
            border: 1px solid #000;
            cursor: pointer;
            margin-right: 15px;
            margin-left: 15px;
            &:hover {
              background: #1de9b6;
              color: #fff;
              border: 1px solid #1de9b6;
            }
          }
        }
        .comment {
          margin: 200px auto auto;
          width: 630px;
          min-height: 400px;
          border: 1px solid black;
          position: relative;
          border-radius: 10px;
          .if {
            margin: 50px;
            background: #fff;
            height: 30px;
            border-radius: 10px;
            font-size: 20px;
            text-align: start;
            padding-left: 10px;
          }
          .comment__box {
            position: absolute;
            bottom: 0;
            width: 100%;
            padding: 50px;
            .comment__text {
              .__text {
                width: 100%;
                height: 100px;
                border-radius: 10px;
                outline: none;
                resize: none;
              }
            }
            .comment__btn {
              position: absolute;
              right: 50px;
              .__btn {
                outline: none;
                width: 150px;
                border-radius: 10px;
                height: 30px;
                font-size: 20px;
                background: #fff;
                color: #000;
                &:hover {
                  background: #1de9b6;
                  color: #fff;
                  border: 1px solid #1de9b6;
                }
              }
            }
          }
        }
      }
    }
  }
</style>