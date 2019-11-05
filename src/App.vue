<template>
  <div id="app">
    <music-header></music-header>
    <tab></tab>
  </div>
</template>

<script>
import MusicHeader from 'components/music-header/music-header'
import Tab from 'components/tab/tab'

export default {
  name: 'App',
  components: {
    MusicHeader,
    Tab
  }
}
</script>

<style>

</style>
