<template lang="">
  <div>
    <AppHeader />
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import AppHeader from './components/Appheader'
export default {
  name: 'App',
  components: {
    AppHeader,
  },
}
</script>
