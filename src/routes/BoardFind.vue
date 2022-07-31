<script>
import axios from 'axios'
export default {
  data() {
    return {
      id : this.$route.params.id,
      title : "",
      name : "",
      content : "",
      comments : [],
      comment_data : "",
      date : "",
      board_id : "",
      localName: localStorage.getItem("name"),
      comment_update_idx: 0,
      comment_update: false,
      comment_update_data: "",
      comment_parent_data_length : false,
      comment_parent_idx : 0,
      parent_comment : false ,
      comment_parent_data : "",
      comment_parent_update_idx : 0,
      comment_parent_update : false
    }
  },
  methods: {
    comment() {
      axios({
        method: 'POST',
        url : 'http://54.180.193.83:8081/boardcomment/',
        headers: {
          Authorization : `Bearer ${localStorage.getItem('access')}`
        },
        data : {
          comment : this.comment_data,
          username : localStorage.getItem('name'),
          board_id : this.board_id
        }
      }).then((res) => {
        console.log(res)
        this.$router.go()
      }).catch((error) => {
        console.log(error)
        alert("댓글을 입력해주세요")
      })
    },
    itemDelete(comment_id) {
      axios({
        method: 'DELETE',
        url : `http://54.180.193.83:8081/boardcomment/${comment_id}/`,
        headers: {
          Authorization : `Bearer ${localStorage.getItem('access')}`
        },
        data : {
          username : localStorage.getItem('name')
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
        url : `http://54.180.193.83:8081/board/${this.board_id}/`,
        headers: {
          Authorization : `Bearer ${localStorage.getItem('access')}`
        },
        data : {
          username : this.name
        }
      }).then((res) => {
        console.log(res)
        alert("삭제되었습니다")
        this.$router.push('/board')
      }).catch((error) => {
        console.log(error)
      })
    },
    itemUpadate(comment_id) {
      axios({
        method : 'PUT',
        url : `http://54.180.193.83:8081/boardcomment/${comment_id}/`,
        headers: {
          Authorization : `Bearer ${localStorage.getItem('access')}`
        },
        data : {
          comment : this.comment_update_data,
          username : localStorage.getItem('name')
        }
      }).then((res) => {
        console.log(res)
        alert("수정이 완료되었습니다")
        this.$router.go()
      }).catch((error) => {
        console.log(error)
      })
    },
    plus_Comment(id) {
      axios({
        method : 'POST',
        headers: {
          Authorization : `Bearer ${localStorage.getItem('access')}`
        },
        url : 'http://54.180.193.83:8081/boardcomment/',
        data : {
          comment : this.comment_parent_data,
          username : localStorage.getItem('name'),
          parent : id
        }
      }).then((res) => {
        console.log(res)
        this.$router.go()
      }).catch((error) => {
        console.log(error)
      })
    },
    itemUpdateBox(index) {
      this.comment_update_idx = index
      this.comment_update = true
      this.comment_update_data = ""
      this.comment_parent_update = false
    },
    itemDeleteBox() {
      this.comment_update = false
    },
    itemParent_UpdateBox(index) {
      this.comment_parent_update_idx = index
      this.comment_parent_update = true
      this.comment_update_data = ""
      this.comment_update = false
    },
    itemParent_DeleteBox() {
      this.comment_parent_update = false
    },
    comment_parent(index) {
      this.comment_parent_idx = index
      this.parent_comment = !this.parent_comment
      this.comment_parent_data = ""
      this.comment_parent_data_length = false
    },
    update() {
      this.$router.push({
        name : 'BoardWrite',
        params : {
          id : this.board_id,
          title : this.title,
          content : this.content,
        }
      })
    },
    backBtn() {
      this.$router.push('/board')
    }
  },
  updated() {
    if(this.comment_parent_data.length > 0) {
      this.comment_parent_data_length = true
    }
  },
  mounted() {
    axios({
      url : `http://54.180.193.83:8081/board/${this.id}/`,
      method : "GET"
    }).then((res) => {
      console.log(res)
      this.board_id = res.data.id
      this.title = res.data.title
      this.name = res.data.username
      this.content = res.data.content
      this.date = res.data.create_date
      this.comments = res.data.boardcomment
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>


<template>
  <div class="boardFind">
    <div class="boardFind__inner">
      <div class="boardFind__name">상세보기</div>
      <div class="boardFind__main">
        <div class="__dataBox">
          <div class="__title">{{ title }}</div>
          <div class="__infoBox">
            <div class="__name">{{ name }}</div>
            <div class="__date">{{ date.slice(0,-22) }}</div>
          </div>
        </div>
        <div class="__content">{{ content }}</div>
        <div class="__contentBtn">
          <div v-if="name == this.localName" @click="update()" class="__contentItem __contentUpdate">수정</div>
          <div v-if="name == this.localName" @click="deletes()" class="__contentItem __contentDelete">삭제</div>
          <div @click="backBtn()" class="__contentItem __contentBack">목록</div>
        </div>
        <!-- 댓글 -->
        <div class="comment">
          <div class="comment__title">전체댓글{{comments.length }}개</div>
          <div class="if" v-for="(comment,index) in comments" :key="comment">
            <!-- 댓글 수정 -->
            <div class="plus__commentInfo" v-if="comment_update_idx === index  && comment_update === true">
              <div class="__nickname">{{ comment.username }}</div>
              <input type="text" class="__comment __updateComment" v-model="comment_update_data" v-if="comment.username == this.localName" />
              <div class="__date">{{ comment.create_date.slice(0,-22) }}</div>
              <div class="__delete" @click="itemDeleteBox()" v-if="comment.username == this.localName">취소</div>
              <div class="__update" @click="itemUpadate(comment.id)" v-if="comment.username == this.localName">수정</div>
            </div>
            <!-- 댓글 기본 -->
            <div class="comment__info" v-else>
              <div class="__nickname">{{ comment.username }}</div>
              <div @click="comment_parent(index)" class="__comment">{{ comment.comment }}{{ comment.reply.length === 0 ? "" : `[댓글${comment.reply.length}개]`  }}</div>
              <div class="__date">{{ comment.create_date.slice(0,-22) }}</div>
              <div title="수정" class="__update" v-if="comment.username == this.localName" @click="itemUpdateBox(index)"><i class="fa-solid fa-pen-to-square"></i></div>
              <div title="삭제" class="__delete" v-if="comment.username == this.localName" @click="itemDelete(comment.id)"><i class="fa-solid fa-xmark"></i></div>
            </div>
            <!-- 대댓글표시 -->
            <div class="plusComment"  v-if="comment_parent_idx === index"  :class="{ parent_comment : parent_comment }">
              <div class="plusComment__info"  v-for="(plusComment,index) in comment.reply" :key="plusComment">
                <!-- 대댓글 수정 -->
                <div class="plusComment__update__info" v-if="comment_parent_update_idx === index  && comment_parent_update === true">
                  <div class="plusComment__arrow"><span class="material-symbols-outlined">turn_right</span></div>
                  <div class="__nickname">{{ plusComment.username }}</div>
                  <input type="text" class="__comment __updateComment" v-model="comment_update_data" v-if="plusComment.username == this.localName" />
                  <div class="__date">{{ plusComment.create_date.slice(0,-22) }}</div>
                  <div class="__update" @click="itemUpadate(plusComment.id)" v-if="plusComment.username == this.localName">수정</div>
                  <div class="__delete" @click="itemParent_DeleteBox()" v-if="plusComment.username == this.localName">취소</div>
                </div>
                <!-- 대댓글 기본 -->
                <div class="plusComment__default__info" v-else>
                  <div class="plusComment__arrow"><span class="material-symbols-outlined">turn_right</span></div>
                  <div class="__nickname">{{ plusComment.username }}</div>
                  <div class="__comment">{{ plusComment.comment }}</div>
                  <div class="__date">{{ plusComment.create_date.slice(0,-22) }}</div>
                  <div title="수정" class="__update" v-if="plusComment.username == this.localName" @click="itemParent_UpdateBox(index)"><i class="fa-solid fa-pen-to-square"></i></div>
                  <div title="삭제" class="__delete" v-if="plusComment.username == this.localName" @click="itemDelete(plusComment.id)"><i class="fa-solid fa-xmark"></i></div>
                </div>
              </div>
              <!-- 대댓글 작성 -->
              <div class="comment__update__box">
                <div class="comment__update__text">
                  <!-- :value에 원래 댓글 입력하니 오류가 걸려 일단 제거 -->
                  <textarea v-model="comment_parent_data" class="__text"></textarea>
                </div>
                <div class="comment__update__btn">
                  <button @click="plus_Comment(comment.id)" class="__btn" :class="{ comment_parent_data_length : comment_parent_data_length }">등록</button>
                </div>
              </div>
            </div>
          </div>
          <div class="comment__else__info" v-show="this.comments.length == 0">등록된 댓글이 없습니다</div>
          <!-- 페이지네이션 -->
          <div class="comment__page">
            <i class="fa-solid fa-1 first"></i>
            <i class="fa-solid fa-2"></i>
            <i class="fa-solid fa-3"></i>
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
  .boardFind {
    position: relative;
    top: 125px;
    .boardFind__inner {
      width: 1200px;
      margin: auto;
      position: relative;
      .boardFind__name {
        font-size: 25px;
        font-weight: bold;
        line-height: 3;
        color : #29367c;
        border-bottom: 2px solid #3b4890;
      }

      // 메인
      .boardFind__main {
        margin-top: 10px;
        font-size: 20px;
        .__dataBox {
          margin: 16px 0 29px;
          padding-bottom: 11px;
          border-bottom: 1px solid #333;
          .__infoBox {
            display: flex;
            font-size: 17px;
            color: #333;
            .__name {
              &::after {
                content: "";
                height: 15px;
                width: 1px;
                background: #ccc;
                margin-left: 10px;
                display: inline-block;
                margin-right: 10px;
              }
            }
          }
        }
        .__content {
          height: 100%;
          min-height: 500px;
          margin-top: 50px;
        }
        .__contentBtn {
          display: flex;
          justify-content: end;
          padding-bottom: 100px;
          padding-top: 5px;
          border-top: 2px solid #3b4890;
          text-align: center;
          .__contentItem {
            outline: none;
            width: 100px;
            background: #3b4890;
            border-color: #29367c;
            color: #fff;
            cursor: pointer;
            &:hover {
              opacity: .8;
            }
          }
          .__contentDelete {
            margin-left: 10px;
            margin-right: 10px;
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
            .comment__info {
              border-top: 1px solid #333;
              border-bottom: 1px solid #333;
              display: flex;
              padding: 10px 0;
              position: relative;
              padding: 10px 0 10px 0;
              .__comment {
                position: absolute;
                cursor: pointer;
                left: 400px;
              }
              .__updateComment {
                cursor: auto;
              }
              .__date {
                position: absolute;
                right: 150px;
                font-size: 15px;
                top: 13px;
              }
              .__update {
                cursor: pointer;
                position: absolute;
                right: 35px;
              }
              .__delete {
                cursor: pointer;
                position: absolute;
                right: 3px;
              }
            }
            .plus__commentInfo {
              display: block;
              border-top: 1px solid #333;
              border-bottom: 1px solid #333;
              display: flex;
              padding: 10px 0;
              position: relative;
              padding: 10px 0 10px 0;
              .__comment {
                position: absolute;
                cursor: pointer;
                left: 400px;
              }
              .__updateComment {
                cursor: auto;
              }
              .__date {
                position: absolute;
                right: 150px;
                font-size: 15px;
                top: 13px;
              }
              .__update {
                cursor: pointer;
                position: absolute;
                right: 45px;
                outline: none;
                background: #3b4890;
                border-color: #29367c;
                color: #fff;
                font-size: 15px;
                cursor: pointer;
                padding: 5px;
                top: 8px;
              }
              .__delete {
                cursor: pointer;
                position: absolute;
                right: 3px;
                outline: none;
                background: #3b4890;
                border-color: #29367c;
                color: #fff;
                font-size: 15px;
                cursor: pointer;
                padding: 5px;
                top: 8px;
              }
            }
            .plusComment {
              display: none;
            }
            .plusComment.parent_comment {
              display: block;
              .plusComment__info {
                width: 90%;
                border-bottom: 1px solid #333;
                display: flex;
                padding: 10px 0;
                position: relative;
                margin-left: 120px;
                padding: 10px 0 10px 0;
                .plusComment__update__info {
                  display : flex;
                  .plusComment__arrow {
                    span {
                      transform: rotate(270deg);
                    }
                  }
                  .__updateComment {
                    cursor: auto;
                  }
                  .__comment {
                    position: absolute;
                    left: 400px;
                  }
                  .__date {
                    position: absolute;
                    right: 150px;
                    font-size: 15px;
                    top: 13px;
                  }
                  .__update {
                    cursor: pointer;
                    position: absolute;
                    right: 45px;
                    outline: none;
                    background: #3b4890;
                    border-color: #29367c;
                    color: #fff;
                    font-size: 15px;
                    cursor: pointer;
                    padding: 5px;
                    top: 8px;
                  }
                  .__delete {
                    cursor: pointer;
                    position: absolute;
                    right: 3px;
                    outline: none;
                    background: #3b4890;
                    border-color: #29367c;
                    color: #fff;
                    font-size: 15px;
                    cursor: pointer;
                    padding: 5px;
                    top: 8px;
                  }
                }
                .plusComment__default__info {
                  display : flex;
                  .plusComment__arrow {
                    span {
                      transform: rotate(270deg);
                    }
                  }
                  .__updateComment {
                    cursor: auto;
                  }
                  .__comment {
                    position: absolute;
                    left: 400px;
                  }
                  .__date {
                    position: absolute;
                    right: 150px;
                    font-size: 15px;
                    top: 13px;
                  }
                  .__update {
                    cursor: pointer;
                    position: absolute;
                    right: 35px;
                  }
                  .__delete {
                    cursor: pointer;
                    position: absolute;
                    right: 3px;
                  }
                }
              }
              .comment__update__box {
                padding: 10px 0 10px 0;
                .comment__update__text {
                  .__text {
                    width: 90%;
                    height: 100px;
                    outline: none;
                    resize: none;
                    margin-left: 120px;
                    font-size: 18px;
                  }
                }
                .comment__update__btn {
                  text-align: end;
                  .__btn {
                    opacity : .5;
                    pointer-events: none;
                    outline: none;
                    width: 100px;
                    background: #3b4890;
                    border-color: #29367c;
                    color: #fff;
                    &:hover {
                      opacity: .8;
                    }
                  }
                  .__btn.comment_parent_data_length {
                    opacity : 1;
                    pointer-events: auto;
                    outline: none;
                    width: 100px;
                    background: #3b4890;
                    border-color: #29367c;
                    color: #fff;
                    &:hover {
                      opacity: .8;
                    }
                  }
                  .__close {
                    margin-right: 10px;
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
          .comment__else__info {
            border-bottom: 1px solid #333;
            padding-top: 10px;
            padding-bottom: 9px;
          }
          .comment__page {
            border-top: 2px solid #3b4890;
            margin: auto;
            padding: 10px 0 10px 0;
            text-align: center;
            i {
              margin-right: 10px;
              cursor: pointer;
            }
            .first {
              color : red;
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