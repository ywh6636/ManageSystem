module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16, // 1rem基准值
      propList: ['*'], // 转换所有属性，除了边框
      // minPixelValue: 2, // 最小转换值
      // selectorBlackList: ['el-', 'ant-'], // 忽略UI库类名
    },
    autoprefixer: {},
  },
}
