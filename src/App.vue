<script>
import axios from 'axios'
// header
import Header from './components/Header.vue'
// footer
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  methods: {
    logOut() {
      axios({
        url : 'http://54.180.193.83:8081/user/logout/',
        method: 'POST',
        data : {
          refresh : localStorage.getItem('refresh')
        }
      }).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })
      window.localStorage.removeItem('name');
      window.localStorage.removeItem('id');
      window.localStorage.removeItem('email');
      window.localStorage.removeItem('access');
      window.localStorage.removeItem('refresh');
      window.localStorage.removeItem('search__data');
      window.localStorage.removeItem('oneClick');
      window.localStorage.removeItem('twoClick');
      window.localStorage.removeItem('eventClick');
      window.localStorage.removeItem('totalClick');
      this.$router.push('/')
      setTimeout(() => {
        this.$router.go()
      },100)
    },
    // clickEffect(e){
    //   console.log(e)
    //   let d = document.createElement("div");
    //   d.className = "clickEffect";
    //   d.style.top = e.clientY + "px";
    //   d.style.left = e.clientX + "px";
    //   document.body.appendChild(d);
    //   console.log(d)
    //   d.addEventListener('animationend',function(){
    //     d.parentElement.removeChild(d);
    //   }.bind(this));
    // }
  },
  mounted() {
    // 1시간55분마다 엑세스토큰 갱신 (최초 엑세스 2시간 -> 1시간55분마다 갱신), (리프레시 1주일 -> 1주일동안 자동 로그아웃)
    setInterval(() => {
      axios({
        url : 'http://54.180.193.83:8081/api/token/refresh/',
        method : "POST",
        data : {
          refresh : localStorage.getItem('refresh')
        }
      }).then((res) => {
        console.log('asd')
        console.log(res)
        localStorage.setItem('access', res.data.access)
      }).catch((error) => {
        console.log(error)
        alert("일정시간이 지나 로그아웃되었습니다")
        this.logOut()
      })
    },1100000)
    // mouse click event
    // document.addEventListener('click',this.clickEffect);	
  }
}
</script>


<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style lang="scss">
  div.clickEffect {
    position: fixed;
    box-sizing: border-box;
    border-style: solid;
    border-color: #000000;
    border-radius: 50%;
    animation: clickEffect 0.4s ease-out;
    z-index: 99999;
  }
  @keyframes clickEffect{
    0%{
      opacity: 1;
      width: 0.5em; height:0.5em;
      margin: -0.25em;
      border-width: 0.5rem;
    }
    100%{
      opacity: 0.2;
      width: 15em;
      height: 15em;
      margin: -7.5em;
      border-width: 0.03rem;
    }
}
</style>