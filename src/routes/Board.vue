<script>
import axios from 'axios'
export default {
  data() {
    return {
      board_datas : [],
      nextData : ""
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
    }
  },
  mounted() {
    axios({
      url : "http://54.180.193.83:8081/board/",
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
</script>


<template>
  <div class="board">
    <div class="inner">
      <div class="board__name">자유게시판</div>
        <div class="board__main">
          <div class="board__search">
            <input type="text" class="__search">
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
              <tr class="tr tr_main" v-for="board_data in board_datas" :key="board_data" @click="boardFind(board_data.id)">
                <td>{{ board_data.id }}</td>
                <td>{{ board_data.username}}</td>
                <td>{{ board_data.title}}</td>
                <td>{{ board_data.create_date.slice(0,-22) }}</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          <div class="pagenation">
            <div class="nextPage" @click="nextPage()">더보기</div>
            <RouterLink to="/board/boardWrite" class="nextPage">글쓰기</RouterLink>
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
    height: 1200px;
    padding: 0 0 20px 0;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
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
        border-radius: 20px;
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
          .tr_main {
            &:hover {
              box-shadow: 1px 1px 3px 1px;
              cursor: pointer;
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