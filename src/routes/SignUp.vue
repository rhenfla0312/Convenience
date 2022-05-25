<script>
export default {

}
</script>


<template>
  <div class="signUp">
    <div class="signUp__name">약관동의</div>
    <div class="signUp__main">
      <!-- checkbox -->
      <div class="checkBox">
        <!-- headAllCheckBox -->
        <div class="checkAll">
          <div class="allBox">
            <input type="checkbox" id="all" name="allCheckbox">
            <i class="icon"></i>
          </div>
          <label for="all" class="allName">전체동의</label>
          <span class="material-symbols-outlined arrow">expand_more</span>
        </div>
        <!-- bodyAllCheckBox -->
        <div class="checkListBox">
          <div class="checkList">
            <div class="__list">
              <input type="checkbox" id="one" name="checkbox">
              <i class="icon"></i>
            </div>
            <label for="one" class="__name">멤버십 서비스</label>
            <span class="material-symbols-outlined arrow">expand_more</span>
          </div>
          <div class="checkList">
            <div class="__list">
              <input type="checkbox" id="two" name="checkbox">
              <i class="icon"></i>
            </div>
            <label for="id" class="__name">꿀조합 이용약관 동의</label>
            <span class="material-symbols-outlined arrow">expand_more</span>
          </div>
          <div class="checkList">
            <div class="__list">
              <input type="checkbox" id="three" name="checkbox">
              <i class="icon"></i>
            </div>
            <label for="three" class="__name">위치기반 서비스 이용약관</label>
            <span class="material-symbols-outlined arrow">expand_more</span>
          </div>
          <div class="checkList">
            <div class="__list">
              <input type="checkbox" id="four" name="checkbox">
              <i class="icon"></i>
            </div>
            <label for="four" class="__name">개인정보 수집이용동의</label>
            <span class="material-symbols-outlined arrow">expand_more</span>
          </div>
          <div class="checkList">
            <div class="__list">
              <input type="checkbox" id="five" name="checkbox">
              <i class="icon"></i>
            </div>
            <label for="five" class="__name">마케팅 정보 수신 동의</label>
            <span class="material-symbols-outlined arrow">expand_more</span>
          </div>
          <div class="checkList">
            <div class="__list">
              <input type="checkbox" id="six" name="checkbox">
              <i class="icon"></i>
            </div>
            <label for="six" class="__name">휴대폰 본인인증 서비스</label>
            <span class="material-symbols-outlined arrow">expand_more</span>
          </div>
        </div>
      </div>
      <div class="signUpBtn">
        <RouterLink to="/signUp/userInfo" class="btn">약관 동의</RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .signUp {
    position: relative;
    top: 125px;
    // height: 500px;
    padding: 0 0 80px 0;
    min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .signUp__name {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      line-height: 3;
    }
    .signUp__main {
      width: 600px;
      height: 600px;
      border: 1px solid #333;
      margin: auto;
      border-radius: 20px;
      background: #fff;
      border: 1px solid #dddddd;
      text-align: center;
      .checkBox {
        width: 400px;
        position: relative;
        margin: auto;
        font-size: 20px;
        margin-top: 60px;
        margin-bottom: 50px;
        .checkAll {
          display: flex;
          margin-bottom: 30px;
          .allBox {
            .icon {
              cursor: pointer;
              background-color: #ffffff;
              border: 1px solid #cccccc;
              border-radius: 50px;
              box-sizing: border-box;
              position: absolute;
              left: 0;
              top: 5px;
              height: 20px;
              width: 20px;
              &::before {
                background-image: url("/checkbox.png");
                background-repeat: no-repeat;
                background-position: 0 0;
                background-size: 13px auto;
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                margin: -5px 0 0 -7px;
                height: 10px;
                width: 13px;
              }
              &:active {
                background: green;
                color: #fff;
              }
            }
            > input {
              margin-right: 20px;
              opacity: 0;
            }
          }
          .arrow {
            position: absolute;
            right: 0;
            cursor: pointer;
            &:active {
              transform: rotate(180deg);
            }
          }
        }
        .checkListBox {
          .checkList {
            display: flex;
            margin-bottom: 30px;
            .__list {
              .icon {
                cursor: pointer;
                background-color: #ffffff;
                border: 1px solid #cccccc;
                border-radius: 50px;
                box-sizing: border-box;
                position: absolute;
                left: 0;
                margin-top: 5px;
                height: 20px;
                width: 20px;
                &::before {
                  background-image: url("/checkbox.png");
                  background-repeat: no-repeat;
                  background-position: 0 0;
                  background-size: 13px auto;
                  content: "";
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  margin: -5px 0 0 -7px;
                  height: 10px;
                  width: 13px;
                }
                &:active {
                  background: green;
                  color: #fff;
                }
              }
              > input {
                margin-right: 20px;
                opacity: 0;
              }
            }
            .arrow {
              position: absolute;
              right: 0;
              cursor: pointer;
              &:active {
                transform: rotate(180deg);
              }
            }
          }
        }
      }
      .signUpBtn {
        display: flex;
        justify-content: center;
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 400px;
          height: 45px;
          border-radius: 20px;
          border: 1px solid #333;
          background: #333;
          color: #fff;
          outline: none;
          &:hover {
            background: #fff;
            color: #333;
          }
        }
      }
    }
  }
</style>