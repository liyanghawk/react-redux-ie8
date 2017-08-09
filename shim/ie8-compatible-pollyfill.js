"use strict";
// ie8-compatible-pollyfill.js
// ie8 compatibale pollyfill,
// 包括兼容ie8的数组indexof
// ie8 trim方法
// ie8 console
(function(global) {
// ie8 indexof
    if (!Array.prototype.indexOf){
        Array.prototype.indexOf = function(elt /*, from*/){
            var len = this.length >>> 0;

            var from = Number(arguments[1]) || 0;
            from = (from < 0)
                ? Math.ceil(from)
                : Math.floor(from);
            if (from < 0)
                from += len;

            for (; from < len; from++){
                if (from in this && this[from] === elt)
                    return from;
            }
            return -1;
        };
    }

// ie8 trim
    if (!String.prototype.trim) {
        String.prototype.trim = function ()
        {
            return this.replace(/(^\s*)|(\s*$)/g, "");
        }
        String.prototype.ltrim = function ()
        {
            return this.replace(/(^\s*)/g, "");
        }
        String.prototype.rtrim = function ()
        {
            return this.replace(/(\s*$)/g, "");
        }
    }

//ie8 console
    if (!global.console) {
        global.console = {};
    }
    var con = global.console;
    var prop, method;
    var dummy = function() {};
    var properties = ['memory'];
    var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
    'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
    'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
    while (prop = properties.pop()) if (!con[prop]) con[prop] = {};
    while (method = methods.pop()) if (!con[method]) con[method] = dummy;

})(window);