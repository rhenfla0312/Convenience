<script>
import axios from 'axios'
export default {
  data() {
    return {
      AllChecked : false,
      oneChecked: false,
      twoChecked: false,
      threeChecked: false,
      fourChecked: false,
      fiveChecked: false,
      sixChecked: false,

      // arrow
      oneArrow: false,
      twoArrow: false,
      threeArrow: false,
      fourArrow: false,
      fiveArrow: false,
      sixArrow: false,
    }
  },
  methods: {
    // checked
    Allchecked() {
      // this.AllChecked = !this.AllChecked
      alert("전체선택 문제발생")
    },
    oneCheckeds() {
      this.oneChecked = !this.oneChecked
    },
    twoCheckeds() {
      this.twoChecked = !this.twoChecked
    },
    threeCheckeds() {
      this.threeChecked = !this.threeChecked
    },
    fourCheckeds() {
      this.fourChecked = !this.fourChecked
    },
    fiveCheckeds() {
      this.fiveChecked = !this.fiveChecked
    },
    sixCheckeds() {
      this.sixChecked = !this.sixChecked
    },

    // arrow
    oneArrows() {
      this.oneArrow = !this.oneArrow
    },
    twoArrows() {
      this.twoArrow = !this.twoArrow
    },
    threeArrows() {
      this.threeArrow = !this.threeArrow
    },
    fourArrows() {
      this.fourArrow = !this.fourArrow
    },
    fiveArrows() {
      this.fiveArrow = !this.fiveArrow
    },
    sixArrows() {
      this.sixArrow = !this.sixArrow
    },
  }
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
            <input type="checkbox" class="check" id="all" name="allCheckbox">
          </div>
          <i class="circle" @click="Allchecked" :class="{ checked : AllChecked }"></i>
          <label for="all" class="allName">전체동의</label>
        </div>
        <!-- bodyAllCheckBox -->
        <div class="checkListBox">
          <div class="listBox">
            <div class="checkList">
              <div class="__list">
                <input type="checkbox" id="one" name="checkbox">
              </div>
              <i class="circle" @click="oneCheckeds()" :class="{ checked : AllChecked, oneChecked }"></i>
              <label for="one" class="__name">멤버십 서비스</label>
              <span class="material-symbols-outlined arrow" @click="oneArrows()" :class="{ oneArrow }">expand_more</span>
            </div>
            <div class="testList__one" :class="{ oneArrow }">
              <div class="Listitem">
                <div class="itemName">이용약관</div>
                <span class="material-symbols-outlined arrow">expand_more</span>
              </div>
              <div class="Listitem">
                <div class="itemName">이용약관</div>
                <span class="material-symbols-outlined arrow">expand_more</span>
              </div>
            </div>
          </div>
          <div class="listBox">
            <div class="checkList">
              <div class="__list">
                <input type="checkbox" id="two" name="checkbox">
              </div>
              <i class="circle" @click="twoCheckeds()" :class="{ checked : AllChecked, twoChecked }"></i>
              <label for="id" class="__name">꿀조합 이용약관 동의</label>
              <span class="material-symbols-outlined arrow" @click="twoArrows()" :class="{ twoArrow }">expand_more</span>
            </div>
            <div class="testList__two" :class="{ twoArrow }">
              <div class="Listitem">
                <div class="itemName">이용약관</div>
                <span class="material-symbols-outlined arrow">expand_more</span>
              </div>
              <div class="Listitem">
                <div class="itemName">이용약관</div>
                <span class="material-symbols-outlined arrow">expand_more</span>
              </div>
            </div>
          </div>
          <div class="listBox">
            <div class="checkList">
              <div class="__list">
                <input type="checkbox" id="three" name="checkbox">
              </div>
              <i class="circle" @click="threeCheckeds()" :class="{ checked : AllChecked, threeChecked }"></i>
              <label for="three" class="__name">위치기반 서비스 이용약관</label>
              <span class="material-symbols-outlined arrow" @click="threeArrows()" :class="{ threeArrow }">expand_more</span>
            </div>
            <div class="testList__three" :class="{ threeArrow }">
              <div class="Listitem">
                <div class="itemName">이용약관</div>
                <span class="material-symbols-outlined arrow">expand_more</span>
              </div>
              <div class="Listitem">
                <div class="itemName">이용약관</div>
                <span class="material-symbols-outlined arrow">expand_more</span>
              </div>
            </div>
          </div>
          <div class="listBox">
            <div class="checkList">
              <div class="__list">
                <input type="checkbox" id="four" name="checkbox">
              </div>
              <i class="circle" @click="fourCheckeds()" :class="{ checked : AllChecked, fourChecked }"></i>
              <label for="four" class="__name">개인정보 수집이용동의</label>
              <span class="material-symbols-outlined arrow" @click="fourArrows()" :class="{ fourArrow }">expand_more</span>
            </div>
            <div class="testList__four" :class="{ fourArrow }">
              <div class="Listitem">
                <div class="itemName">이용약관</div>
                <span class="material-symbols-outlined arrow">expand_more</span>
              </div>
              <div class="Listitem">
                <div class="itemName">이용약관</div>
                <span class="material-symbols-outlined arrow">expand_more</span>
              </div>
            </div>
          </div>
          <div class="listBox">
            <div class="checkList">
              <div class="__list">
                <input type="checkbox" id="five" name="checkbox">
              </div>
              <i class="circle" @click="fiveCheckeds()" :class="{ checked : AllChecked, fiveChecked }"></i>
              <label for="five" class="__name">마케팅 정보 수신 동의</label>
              <span class="material-symbols-outlined arrow" @click="fiveArrows()" :class="{ fiveArrow }">expand_more</span>
            </div>
            <div class="testList__five" :class="{ fiveArrow }">
              <div class="Listitem">
                <div class="itemName">이용약관</div>
                <span class="material-symbols-outlined arrow">expand_more</span>
              </div>
              <div class="Listitem">
                <div class="itemName">이용약관</div>
                <span class="material-symbols-outlined arrow">expand_more</span>
              </div>
            </div>
          </div>
          <div class="listBox">
            <div class="checkList">
              <div class="__list">
                <input type="checkbox" id="six" name="checkbox">
              </div>
              <i class="circle" @click="sixCheckeds()" :class="{ checked : AllChecked, sixChecked }"></i>
              <label for="six" class="__name">휴대폰 본인인증 서비스</label>
              <span class="material-symbols-outlined arrow" @click="sixArrows()" :class="{ sixArrow }">expand_more</span>
            </div>
            <div class="testList__six" :class="{ sixArrow }">
              <div class="Listitem">
                <div class="itemName">이용약관</div>
                <span class="material-symbols-outlined arrow">expand_more</span>
              </div>
              <div class="Listitem">
                <div class="itemName">이용약관</div>
                <span class="material-symbols-outlined arrow">expand_more</span>
              </div>
            </div>
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
    // min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .signUp__name {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      line-height: 3;
    }
    .signUp__main {
      width: 600px;
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
          .allName {
            margin-left: 20px;
          }
          .circle {
            display: inline-block; 
            width: 20px; height: 20px;
            border: 2px solid #333;
            box-sizing: border-box;
            border-radius: 10px;
            position: relative; top: 4px;
            cursor: pointer;
            &::after {
              content: '\2714'; /* 체크박스 특수문자 */
              font-size: 24px; color: #333;
              position: absolute; 
              top: -14px; 
              left: 0;
              opacity: 0; /* 처음엔 안보이게 처리 */
              transition: 0.2s;
            }
          }
          .circle.checked {
            display: inline-block; 
            width: 20px; height: 20px;
            border: 2px solid #333;
            box-sizing: border-box;
            border-radius: 10px; 
            position: relative; top: 4px;
            cursor: pointer;
            &::after {
              content: '\2714'; /* 체크박스 특수문자 */
              font-size: 24px; color: #333;
              position: absolute; 
              top: -14px; 
              left: -4px;
              opacity: 1; /* 처음엔 안보이게 처리 */
              transition: 0.2s;
            }
          }
          .allBox {
            position: absolute;
            > input {
              margin-right: 20px;
              opacity: 0;
            }
          }
        }
        .checkListBox {
          .listBox {
            .checkList {
              display: flex;
              margin-bottom: 30px;
              .__list {
                position: absolute;
                > input {
                  margin-right: 20px;
                  opacity: 0;
                }
              }
              .arrow {
                position: absolute;
                right: 0;
                transition: .5s;
                cursor: pointer;
              }
              .arrow.oneArrow {
                transform: rotate(180deg);
                transition: .5s;
              }
              .arrow.twoArrow {
                transform: rotate(180deg);
                transition: .5s;
              }
              .arrow.threeArrow {
                transform: rotate(180deg);
                transition: .5s;
              }
              .arrow.fourArrow {
                transform: rotate(180deg);
                transition: .5s;
              }
              .arrow.fiveArrow {
                transform: rotate(180deg);
                transition: .5s;
              }
              .arrow.sixArrow {
                transform: rotate(180deg);
                transition: .5s;
              }
              .circle {
                display: inline-block; 
                width: 20px; height: 20px;
                border: 2px solid #333;
                box-sizing: border-box;
                border-radius: 10px; 
                position: relative; top: 4px;
                cursor: pointer;
                &::after {
                  content: '\2714'; /* 체크박스 특수문자 */
                  font-size: 24px; color: #333;
                  position: absolute; 
                  top: -14px; 
                  left: -4px;
                  opacity: 0; /* 처음엔 안보이게 처리 */
                  transition: 0.2s;
                }
              }
              .circle.checked {
                display: inline-block; 
                width: 20px; height: 20px;
                border: 2px solid #333;
                box-sizing: border-box;
                border-radius: 10px; 
                position: relative; top: 4px;
                cursor: pointer;
                &::after {
                  content: '\2714'; /* 체크박스 특수문자 */
                  font-size: 24px; color: #333;
                  position: absolute; 
                  top: -14px; 
                  left: -4px;
                  opacity: 1; /* 처음엔 안보이게 처리 */
                  transition: 0.2s;
                }
              }
              .circle.oneChecked {
                &::after {
                  opacity: 1; /* 처음엔 안보이게 처리 */
                  transition: 0.2s;
                  position: absolute; 
                  top: -14px; 
                  left: -4px;
                }
              }
              .circle.twoChecked {
                &::after {
                  opacity: 1; /* 처음엔 안보이게 처리 */
                  transition: 0.2s;
                  position: absolute; 
                  top: -14px; 
                  left: -4px;
                }
              }
              .circle.threeChecked {
                &::after {
                  opacity: 1; /* 처음엔 안보이게 처리 */
                  transition: 0.2s;
                  position: absolute; 
                  top: -14px; 
                  left: -4px;
                }
              }
              .circle.fourChecked {
                &::after {
                  opacity: 1; /* 처음엔 안보이게 처리 */
                  transition: 0.2s;
                  position: absolute; 
                  top: -14px; 
                  left: -4px;
                }
              }
              .circle.fiveChecked {
                &::after {
                  opacity: 1; /* 처음엔 안보이게 처리 */
                  transition: 0.2s;
                  position: absolute; 
                  top: -14px; 
                  left: -4px;
                }
              }
              .circle.sixChecked {
                &::after {
                  opacity: 1; /* 처음엔 안보이게 처리 */
                  transition: 0.2s;
                  position: absolute; 
                  top: -14px; 
                  left: -4px;
                }
              }
              .__name {
                margin-left: 20px;
              }
            }
            .testList__one {
              display: none;
              transition: .5s;
              margin-bottom: 25px;
              margin-left: 30px;
              font-size: 17px;
              .Listitem {
                cursor: pointer;
                position: relative;
                display: flex;
                padding: 5px 0;
                .arrow {
                  transform: rotate(270deg);
                  position: absolute;
                  right: 0;
                }
                &:hover {
                  border-bottom: 2px solid #333;
                }
              }
            }
            .testList__one.oneArrow {
              transition: .5s;
              display: block;
            }
            .testList__two {
              display: none;
              transition: .5s;
              margin-bottom: 25px;
              margin-left: 30px;
              font-size: 17px;
              .Listitem {
                position: relative;
                display: flex;
                padding: 5px 0;
                cursor: pointer;
                .arrow {
                  transform: rotate(270deg);
                  position: absolute;
                  right: 0;
                }
                &:hover {
                  border-bottom: 2px solid #333;
                }
              }
            }
            .testList__two.twoArrow {
              transition: .5s;
              display: block;
            }
            .testList__three {
              display: none;
              transition: .5s;
              margin-bottom: 25px;
              margin-left: 30px;
              font-size: 17px;
              .Listitem {
                position: relative;
                display: flex;
                padding: 5px 0;
                cursor: pointer;
                .arrow {
                  transform: rotate(270deg);
                  position: absolute;
                  right: 0;
                }
                &:hover {
                  border-bottom: 2px solid #333;
                }
              }
            }
            .testList__three.threeArrow {
              transition: .5s;
              display: block;
            }
            .testList__four {
              display: none;
              transition: .5s;
              margin-bottom: 25px;
              margin-left: 30px;
              font-size: 17px;
              .Listitem {
                position: relative;
                display: flex;
                padding: 5px 0;
                cursor: pointer;
                .arrow {
                  transform: rotate(270deg);
                  position: absolute;
                  right: 0;
                }
                &:hover {
                  border-bottom: 2px solid #333;
                }
              }
            }
            .testList__four.fourArrow {
              transition: .5s;
              display: block;
            }
            .testList__five {
              display: none;
              transition: .5s;
              margin-bottom: 25px;
              margin-left: 30px;
              font-size: 17px;
              .Listitem {
                position: relative;
                display: flex;
                padding: 5px 0;
                cursor: pointer;
                .arrow {
                  transform: rotate(270deg);
                  position: absolute;
                  right: 0;
                }
                &:hover {
                  border-bottom: 2px solid #333;
                }
              }
            }
            .testList__five.fiveArrow {
              transition: .5s;
              display: block;
            }
            .testList__six {
              display: none;
              transition: .5s;
              margin-bottom: 25px;
              margin-left: 30px;
              font-size: 17px;
              .Listitem {
                position: relative;
                display: flex;
                padding: 5px 0;
                cursor: pointer;
                .arrow {
                  transform: rotate(270deg);
                  position: absolute;
                  right: 0;
                }
                &:hover {
                  border-bottom: 2px solid #333;
                }
              }
            }
            .testList__six.sixArrow {
              transition: .5s;
              display: block;
            }
          }
        }
      }
      .signUpBtn {
        margin-bottom: 53px;
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