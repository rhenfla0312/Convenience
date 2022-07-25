<script>
import axios from "axios";

export default {
  data() {
    return {
      serverItem : false,
      serverBoardItem : false,

      email : localStorage.getItem('email'),
      username : localStorage.getItem('name')
    }
  }
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
          <div class="__data __myInfo">
            <div class="__title">내정보 수정</div>
            <div class="__text">
              <div class="login__inner">
                <div class="login__id">
                  <div class="id__name">이메일</div>
                  <input v-model="email" id="email" type="email" autocomplete="off" readonly placeholder="이메일을 입력해주세요">
                </div>
                <div class="login__id">
                  <div class="id__name">닉네임</div>
                  <input v-model="username" id="email" type="text" readonly autocomplete="off" placeholder="닉네임 입력해주세요">
                </div>
                <div class="login__pw">
                  <div class="pw__name">비밀번호</div>
                  <input v-model="password1" id="password" type="password" placeholder="비밀번호를 입력해주세요">
                </div>
                <div class="login__pw">
                  <div class="pw__name">비밀번호 확인</div>
                  <input v-model="password2" id="passwordInfo" type="password" placeholder="비밀번호를 다시 입력해주세요">
                </div>
                <!-- 질문 -->
                <div class="login__select">
                  <div class="select__name">질문선택</div>
                  <select v-model="question">
                    <option value="">질문을 선택해주세요</option>
                    <option value="내가 처음으로다닌 초등학교는?">내가 처음으로다닌 초등학교는?</option>
                    <option value="내 휴대폰 번호는?">내 휴대폰 번호는?</option>
                    <option value="내 보물 1호는?">내 보물 1호는?</option>
                    <option value="내가 좋아하는 색깔은?">내가 좋아하는 색깔은?</option>
                    <option value="내가 가장 기억에 남은 물건은?">내가 가장 기억에 남은 물건은?</option>
                  </select>
                </div>
                <div class="login__select">
                  <div class="select__name">질문 답</div>
                  <input v-model="answer" id="passwordInfo" type="text" placeholder="질문의 답을 입력해주세요">
                </div>
                <div class="loginBtn">
                  <div class="btn">수정하기</div>
                </div>
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
            border-radius: 10px;
            box-shadow: 0 7px 25px #00000014;
            padding: 10px;
            margin-top: 20px;
            .login__inner {
              width: 400px;
              position: relative;
              margin: auto;
              .login__id {
                margin-top: 40px;
                position: relative;
                .id__name {
                  margin-left: 10px;
                  font-size: 13px;
                  font-weight: bold;
                }
                > input {
                  width: 400px;
                  height: 40px;
                  padding: 10px;
                  outline: none;
                  border: none;
                  border-bottom: 1px solid #dddddd;
                  &:focus {
                    border-bottom: 2px solid #424242;
                  }
                }
              }
              .login__pw {
                margin-top: 40px;
                .pw__name {
                  text-align: start;
                  margin-left: 10px;
                  font-size: 13px;
                  font-weight: bold;
                }
                > input {
                  padding: 10px;
                  width: 400px;
                  height: 40px;
                  outline: none;
                  border: none;
                  border-bottom: 1px solid #dddddd;
                  &:focus {
                    border-bottom: 2px solid #424242;
                  }
                }
              }
              .login__select {
                margin-top: 40px;
                .select__name {
                  text-align: start;
                  margin-left: 10px;
                  font-size: 13px;
                  font-weight: bold;
                }
                > select {
                  padding: 5px;
                  width: 400px;
                  height: 40px;
                  outline: none;
                  border: none;
                  border-bottom: 1px solid #dddddd;
                  color: #333;
                  &:focus {
                    border-bottom: 2px solid #424242;
                  }
                }
                > input {
                  padding: 10px;
                  width: 400px;
                  height: 40px;
                  outline: none;
                  border: none;
                  border-bottom: 1px solid #dddddd;
                  &:focus {
                    border-bottom: 2px solid #424242;
                  }
                }
              }
              .loginBtn {
                margin-top: 40px;
                margin-bottom: 40px;
                .btn {
                  border: 1px solid #dddddd;
                  border-radius: 10px;
                  background: #424242;
                  color: #fff;
                  width: 400px;
                  padding: 10px;
                  &:hover {
                    color: #424242;
                    background: #fff;
                    border: 1px solid #424242;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
