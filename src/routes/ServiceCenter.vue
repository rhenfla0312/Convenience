<script>
export default {

}
</script>


<template>
  <div class="serviceCenter">
    <div class="serviceCenter__name">고객센터</div>
    <div class="serviceCenter__main">
      <div class="main__container">
        <div class="textBox">
          <div class="text__name">
            <input type="text" placeholder="성명을 입력해주세요">
          </div>
          <div class="text__title">
            <input type="text" placeholder="제목을 입력해주세요">
          </div>
          <div class="text__textarea">
            <textarea name="" id=""></textarea>
          </div>
        </div>
        <div class="textBtn">
          <div class="btn">전송하기</div>
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
    min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .serviceCenter__name {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      line-height: 3;
    }
    .serviceCenter__main {
      width: 600px;
      height: 600px;
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
          margin-top: 40px;
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
</style>