(this["webpackJsonpantd-demo"]=this["webpackJsonpantd-demo"]||[]).push([[0],{102:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),o=n.n(r),i=(n(97),n(8)),l=n(9),u=n(11),m=n(10),s=n(12),h=n(26),p=n(25),b=(n(167),n(38)),j=(n(100),n(28)),d=(n(102),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={current:"home"},n.handleClick=function(e){n.setState({current:e.key})},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"HeadNav"},c.a.createElement("div",{className:"nav-wrap"},c.a.createElement("div",{className:"nav-logo-wrap"},c.a.createElement(j.a,{type:"global",className:"nav-logo"})),c.a.createElement("div",{className:"nav-list-wrap"},c.a.createElement(b.a,{selectedKeys:[this.state.current],mode:"horizontal",onClick:this.handleClick},c.a.createElement(b.a.Item,{key:"home"},c.a.createElement(h.b,{to:"/home"},"\u9996\u9875")),c.a.createElement(b.a.Item,{key:"aboutme"},c.a.createElement(h.b,{to:"/home/about"},"\u5173\u4e8e\u6211")),c.a.createElement(b.a.Item,{key:"article"},c.a.createElement(h.b,{to:"/home/article"},"\u6587\u7ae0\u5206\u4eab")),c.a.createElement(b.a.Item,{key:"resource"},c.a.createElement(h.b,{to:"/home/resource"},"\u8d44\u6e90\u5171\u4eab"))))))}}]),t}(a.Component)),O=(n(163),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"DefaultFoot"},"\u6211\u6765\u7ec4\u6210\u817f\u90e8")}}]),t}(a.Component)),f=(n(164),function(e){function t(e){var n;return Object(i.a)(this,t),n=Object(u.a)(this,Object(m.a)(t).call(this,e)),fetch("/demo",{method:"GET"}).then((function(e){console.log(e),e.json().then((function(e){console.log(e)}))})),n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"Home"},"\u9996\u9875")}}]),t}(a.Component)),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"Article"},"\u6587\u7ae0\u5206\u4eab")}}]),t}(a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"\u5173\u4e8e\u6211")}}]),t}(a.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"\u8d44\u6e90\u5171\u4eab")}}]),t}(a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"DefaultLayout"},c.a.createElement(d,null),c.a.createElement("div",{id:"content-wrap"},c.a.createElement(p.a,{path:this.props.match.url+"/",component:f,exact:!0}),c.a.createElement(p.a,{path:this.props.match.url+"/article",component:E}),c.a.createElement(p.a,{path:this.props.match.url+"/about",component:v}),c.a.createElement(p.a,{path:this.props.match.url+"/resource",component:y})),c.a.createElement(O,null))}}]),t}(a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"LoginUser"},"LoginUser")}}]),t}(a.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"router"},c.a.createElement(h.a,null,c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/",component:w,exact:!0}),c.a.createElement(p.a,{path:"/home",component:k}))))}}]),t}(a.Component),g=(n(165),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(C,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},92:function(e,t,n){e.exports=n(166)},97:function(e,t,n){}},[[92,1,2]]]);
//# sourceMappingURL=main.4cccec08.chunk.js.map