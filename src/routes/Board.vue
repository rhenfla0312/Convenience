<script>
import axios from 'axios'
export default {
  data() {
    return {
      default_datas : [],
      board_datas : [],
      nextData : "",
      search__data : "",
    }
  },
  methods : {
    nextPage() {
      axios({
        method: "GET",
        url: this.nextData
      }).then((res) => {
        console.log(res)
        this.nextData = res.data.next
        this.board_datas = this.board_datas.concat(res.data.results)
      }).catch((error) => {
        console.log(error)
      })
    },
    boardFind(id) {
      this.$router.push({
        name: "BoardFind",
        params : {
          id : id
        }
      })
    },
    defaultFind(id) {
      this.$router.push({
        name: "BoardFind",
        params : {
          default_id : id 
        }
      })
    },
    search() {
      axios.get(`http://54.180.193.83:8081/board/?search=${this.search__data}`)
      .then((res) => {
        console.log(res)
        this.board_datas = res.data.results
        this.search__count = res.data.count
        localStorage.setItem('search__data', this.search__data)
      }).catch((error) => {
        console.log(error)
      })
    },
    loginCheck() {
      if(!localStorage.getItem('name')) {
        alert("로그인 후 사용할 수 있는 서비스 입니다.")
        this.$router.push('/login')
      } 
    }
  },
  mounted() {
    if(localStorage.getItem('search__data') !== "") {
      this.search__data = localStorage.getItem('search__data')
      // 전체 데이터
      axios({
        url : `http://54.180.193.83:8081/board/?search=${this.search__data}`,
        method : "GET"
      }).then((res) => {
        console.log(res)
        this.board_datas = res.data.results
        this.nextData = res.data.next
      }).catch((error) => {
        console.log(error)
      })
    } else {
      // 공지 데이터 - admin으로 작성할때만
      axios({
        url : 'http://54.180.193.83:8081/notice/',
        method : "GET"
      }).then((res) => {
        console.log(res)
        this.default_datas = res.data.results.slice(0,5)
      }).catch((error) => {
        console.log(error)
      })
      // 전체 데이터
      axios({
        url : 'http://54.180.193.83:8081/board/',
        method : "GET"
      }).then((res) => {
        console.log(res)
        this.board_datas = res.data.results
        this.nextData = res.data.next
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>


<template>
  <div class="board">
    <div class="inner">
      <div class="board__name">자유게시판</div>
        <div class="board__main">
          <div class="board__search">
            <input type="text" class="__search" v-model="search__data" @keydown.enter.prevent="search()">
            <i class="fa-solid fa-magnifying-glass search__icon"></i>
          </div>
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
              <tr class="tr tr__main tr__default" v-for="default_data in default_datas" :key="default_data" @click="defaultFind(default_data.id)">
                <td>공지<span class="material-symbols-outlined volume">volume_up</span></td>
                <td>{{ default_data.username === "admin" ? "관리자" : "admin" }}</td>
                <td>{{ default_data.title}}</td>
                <td>{{ default_data.create_date.slice(0,-22) }}</td>
                <td>{{ default_data.hits}}</td>
              </tr>
              <tr class="tr tr__main" v-for="board_data in board_datas" :key="board_data" @click="boardFind(board_data.id)">
                <td>{{ board_data.id }}</td>
                <td>{{ board_data.username}}</td>
                <td class="boardComment_count">
                  {{ board_data.title}}
                  [{{ board_data.boardcomment.length}}]
                </td>
                <td>{{ board_data.create_date.slice(0,-22) }}</td>
                <td>{{ board_data.hits}}</td>
              </tr>
            </tbody>
          </table>
          <div class="pagenation">
            <div class="nextPage" @click="nextPage()">더보기</div>
            <RouterLink to="/board/boardWrite" @click="loginCheck()" class="nextPage">글쓰기</RouterLink>
          </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  a {
    color: #000;
    text-decoration: none;
  }
  .board {
    position: relative;
    top: 125px;
    min-height: 650px;
    height: 100%;
    padding: 0 0 100px 0;
    .inner {
      width: 1100px;
      margin: auto;
      position: relative;
      .board__name {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        line-height: 3;
      }
      .board__main {
        position: relative;
        width: 100%;
        height: 100%;
        margin: auto;
        padding: 20px;
        box-shadow: 0 7px 25px #00000014;
        border-radius: 10px;
        transition: .5s;
        background: #fff;
        .board__search {
          position: absolute;
          right: 20px;
          top: 17px;
          .__search {
            width: 200px;
            border-radius: 10px;
            outline: none;
            padding: 3px;
            border: 1px solid #eeeeee;
          }
          .search__icon {
            position: absolute;
            right: 10px;
            top: 5px;
            padding: 3px;
            color: #333;
            cursor: pointer;
          }
        }
        .table {
          margin-top: 40px;
          text-align: center;
          .tr {
            padding: 10px 0 10px 0;
          }
          .tr__main {
            position: relative;
            &:hover {
              box-shadow: 1px 1px 3px 1px;
              cursor: pointer;
            }
          }
          .tr__default {
            color : #c62828;
            font-weight: bold;
            .volume {
              position: absolute;
            }
          }
        }
        .pagenation {
          display: grid;
          grid-template-columns: 2fr 1fr;
          text-align: center;
          // margin: 12px;
          gap: 20px;
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
</style>