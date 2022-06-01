<script>
export default {

}
</script>


<template>
  <div class="userInfo">
    <div class="userInfo__name">정보입력</div>
    <div class="userInfo__main">
      <div class="login__inner">
        <div class="login__id">
          <div class="id__name">이메일</div>
          <input id="email" type="email" autocomplete="off" placeholder="이메일을 입력해주세요">
        </div>
        <div class="login__id">
          <div class="id__name">닉네임</div>
          <input id="email" type="text" autocomplete="off" placeholder="닉네임 입력해주세요">
        </div>
        <div class="login__pw">
          <div class="pw__name">비밀번호</div>
          <input id="password" type="password" placeholder="비밀번호를 입력해주세요">
        </div>
        <div class="login__pw">
          <div class="pw__name">비밀번호 확인</div>
          <input id="passwordInfo" type="password" placeholder="비밀번호를 다시 입력해주세요">
        </div>
        <!-- 질문 -->
        <div class="login__select">
          <div class="select__name">질문선택</div>
          <select class="" name="" id="">
            <option value="" checked>질문을 선택해주세요</option>
            <option value="">내가 처음으로다닌 초등학교는?</option>
            <option value="">내 휴대폰 번호는?</option>
            <option value="">내 보물 1호는?</option>
            <option value="">내가 좋아하는 색깔은?</option>
            <option value="">내가 가장 기억에 남은 물건은?</option>
          </select>
        </div>
        <div class="login__select">
          <div class="select__name">질문 답</div>
          <input id="passwordInfo" type="password" placeholder="질문의 답을 입력해주세요">
        </div>
        <div class="loginBtn">
          <div class="btn">회원가입</div>
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
    min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .userInfo__name {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      line-height: 3;
    }
    .userInfo__main {
      width: 600px;
      height: 750px;
      border: 1px solid #333;
      margin: auto;
      border-radius: 20px;
      background: #fff;
      border: 1px solid #dddddd;
      text-align: center;
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