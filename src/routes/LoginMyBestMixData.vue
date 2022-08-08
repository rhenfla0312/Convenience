<script>
import axios from "axios";

export default {
  data() {
    return {
      serverItem : false,
      serverBoardItem : false,

      myBestMixDatas : [],

      // nextpage
      myBestMixDataNextPage : "",
    };
  },
  methods: {
    myBestMixDatasNextBtn() {
      // 나의 추천조합 다음페이지
      axios({
        method: "GET",
        url: this.myBestMixDataNextPage,
        params: {
          user_id : localStorage.getItem("id"),
        },
      }).then((res) => {
        console.log(res)
        this.myBestMixDataNextPage = res.data.next
        this.myBestMixDatas = this.myBestMixDatas.concat(res.data.results)
      }).catch((error) => {
        console.log(error)
      })
    },
    myMixDataFind(id) {
      this.$router.push({
        name: "bestChoiseFind",
        params : {
          id : id
        }
      })
    },
    myBoardFind(id) {
      this.$router.push({
        name: "BoardFind",
        params : {
          id : id
        }
      })
    },
  },
  mounted() {
    axios({
      method: "GET",
      url: "http://54.180.193.83:8081/privateLikes/",
      params: {
        user_id : localStorage.getItem("id"),
      },
    }).then((res) => {
        console.log(res);
        this.myBestMixDatas = res.data.results
        this.myBestMixDataNextPage = res.data.next
      })
      .catch((error) => {
        console.log(error);
      });
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
          <div class="__data __myBestMixData">
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
                  <tr class="tr tr__main" v-for="myBestMixData in myBestMixDatas" :key="myBestMixData" @click="myMixDataFind(myBestMixData.id)">
                    <td>{{ myBestMixData.id }}</td>
                    <td>{{ myBestMixData.nickname }}</td>
                    <td class="my__title">{{ myBestMixData.title }}</td>
                    <td>{{ myBestMixData.create_date.slice(0,-22) }}</td>
                    <td>{{ myBestMixData.likes_cnt }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="pagenation" @click="myBestMixDatasNextBtn()">
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
                .my__title {
                  width: 400px;
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
