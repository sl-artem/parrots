(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),u=(a(13),a(1)),o=a(2),s=a(4),i=a(3),m=a(5),p=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={value:"",result:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"calculator"},l.a.createElement("h1",{style:{alignSelf:"center",fontSize:"64px"}},l.a.createElement("span",{role:"img","aria-label":"\u041f\u043e\u043f\u0443\u0433\u0430\u0439"},"\ud83d\udc26")),l.a.createElement("p",null,l.a.createElement("span",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u043b\u0438\u043d\u0443 \u0432 \u0441\u0430\u043d\u0442\u0438\u043c\u0435\u0442\u0440\u0430\u0445: "),l.a.createElement("input",{value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}})),this.state.result?l.a.createElement("p",null,"\u0412 \u043f\u043e\u043f\u0443\u0433\u0430\u044f\u0445 \u044d\u0442\u043e: ",this.state.result):null,l.a.createElement("div",{className:"calculator-control"},l.a.createElement("button",{onClick:function(t){return e.setState({result:e.state.value/36})}},"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c"),l.a.createElement("button",{className:"back-btn",onClick:function(t){return e.props.onBack()}},"\u0427\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442?")))}}]),t}(n.Component),h=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={welcome:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"app"},this.state.welcome?l.a.createElement(function(t){return l.a.createElement("div",{className:"welcome"},l.a.createElement("h1",null,"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u043e \u0432 \u043f\u043e\u043f\u0443\u0433\u0430\u044f\u0445?"),l.a.createElement("h2",null,"\u0411\u0435\u0441\u0441\u043c\u044b\u0441\u043b\u0435\u043d\u043d\u044b\u0439 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"),l.a.createElement("p",{className:"welcome-intro"},"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u043b\u044e\u0431\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0432 \u043f\u0430\u043f\u0443\u0433\u0430\u0435\u0432. \u0417\u0430 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442 \u0432\u0437\u044f\u0442\u0430 \u0434\u043b\u0438\u043d\u0430 \u0442\u0435\u043b\u0430 \u0432\u0437\u0440\u043e\u0441\u043b\u043e\u0439 \u043e\u0441\u043e\u0431\u0438 ",l.a.createElement("a",{href:"https://ru.wikipedia.org/wiki/\u0420\u043e\u0441\u043a\u043e\u0448\u043d\u044b\u0439_\u043f\u043e\u043f\u0443\u0433\u0430\u0439_\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u044b"},"\u0420\u043e\u0441\u043a\u043e\u0448\u043d\u043e\u0433\u043e \u043f\u043e\u043f\u0443\u0433\u0430\u044f \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u044b")," \u2014 36 \u0441\u043c."),l.a.createElement("button",{onClick:function(t){return e.setState({welcome:!1})}},"\u041d\u0430\u0447\u0430\u0442\u044c"))},null):l.a.createElement(p,{onBack:function(){return e.setState({welcome:!0})}}))}}]),t}(n.Component);c.a.render(l.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.4bcff507.chunk.js.map