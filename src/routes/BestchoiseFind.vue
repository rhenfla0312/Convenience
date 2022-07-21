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
      comment_datas : [],
      localName: localStorage.getItem("name"),
      checkboxDatas : [],
      update__box : false,
      comment_update_data: ""
    }
  },
  methods: {
    comment() {
      axios({
        method: 'POST',
        url : 'http://54.180.193.83:8081/comment/',
        headers: {
          Authorization : `Bearer ${localStorage.getItem('access')}`
        },
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
        alert("댓글을 입력해주세요")
      })
    },
    itemUpadate(comment_data) {
      axios({
        method : 'PUT',
        url : `http://54.180.193.83:8081/comment/${comment_data}/`,
        headers: {
          Authorization : `Bearer ${localStorage.getItem('access')}`
        },
        data : {
          comment : this.comment_update_data,
          nickname : localStorage.getItem('name')
        }
      }).then((res) => {
        console.log(res)
        alert("수정이 완료되었습니다")
        this.$router.go()
      }).catch((error) => {
        console.log(error)
      })
    },
    itemDelete(comment_data) {
      axios({
        method: 'DELETE',
        url : `http://54.180.193.83:8081/comment/${comment_data}/`,
        headers: {
          Authorization : `Bearer ${localStorage.getItem('access')}`
        },
        data : {
          nickname : localStorage.getItem('name')
        }
      }).then((res) => {
        console.log(res)
        alert("삭제되었습니다")
        this.$router.go('')
      }).catch((error) => {
        console.log(error)
      })
    },
    deletes() {
      axios({
        method: 'delete',
        url : `http://54.180.193.83:8081/posts/${this.menus.id}/`,
        headers: {
          Authorization : `Bearer ${localStorage.getItem('access')}`
        },
        data : {
          nickname : localStorage.getItem('name')
        }
      }).then((res) => {
        console.log(res)
        alert("삭제되었습니다")
        this.$router.push('/bestChoise')
      }).catch((error) => {
        console.log(error)
      })
    },
    update() {
      this.$router.push({
        name : 'myChoise',
        params : {
          id : this.menus.id,
          title : this.menus.title,
          content : this.menus.content,
        }
      })
    },
    itemUpdate__box(index) {
      // this.update__box[index] = !this.update__box[index]
      this.update__box = !this.update__box
    }
  },
  mounted() {
    axios.get(`http://54.180.193.83:8081/posts/${this.id}/`)
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
            <input type="hidden" :value="data.id" v-model="checkboxDatas">
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
        <div class="btns" v-if="this.menus.nickname == this.localName">
          <button @click="update()" class="update__btn">수정</button>
          <button class="delete__btn" @click="deletes()">삭제</button>
        </div>
        <!-- 댓글 -->
        <div class="comment">
          <div class="comment__title">전체댓글 {{ comment_datas.length }}개</div>
          <div class="if" v-for="(comment_data,index) in comment_datas" :key="comment_data">
            <div class="comment__info">
              <div class="__nickname">{{ comment_data.nickname }}</div>
              <div @click="itemUpdate__box(index)" class="__comment">{{ comment_data.comment }}</div>
              <div class="__delete" v-if="comment_data.nickname == this.localName" @click="itemDelete(comment_data.id)"><i class="fa-solid fa-xmark"></i></div>
            </div>
            <!-- 댓글수정창 -->
            <div class="comment__update__box" :class="{ update__box : update__box }">
              <div class="comment__update__text">
                <!-- :value에 원래 댓글 입력하니 오류가 걸려 일단 제거 -->
                <textarea v-model="comment_update_data" class="__text"></textarea>
              </div>
              <div @click="itemUpadate(comment_data.id)" class="comment__update__btn">
                <button class="__btn">수정</button>
              </div>
            </div>
          </div>
          <!-- 페이지네이션 -->
          <div class="comment__page">
            <i class="fa-solid fa-1"></i>
            <i class="fa-solid fa-2"></i>
            <i class="fa-solid fa-3"></i>
            <i class="fa-solid fa-4"></i>
            <i class="fa-solid fa-5"></i>
            <i class="fa-solid fa-6"></i>
            <i class="fa-solid fa-7"></i>
            <i class="fa-solid fa-8"></i>
            <i class="fa-solid fa-9"></i>
          </div>
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
          min-height: 400px;
          font-size: 18px;
          .comment__title {
            border-bottom: 2px solid #3b4890;
            text-align: start;
          }
          .if {
            text-align: start;
            border-bottom: 1px solid #333;
            &:last-child {
              border-bottom: none
            }
            .comment__info {
              display: flex;
              padding: 10px 0;
              position: relative;
              padding: 10px 0 10px 0;
              .__comment {
                position: absolute;
                cursor: pointer;
                left: 400px;
                cursor: pointer;
              }
              .__delete {
                cursor: pointer;
                cursor: pointer;
                position: absolute;
                right: 3px;
              }
            }
            .comment__update__box {
              display: none;
            }
            .comment__update__box.update__box {
              display: block;
              border-top: 2px solid #3b4890;
              padding: 10px 0 10px 0;
              .comment__update__text {
                .__text {
                  width: 90%;
                  height: 100px;
                  outline: none;
                  resize: none;
                  margin-left: 55px;
                  font-size: 18px;
                }
              }
              .comment__update__btn {
                text-align: end;
                margin-right: 66px;
                .__btn {
                  outline: none;
                  width: 100px;
                  background: #3b4890;
                  border-color: #29367c;
                  color: #fff;
                  &:hover {
                    opacity: .8;
                  }
                }
              }
            }
          }
          .comment__page {
            margin: auto;
            padding: 10px 0 10px 0;
            i {
              margin-right: 10px;
              cursor: pointer;
            }
          }
          .comment__box {
            border-top: 2px solid #3b4890;
            padding: 10px 0 10px 0;
            .comment__text {
              .__text {
                width: 100%;
                height: 100px;
                outline: none;
                resize: none;
                font-size: 18px;
              }
            }
            .comment__btn {
              text-align: end;
              .__btn {
                outline: none;
                width: 100px;
                background: #3b4890;
                border-color: #29367c;
                color: #fff;
                &:hover {
                  opacity: .8;
                }
              }
            }
          }
        }
      }
    }
  }
</style>