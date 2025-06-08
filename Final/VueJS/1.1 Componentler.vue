<template>

</template>

<script>

export default {
  name: 'App'
  /*
    Componenetler bağımsız parça anlamına gelmektedir.
    Vue bileşenleri, kullanıcı arayüzlerini mantıksal parçalara böler:
    ->navbar.vue
    ->KullanıcıKart.vue
    ->Menü.vue
    Her bileşen kendi HTML, CSS ve JS kodunu içerir.

    Componentlerin kullanılmasının sebepleri ise:
      Yeniden kullanılabilir olması yani aynı bileşenler birden fazla yerde tekrar tekrar kullanılabilir olmasını sağlar.
      Modülerlik yani projenin küçük parçalara ayrılması ve bu sayede yönetiminin daha basit olması.
      Kapsülleme, her bileşenin kendi verisi, stili ve işlevi olur.
      Okunabilirlik, kod karmaşasını azaltır.
  */
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
