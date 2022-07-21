<script>
import axios from 'axios'
export default {
  data() {
    const update_id = this.$route.params.id
    const update_title = this.$route.params.title
    const update_content = this.$route.params.content
    return {
      // update
      update_id : update_id,
      update_title : update_title,
      update_content : update_content,
      
      name : localStorage.getItem('name'),
      title : update_title !== undefined ? update_title : "",
      content : update_content !== undefined ? update_content : "",
      // error
      error_title : "",
      error_content : ""
    }
  },
  methods : {
    write() {
      axios({
        url : "http://54.180.193.83:8081/board/",
        headers: {
          Authorization : `Bearer ${localStorage.getItem('access')}`
        },
        method : "POST",
        data : {
          username : this.name,
          title : this.title,
          content : this.content
        }
      }).then((res) => {
        console.log(res)
        this.$router.push('/board')
      }).catch((error) => {
        console.log(error)
        this.error_content = error.response.data.content
        this.error_title = error.response.data.title
      })
    },
    update() {
      axios({
        url : `http://54.180.193.83:8081/board/${this.update_id}/`,
        method: 'PUT',
        headers: {
          Authorization : `Bearer ${localStorage.getItem('access')}`
        },
        data : {
          title : this.title,
          content : this.content,
          username : localStorage.getItem('name')
        }
      }).then((res) => {
        console.log(res)
        this.$router.push('/board')
      }).catch((error) => {
        console.log(error)
        this.error_content = error.response.data.content
        this.error_title = error.response.data.title
      })
    }
  }
}
</script>


<template>
  <div class="serviceCenter">
    <div class="inner">
      <div class="serviceCenter__name">글쓰기</div>
      <div class="serviceCenter__main">
        <div class="main__container">
          <div class="textBox">
            <div class="text__name">
              <input v-model="name" type="text" name="name" readonly placeholder="닉네임을 입력해주세요">
            </div>
            <div class="text__title">
              <input v-model="title" type="text" name="title" placeholder="제목을 입력해주세요">
            </div>
            <div class="error">{{ error_title }}</div>
            <div class="text__textarea">
              <textarea v-model="content" name="text" id=""></textarea>
            </div>
            <div class="error">{{ error_content }}</div>
          </div>
          <div @click="update_title !== undefined ? update() : write()" class="textBtn">
            <input type="submit" class="btn" :value="update_title !== undefined ? '수정하기' : '작성하기'" />
          </div>
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
        // width: 600px;
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
                width: 600px;
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
                width: 600px;
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
                width: 600px;
                height: 250px;
                outline: none;
                resize: none;
                padding: 10px;
                border-radius: 10px;
              }
            }
            .error {
              color: red;
              margin-right: 355px;
              margin-top: 10px;
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
              width: 600px;
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