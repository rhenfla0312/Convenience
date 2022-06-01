<script>
export default {
  
}
</script>

<template>
  <div class="header">
    <div class="inner">
      <div class="login">
        <RouterLink to="/login" class="login__item">로그인</RouterLink>
        <RouterLink to="/signUp" class="login__item">회원가입</RouterLink>
        <RouterLink to="/servicecenter" class="login__item">고객센터</RouterLink>
      </div>

      <div class="menu">
        <RouterLink to="/" class="menu__name">BestChoice</RouterLink>
        <div class="__item">
          <RouterLink to="/description" class="menu__item">꿀조합 소개</RouterLink>
          <RouterLink to="/bestChoise" class="menu__item">꿀조합</RouterLink>
          <RouterLink to="/bestRanking" class="menu__item">조합랭킹</RouterLink>
          <RouterLink to="/myChoise" class="menu__item">나만의 조합</RouterLink>
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
    width: 1100px;
    margin: 0 auto;
    position: relative;
    .login {
      display: flex;
      justify-content: end;
      .login__item {
        cursor: pointer;
        padding: 10px;
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