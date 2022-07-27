<script>
import axios from "axios";

export default {
  data() {
    return {
      myInfoPw : "",

      serverItem : false,
      serverBoardItem : false,
    };
  },
  methods: {
    myInfoCheckBtn() {
      axios({
        method: "POST",
        url: "http://54.180.193.83:8081/checkpassword/",
        data: {
          id : localStorage.getItem('id'),
          password : this.myInfoPw
        }
      }).then((res) => {
        console.log(res)
        this.$router.push('/login/loginInfo/LoginInfoChange')
      }).catch((error) => {
        console.log(error)
        alert("비밀번호가 일치하지 않습니다")
      })
    },
  },
};
</script>

<template>
  <div class="loginInfo">
    <div class="loginInfo__inner">
      <div class="loginInfo__name">내정보</div>
      <div class="loginInfo__menu">
        <div class="__leftBtn">
          <!-- 1 -->
          <RouterLink to="/login/loginInfo" class="__btn __myInfo">
            <div class="__text">내정보 수정</div>
            <div class="__arrow">
              <span class="material-symbols-outlined arrow">expand_more</span>
            </div>
          </RouterLink>
          <!-- 2 -->
          <RouterLink to="/login/loginInfo/loginMyMixData" class="__btn __myMixData" @mouseover="serverItem = true" @mouseleave="serverItem = false">
            <div class="__text">나의 조합</div>
            <div class="__arrow">
              <span class="material-symbols-outlined arrow">expand_more</span>
            </div>
          </RouterLink>
          <!-- 2 - serve -->
          <div class="__serveMyMixData" v-show="serverItem" @mouseover="serverItem = true" @mouseleave="serverItem = false">
            <RouterLink to="/login/loginInfo/loginMyMixData" class="__btn __myMixData">
              <div class="__text">나의 조합</div>
              <div class="__arrow">
                <span class="material-symbols-outlined arrow">expand_more</span>
              </div>
            </RouterLink>
            <RouterLink to="/login/loginInfo/loginMyMixDataComment" class="__btn __myMixData" @mouseover="serverItem = true" @mouseleave="serverItem = false">
              <div class="__text">나의 조합댓글</div>
              <div class="__arrow">
                <span class="material-symbols-outlined arrow">expand_more</span>
              </div>
            </RouterLink>
          </div>
          <!-- 3 -->
          <RouterLink to="/login/loginInfo/loginMyBestMixData" class="__btn __myBestMixData">
            <div class="__text">나의 추천조합</div>
            <div class="__arrow">
              <span class="material-symbols-outlined arrow">expand_more</span>
            </div>
          </RouterLink>
          <!-- 4 -->
          <RouterLink to="/login/loginInfo/loginMyBoard" class="__btn __myBoard" @mouseover="serverBoardItem = true" @mouseleave="serverBoardItem = false">
            <div class="__text">나의 자유게시글</div>
            <div class="__arrow">
              <span class="material-symbols-outlined arrow">expand_more</span>
            </div>
          </RouterLink>
          <!-- 4 - serve -->
          <div class="__serveMyMixData" v-show="serverBoardItem" @mouseover="serverBoardItem = true" @mouseleave="serverBoardItem = false">
            <RouterLink to="/login/loginInfo/loginMyBoard" class="__btn __myMixData">
              <div class="__text">나의 자유게시글</div>
              <div class="__arrow">
                <span class="material-symbols-outlined arrow">expand_more</span>
              </div>
            </RouterLink>
            <RouterLink to="/login/loginInfo/loginMyBoardComment" class="__btn __myMixData" @mouseover="serverBoardItem = true" @mouseleave="serverBoardItem = false">
              <div class="__text">나의 자유게시글댓글</div>
              <div class="__arrow">
                <span class="material-symbols-outlined arrow">expand_more</span>
              </div>
            </RouterLink>
          </div>
        </div>

        <div class="__rightInfo">
          <!-- 1 -->
          <div class="__data __myInfo">
            <div class="__title">내정보 수정</div>
            <div class="__text">
              <div class="__pwName">현재 비밀번호 :</div>
              <div class="__pwInput">
                <input type="password" v-model="myInfoPw" @keydown.enter.prevent="myInfoCheckBtn()" />
              </div>
              <div class="__btn" @click="myInfoCheckBtn()">
                <button>확인</button>
              </div>
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
.loginInfo {
    position: relative;
    top: 125px;
    padding: 0 0 80px;
    min-height: 550px;
    height: 100%;
  .loginInfo__inner {
    width: 1200px;
    margin: auto;
    position: relative;
    .loginInfo__name {
      font-size: 25px;
      font-family: NotoKrB;
      color: #142e4e;
      width: 230px;
      padding-bottom: 20px;
      padding-top: 40px;
      border-bottom: 3px solid #142e4e;
    }
    .loginInfo__menu {
      .__leftBtn {
        float: left;
        width: 230px;
        .__btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 16px;
          border-bottom: 1px solid #dddddd;
          padding-bottom: 10px;
          color: #142e4e;
          font-family: "NotoKrM";
          padding-top: 10px;
          padding-bottom: 10px;
          cursor: pointer;
          .__arrow {
            display: flex;
            .arrow {
              transform: rotate(270deg);
            }
          }
        }
        .__serveMyMixData {
          width: 200px;
          margin-left: 17px;
        }
      }
      .__rightInfo {
        margin-left: 350px;
        .__myInfo {
          .__title {
            color: #142e4e;
            border-bottom: 3px solid #142e4e;
            padding-bottom: 10px;
            font-size: 25px;
          }
          .__text {
            margin-top: 50px;
            display: flex;
            align-items: center;
            .__pwInput {
              margin-left: 20px;
              input {
                outline: none;
                border: none;
                border-bottom: 1px solid #142e4e;
              }
            }
          }
          .__btn {
            margin-left: 20px;
            button {
              outline: none;
              width: 100px;
              background: #3b4890;
              border-color: #29367c;
              color: #fff;
              cursor: pointer;
              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
  }
}
</style>
