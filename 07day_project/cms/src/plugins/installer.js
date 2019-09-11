// vue插件必须具备Install函数
function Installer () {
  // 自身初始化行为
}

Installer.install = function (Vue) {
  // 接收Vue的构造函数,给原型挂载属性或注册全局组件
  console.log(Vue)

  // 1:注册全局组件
  // 2:挂载属性
}

export default Installer
