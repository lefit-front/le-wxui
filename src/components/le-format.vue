<template>
  <text class="le-format">{{text}}</text>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    format: {
      type: String,
      default: 'time'
    },
    rule: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    // 乘数--默认折扣*10
    mul: {
      type: Number,
      default: 10
    },
    // 除数--默认钱*100
    div: {
      type: Number,
      default: 100
    }
  },
  computed: {
    text: function () {
      if (this.format === 'time') {
        return this.formatTime(Number(this.value), this.rule)
      } else if (this.format === 'money') {
        return this.formatMoney(Number(this.value))
      } else {
        return this.formatDiscount(Number(this.value))
      }
    }
  },
  methods: {
    formatDiscount (value) {
      return this.accMul(value, this.mul)
    },
    formatMoney (value) {
      return this.value / this.div
    },
    formatTime (value, rule) {
      if (value) {
        value = value > 10000000000 ? value : value * 1000
        let date = new Date(value)
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let hour = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let month2 = month > 9 ? month + '' : '0' + month
        let day2 = day > 9 ? day + '' : '0' + day
        let hour2 = hour > 9 ? hour + '' : '0' + hour
        let minutes2 = minutes > 9 ? minutes + '' : '0' + minutes
        let seconds2 = seconds > 9 ? seconds + '' : '0' + seconds
        rule = rule.replace('yyyy', year.toString())
        rule = rule.replace('MM', month2)
        rule = rule.replace('dd', day2)
        rule = rule.replace('hh', hour2)
        rule = rule.replace('mm', minutes2)
        rule = rule.replace('ss', seconds2)
        rule = rule.replace('M', month.toString())
        rule = rule.replace('d', day.toString())
        rule = rule.replace('h', hour.toString())
        rule = rule.replace('m', minutes.toString())
        rule = rule.replace('s', seconds.toString())
        return rule
      } else {
        return ''
      }
    },
    /**
     * 乘法函数，用来得到精确的乘法结果
     * 说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
     * 调用：accMul(arg1,arg2)
     * 返回值：arg1乘以 arg2的精确结果
     */
    accMul (arg1, arg2) {
      let m = 0
      let s1 = arg1.toString()
      let s2 = arg2.toString()
      try {
        m += s1.split('.')[1].length
      } catch (e) {
      }
      try {
        m += s2.split('.')[1].length
      } catch (e) {
      }
      return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
    }
  }
}
</script>
<style scoped>

</style>