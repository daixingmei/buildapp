// 方法一分两个文件来导出
// import { formatTime } from './formattime';

// export
// default {
//     formatTime
// };
// 方法二放在一个文件
const formatTime = {
  formatTime (time) {
    if (time) {
      var oDate = new Date()
      oDate.setTime(time)
      var y = oDate.getFullYear()
      var mo = oDate.getMonth() + 1
      var d = oDate.getDate()
      var h = oDate.getHours()
      var m = oDate.getMinutes()
      var s = oDate.getSeconds()
      return y + '-' + mo + '-' + d + ' ' + h + ':' + m + ':' + s
    }
  }
}
export default formatTime
