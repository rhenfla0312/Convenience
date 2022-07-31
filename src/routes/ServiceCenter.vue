<script>
import { Form, Field } from 'vee-validate';
import { object, string }  from 'yup';
import emailjs from '@emailjs/browser'
export default {
  components: {
    Form,
    Field
  },
  data() {
    return {
      name : localStorage.getItem('name'),
      email : localStorage.getItem('email'),
      title : "",
      text : "",
    }
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('gmail', 'template_k9dk8yz', this.$refs.form, 'pUBvV41b8DCquCuoE')
        .then((result) => {
          alert("메일이 성공적으로 전송되었습니다.");
          this.$router.go()
        }, (error) => {
          alert("메일을 보내는데 실패했습니다.")
        });
    }
  },
  computed: {
    schema() {
      return object({
        id: string().required('아이디를 입력해주세요.'),
        password: string().required('비밀번호를 입력해주세요.')
      });
    },
  }
}
</script>


<template>
  <div class="serviceCenter">
    <div class="inner">
      <div class="serviceCenter__name">고객센터</div>
      <div class="serviceCenter__main">
        <div class="main__container">
          <form ref="form"  @submit.prevent="sendEmail">
            <div class="textBox">
              <div class="text__name">
                <div class="__name">닉네임</div>
                <input v-model="name" type="text" name="name" readonly placeholder="닉네임을 입력해주세요">
              </div>
              <div class="text__email">
                <div class="__email">이메일</div>
                <input v-model="email" type="email" name="email" readonly placeholder="이메일을 입력해주세요">
              </div>
              <div class="text__title">
                <div class="__title">제목</div>
                <input v-model="title" type="text" name="title" placeholder="제목을 입력해주세요">
              </div>
              <div class="text__textarea">
                <textarea @keydown.enter.prevent="sendEmail" v-model="text" name="text" id=""></textarea>
              </div>
            </div>
            <div class="textBtn">
              <input type="submit" class="btn" value="전송하기" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .serviceCenter {
    position: relative;
    top: 125px;
    padding: 0 0 80px 0;
    .inner {
      width: 1100px;
      margin: auto;
      position: relative;
      .serviceCenter__name {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        line-height: 3;
      }
      .serviceCenter__main {
        width: 600px;
        padding: 10px 0 50px 0;
        margin: auto;
        background: #fff;
        text-align: center;
        border-radius: 10px;
        box-shadow: 0 7px 25px #00000014;
        .main__container {
          margin-top: 64px;
          .content {
            font-size: 25px;
            font-weight: bold;
          }
          .textBox {
            width: 400px;
            margin: auto;
            text-align: start;
            .text__name {
              .__name {
                margin-left: 10px;
                font-size: 13px;
                font-weight: 700;
              }
              > input {
                padding: 10px;
                width: 400px;
                outline: none;
                border: none;
                border-bottom: 1px solid #333;
                &:focus {
                  border-bottom: 2px solid #333;
                }
              }
            }
            .text__email {
              margin-top: 30px;
              .__email {
                margin-left: 10px;
                font-size: 13px;
                font-weight: 700;
              }
              > input {
                padding: 10px;
                width: 400px;
                outline: none;
                border: none;
                border-bottom: 1px solid #333;
                &:focus {
                  border-bottom: 2px solid #333;
                }
              }
            }
            .text__title {
              margin-top: 30px;
              .__title {
                margin-left: 10px;
                font-size: 13px;
                font-weight: 700;
              }
              > input {
                padding: 10px;
                width: 400px;
                outline: none;
                border: none;
                border-bottom: 1px solid #333;
                &:focus {
                  border-bottom: 2px solid #333;
                }
              }
            }
            .text__textarea {
              margin-top: 30px;
              > textarea {
                width: 400px;
                height: 250px;
                outline: none;
                resize: none;
                padding: 10px;
                border-radius: 10px;
              }
            }
          }
          .textBtn {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            .btn {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 400px;
              height: 45px;
              background: #3b4890;
              border-color: #29367c;
              color: #fff;
              border-radius: 10px;
              &:hover {
                opacity: .8s;
              }
            }
          }
        }
      }
    }
  }
</style>