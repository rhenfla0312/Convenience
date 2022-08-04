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
  }
}
</script>


<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style lang="scss" scoped>
  
</style>