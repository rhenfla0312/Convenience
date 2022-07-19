<script>
import axios from 'axios'
export default {

}
</script>


<template>
  <div class="bestchoiseFind">
    <div class="bestchoiseFind__inner">
      <div class="bestchoiseFind__name">상세보기</div>
      <div class="bestchoiseFind__main">


        <!-- 댓글 -->
        <div class="comment">
          <div class="comment__title">전체댓글000개</div>
          <div class="if">
            <div class="comment__info">
              <div class="__nickname"></div>
              <div @click="itemUpdate__box(index)" class="__comment"></div>
              <!-- <div class="__delete" v-if="comment_data.nickname == this.localName" @click="itemDelete(comment_data.id)"><i class="fa-solid fa-xmark"></i></div> -->
            </div>
            <!-- 댓글수정창 -->
            <!-- <div class="comment__update__box"> -->
              <!-- <div class="comment__update__text"> -->
                <!-- :value에 원래 댓글 입력하니 오류가 걸려 일단 제거 -->
                <!-- <textarea class="__text"></textarea> -->
              <!-- </div> -->
              <!-- <div class="comment__update__btn"> -->
                <!-- <button class="__btn">수정</button> -->
              <!-- </div> -->
            <!-- </div> -->
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
              <textarea class="__text"></textarea>
            </div>
            <div class="comment__btn">
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