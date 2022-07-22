<script>
export default {
  data() {
    return {
      myInfo : true,
      myMixData : false,
      myBestMixData : false,
      myBoard : false,
    }
  },
  methods: {
    myInfoBtn() {
      this.myInfo = true
      this.myMixData = false
      this.myBestMixData = false
      this.myBoard = false
    },
    myMixDataBtn() {
      this.myInfo = false
      this.myMixData = true
      this.myBestMixData = false
      this.myBoard = false
    },
    myBestMixDataBtn() {
      this.myInfo = false
      this.myMixData = false
      this.myBestMixData = true
      this.myBoard = false
    },
    myBoardBtn() {
      this.myInfo = false
      this.myMixData = false
      this.myBestMixData = false
      this.myBoard = true
    },
  },
  mounted() {
  
  }
}
</script>


<template>
  <div class="loginInfo">
    <div class="loginInfo__inner">
      <div class="loginInfo__name">내정보</div>
      <div class="loginInfo__menu">
        <div class="__leftBtn">
          <div class="__btn __myInfo" @click="myInfoBtn()">
            <div class="__text">비밀번호 변경</div>
            <div class="__arrow">
              <span class="material-symbols-outlined arrow">expand_more</span>
            </div>
          </div>
          <div class="__btn __myMixData" @click="myMixDataBtn()">
            <div class="__text">나의 조합</div>
            <div class="__arrow">
              <span class="material-symbols-outlined arrow">expand_more</span>
            </div>
          </div>
          <div class="__btn __myBestMixData" @click="myBestMixDataBtn()">
            <div class="__text">나의 추천조합</div>
            <div class="__arrow">
              <span class="material-symbols-outlined arrow">expand_more</span>
            </div>
          </div>
          <div class="__btn __myBoard" @click="myBoardBtn()">
            <div class="__text">나의 글</div>
            <div class="__arrow">
              <span class="material-symbols-outlined arrow">expand_more</span>
            </div>
          </div>
        </div>

        <div class="__rightInfo">
          <!-- 1 -->
          <div class="__data __myInfo" v-if="myInfo">
            <div class="__title">비밀번호 변경</div>
            <div class="__text">
              <div class="__pwName">현재 비밀번호 : </div>
              <div class="__pwInput">
                <input type="password" />
              </div>
              <div class="__btn">
                <button>확인</button>
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="__data __myMixData" v-if="myMixData">
            <div class="__title">나의 조합</div>
            <div class="__text">
              <table class="table">
                <thead class="thead">
                  <tr class="tr">
                    <th>번호</th>
                    <th>닉네임</th>
                    <th>조합이름</th>
                    <th>생성날짜</th>
                    <th>추천수</th>
                  </tr>
                </thead>
                <tbody class="tbody">
                  <tr class="tr tr__main"></tr>
                </tbody>
              </table>
              <div class="pagenation">
                <div class="nextPage">더보기</div>
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="__data __myBestMixData" v-if="myBestMixData">
            <div class="__title">나의 추천조합</div>
            <div class="__text">
              <table class="table">
                <thead class="thead">
                  <tr class="tr">
                    <th>번호</th>
                    <th>닉네임</th>
                    <th>조합이름</th>
                    <th>생성날짜</th>
                    <th>추천수</th>
                  </tr>
                </thead>
                <tbody class="tbody">
                  <tr class="tr tr__main"></tr>
                </tbody>
              </table>
              <div class="pagenation">
                <div class="nextPage">더보기</div>
              </div>
            </div>
          </div>
          <!-- 4 -->
          <div class="__data __myBoard" v-if="myBoard">
            <div class="__title">나의 글</div>
            <div class="__text">
              <table class="table">
                <thead class="thead">
                  <tr class="tr">
                    <th>번호</th>
                    <th>닉네임</th>
                    <th>제목</th>
                    <th>생성날짜</th>
                    <th>조회수</th>
                  </tr>
                </thead>
                <tbody class="tbody">
                  <tr class="tr tr__main"></tr>
                </tbody>
              </table>
              <div class="pagenation">
                <div class="nextPage">더보기</div>
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
    height: 700px;
    padding: 0 0 80px 0;
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
            font-family: 'NotoKrM';
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
              margin-left: 40px;
              button {
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
            }
          }
          .__myMixData {
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
              .table {
                margin-top: 40px;
                text-align: center;
                .tr {
                  padding: 10px 0 10px 0;
                }
                .tr__main {
                  &:hover {
                    box-shadow: 1px 1px 3px 1px;
                    cursor: pointer;
                  }
                }
              }
              .pagenation {
                text-align: center;
                .nextPage {
                  display: flex;
                  justify-content: center;
                  cursor: pointer;
                  background: #eeeeee;
                  border-radius: 10px;
                  font-size: 18px;
                }
              }
            }
          }
          .__myBestMixData {
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
              .table {
                margin-top: 40px;
                text-align: center;
                .tr {
                  padding: 10px 0 10px 0;
                }
                .tr__main {
                  &:hover {
                    box-shadow: 1px 1px 3px 1px;
                    cursor: pointer;
                  }
                }
              }
              .pagenation {
                text-align: center;
                .nextPage {
                  display: flex;
                  justify-content: center;
                  cursor: pointer;
                  background: #eeeeee;
                  border-radius: 10px;
                  font-size: 18px;
                }
              }
            }
          }
          .__myBoard {
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
              .table {
                margin-top: 40px;
                text-align: center;
                .tr {
                  padding: 10px 0 10px 0;
                }
                .tr__main {
                  &:hover {
                    box-shadow: 1px 1px 3px 1px;
                    cursor: pointer;
                  }
                }
              }
              .pagenation {
                text-align: center;
                .nextPage {
                  display: flex;
                  justify-content: center;
                  cursor: pointer;
                  background: #eeeeee;
                  border-radius: 10px;
                  font-size: 18px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>