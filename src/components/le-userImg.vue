<template>
  <img class="user-img" :style="{width: width, height: height}" v-if="imgUrl" :src="imgUrl" />
  <open-data v-else class="user-img" :style="{width: width, height: height}" type="userAvatarUrl"></open-data>
</template>

<script>
export default {
  props: {
    userImg: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '80rpx'
    },
    width: {
      type: String,
      default: '80rpx'
    }
  },
  computed: {
    imgUrl: function () {
      if (/^http/.test(this.userImg)) {
        return this.userImg
      } else if (wx.canIUse('open-data.type.userAvatarUrl')) {
        return ''
      } else {
        return 'https://cdn.leoao.com/default_avatar.jpeg'
      }
    }
  }
}
</script>

<style lang="less">
.user-img {
  border-radius: 50%;
  display: block;
  overflow: hidden;
}
</style>