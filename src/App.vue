<script>
// header
import Header from './components/Header.vue'
// footer
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
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