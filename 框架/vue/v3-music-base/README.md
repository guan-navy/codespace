# tailwind
- 原子化css,通过添加类名来添加样式


# 复杂组件设计

- 搜索组件
 

- components
 - 一般业务组件
 - common
   - 通用组件,不受约束
 - layout 布局组件
 - 项目亮点
  - 在搜索的时候使用了防抖,做了性能优化,lodash

- 简历
 - pdf
 - 会员 金山office


# 项目亮点

介绍src文件夹目录

- 搜索
  - 项目结构清晰合理
  - vue全家桶,pinia,ts
  - 使用了elmentPlus 提供的 El_popover,ElInput,实现了搜索热点,搜索结果的展示
  - 使用lodash,实现防抖,完成性能优化
  - 歌曲播放数 使用了扩展Number原型链的方式优化展示
  - 充分数据流设计,将应用开发分为UI组件 + store 

- 给面试官介绍 pinia 使用
 - 数据驱动界面
 - pinia 更简单 更hooks化
 - 基于 dev-tools 页面状态和数据统一
 - 搜索 搜索模块数据流的专门设计
  - state showSearchView searchKeyword suggestData
  - getters showHot
  - actions suggest search
- 请介绍一个你设计的比较复杂的组件
  - 搜索组件
  - 状态比较复杂
      除了keyword searchResult 之外
      我还打理了showPopview hotList组件
  - 引入pinia 并提前设计数据流
  - suggest 组件粒度很 OK
      searchPopover
        ELPopOver
          ElInput slot
          SearchSuggest
  - 还使用了ts models 定义了interface 
  