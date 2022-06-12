<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: '',
      id_question: '',
      id_answer: '',
      pw_email : '',
      pw_question: '',
      pw_answer: ''
    }
  },
  methods: {
    idData() {
      axios({
        method: "POST",
        url: "http://54.180.193.83:8081/user/idfind/",
        data: {
          username : this.username,
          question : this.id_question,
          answer : this.id_answer
        }
      }).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })
    },
    pwData() {
      axios({
        method: "GET",
        url: "http://54.180.193.83:8081/user/passwdfind/",
        params: {
          email : this.pw_email,
          question : this.pw_question,
          answer : this.pw_answer
        }
      }).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<template>
  <div class="loginFind">
    <div class="loginFind__main">
      <div class="loginFind__nameBox">
        <div class="loginFind__nameId">아이디 찾기</div>
        <div class="loginFind__namePw">비밀번호 찾기</div>
      </div>
    </div>

    <div class="loginFind__inner">
      <div class="loginFind__id">
        <div class="login__inner">
          <div class="login__id">
            <div class="id__name">닉네임</div>
            <input v-model="username" id="email" type="email" autocomplete="off" placeholder="닉네임을 입력해주세요">
          </div>
          <div class="login__select">
            <div class="select__name">질문선택</div>
            <select v-model="id_question">
              <option value="">질문을 선택해주세요</option>
              <option value="내가 처음으로다닌 초등학교는?">내가 처음으로다닌 초등학교는?</option>
              <option value="내 휴대폰 번호는?">내 휴대폰 번호는?</option>
              <option value="내 보물 1호는?">내 보물 1호는?</option>
              <option value="내가 좋아하는 색깔은?">내가 좋아하는 색깔은?</option>
              <option value="내가 가장 기억에 남은 물건은?">내가 가장 기억에 남은 물건은?</option>
            </select>
          </div>
          <div class="login__id">
            <div class="id__name">질문 답</div>
            <input v-model="id_answer" id="email" type="email" autocomplete="off" placeholder="질문의 답을 입력해주세요">
          </div>
          <div @click="idData" class="loginBtn">
            <div class="btn">아이디 찾기</div>
          </div>
        </div>
      </div>
      <div class="loginFind__pw">
        <div class="login__inner">
          <div class="login__id">
            <div class="id__name">이메일</div>
            <input v-model="pw_email" id="email" type="email" autocomplete="off" placeholder="이메일을 입력해주세요">
          </div>
          <div class="login__select">
            <div class="select__name">질문선택</div>
            <select v-model="pw_question">
              <option value="">질문을 선택해주세요</option>
              <option value="내가 처음으로다닌 초등학교는?">내가 처음으로다닌 초등학교는?</option>
              <option value="내 휴대폰 번호는?">내 휴대폰 번호는?</option>
              <option value="내 보물 1호는?">내 보물 1호는?</option>
              <option value="내가 좋아하는 색깔은?">내가 좋아하는 색깔은?</option>
              <option value="내가 가장 기억에 남은 물건은?">내가 가장 기억에 남은 물건은?</option>
            </select>
          </div>
          <div class="login__id">
            <div class="id__name">질문 답</div>
            <input v-model="pw_answer" id="email" type="email" autocomplete="off" placeholder="질문의 답을 입력해주세요">
          </div>
          <div @click="pwData" class="loginBtn">
            <div class="btn">비밀번호 찾기</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .loginFind {
    position: relative;
    top: 125px;
    height: 600px;
    padding: 0 0 80px 0;
    // min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .loginFind__main {
      width: 1400px;
      margin: auto;
      position: relative;
      .loginFind__nameBox {
        display: flex;
        justify-content: space-around;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        line-height: 3;
      }
    }
    .loginFind__inner {
      width: 1200px;
      margin: auto;
      position: relative;
      display: flex;
      justify-content: space-between;
      .loginFind__id {
        border: 1px solid #dddddd;
        width: 500px;
        height: 480px;
        text-align: center;
        border-radius: 20px;
        background: #fff;
        .login__inner {
          width: 400px;
          position: relative;
          margin: auto;
          .login__id {
            margin-top: 50px;
            .id__name {
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
          .loginBtn {
            margin-top: 70px;
            .btn {
              border: 1px solid #dddddd;
              border-radius: 20px;
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
        }
      }
      .loginFind__pw {
        border: 1px solid #dddddd;
        width: 500px;
        height: 480px;
        text-align: center;
        border-radius: 20px;
        background: #fff;
        .login__inner {
          width: 400px;
          position: relative;
          margin: auto;
          .login__id {
            margin-top: 50px;
            .id__name {
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
          .loginBtn {
            margin-top: 70px;
            .btn {
              border: 1px solid #dddddd;
              border-radius: 20px;
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
        }
      }
    }
  }
</style>