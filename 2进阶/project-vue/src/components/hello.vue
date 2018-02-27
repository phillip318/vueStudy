<template>
    <div>
      hello,一起学习vue
      <p>{{n}}</p>
    </div>
</template>

<script>
  export default{
    data(){
      return{
        n: this.$store.state.count// n的初始值从 vuex中的state拿
      }
    }
  }
</script>
