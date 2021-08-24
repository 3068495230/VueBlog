/*
 * @Description: Vue 配置文件
 * @Author: CY小尘s
 * @Date: 2021-07-04 17:58:40
 * @LastEditTime: 2021-07-21 01:56:49
 * @LastEditors: 学习
 */
const ENV = process.env.NODE_ENV

module.exports = {
  lintOnSave: false,
  publicPath: ENV === "development" ? "" : "./",
}