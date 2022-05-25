<script>
export default {
  
}
</script>

<template>
  <div class="loginFind">
    <div class="loginFind__nameBox">
    <div class="loginFind__nameId">아이디 찾기</div>
    <div class="loginFind__namePw">비밀번호 찾기</div>
    </div>
    <div class="loginFind__main">
      <div class="loginFind__id">
        <div class="login__inner">
          <div class="login__id">
            <div class="id__name">닉네임</div>
            <input id="email" type="email" autocomplete="off" placeholder="닉네임을 입력해주세요">
          </div>
          <div class="login__id">
            <div class="id__name">질문 답</div>
            <input id="email" type="email" autocomplete="off" placeholder="질문의 답을 입력해주세요">
          </div>
          <div class="loginBtn">
            <div class="btn">아이디 찾기</div>
          </div>
        </div>
      </div>
      <div class="loginFind__pw">
        <div class="login__inner">
          <div class="login__id">
            <div class="id__name">이메일</div>
            <input id="email" type="email" autocomplete="off" placeholder="이메일을 입력해주세요">
          </div>
          <div class="login__id">
            <div class="id__name">질문 답</div>
            <input id="email" type="email" autocomplete="off" placeholder="질문의 답을 입력해주세요">
          </div>
          <div class="loginBtn">
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
    min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .loginFind__nameBox {
      display: flex;
      justify-content: space-evenly;
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      line-height: 3;
    }
    .loginFind__id {
      position: absolute;
      top: 100px;
      left: 350px;
      border: 1px solid #dddddd;
      width: 500px;
      height: 400px;
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
      }
    }
    .loginFind__pw {
      position: absolute;
      top: 100px;
      right: 350px;
      margin: auto;
      border: 1px solid #dddddd;
      width: 500px;
      height: 400px;
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
      }
    }
  }
</style>