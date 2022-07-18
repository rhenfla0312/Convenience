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
      name : "",
      email : "",
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
                <input v-model="name" type="text" name="name" placeholder="닉네임을 입력해주세요">
              </div>
              <div class="text__email">
                <input v-model="email" type="email" name="email" placeholder="이메일을 입력해주세요">
              </div>
              <div class="text__title">
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
    // min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
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
        height: 650px;
        border: 1px solid #333;
        margin: auto;
        border-radius: 20px;
        background: #fff;
        border: 1px solid #dddddd;
        text-align: center;
        .main__container {
          margin-top: 64px;
          .content {
            font-size: 25px;
            font-weight: bold;
          }
          .textBox {
            // margin-top: 40px;
            .text__name {
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
              border: 1px solid #333;
              background: #333;
              color: #fff;
              border-radius: 20px;
              &:hover {
                background: #fff;
                color: #333;
              }
            }
          }
        }
      }
    }
  }
</style>