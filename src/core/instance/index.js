import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)  // 定义 _init方法
stateMixin(Vue)   // 设置$set $watch 并将 $data 和 $props 映射到_data中
eventsMixin(Vue)  // 设置 $on $once $off $emit
lifecycleMixin(Vue)  // 设置 $forceUpdate $destroy _update
renderMixin(Vue)  // 设置 $nextTick _render 绑定一些_a _b _c...方法

// 这才是Vue定义的地方，一开始是一个函数
// 并且在导出Vue的时候，执行了一系列的方法，会发现很多方法，都是Vue的API
// 还有一些方法都是在后面 初始化Vue实例的时候会调用的方法 比如最明显的 _init方法，在上面Vue调用了
export default Vue
