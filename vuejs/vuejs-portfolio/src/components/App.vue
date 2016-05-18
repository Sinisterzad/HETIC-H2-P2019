<style lang="stylus" src="./App.styl"></style>

<template>
  <div>

    <header class="app-header">
      <h1 class="app-header__title">
        <a v-link="{ name: 'home_component' }">Vincent Garreau</a>
      </h1>
      <h2 class="app-header__subtitle">Développeur front-end</h2>
    </header>

    <!-- main view -->
    <router-view
      class="app-router animated"
      transition="fade" transition-mode="out-in">
    </router-view>

  </div>
</template>

<script>
  import 'css/variables.styl'
</script>