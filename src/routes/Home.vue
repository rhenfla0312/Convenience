<script>
import axios from 'axios'
export default {
  data() {
    return {
      datas : ['1','2','3','4','5','6','7','8'],
      Loading : false,
      bestDatas : [],
      scrollTop : 0,
      scrollBtn : false
    }
  },
  methods : {
    loginCheck() {
      if(!localStorage.getItem('name')) {
        alert("로그인 후 사용할 수 있는 서비스 입니다.")
        this.$router.push('/login')
      } 
    },
    searchData() {
      localStorage.setItem('search__data', "")
    },
    handleScroll(event) {
      this.scrollTop = event.path[1].scrollY
      if(this.scrollTop > 400) {
        this.scrollBtn = true
      } else {
        this.scrollBtn = false
      }
    },
    handleScrollBtn() {
      window.scrollTo(0, 0);
    },
    bestRankingPage() {
      this.$router.push('/bestRanking')
    }
  },
  mounted() {
    axios.get("http://54.180.193.83:8081/best/")
    .then((res) => {
      console.log(res)
      this.bestDatas = res.data.results.slice(0,8)
      this.Loading = true
    }).catch((error) => {
      console.log(error)
    })
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<template>
  <div class="home">
    <div class="home__main">
      <div class="inner">
        <div class="first__slider">
          <div class="innerBox">
            <div class="titleBox">
              <div class="__name">새로운 조합을 찾으세요</div>
              <div class="__text">
                내가 만든 조합을 유저들과 공유해주세요
              </div>
              <RouterLink to="/myChoise" @click="loginCheck(), searchData()" class="__btn">조합만들기</RouterLink>
            </div>
            <div class="imgBox"></div>
            <div class="imgBox2"></div>
          </div>
        </div>
        <div class="second__slider">
          <div class="innerBox">
            <div class="imgBox"></div>
            <div class="titleBox">
              <div class="__name">편의점 이벤트목록을 확인하세요</div>
              <div class="__text">
                유명브랜드의 편의점에서 현재 이벤트하는 상품을 볼 수 있습니다
              </div>
              <RouterLink to="/convenience/cu" class="__btn">이벤트상품보기</RouterLink>
            </div>
          </div>
        </div>
        <div class="thred__slider">
        <div class="innerBox">
          <div class="__name">이달의 조합</div>
            <div class="__text">
              <div class="__item" v-for="(bestData,index) in bestDatas" :key="bestData" @click="bestRankingPage()">
                <div class="itemBox">
                  <img src="../../public/one.png" v-if="index == 0" class="first" />
                  <img src="../../public/two.png" v-if="index == 1" class="second" />
                  <img src="../../public/three.png" v-if="index == 2" class="thred" />
                  <div class="itemHead">{{ index + 1 }}</div>
                  <img :src="`/DRF/media/${bestData.a[0].image}`" alt="" class="best__img" />
                  <div class="item __title">제목 : {{ bestData.title }}</div>
                  <div class="item __name">닉네임 : {{ bestData.nickname }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- scrollBtn -->
  <div class="scrollBtn" @click="handleScrollBtn" v-if="scrollBtn"><i class="fa-solid fa-arrow-up arrow"></i></div>
</template>
<style lang="scss">
a {
  text-decoration: none;
  color: #000;
}
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
      width: 100%;
      margin: auto;
      .first__slider {
        height: 810px;
        padding: 6rem 0;
        // padding-top: 24px;
        background-color: #FBF7F2;
        .innerBox {
          width: 1200px;
          height: 100%;
          position: relative;
          display: flex;
          margin: auto;
          .titleBox {
            position: absolute;
            top: 250px;
            .__name {
              font-size: 40px;
              font-weight: bold;
            }
            .__text {
              margin-top: 20px;
              font-size: 17px;
            }
            .__btn {
              margin-top: 20px;
              width: 160px;
              height: 55px;
              background-color: #e9ecef;
              color: #000;
              cursor: pointer;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 10px;
              font-size: 20px;
              font-weight: bold;
              &:hover {
                opacity: .8s;
              }
              &:active {
                box-shadow: inset -.3rem -.1rem 1.4rem  #FBFBFB, inset .3rem .4rem .8rem #BEC5D0; 
              }
            }
          }
          .imgBox {
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 7px 25px #00000014;
            height: 600px;
            width: 400px;
            position: absolute;
            right: 0;
            top: 50px;
            z-index: 100
          }
          .imgBox2 {
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 7px 25px #00000014;
            height: 600px;
            width: 400px;
            position: absolute;
            right: 100px;
            top: 0;
          }
        }
      }
      .second__slider {
        padding: 6rem 0;
        height: 810px;
        .innerBox {
          width: 1200px;
          height: 100%;
          position: relative;
          display: flex;
          margin: auto;
          .imgBox {
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 7px 25px #00000014;
            height: 600px;
            width: 400px;
            position: absolute;
            left: 0;
            top: 50px;
          }
          .titleBox {
            position: absolute;
            top: 250px;
            right: 0;
            .__name {
              font-size: 40px;
              font-weight: bold;
            }
            .__text {
              margin-top: 20px;
              font-size: 17px;
            }
            .__btn {
              margin-top: 20px;
              width: 180px;
              height: 55px;
              background-color: #e9ecef;
              color: #000;
              cursor: pointer;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 10px;
              font-size: 20px;
              font-weight: bold;
              &:hover {
                opacity: .8s;
              }
              &:active {
                box-shadow: inset -.3rem -.1rem 1.4rem  #FBFBFB, inset .3rem .4rem .8rem #BEC5D0; 
              }
            }
          }
        }
      }
      .thred__slider {
        background-color: #E6F3E6;
        padding: 6rem 0;
        .innerBox {
          width: 1200px;
          height: 100%;
          position: relative;
          margin: auto;
          .__name {
            text-align: center;
            font-size: 35px;
            font-weight: bold;
          }
          .__text {
            margin-top: 30px;
            width: 100%;
            padding: 20px;
            background: #fff;
            box-shadow: 0 7px 25px rgba(0,0,0,0.08);
            border-radius: 10px;
            width: 100%;
            display: grid;
            grid-gap: 50px;
            grid-template-columns: repeat(4, 1fr);
            .__item {
              position: relative;
              padding: 20px;
              width:  250px;
              height: 280px;
              box-shadow: 0 7px 25px rgba(0,0,0,0.08);
              border-radius: 10px;
              background-image: url('../../public/background.png');
              background-size: 100%;
              background-position: center;
              background-repeat: no-repeat;
              text-align: center;
              cursor: pointer;
              transition: .2s;
              .itemHead {
                text-align: center;
                font-size: 25px;
                border-bottom: 1px solid #dddddd;
              }
              .item {
                display: flex;
                justify-content: center;
                align-items: center;
                overflow : hidden;
                white-space : nowrap;
                text-overflow: ellipsis;
                font-size: 20px;
                font-weight: unset;
              }
              .__title {
                font-size: 20px;
              }
              &:hover {
                border: 5px solid transparent;
              }
              .first {
                position: absolute;
                width: 145px;
                left: 54px;
                top: 2px;
              }
              .second {
                position: absolute;
                top: 6px;
                width: 150px;
                left: 50px;
              }
              .thred {
                position: absolute;
                top: 6px;
                width: 150px;
                left: 53px;
              }
              .best__img {
                width: 140px;
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
}
.scrollBtn {
  position: fixed;
  right: 50px;
  bottom: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 7px 25px #00000014;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .arrow {
    font-size: 20px;
  }
}
</style>