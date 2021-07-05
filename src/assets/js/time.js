/*
 * @Description: 公有 js 函数库
 * @Author: CY小尘s
 * @Date: 2021-05-30 23:53:11
 * @LastEditTime: 2021-05-31 00:02:47
 * @LastEditors: 学习
 */
export default{
    newDate(){
        var date = new Date()
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()
        if (month < 10) {
            month = '0' + month
        }
        if (day < 10) {
            day = '0' + day
        }
        var nowDate = year + '-' + month + '-' + day
        return nowDate
    }
}