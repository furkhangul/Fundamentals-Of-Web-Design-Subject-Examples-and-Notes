<template>
<h3>{{title}}</h3>
<input type="text" ref="name" placeholder="Kullanıcı Adı">
<br>
<input type="text" ref="password" placeholder="Şifre">
<br>
<button @click="login">Giriş</button>
<br>
<p v-if="isLogin"> Giriş Başarılı</p>
<p v-else>Giriş Başarısız</p>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      title:"Giriş Sayfası",
      name:"Furkan",
      password:"furkan00g",
      isLogin:"false"

    };
  },
  methods:{
    login(){
      return this.$refs.name.value == "Furkan" && this.$refs.password.value == "furkan00g" ? this.isLogin = true : this.isLogin = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
