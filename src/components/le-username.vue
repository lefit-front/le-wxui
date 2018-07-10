<template>
  <div v-if="name">{{name}}</div>
  <open-data v-else type="userNickName"></open-data>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      default: ''
    }
  },
  computed: {
    name: function () {
      if (this.username) {
        return this.username
      } else if (wx.canIUse('open-data.type.userNickName')) {
        return ''
      } else {
        return '乐刻_er'
      }
    }
  }
}
</script>
