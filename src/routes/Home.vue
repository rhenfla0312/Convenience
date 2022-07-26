<script>
export default {
  data() {
    return {
      datas : ['신라면','신라면','신라면','신라면','신라면','신라면','신라면','신라면']
    }
  }
}
</script>

<template>
  <div class="home">
    <!-- <div class="home__name">메인페이지 리모델링중</div> -->
    <div class="home__main">
      <div class="inner">
        <div class="first__slider">
          <div class="slider__img">
            <img src="../../public/foodBackground.jpg" alt="">
          </div>
          <div class="slider__btn">
            <div class="__btn">꿀조합 소개</div>
            <div class="__btn">추천 조합</div>
            <div class="__btn">이벤트 상품</div>
            <div class="__btn">고객센터</div>
          </div>
        </div>
        <div class="second__slider">
          <div class="__name">꿀조합 소개</div>
          <div class="__text">
            <p>BestChoise는 편의점에서 판매하는 상품을 조합하여새로운 맛을 발견하는 사이트입니다.</p>
            <p>진열되어있는 상품들의 맛을 생각하여 각각의 맛있는 조합들을 발견해 유저들과 공유해주세요</p>
          </div>
        </div>
        <div class="thred__slider">
          <div class="__name">추천 조합</div>
          <div class="__text">
            <div class="__item" v-for="data in datas" :key="data">
              <div class="itemBox">
                <img class="__img" />
                <div class="item__name"></div>
                <div class="item__price"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="ford__slider">
        <div class="__name">이벤트 상품</div>
          <div class="__text">
            <div class="__item" v-for="data in datas" :key="data">
              <div class="itemBox">
                <img class="__img" />
                <div class="item__name"></div>
                <div class="item__price"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.home {
  position: relative;
  top: 125px;
  .home__name {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    line-height: 3;
  }
  .home__main {
    .inner {
      margin: auto;
      width: 1100px;
      text-align: center;
      .first__slider {
        display: flex;
        .slider__img {
          img {
            width: 800px;
          }
        }
        .slider__btn {
          font-size: 20px;
          .__btn {
            width: 300px;
            height: 112.4px;
            cursor: pointer;
            display: flex;
            box-shadow: 0 7px 25px #00000014;
            justify-content: center;
            align-items: center;
            &:active {
              box-shadow: inset -.3rem -.1rem 1.4rem  #FBFBFB, inset .3rem .4rem .8rem #BEC5D0;
            }
          }
        }
      }
      .second__slider {
        margin-top: 100px;
        .__name {
          font-size: 20px;
          font-weight: bold;
        }
        .__text {
          margin: 15px;
          margin-top: 30px;
          padding: 50px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 7px 25px #00000014;
        }
      }
      .thred__slider,
      .ford__slider {
        margin-top: 100px;
        .__name {
          font-size: 20px;
          font-weight: bold;
        }
        .__text {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-top: 30px;
          .__item {
            position: relative;
            height: 340px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 7px 25px #00000014;
            cursor: pointer;
            transition: .3s;
            margin: 15px;
            // padding: 50px 10px 50px 10px;
            .itemBox {
              text-align: center;
              .item__type {
                position: absolute;
                right: 20px;
                top: 10px;
                padding: 0 12px;
                text-align: center;
                background-image: linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%);
                font-size: 14px;
                color: #000;
                font-weight: bold;
                border-radius: 10px;
              }
              .__img {
                display: flex;
                justify-content: center;
                align-items: center;
                background: #fff;
                // padding: 30px;
                // width: 206px;
                height: 206px;
                border-radius: 10px;
                margin-top: 35px;
              }
              .item__name {
                margin-top: 10px;
              }
              .item__price {
                margin-top: 5px;
              }
            }
            .eventItemBox {
              display: block !important;
              position: absolute;
              z-index: 10;
              top: 0;
              right: 0;
            }
            // 스켈레톤 UI
            .skeletons_itemBox {
              background: #e0e0e0;
              // width: 206px;
              height: 206px;
              border-radius: 10px;
              margin: 12px;
              animation: skeletons_itemBox 1.8s infinite ease-in-out;
              @keyframes skeletons_itemBox {
                0% {
                  background-color: rgba(165, 165, 165, 0.1);
                }
                50% {
                  background-color: rgba(165, 165, 165, 0.3);
                }
                100% {
                  background-color: rgba(165, 165, 165, 0.1);
                }
              }
            }
            .skeletons_textBox {
              background: #e0e0e0;
              // width: 206px;
              height: 95px;
              border-radius: 10px;
              margin: 12px;
              animation: skeletons_textBox 1.8s infinite ease-in-out;
              @keyframes skeletons_textBox {
                0% {
                  background-color: rgba(165, 165, 165, 0.1);
                }
                50% {
                  background-color: rgba(165, 165, 165, 0.3);
                }
                100% {
                  background-color: rgba(165, 165, 165, 0.1);
                }
              }
            }
            &:hover {
              border: 5px solid transparent;
              box-sizing: border-box;
            }
          }
        }
      } 
    }
  }
}
</style>