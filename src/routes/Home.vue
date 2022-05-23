<script>
// swiper
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      // swiper-item
      swiperItems: [
        { name: '튀김)삼복치킨', img: '../../static/item1.jpg'},
        { name: '튀김)휴게소소시지바', img: '../../static/item2.jpeg'},
        { name: '롯데푸드)빽다방옥수수콘', img: '../../static/item3.jpeg'},
        { name: '하겐)가나슈파인트', img: '../../static/item4.jpeg'},
        { name: '롯)칠성사이다복숭아P500', img: '../../static/item5.jpeg'},
        { name: 'HEYROO콘칩매콤달콤한맛', img: '../../static/item6.jpeg'},
      ],
      // swiper-event-item
      swiperEventItems: [
        { name: '켈로그)첵스초코', img: '../../static/itemEvent1.jpg'},
        { name: '남양)로스터돌체라떼', img: '../../static/itemEvent2.jpg'},
        { name: '해태)자유시간초콜릿바', img: '../../static/itemEvent3.jpg'},
        { name: '롯데)죠스바', img: '../../static/itemEvent4.jpg'},
        { name: '코카)스프라이트', img: '../../static/itemEvent5.jpg'},
        { name: '푸르밀)가나쵸코우유', img: '../../static/itemEvent6.jpg'},
      ],

      swiperItemsOptions: {
        autoplay: {
          // 2초마다 자동넘기기
          delay: 3000,
          // 중간에 직접 클릭으로 넘겨도 그 후로 다시 자동재생
          disableOnInteraction: false
        },
        loop: true,
        centeredSlides: true,
        slidesPerView: 4,
        navigation: true,
        pagination: { clickable: true }
      },
      swiperItemsEventOptions: {
        autoplay: {
          // 2초마다 자동넘기기
          delay: 1000,
          // 중간에 직접 클릭으로 넘겨도 그 후로 다시 자동재생
          disableOnInteraction: false
        },
        loop: true,
        centeredSlides: true,
        slidesPerView: 4,
        navigation : true,
        pagination: { clickable: true }
      },

      isActive_1 : true,
      isActive_2 : true,
      isActive_3 : true,
    } 
  },
  methods: {
    // 슬라이드할때 실행할 메소드 정의
    onSwiper(swiper) {
      // console.log(swiper)
    },
    // 슬라이드 될때마다 실행
    onSlideChange() {
      // console.log('slide change')
    },

    toggleBtn_1() {
      this.isActive_1 = !this.isActive_1
    },
    toggleBtn_2() {
      this.isActive_2 = !this.isActive_2
    },
    toggleBtn_3() {
      this.isActive_3 = !this.isActive_3
    }
  },
};
</script>


<template>
  <div class="swiper">
    <div class="swiper__item__name">이달의 상품</div>
    <!-- item -->
    <!-- <swiper class="swipers" :loop="loop" :autoplay="autoplay" :slides-per-view="4" navigation :pagination="{ clickable: true }" @swiper="onSwiper" @slideChange="onSlideChange">  -->
    <swiper class="swipers" v-bind="swiperItemsOptions"> 
      <swiper-slide class="swiper-items" v-for="swiperItem in swiperItems" :key="swiperItem">
        <div class="item-box">
          <div class="image">
            <img :src="swiperItem.img" :alt="swiperItem.img" />
          </div>
          <div class="text">{{ swiperItem.name }}</div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="swiper-item">
      <!-- badge -->
      <!-- left -->
      <div class="badge_1">
        <span>1+1</span>
      </div>
      <div class="badge_2">
        <span>2+1</span>
      </div>
      <div class="badge_3">
        <span>1+1</span>
      </div>
      <div class="badge_4">
        <span>2+1</span>
      </div>
      <div class="badge_5">
        <span>1+1</span>
      </div>
      <!-- right -->
      <div class="badge_6">
        <span>1+1</span>
      </div>
      <div class="badge_7">
        <span>2+1</span>
      </div>
      <div class="badge_8">
        <span>1+1</span>
      </div>
      <div class="badge_9">
        <span>2+1</span>
      </div>
      <div class="badge_10">
        <span>1+1</span>
      </div>

      <div class="inner">
        <div class="swiper__item__name">이달의 이벤트</div>
        <!-- event-item -->
        <!-- <swiper class="swipers" :loop="loop" :autoplay="autoplay" :slides-per-view="6" navigation :pagination="{ clickable: true }" @swiper="onSwiper" @slideChange="onSlideChange">  -->
        <swiper class="swipers" v-bind="swiperItemsEventOptions"> 
          <swiper-slide class="swiper-items" v-for="swiperEventItem in swiperEventItems" :key="swiperEventItem">
          <div class="item-box">
            <div class="image">
              <img :src="swiperEventItem.img" :alt="swiperEventItem.img" />
            </div>
            <div class="text">{{ swiperEventItem.name }}</div>
          </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!-- section -->
    <div class="section">
      <div class="toggleBox_1" :class="{ active: isActive_1 }">
        <div class="content_1">
          <div class="name">Heading...</div>
          <p class="text">Lorem ipsum dolor sit, amet consectetur
                          adipisicing elit.Cum mecessitatibus ab fuga
                          officils inventore molestias quod odio eius animi?
                          Ipsa sit atque obcaeati quae consequuntur, qui
                          fugit itaque earum!</p>
        </div>
        <div class="toggleBtn_1" :class="{ active: isActive_1 }" @click="toggleBtn_1()"></div>
      </div>

      <div class="toggleBox_2" :class="{ active: isActive_2 }">
        <div class="content_2">
          <div class="name">Heading...</div>
          <p class="text">Lorem ipsum dolor sit, amet consectetur
                          adipisicing elit.Cum mecessitatibus ab fuga
                          officils inventore molestias quod odio eius animi?
                          Ipsa sit atque obcaeati quae consequuntur, qui
                          fugit itaque earum!</p>
        </div>
        <div class="toggleBtn_2" :class="{ active: isActive_2 }" @click="toggleBtn_2()"></div>
      </div>

      <div class="toggleBox_3" :class="{ active: isActive_3 }">
        <div class="content_3">
          <div class="name">Heading...</div>
          <p class="text">Lorem ipsum dolor sit, amet consectetur
                          adipisicing elit.Cum mecessitatibus ab fuga
                          officils inventore molestias quod odio eius animi?
                          Ipsa sit atque obcaeati quae consequuntur, qui
                          fugit itaque earum!</p>
        </div>
        <div class="toggleBtn_3" :class="{ active: isActive_3 }" @click="toggleBtn_3()"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.swiper {
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  position: relative;
  top: 125px;
  .swiper__item__name {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    line-height: 3;
  }
  .swipers {
    background: #fff;
    height: 400px;
    text-align: center;
    .swiper-items {
      position: relative;
      .item-box {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        border: 3px solid #dddddd;
        box-sizing: border-box;
        border-radius: 30px;
        width: 400px;
        height: 300px;
        .image {
          > img {
            width: 250px;
          }
        }
        .text {
          font-size: 20px;
          font-weight: bold;
        }
        &:hover {
          border: 5px solid #dddddd;
          box-sizing: border-box;
          cursor: pointer;
        }
      }
    }
  }
  .swiper-item {
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    margin-top:100px;
    width: 100%;
    height: 500px;
    position: relative;
    // badge
    .badge_1 {
      position: absolute;
      left: 100px;
      transform: rotate(-30deg);
      border: 1px solid #dddddd;
      border-radius: 20px;
      padding: 5px 10px;
      box-sizing: border-box;
      background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
      color: #fff;
      > span {
        font-size: 20px;
        font-weight: bold;
      }
      // 애니메이션
      animation:ani 1s infinite alternate;  
      @keyframes ani{
        0%{transform:translate(0,0);}
        100%{transform:translate(0,30px);}
      }  
    }
    .badge_2 {
      position: absolute;
      left: 200px;
      top: 150px;
      transform: rotate(30deg);
      border: 1px solid #dddddd;
      border-radius: 20px;
      padding: 5px 10px;
      box-sizing: border-box;
      background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
      color: #fff;
      > span {
        font-size: 20px;
        font-weight: bold;
      }
      // 애니메이션
      animation:ani 1s infinite alternate;  
      @keyframes ani{
        0%{transform:translate(0,0);}
        100%{transform:translate(0,30px);}
      }  
    }
    .badge_3 {
      position: absolute;
      left: 100px;
      bottom: 150px;
      transform: rotate(-20deg);
      border: 1px solid #dddddd;
      border-radius: 20px;
      padding: 5px 10px;
      box-sizing: border-box;
      background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
      color: #fff;
      > span {
        font-size: 20px;
        font-weight: bold;
      }
      // 애니메이션
      animation:ani 1s infinite alternate;  
      @keyframes ani{
        0%{transform:translate(0,0);}
        100%{transform:translate(0,30px);}
      }  
    }
    .badge_4 {
      position: absolute;
      left: 250px;
      bottom: 50px;
      transform: rotate(-35deg);
      border: 1px solid #dddddd;
      border-radius: 20px;
      padding: 5px 10px;
      box-sizing: border-box;
      background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
      color: #fff;
      > span {
        font-size: 20px;
        font-weight: bold;
      }
      // 애니메이션
      animation:ani 1s infinite alternate;  
      @keyframes ani{
        0%{transform:translate(0,0);}
        100%{transform:translate(0,30px);}
      }  
    }
    .badge_5 {
      position: absolute;
      left: 350px;
      transform: rotate(-20deg);
      border: 1px solid #dddddd;
      border-radius: 20px;
      padding: 5px 10px;
      box-sizing: border-box;
      background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);
      color: #fff;
      > span {
        font-size: 20px;
        font-weight: bold;
      }
      // 애니메이션
      animation:ani 1s infinite alternate;  
      @keyframes ani{
        0%{transform:translate(0,0);}
        100%{transform:translate(0,30px);}
      }  
    }
    .badge_6 {
      position: absolute;
      right: 100px;
      transform: rotate(-30deg);
      border: 1px solid #dddddd;
      border-radius: 20px;
      padding: 5px 10px;
      box-sizing: border-box;
      background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
      color: #fff;
      > span {
        font-size: 20px;
        font-weight: bold;
      }
      // 애니메이션
      animation:ani 1s infinite alternate;  
      @keyframes ani{
        0%{transform:translate(0,0);}
        100%{transform:translate(0,30px);}
      }  
    }
    .badge_7 {
      position: absolute;
      right: 200px;
      top: 150px;
      transform: rotate(30deg);
      border: 1px solid #dddddd;
      border-radius: 20px;
      padding: 5px 10px;
      box-sizing: border-box;
      background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
      color: #fff;
      > span {
        font-size: 20px;
        font-weight: bold;
      }
      // 애니메이션
      animation:ani 1s infinite alternate;  
      @keyframes ani{
        0%{transform:translate(0,0);}
        100%{transform:translate(0,30px);}
      }  
    }
    .badge_8 {
      position: absolute;
      right: 100px;
      bottom: 150px;
      transform: rotate(-20deg);
      border: 1px solid #dddddd;
      border-radius: 20px;
      padding: 5px 10px;
      box-sizing: border-box;
      background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
      color: #fff;
      > span {
        font-size: 20px;
        font-weight: bold;
      }
      // 애니메이션
      animation:ani 1s infinite alternate;  
      @keyframes ani{
        0%{transform:translate(0,0);}
        100%{transform:translate(0,30px);}
      }  
    }
    .badge_9 {
      position: absolute;
      right: 250px;
      bottom: 50px;
      transform: rotate(-35deg);
      border: 1px solid #dddddd;
      border-radius: 20px;
      padding: 5px 10px;
      box-sizing: border-box;
      background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);
      color: #fff;
      > span {
        font-size: 20px;
        font-weight: bold;
      }
      // 애니메이션
      animation:ani 1s infinite alternate;  
      @keyframes ani{
        0%{transform:translate(0,0);}
        100%{transform:translate(0,30px);}
      }  
    }
    .badge_10 {
      position: absolute;
      right: 350px;
      transform: rotate(-20deg);
      border: 1px solid #dddddd;
      border-radius: 20px;
      padding: 5px 10px;
      box-sizing: border-box;
      background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);
      color: #fff;
      > span {
        font-size: 20px;
        font-weight: bold;
      }
      // 애니메이션
      animation:ani 1s infinite alternate;  
      @keyframes ani{
        0%{transform:translate(0,0);}
        100%{transform:translate(0,30px);}
      }  
    }
    .inner {
      width: 1100px;
      height: 500px;
      position: relative;
      margin: auto;
      .swiper__item__name {
        font-size: 25px;
        font-weight: bold;
        text-align: center;
      }
      .swipers {
        background-color: #fff;
        height: 400px;
        text-align: center;
        border-radius: 40px;
        .swiper-items {
          position: relative;
          .item-box {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            border: 3px solid #dddddd;
            box-sizing: border-box;
            border-radius: 30px;
            width: 250px;
            height: 300px;
            .image {
              margin-top: 20px;
              > img {
                width: 200px;
              }
            }
            .text {
              font-size: 20px;
              font-weight: bold;
            }
            &:hover {
              border: 5px solid #dddddd;
              box-sizing: border-box;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  // section
  .section {
    margin-top:100px;
    width: 100%;
    height: 600px;
    position: relative;
    display: flex;
    justify-content: space-around;
    .toggleBox_1 {
      position: relative;
      width: 0px;
      height: 0px;
      background: #dddddd;
      border-radius: 25px;
      transition: 1s;
      display: flex;
      justify-content: center;
      align-items: center;
      &::before {
        content: '';
        position: absolute;
        width: 0px;
        height: 0px;
        background: #dddddd;
        transform: rotate(45deg);
        bottom: -15px;
        border-radius: 5px;
      }
      .toggleBtn_1 {
        position: absolute;
        min-width: 60px;
        height: 60px;
        background: #0bcf9c;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: -90px;
        transition: .5s;
        &::before {
          content: '+';
          position: absolute;
          bottom: 4px;
          font-size: 2.5em;
          color: #fff;
        }
      }
      .content_1 {
        padding: 30px;
        color: #000;
        min-width: 400px;
        opacity: 0;
      }
    }
    // 버튼 클릭시
    .toggleBox_1.active {
      position: relative;
      width: 400px;
      height: 400px;
      background-color: #E4E4E1;
      background-image: radial-gradient(at top center, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.03) 100%), linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(143,152,157,0.60) 100%);
      background-blend-mode: normal, multiply;
      border-radius: 25px;
      transition-delay: 0.5s;
      display: flex;
      justify-content: center;
      align-items: center;
      &::before {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: #dddddd;
        transform: rotate(45deg);
        transition-delay: 0.5s;
        bottom: -15px;
        border-radius: 5px;
      }
      .toggleBtn_1.active {
        bottom: -90px;
        transition: .5s;
        transform: rotate(135deg);
        background: #ff5a57;
      }
      .content_1 {
        padding: 30px;
        color: #000;
        min-width: 400px;
        opacity: 1;
        transition-delay: 1s;
        .name {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 40px;
        }
      }
    }
    
    .toggleBox_2 {
      position: relative;
      width: 0px;
      height: 0px;
      background: #dddddd;
      border-radius: 25px;
      transition: 1s;
      display: flex;
      justify-content: center;
      align-items: center;
      &::before {
        content: '';
        position: absolute;
        width: 0px;
        height: 0px;
        background: #dddddd;
        transform: rotate(45deg);
        bottom: -15px;
        border-radius: 5px;
      }
      .toggleBtn_2 {
        position: absolute;
        min-width: 60px;
        height: 60px;
        background: #0bcf9c;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: -90px;
        transition: .5s;
        &::before {
          content: '+';
          position: absolute;
          bottom: 4px;
          font-size: 2.5em;
          color: #fff;
        }
      }
      .content_2 {
        padding: 30px;
        color: #000;
        min-width: 400px;
        opacity: 0;
      }
    }
    // 버튼 클릭시
    .toggleBox_2.active {
      position: relative;
      width: 400px;
      height: 400px;
      // background: #dddddd;
      background-color: #E4E4E1;
      background-image: radial-gradient(at top center, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.03) 100%), linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(143,152,157,0.60) 100%);
      background-blend-mode: normal, multiply;
      border-radius: 25px;
      transition-delay: 0.5s;
      display: flex;
      justify-content: center;
      align-items: center;
      &::before {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: #dddddd;
        transform: rotate(45deg);
        transition-delay: 0.5s;
        bottom: -15px;
        border-radius: 5px;
      }
      .toggleBtn_2.active {
        bottom: -90px;
        transform: rotate(135deg);
        background: #ff5a57;
        transition: .5s;
      }
      .content_2 {
        padding: 30px;
        color: #000;
        min-width: 400px;
        opacity: 1;
        transition-delay: 1s;
        .name {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 40px;
        }
      }
    }
    .toggleBox_3 {
      position: relative;
      width: 0px;
      height: 0px;
      background: #dddddd;
      border-radius: 25px;
      transition: 1s;
      display: flex;
      justify-content: center;
      align-items: center;
      &::before {
        content: '';
        position: absolute;
        width: 0px;
        height: 0px;
        background: #dddddd;
        transform: rotate(45deg);
        bottom: -15px;
        border-radius: 5px;
      }
      .toggleBtn_3 {
        position: absolute;
        min-width: 60px;
        height: 60px;
        background: #0bcf9c;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: -90px;
        transition: .5s;
        &::before {
          content: '+';
          position: absolute;
          bottom: 4px;
          font-size: 2.5em;
          color: #fff;
        }
      }
      .content_3 {
        padding: 30px;
        color: #000;
        min-width: 400px;
        opacity: 0;
      }
    }
    // 버튼 클릭시
    .toggleBox_3.active {
      position: relative;
      width: 400px;
      height: 400px;
      background-color: #E4E4E1;
      background-image: radial-gradient(at top center, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.03) 100%), linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(143,152,157,0.60) 100%);
      background-blend-mode: normal, multiply;
      border-radius: 25px;
      transition-delay: 0.5s;
      display: flex;
      justify-content: center;
      align-items: center;
      &::before {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: #dddddd;
        transform: rotate(45deg);
        transition-delay: 0.5s;
        bottom: -15px;
        border-radius: 5px;
      }
      .toggleBtn_3.active {
        bottom: -90px;
        transform: rotate(135deg);
        background: #ff5a57;
        transition: .5s;
      }
      .content_3 {
        padding: 30px;
        color: #000;
        min-width: 400px;
        opacity: 1;
        transition-delay: 1s;
        .name {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 40px;
        }
      }
    }
  }
}
</style>