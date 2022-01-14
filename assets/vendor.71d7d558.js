var d=globalThis&&globalThis.__assign||function(){return(d=Object.assign||function(a){for(var i,s=1,o=arguments.length;s<o;s++)for(var t in i=arguments[s])Object.prototype.hasOwnProperty.call(i,t)&&(a[t]=i[t]);return a}).apply(this,arguments)},f=function(){function a(i,s,o){var t=this;this.target=i,this.endVal=s,this.options=o,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(r){t.startTime||(t.startTime=r);var n=r-t.startTime;t.remaining=t.duration-n,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(n,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(n,t.startVal,t.endVal-t.startVal,t.duration):t.countDown?t.frameVal=t.startVal-(t.startVal-t.endVal)*(n/t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(n/t.duration),t.countDown?t.frameVal=t.frameVal<t.endVal?t.endVal:t.frameVal:t.frameVal=t.frameVal>t.endVal?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),n<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.callback&&t.callback()},this.formatNumber=function(r){var n,e,l,h,c=r<0?"-":"";n=Math.abs(r).toFixed(t.options.decimalPlaces);var m=(n+="").split(".");if(e=m[0],l=m.length>1?t.options.decimal+m[1]:"",t.options.useGrouping){h="";for(var u=0,V=e.length;u<V;++u)u!==0&&u%3==0&&(h=t.options.separator+h),h=e[V-u-1]+h;e=h}return t.options.numerals&&t.options.numerals.length&&(e=e.replace(/[0-9]/g,function(p){return t.options.numerals[+p]}),l=l.replace(/[0-9]/g,function(p){return t.options.numerals[+p]})),c+t.options.prefix+e+l+t.options.suffix},this.easeOutExpo=function(r,n,e,l){return e*(1-Math.pow(2,-10*r/l))*1024/1023+n},this.options=d(d({},this.defaults),o),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(s),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof i=="string"?document.getElementById(i):i,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return a.prototype.determineDirectionAndSmartEasing=function(){var i=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>i;var s=i-this.startVal;if(Math.abs(s)>this.options.smartEasingThreshold){this.finalEndVal=i;var o=this.countDown?1:-1;this.endVal=i+o*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=i,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},a.prototype.start=function(i){this.error||(this.callback=i,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},a.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},a.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},a.prototype.update=function(i){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(i),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},a.prototype.printValue=function(i){var s=this.formattingFn(i);this.el.tagName==="INPUT"?this.el.value=s:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=s:this.el.innerHTML=s},a.prototype.ensureNumber=function(i){return typeof i=="number"&&!isNaN(i)},a.prototype.validateValue=function(i){var s=Number(i);return this.ensureNumber(s)?s:(this.error="[CountUp] invalid start or end value: "+i,null)},a.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},a}();function g(a){const i=document.querySelector("link[rel*='icon']")||document.createElement("link");i.setAttribute("type","image/x-icon"),i.setAttribute("rel","icon"),i.setAttribute("href",`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${a}</text></svg>`),document.getElementsByTagName("head")[0].appendChild(i)}export{f as C,g as s};