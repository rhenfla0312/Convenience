<script>
import axios from 'axios'
export default {
  data() {
    return {
      id : this.$route.params.id,
      localId : this.$route.params.localId,
      new_password1 : "",
      new_password2 : ""
    }
  },
  methods: {
    pwChangeBtn() {
      axios({
        method: "POST",
        url: "http://54.180.193.83:8081/accounts/passwd/changetest/",
        data: {
          uidb64 : this.id,
          token : this.localId,
          new_password1 : this.new_password1,
          new_password2 : this.new_password2
        }
      }).then((res) => {
        console.log(res)
        alert("성공적으로 변경되었습니다");
        this.$router.push("/login")
      }).catch((error) => {
        console.log(error)
      })
    }
  },
}
</script>


<template>
  <div class="pwChange">
    <div class="inner">
    <div class="pwChange__name">비밀번호 변경</div>
    <div class="pwChange__main">
      <div class="pwChange__inner">
        <div class="pwChange__one">
          <div class="__pwOne">비밀번호</div>
          <input v-model="new_password1" type="password" placeholder="변경할 비밀번호를 입력해주세요">
        </div>
        <div class="pwChange__two">
          <div class="__pwTwo">비밀번호 확인</div>
          <input v-model="new_password2" @keydown.enter.prevent="" type="password" placeholder="변경할 비밀번호를 입력해주세요">
        </div>
        <div @click="pwChangeBtn()" class="pwBtn">
          <button class="btn">변경</button>
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
  .pwChange {
    position: relative;
    top: 125px;
    height: 500px;
    padding: 0 0 80px 0;
    // min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .inner {
      width: 1100px;
      margin: auto;
      position: relative;
      .pwChange__name {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        line-height: 3;
      }
      .pwChange__main {
        margin: auto;
        border: 1px solid #dddddd;
        width: 700px;
        height: 350px;
        text-align: center;
        border-radius: 10px;
        background: #fff;
        .pwChange__inner {
          width: 400px;
          position: relative;
          margin: auto;
          .pwChange__one {
            margin-top: 50px;
            .__pwOne {
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
          .pwChange__two {
            margin-top: 40px;
            .__pwTwo {
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
          .pwBtn {
            margin-top: 20px;
            .btn {
              border: 1px solid #dddddd;
              border-radius: 10px;
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
  }
</style>