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
      error_content : "",
      imgFile : ""
    }
  },
  methods : {
    write() {
      const formData = new FormData();
      formData.append('username', this.name);
      formData.append('title', this.title);
      formData.append('content', this.content);
      formData.append('image', this.imgFile);
      axios({
        url : "http://54.180.193.83:8081/board/",
        headers: {
          Authorization : `Bearer ${localStorage.getItem('access')}`
        },
        method : "POST",
        data : formData
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
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('content', this.content);
      formData.append('username', localStorage.getItem('name'));
      formData.append('image', this.imgFile);
      if(this.imgFile !== null) {
        formData.append('image', this.imgFile);
      }
      axios({
        url : `http://54.180.193.83:8081/board/${this.update_id}/`,
        method: 'PATCH',
        headers: {
          Authorization : `Bearer ${localStorage.getItem('access')}`
        },
        data : formData
      }).then((res) => {
        console.log(res)
        this.$router.push('/board')
      }).catch((error) => {
        console.log(error)
        this.error_content = error.response.data.content
        this.error_title = error.response.data.title
      })
    },
    imgFileChange(e) {
      console.log(e)
      this.imgFile = e.target.files[0]
      console.log(this.imgFile)
    }
  },
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
              <div class="__name">닉네임</div>
              <input v-model="name" type="text" readonly name="name" placeholder="닉네임을 입력해주세요">
            </div>
            <div class="text__title">
              <div class="__title">제목</div>
              <input v-model="title" type="text" name="title" placeholder="제목을 입력해주세요">
            </div>
            <div class="error">{{ error_title }}</div>
            <div class="text__textarea">
              <textarea v-model="content" name="text" id=""></textarea>
            </div>
            <div class="error">{{ error_content }}</div>
            <div class="imgFile">
              <div class="__file">이미지</div>
              <input type="file" class="file"  @change="imgFileChange">
            </div>
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
        margin: auto;
        background: #fff;
        text-align: center;
        box-shadow: 0 7px 25px #00000014;
        border-radius: 10px;
        padding: 20px 0 70px 0;
        .main__container {
          margin-top: 64px;
          .content {
            font-size: 25px;
            font-weight: bold;
          }
          .textBox {
            width: 600px;
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
              .__title {
                margin-left: 10px;
                font-size: 13px;
                font-weight: 700;
              }
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
            .imgFile {
              margin-top: 30px;
              .__file {
                margin-left: 10px;
                font-size: 13px;
                font-weight: 700;
              }
              .file {
                padding: 10px;
              }
            }
          }
          .textBtn {
            margin-top: 50px;
            display: flex;
            justify-content: center;
            .btn {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 600px;
              height: 45px;
              border-radius: 10px;
              background: #3b4890;
              border-color: #29367c;
              color: #fff;
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