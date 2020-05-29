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

initMixin(Vue)  // Vue.prototype._init
stateMixin(Vue)   // Vue.prototype.$set Vue.prototype.$watch 并将 $data 和 $props 映射到_data和_props中
eventsMixin(Vue)  // Vue.prototype.$on Vue.prototype.$once Vue.prototype.$off Vue.prototype.$emit
lifecycleMixin(Vue)  // 设置 Vue.prototype.$forceUpdate Vue.prototype.$destroy Vue.prototype._update
renderMixin(Vue)  // Vue.prototype.$nextTick Vue.prototype._render 在Vue原型上定义 _a _b _c...方法

// 这才是Vue定义的地方，一开始是一个函数
// 并且在导出Vue的时候，执行了一系列的方法，会发现很多方法，都是Vue的API
// 还有一些方法都是在后面 初始化Vue实例的时候会调用的方法 比如最明显的 _init方法，在上面Vue调用了
export default Vue
