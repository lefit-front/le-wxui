<template>
  <div class="le-button">
    <div v-if="getuserinfo" :class="className" :hover-class="hoverClassName" hover-start-time="20" hover-stay-time="70" @tap="getUserInfoSync">{{text}}</div>
    <button v-else-if="openType" :class="className" :hover-class="hoverClassName" :open-type="openType" @getuserinfo="getUserInfo" @getphonenumber="getPhoneNumber">{{text}}</button>
    <div v-else :class="className" :hover-class="hoverClassName" hover-start-time="20" hover-stay-time="70" @tap="tap">{{text}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      openType: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'primary'
      },
      text: {
        type: String,
        default: '确定'
      }
    },
    data () {
      return {
        loading: false,
        getuserinfosync: false
      }
    },
    computed: {
      className: function () {
        if (this.openType === 'getUserInfo') {
          if (wx.getStorageSync('userInfo')) {
            this.getuserinfosync = true
          } else {
            this.getuserinfosync = false
          }
        }
        switch (this.type) {
          case 'primary':
            return 'btn-primary'
          case 'main':
            return 'btn-main'
          case 'default':
            return 'btn-default'
          case 'nostyle':
            return 'nostyle'
          case 'disabled':
            return 'btn-disabled'
          default:
            return 'btn-primary'
        }
      },
      hoverClassName: function () {
        switch (this.type) {
          case 'primary':
            return 'btn-primary-hover'
          case 'main':
            return 'btn-main-hover'
          case 'default':
            return 'btn-default-hover'
          case 'nostyle':
            return ''
          case 'disabled':
            return ''
          default:
            return 'btn-primary-hover'
        }
      }
    },
    methods: {
      getUserInfo (e) {
        let userInfo = e.mp.detail.userInfo || null
        this.$emit('tap', userInfo)
        if (userInfo) {
          wx.setStorageSync('userInfo', userInfo)
        }
      },
      getUserInfoSync () {
        this.$emit('tap', wx.getStorageSync('userInfo'))
      },
      getPhoneNumber (e) {
        this.$emit('tap', e.mp.detail)
      },
      tap () {
        if (this.loading || this.type === 'disabled') {
          return
        }
        this.loading = true
        this.$emit('tap', '')
        setTimeout(() => {
          this.loading = false
        }, 1000)
      }
    }
  }
</script>

<style lang="less">
.btn-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  border-radius: 40px;
  background: #FF4E00;
  color: #fff;
  &::after {
    border: none;
  }
}
.btn-primary-hover {
  background: rgba(255, 78, 0, .8);
}
.btn-main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  border-radius: 40px;
  background: #fff;
  color: #ff4e00 ;
  position: relative;
  &::after {
    content: "";
    pointer-events: none; /* 防止点击触发 */
    box-sizing: border-box;
    position: absolute;
    width: 200%;
    height: 200%;
    left: 0;
    top: 0;
    border: 1rpx solid #FF4E00;
    border-radius: 40px;
    transform: scale(0.5);
    transform-origin: 0 0;
  }
}
.btn-main-hover {
  color: #fff;
  background: #ff4e00;
}
.btn-default {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  border-radius: 40px;
  background: #fff;
  color: rgba(0, 0, 0, .6);
  position: relative;
  &::after {
    content: "";
    pointer-events: none; /* 防止点击触发 */
    box-sizing: border-box;
    position: absolute;
    width: 200%;
    height: 200%;
    left: 0;
    top: 0;
    border: 1rpx solid rgba(0, 0, 0, .15);
    border-radius: 40px;
    transform: scale(0.5);
    transform-origin: 0 0;
  }
}
.btn-default-hover {
  color: #fff;
  background: rgba(0, 0, 0, .2);
}
.btn-disabled {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  border-radius: 40px;
  background: #fff;
  color: rgba(0, 0, 0, .3);
  position: relative;
  &::after {
    content: "";
    pointer-events: none; /* 防止点击触发 */
    box-sizing: border-box;
    position: absolute;
    width: 200%;
    height: 200%;
    left: 0;
    top: 0;
    border: 1rpx solid rgba(0, 0, 0, .1);
    border-radius: 40px;
    transform: scale(0.5);
    transform-origin: 0 0;
  }
}
.nostyle {
  color: inherit;
  background: inherit;
  font-size: inherit;
  display: inline;
  line-height: inherit;
  padding: 0;
  border-radius: 0;
  &::after {
    border: none;
    border-radius: 0;
  }
}
</style>