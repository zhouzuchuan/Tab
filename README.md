# **Tab**

## 简介

```
基于Sizzle的一款实用Tab插件，可以实现很多效果（tab、简单的焦点图、手风琴、悬浮等），后续会实现更多功能！
```

## 日志
```
v 0.0.2
  替换 jQuery 引用 改用 Sizzle 选择器引擎
  
v 0.0.3
  优化数据结构
  
v 0.0.4
  添加自动切换功能、方向、和事件引用

```

## 结构引用
下面结构仅供参考（主要是选择器的引用）
``` html
<div class="tabBtn tac">
    <ul class="fl_dib">
        <li zzc-tab-btn="a">1</li>
        <li zzc-tab-btn="b">2</li>
        <li zzc-tab-btn="c">3</li>
        <li zzc-tab-btn="d">4</li>
    </ul>
</div>
<div class="tabMain">
    <ul>
        <li zzc-tab-main="a"><span class="tabMainItem">display 1</span></li>
        <li zzc-tab-main="b"><span class="tabMainItem">display 2</span></li>
        <li zzc-tab-main="c"><span class="tabMainItem">display 3</span></li>
        <li zzc-tab-main="d"><span class="tabMainItem">display 4</span></li>
    </ul>
</div>
<div class="tabBtn tac">
    <ul class="fl_dib">
        <li zzc-tab-btn="e#w">5</li>
        <li zzc-tab-btn="f#w">6</li>
        <li zzc-tab-btn="g#w">7</li>
        <li zzc-tab-btn="h#w">8</li>
        <li zzc-tab-btn="t">t</li>
    </ul>
</div>
<div class="tabMain">
    <ul>
        <li zzc-tab-main="e#w"><span class="tabMainItem">display 5</span></li>
        <li zzc-tab-main="f#w"><span class="tabMainItem">display 6</span></li>
        <li zzc-tab-main="g#w"><span class="tabMainItem">display 7</span></li>
        <li zzc-tab-main="h#w"><span class="tabMainItem">display 8</span></li>
        <li zzc-tab-main="t"><span class="tabMainItem">display t</span></li>
    </ul>
</div>
```


通过 `wj-tab-btn` 和 `wj-tab-main` 相绑定

+ 选择器 = "指定关键词"  
   如：`wj-tab-btn="a"`  绑定的是对应的 `wj-tab-main="a"`
   
+ 选择器 = "指定关键词#分组跟踪"   
   如：`wj-tab-main="a#wanjia"`  绑定的是对应的 `wj-tab-main="a#wanjia"`

*在同一个页面中，有多个效果 则可以通过设置跟踪值划分分组，为其指定不同的效果*

*如果没有指定跟踪 默认会给其绑定的默认的跟踪 defaults*


-------

## 接口引用
``` javascript
  var tab = new Tab({
    // 参数...
    
  });
```

-------


## 文档
### `selector`
``` 参数
指定对应选择器

array 【['按钮的选择器', '区块的选择器']】 默认为 ['zzc-tab-btn', 'zzc-tab-main']
```
``` javascript
selector: ['baidu-btn', 'taobao-main']      // baidu-btn, taobao-main
selector: ['baidu']                         // baidu-btn, baidu-main
selector: ['', 'taobao-main']               // zzc-tab-btn, taobao-main
selector: ['baidu-btn', '']                 // baidu-btn, zzc-tab-main
selector: 'taobao'                          // taobao-btn, taobao-main
```

### `currentClass`
``` 参数
选中当前添加的class类

array 【['按钮选中添加的class', '区块选中添加的class'] （若数组中只有一个子项 那么class都为这个子项）】 默认为 ['', '']
```
``` javascript
selector: ['current','active']    // current, active
selector: ['current']             // current, current
selector: ['','current']          // '', current
selector: ['current','']          // current, ''
selector: 'current'               // current, current
```
### `auto`
``` 参数
设置切换是否自动 

boolean/number/object  【是否开启/切换速度/设置分组配置】 默认为 false, 如果设置为true，切换的速度默认为2000ms
```
``` javascript
auto: true   // 各个跟踪组都开启自动 切换速度为2000
auto: false   // 各个跟踪组都关闭自动
auto: 1000   // 各个跟踪组都开启自动 切换速度为1000
auto: {
  wanjia: 3000    // 设置跟踪组 wanjia 的配置 其他不指定 则默认
}
```

### `direction`
``` 参数
自动的方向

string/object  【自定方向/设置分组配置】 默认为 'right'
```
``` javascript
direction: 'left'   // 各个跟踪组都向左
direction: 'right'   // 各个跟踪组都向右
direction: {
  wanjia: 'left'    // 设置跟踪组 wanjia 的配置 其他不指定 则默认
}
```

### `defaultPos`
``` 参数
初始所在的位置

number/object  【指定位置（在各个分组中的位置）/设置分组配置】 默认为 0 ;
```
``` javascript
defaultPos: '3'   // 各个跟踪组都显示第四个
defaultPos: {
  wanjia: '5'    // 设置跟踪组 wanjia 的配置 其他不指定 则默认
}
```

### `eventType`
``` 参数
初始所在的位置

string/object  【时间触发方式/设置分组配置】 默认为 'click' ;
```
``` javascript
eventType: 'hover'   // 各个跟踪组都是鼠标悬浮触发
eventType: {
  wanjia: 'hover'    // 设置跟踪组 wanjia 的配置 其他不指定 则默认
}
```

### `leaveWill`
``` 参数
离开之前

(nodeBtn, nodeMain traceValue) 【即将离开的btn节点， 即将离开的main节点, 跟踪组名】
```
``` javascript
leaveWill: function (nodeBtn, nodeMain, traceValue) {
  console.log('离开之前', nodeBtn, '和', nodeMain)
}

### `currentWill`
``` 参数
选中之前执行

(nodeBtn, nodeMain traceValue) 【即将进入的btn， 即将进入的main, 跟踪组名】
```
``` javascript
currentWill: function (nodeBtn, nodeMain, traceValue) {
  console.log('选中之前', nodeBtn, '和', nodeMain)
}
```

### `currentDid`
``` 参数
离开之后执行

(nodeBtn, nodeMain traceValue) 【进入的btn， 进入的main, 跟踪组名】 
```
``` javascript
currentDid: function (nodeBtn, nodeMain, traceValue) {
  console.log('选中之后', nodeBtn, '和', nodeMain)
}
```





-------




