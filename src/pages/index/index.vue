<template>
  <div class="container">
    <div class="title">小程序用户头像</div>
    <div class="discription">userImg: string</div>
    <div class="discription">width: string(default: 80rpx)</div>
    <div class="discription">height: string(default: 80rpx)</div>
    <div class="discription">userImg不传且open-data组件不可用默认：https://cdn.leoao.com/default_avatar.jpeg</div>
    <div class="sub-title">userImg: 不传</div>
    <le-user-img />
    <div class="sub-title">userImg：Justin(无效值)</div>
    <le-user-img userImg="Justin"/>
    <div class="sub-title">userImg：https://cdn.leoao.com/default_avatar.jpeg</div>
    <le-user-img userImg='https://cdn.leoao.com/default_avatar.jpeg' />
    <div class="title">小程序用户昵称</div>
    <div class="discription">username: string</div>
    <div class="discription">username不传切open-data无效时默认：乐刻_er</div>
    <div class="sub-title">username: 不传</div>
    <div class="item">
      <le-username />
    </div>
    <div class="sub-title">username: JustPlay</div>
    <div class="item">
      <le-username username="JustPlay" />
    </div>
    <div class="title">格式化le-format</div>
    <div class="discription">value: string、number</div>
    <div class="discription">format: time(default)、money、discount</div>
    <div class="discription">div: 被除数（100）、mul: 被乘数（10）</div>
    <div class="discription">rule: 格式</div>
    <div class="sub-title">时间：yyyy/MM/dd hh:mm:ss</div>
    <div class="item">
      <le-format :value="time" rule="yyyy/MM/dd hh:mm:ss" />
    </div>
    <div class="sub-title">format: money</div>
    <div class="item">
      <le-format value="10000" format="money" />元
    </div>
    <div class="sub-title">format: discount</div>
    <div class="item">
      <le-format value="0.98" format="discount" />折
    </div>
    <div class="title">按钮le-button</div>
    <div class="discription">type、text、openType</div>
    <div class="sub-title">default</div>
    <div class="list">
      <le-button @tap="tap" />
    </div>
    <div class="sub-title">type: default</div>
    <div class="list">
      <le-button type="default" @tap="tap" />
    </div>
    <div class="sub-title">type: primary、openType: getUserInfo</div>
    <div class="list">
      <le-button type="primary" open-type="getUserInfo" @tap="tap" />
    </div>
    <div class="sub-title">type: main、openType: getPhoneNumber</div>
    <div class="list">
      <le-button type="main" open-type="getPhoneNumber" @tap="tap" />
    </div>
    <div class="sub-title">type: nostyle, openType: contact</div>
    <div class="list">
      <le-button type="nostyle" open-type="contact" @tap="tap" />
    </div>
    <div class="sub-title">type: disabled</div>
    <div class="list">
      <le-button type="disabled" @tap="tap" />
    </div>
  </div>
</template>

<script>
import leFormat from '@/components/le-format'
import leButton from '@/components/le-button'
import leUserImg from '@/components/le-userImg'
import leUsername from '@/components/le-username'
export default {
  components: {
    leFormat,
    leButton,
    leUserImg,
    leUsername
  },
  data () {
    return {
      scrollLeft: 0,
      showDelete: true,
      time: new Date().getTime()
    }
  },

  methods: {
    tap (e) {
      console.log(e)
      wx.showToast({
        title: '点击按钮',
        icon: 'none',
        duration: 2000
      })
    }
  },

  created () {
  },

  onShareAppMessage () {
    return {}
  }
}
</script>

<style lang="less">
.container {
  font-size: 12px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 25px;
  .title {
    margin-top: 25px;
    font-size: 16px;
    font-weight: bold;
  }
  .sub-title {
    margin-top: 15px;
    font-size: 14px;
  }
  .item {
    background: #f2f2f2;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    margin-top: 15px;
  }
  .list {
    margin-top: 15px;
  }
}
</style>
