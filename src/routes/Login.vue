<script>
import axios from 'axios'
export default {
  methods: {
    data() {
      return {
        email : '',
        password : ''
      }
    },
    loginData() {
      axios({
        method: "POST",
        url: "http://54.180.193.83:8081/accounts/login/",
        data: {
          email : this.email,
          password : this.password,
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
  <div class="login">
    <div class="login__name">로그인</div>
    <div class="login__main">
      <div class="login__inner">
        <div class="login__id">
          <div class="id__name">이메일</div>
          <input id="email" v-model="email" type="email" autocomplete="off" placeholder="이메일을 입력해주세요">
        </div>
        <div class="login__pw">
          <div class="pw__name">비밀번호</div>
          <input v-model="password" id="password" type="password" placeholder="비밀번호를 입력해주세요">
        </div>
        <div @click="loginData()" class="loginBtn">
          <div class="btn">로그인</div>
        </div>
        <div class="loginError">
          <RouterLink to="/login/loginFind" class="singIn">아이디 찾기/ 비밀번호 찾기</RouterLink>
          <RouterLink to="/signUp" class="singUp">회원가입</RouterLink>
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
  .login {
    position: relative;
    top: 125px;
    height: 500px;
    padding: 0 0 80px 0;
    // min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .login__name {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      line-height: 3;
    }
    .login__main {
      margin: auto;
      border: 1px solid #dddddd;
      width: 700px;
      height: 350px;
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
        .loginBtn {
          margin-top: 20px;
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
        .loginError {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #424242;
          .singIn {
            cursor: pointer;
          }
          .singUp {
            cursor: pointer;
          }
        }
      }
    }
  }
</style>