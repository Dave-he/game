document.addEventListener("WeixinJSBridgeReady",function(){if(window.WeixinJSBridge){var a=WeixinJSBridge.invoke;WeixinJSBridge.invoke=function(){arguments[2]=function(){window.location.href="http://games.haoshengweb.com"},a.apply(WeixinJSBridge,arguments)}}});