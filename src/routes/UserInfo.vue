<script>
import axios from 'axios'
export default {
  data() {
    return {
      email:"",
      username:"",
      password1:"",
      password2:"",
      question:"",
      answer:"",
      
      error_email: "",
      error_username: "",
      error_password1: "",
      error_password2: "",
      error_question: "",
      error_answer: "",
    }
  },
  methods: {
    loginData() {
      axios({
        method: "POST",
        url: "http://54.180.193.83:8081/user/",
        data: {
          email : this.email,
          username : this.username,
          password1 : this.password1,
          password2 : this.password2,
          question : this.question,
          answer : this.answer
        }
      }).then((res) => {
        console.log(res)
        alert(res.data)
        this.$router.push('/login')
      }).catch((error) => {
        console.log(error)
          this.error_email = error.response.data.email
          this.error_username = error.response.data.username
          this.error_password1 = error.response.data.password1
          this.error_password2 = error.response.data.password2
          this.error_question = error.response.data.question
          this.error_answer = error.response.data.answer

      })
    }
  }
}
</script>


<template>
  <div class="userInfo">
    <div class="inner">

      <div class="userInfo__name">정보입력</div>
      <div class="userInfo__main">
        <div class="login__inner">
          <div class="login__id">
            <div class="id__name">이메일</div>
            <input v-model="email" id="email" type="email" autocomplete="off" placeholder="이메일을 입력해주세요" @keydown.tab="loginData()" @keydown.enter.prevent="loginData()">
            <button class="login__errorBtn">중복확인</button>
          </div>
          <div class="error">{{ error_email }}</div>
          <div class="login__id">
            <div class="id__name">닉네임</div>
            <input v-model="username" id="email" type="text" autocomplete="off" placeholder="닉네임 입력해주세요" @keydown.tab="loginData()" @keydown.enter.prevent="loginData()">
            <button class="login__errorBtn">중복확인</button>
          </div>
          <div class="error">{{ error_username }}</div>
          <div class="login__pw">
            <div class="pw__name">비밀번호</div>
            <input v-model="password1" id="password" type="password" placeholder="비밀번호를 입력해주세요" @keydown.tab="loginData()" @keydown.enter.prevent="loginData()">
          </div>
          <div class="error">{{ error_password1 }}</div>
          <div class="login__pw">
            <div class="pw__name">비밀번호 확인</div>
            <input v-model="password2" id="passwordInfo" type="password" placeholder="비밀번호를 다시 입력해주세요" @keydown.tab="loginData()" @keydown.enter.prevent="loginData()">
          </div>
          <div class="error">{{ error_password2 }}</div>
          <!-- 질문 -->
          <div class="login__select">
            <div class="select__name">질문선택</div>
            <select v-model="question" @keydown.tab="loginData()" @keydown.enter.prevent="loginData()">
              <option value="">질문을 선택해주세요</option>
              <option value="내가 처음으로다닌 초등학교는?">내가 처음으로다닌 초등학교는?</option>
              <option value="내 휴대폰 번호는?">내 휴대폰 번호는?</option>
              <option value="내 보물 1호는?">내 보물 1호는?</option>
              <option value="내가 좋아하는 색깔은?">내가 좋아하는 색깔은?</option>
              <option value="내가 가장 기억에 남은 물건은?">내가 가장 기억에 남은 물건은?</option>
            </select>
          </div>
          <div class="error">{{ error_question }}</div>
          <div class="login__select">
            <div class="select__name">질문 답</div>
            <input v-model="answer" id="passwordInfo" type="text" placeholder="질문의 답을 입력해주세요" @keydown.enter.prevent="loginData()">
          </div>
          <div class="error">{{ error_answer }}</div>
          <div class="loginBtn">
            <div @click="loginData()" class="btn">회원가입</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .userInfo {
    position: relative;
    top: 125px;
    padding: 0 0 80px 0;
    // min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .inner {
      width: 1100px;
      margin: auto;
      position: relative;
      .userInfo__name {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        line-height: 3;
      }
      .userInfo__main {
        width: 600px;
        border: 1px solid #333;
        margin: auto;
        border-radius: 20px;
        background: #fff;
        border: 1px solid #dddddd;
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
            .login__errorBtn {
              bottom: 5px;
              position: absolute;
              right: 10px;
              width: 80px;
              height: 30px;
              font-size: 15px;
              border-radius: 10px;
              color: #000;
              background: #fff;
              &:hover {
                background : #000;
                color: #fff;
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
          .error {
            color: red;
            margin-top: 5px;
            margin-left: 10px;
            font-weight: 500;
          }
        }
      }
    }
  }
</style>