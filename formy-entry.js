!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("Formy",[],n):"object"==typeof exports?exports.Formy=n():e.Formy=n()}(self,(function(){return function(){"use strict";var e={d:function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},o:function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{init:function(){return a},instances:function(){return d}});var t=["","","formy-jssdk.js"].filter((function(e){return e})).join("/"),o=[],r=[],i=function(){function e(e){this.config=e,this.uuid="".concat(1e7,"-").concat(1e3,"-").concat(4e3,"-").concat(8e3,"-").concat(1e11).replace(/[018]/g,(function(e){return(Number(e)^crypto.getRandomValues(new Uint8Array(1))[0]&15>>Number(e)/4).toString(16)}))}return e.prototype.init=function(){var e=this,n=this.config.el;if(n){var t=document.createElement("iframe"),o=document.querySelector(n);t.title="Formy",t.frameBorder="0",t.scrolling="no",t.width="100%",o&&(t.onload=function(){e.appendElements(t),e.appendBase(t),e.appendScripts(t),e.resizeObserver(t)},o.replaceChildren(t))}},e.prototype.appendElements=function(e){var n=e.contentWindow.document.body,t=document.createElement("div");t.id="root",n.appendChild(t)},e.prototype.appendScripts=function(e){var n=e.contentWindow.document.head,o=document.createElement("script");o.src=t,o.onerror=function(){console.error("formy sdk script load failed!")};var r=document.createElement("script"),i=document.createTextNode("\nfunction initFormy(Formy) {\n  const instance = parent.window.Formy.instances.find((ins) => {\n    return ins.uuid === '".concat(this.uuid,'\';\n  });\n  var config = Object.assign({}, instance.config, {el: "#root"})\n  new Formy(config);\n}\n      '));r.appendChild(i),n.append(r),n.appendChild(o)},e.prototype.appendBase=function(e){var n=e.contentWindow.document.head,t=document.createElement("base");t.href=window.location.href,n.appendChild(t)},e.prototype.resizeObserver=function(e){var n=e.contentWindow.document.body;new ResizeObserver((function(n){window.requestAnimationFrame((function(){var t;Array.isArray(n)&&n.length&&(t=n[0].target.scrollHeight.toString(),e&&(e.height=t))}))})).observe(n)},e}(),c=function(){o.forEach((function(e){var n=new i(e);n.init(),r.push(n)}))};"complete"!==document.readyState?document.onreadystatechange=function(){"complete"===document.readyState&&c()}:c();var a=function(e){o.push(e)},d=r;return n}()}));
//# sourceMappingURL=formy-entry.js.map