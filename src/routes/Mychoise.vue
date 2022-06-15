<script>
import axios from 'axios'
export default {
  data() {
    return {
      cuData: false
    }
  },
  methods: {
    cuClick() {
      this.cuData = true
        axios.get("http://54.180.193.83:8081/objects/",{
          params: {
            data: "CU"
          }
        }).then((res) => {
          console.log(res)
        }).catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>


<template>
  <div class="mychoise">
    <div class="mychoise__inner">
    <div class="mychoise__name">나만의 조합</div>
      <div class="mychoise__menu">
        <!-- title -->
        <div class="mycohise_title">
          <div class="__title">제목</div>
          <div class="title__input">
            <input type="text" />
          </div>
        </div>
        <!-- alias -->
        <div class="mychoise__alias">
          <div class="__alias">닉네임</div>
          <div class="alias__input">
            <input type="text" />
          </div>
        </div>
        <!-- 조합아이템 -->
        <div class="mychoise__itemBox">
          <div class="__itemName">조합아이템</div>
          <div class="__itemMenu">
            <div @click="cuClick" class="cu menu">CU</div>
            <div class="gs menu">GS25</div>
            <div class="ministop menu">MINISTOP</div>
          </div>
          <div class="__items">
            <label class="__item">
              <input id="" type="checkbox">
            </label>
          </div>
        </div>
        <!-- description -->
        <div class="mychoise__description">
          <div class="__title">설명</div>
          <div class="__description">
            나만의조합은 편의점에서 먹어봤던 본인만의 최고의 조합을 사람들한테 알려주기 위해 만들어진 페이지입니다.<br>
            본인이 알고있는 조합 및 새로운조합을 만들어 다른 유저들과 공유해주세요.
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
  .mychoise {
    position: relative;
    top: 125px;
    // height: 700px;
    padding: 0 0 80px 0;
    // min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .mychoise__inner {
      width: 1200px;
      margin: auto;
      position: relative;
      .mychoise__name {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        line-height: 3;
      }
      .mychoise__menu {
        position: relative;
        height: 1000px;
        border: 1px solid #333;
        border-radius: 20px;
        .mycohise_title {
          margin-top: 30px;
          text-align: center;
          .__title {
            font-size: 25px;
            font-weight: bold;
          }
          .title__input {
            margin-top: 10px;
            input {
              width: 500px;
              border-radius: 10px;
              border: 1px solid #333;
              outline: none;
              padding: 5px;
              &:focus {
                border: 2px solid #333;
              }
            }
          }
        }
        .mychoise__alias {
          margin-top: 30px;
          text-align: center;
          .__alias {
            font-size: 25px;
            font-weight: bold;
          }
          .alias__input {
            margin-top: 10px;
            input {
              width: 500px;
              border-radius: 10px;
              border: 1px solid #333;
              outline: none;
              padding: 5px;
              &:focus {
                border: 2px solid #333;
              }
            }
          }
        }
        .mychoise__itemBox {
          text-align: center;
          margin-top: 30px;
          .__itemName {
            font-size: 25px;
            font-weight: bold;
          }
          .__itemMenu {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            .menu {
              cursor: pointer;
              margin-left: 60px;
              margin-right: 10px;
              &:hover {
                font-weight: bold;
              }
            }
          }
          .__items {
            width: 700px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(4,1fr);
            .__item {
              position: relative;
              height: 150px;
              background: #333;
              border-radius: 20px;
              margin: 15px;
              &:hover {
                border: 2px solid #1de9b6;
              }
            }
          }
        }
        .mychoise__description {
          position: absolute;
          width: 100%;
          height: 150px;
          text-align: center;
          background: #bdbdbd;
          bottom: 0;
          border-radius: 0 0 19px 19px;
          .__title {
            font-size: 20px;
            margin-top: 30px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
</style>