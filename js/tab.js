/*
 * @File Name:     data.js
 * @Create By:     zhouzuchuan
 * @Create Time:   2016-04-27 14:24:47
 * @Modified By:   zhouzuchuan
 * @Modified Time: 2016-05-04 15:01:31
 */


;(function ($, window, document) {


    function Tab (options) {
        if (this === window) return new Tab(options);
        this.options = {

        };
        for (var props in options) this.options[props] = options[props];
        this.collection = {
            all: [], /* 储存原始值 */
            key: [], /* 储存关键值 */
            trace: [], /* 储存跟踪值 */
            current: [], /* 储存当前状态 */
            packetIndex: {} /* 储存分组的整体下标 */
        };
        this._init();
    }

    Tab.prototype = {
        version: '0.0.1',
        // 初始化
        _init: function () {
            var self = this,
                opt = self.options,
                coll = self.collection,
                // daSer = dealArray(opt.selector),
                daSer = this._dealSelector(),
                btn = '[' + daSer.btn + ']',
                main = '[' + daSer.main + ']';

            $(btn).each(function (index, element) {
                var val = $(element).attr(daSer.btn);
                if (getType(coll.packetIndex[dealName(val).trace]) !== 'array') {
                    coll.packetIndex[dealName(val).trace] = [];
                }
                coll.packetIndex[dealName(val).trace].push(index);
                coll.key[index] = dealName(val).key;
                coll.trace[index] = dealName(val).trace;
                coll.all[index] = val;
                coll.current[index] = false;
            });

            // 设置默认显示
            if (getType(opt.defaultPos) === 'object') {
                for (var i = 0, len = coll.trace.length; i < len; i += 1) {
                    // 获取跟踪值
                    var getTraceVal = opt.defaultPos[coll.trace[i]],
                        traceArr = coll.packetIndex[coll.trace[i]];
                    // 如果设置的默认不存在或者分组存在但没有指定默认 则默认显示第一个
                    this.set(isUndefined(traceArr[getTraceVal]) || isUndefined(getTraceVal) ? traceArr[0] : traceArr[getTraceVal]);
                }
            } else if (getType(opt.defaultPos) === 'number') {
                for (var key in coll.packetIndex) {
                    var packetArr = coll.packetIndex[key],
                        // 获取原始值的index
                        getAllIdx = packetArr[opt.defaultPos];
                    this.set(isUndefined(getAllIdx) ? packetArr[0] : getAllIdx);
                }
            } else {
                // 没有设置 则默认设置所有分组的第一个
                for (var key in coll.packetIndex) {
                    this.set(coll.packetIndex[key][0]);
                }
            }


            // 处理事件
            if (getType(opt.eventType) === 'object') {
                for (var i = 0, len = coll.trace.length; i  < len; i += 1) {
                    var eventType = opt.eventType[coll.trace[i]];
                    if (!isUndefined(eventType)) { /* 设置分组事件方式 */
                        switch (eventType) {
                            case 'hover':
                                $(btn).eq(i).mouseover(handle());
                                break;
                            default:
                                $(btn).eq(i).click(handle());
                                break;
                        }
                    } else { /* 没有设置分组事件方式 执行默认 */
                        $(btn).eq(i).click(handle());
                    }
                }
            } else { /* 设置成字符串获取它 */
                switch (opt.eventType) {
                    case 'hover':
                        $(btn).mouseover(handle());
                        break;
                    default:
                        $(btn).click(handle());
                        break;
                }
            }


            function handle () {
                return function (e) {
                    var val = $(this).attr(daSer.btn),
                        idx = getIndex(val,coll.all)[0];
                    self.set(idx);
                }
            }

        },
        // 设置选择 （idx指的是整个原始值的下标）
        set: function (idx) {
            var coll = this.collection,
                // 获取当前的跟踪值
                traceValue = coll.trace[idx],
                daSer = this._dealSelector();
                dealCur = this._dealClass()[traceValue];
            // 判断当前状态是否选中
            if (coll.current[idx]) return;
            // 复位
            for (var i = 0, len = coll.trace.length; i < len; i += 1) {
                if (coll.trace[i] !== traceValue) continue;
                $('[' + daSer.btn + ']').eq(i).removeClass(dealCur.btn);
                $('[' + daSer.main + ']').eq(i).removeClass(dealCur.main);
                coll.current[i] = false;
            }
            // 设值
            $('[' + daSer.btn + ']').eq(idx).addClass(dealCur.btn);
            $('[' + daSer.main + ']').eq(idx).addClass(dealCur.main);
            coll.current[idx] = true;
        },
        // 处理选择器
        _dealSelector: function () {
            var opt = this.options,
                das = dealArray(opt.selector),
                defaultSelector = {
                    btn: 'zzc-tab-btn',
                    main: 'zzc-tab-main'
                };
            if (das.btn === das.main && !isUndefined(das.btn)) {
                das.btn += '-btn';
                das.main += '-main';
            }
            for (var i in das) {
                if (isUndefined(das[i])) {
                    das[i] = defaultSelector[i];
                }
            }
            return das;
        },
        _dealClass: function () {
            var opt = this.options,
                result = {};

            if (getType(opt.currentClass) === 'object') {
                for (var i in opt.currentClass) {
                    result[i] = {};
                    result[i] = dealArray(opt.currentClass[i]);
                }
            } else {
                for (var i in this.collection.packetIndex) {
                    result[i] = dealArray(opt.currentClass);
                }
            }
            return result;

        }

    }

    // 处理key和trace
    function dealName (str) {
        var key, trace, index = str.indexOf('#');
        if (index === -1) {
            key = isUndefined(str) ? 'default' : str;
            trace = 'default';
        } else {
            key = isUndefined(str.slice(0, index)) ? 'default' : str.slice(0, index);
            trace = isUndefined(str.slice(index + 1)) ? 'default' : removeBlank(str.slice(index + 1).split('#'))[0];
        }
        return {
            key: key,
            trace: trace
        }
    }
    // 处理特殊数组
    function dealArray () {
        var arg = arguments[0],
            result = {};
        switch (getType(arg)) {
            case 'array':
                for (var i = 0, len = arg.length; i < len ; i += 1) {
                    arg[i] = $.trim(removePoint(replaceBrackets(arg[i])))
                }
                if (arg.length >= 2) {
                    result.btn = arg[0];
                    result.main = arg[1];
                } else if (arg.length === 1) {
                    result.btn = result.main = arg[0];
                } else {
                    result.btn = result.main = '';
                }
                break;
            case 'string':
                if (!isUndefined(arg)) {
                    result.btn = result.main = $.trim(removePoint(replaceBrackets(arg)));
                    break;
                }
            default:
                result.btn = result.main = '';
        }
        return result;
    }
    // 去除数组中的空格子项
    function removeBlank (array) {
        var arr = [];
        for (var i = 0, len = array.length; i < len; i += 1) {
            if (array[i] === '') continue;
            arr.push(array[i]);
        }
        return arr;
    }
    // 获取指定关键值的整体下标 返回一个数组
    function getIndex (key, array) {
        var numArr = [];
        for (var i = 0, len = array.length; i < len; i += 1) {
            if (array[i] !== key) continue;
            numArr.push(i);
        }
        return numArr;
    }
    // 替换'[]'
    function replaceBrackets (str) {
        return (/^\[[\S]+\]$/ig).test(str) ? str.slice(1,-1) : str;
    }
    // 替换'.'
    function removePoint (str) {
        return (/^\./).test(str) ? str.slice(1) : str;
    }
    function isUndefined (a) {
        return (a === null || typeof a == 'undefined' || a === '' || a === 'undefined');
    }
    function getType (obj) {
        return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    }

    window.Tab = Tab

} (jQuery ,window, document));
