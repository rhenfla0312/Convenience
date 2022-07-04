<script>
export default {
  data() {
    return {
      loginData: false,
      loginInfo: localStorage.getItem('name')
    }
  },
  methods: {
    logOut() {
      window.localStorage.removeItem('name');
      window.localStorage.removeItem('id');
      this.$router.push('/')
      setTimeout(() => {
        this.$router.go()
      },10)
    },
    loginCheck() {
      if(!localStorage.getItem('name')) {
        alert("로그인 후 사용할 수 있는 서비스 입니다.")
        this.$router.push('/login')
      } 
    }
  },
  computed: {
    loginData() {
      if(localStorage.getItem('name')) {
        return this.loginData = true
      } else {
        return this.loginData = false
      }
    },
  }
}
</script>

<template>
  <div class="header">
    <div class="inner">
      <div class="login">
        <RouterLink to="/login/loginInfo" class="login__item" v-if="loginData">{{ loginInfo }}님</RouterLink>
        <RouterLink to="/login" class="login__item" v-else>로그인</RouterLink>
        <div @click="logOut" class="login__item" v-if="loginData">로그아웃</div>
        <RouterLink to="/signUp" class="login__item" v-else>회원가입</RouterLink>
        <RouterLink to="/servicecenter" class="login__item">고객센터</RouterLink>
      </div>

      <div class="menu">
        <RouterLink to="/" class="menu__name">BestChoice</RouterLink>
        <div class="__item">
          <RouterLink to="/description" class="menu__item">꿀조합 소개</RouterLink>
          <RouterLink to="/bestChoise" class="menu__item">꿀조합</RouterLink>
          <RouterLink to="/bestRanking" class="menu__item">조합랭킹</RouterLink>
          <RouterLink to="/myChoise" @click="loginCheck()" class="menu__item">나만의 조합</RouterLink>
          <RouterLink to="/convenience/cu" class="menu__item">편의점 이벤트</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #000;
}
.header {
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: #fafafa;
  border-bottom: 1px solid #dddddd;
  .inner {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    .login {
      display: flex;
      justify-content: end;
      .login__item {
        cursor: pointer;
        padding: 10px;
        &:hover {
          font-weight: bold;
        }
      }
    }
    .menu {
      display: flex;
      height: 80px;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .menu__name {
        font-family: 'Bungee Inline', cursive;
        cursor: pointer;
        font-size: 40px;
        // text-align: center;
      }
      .__item {
        display: flex;
        .menu__item {
          padding: 0 20px;
          font-size: 20px;
          cursor: pointer;
          
        }
      }
    }
  }
}
</style>