(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(28)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),u=(a(14),a(1)),o=a(2),s=a(4),i=a(3),h=a(5),m=(a(16),function(e){return l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){var t,a;t=e.val1,a=e.val2,fetch("https://api.nbp.pl/api/cenyzlota/".concat(t,"/").concat(a)).then(function(e){return e.json()}).then(function(t){document.getElementById("error").className="no-error",e.apiAnswer(t),e.currentState(t[0].data.substr(0,4),t[0].data.substr(5,2))}).catch(function(){fetch("http://api.nbp.pl/api/cenyzlota/".concat(t,"/").concat(a)).then(function(e){document.getElementById("error").className="error",document.getElementById("error").innerText=e.statusText})}),document.querySelector("#calendar1").className="calendar-container",document.querySelector("#calendar2").className="calendar-container"}},"Search"))}),E=(a(18),a(20),new Date),d=E.getMonth(),p=E.getFullYear(),f=new Date(p,d,1),v=["Mon","Tue","Wen","Thu","Fri","Sat","Sun"],g=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],b=[],k=[],M=[],w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this))).previousMonth=function(){(d-=1)<0&&(d=11,p-=1),a.setState({Month:d,Year:p}),f=new Date(p,d,1),k=[],M=[],b=[]},a.follwingMonth=function(){(d+=1)>11&&(d=0,p+=1),a.setState({Month:d,Year:p}),f=new Date(p,d,1),k=[],M=[],b=[]},a.choiceData=function(e){k=[],M=[],b=[];var t=e.target.innerText,n=document.querySelectorAll(".month-year")[1].innerText.substr(4,4),l=document.querySelectorAll(".month-year")[1].innerText.substr(0,3),r=0;g.forEach(function(e,t){e===l&&(r=t+1)}),1===t.length&&(t="0".concat(t)),1===r.toString().length&&(r="0".concat(r)),1===t.length&&1===r.toString().length&&(t="0".concat(t),r="0".concat(r)),a.props.inputVal2("".concat(n,"-").concat(r,"-").concat(t))},a.state={Month:d,Year:p},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"calendar",value:function(){k=[],M=[],b=[],v.forEach(function(e){b.push(l.a.createElement("td",null,e))});var e=new Date(p,d+1,0).getDate();switch(f.getDay()){case 1:for(var t=1;t<=e;t++)k.push(l.a.createElement("td",{onClick:this.choiceData},t)),7===k.length&&(M.push(l.a.createElement("tr",null,k)),k=[]),t===e&&M.push(l.a.createElement("tr",null,k));break;case 2:k.push(l.a.createElement("td",null," "));for(var a=1;a<=e;a++)k.push(l.a.createElement("td",{onClick:this.choiceData},a)),7===k.length&&(M.push(l.a.createElement("tr",null,k)),k=[]),a===e&&M.push(l.a.createElement("tr",null,k));break;case 3:k.push(l.a.createElement("td",null," "),l.a.createElement("td",null," "));for(var n=1;n<=e;n++)k.push(l.a.createElement("td",{onClick:this.choiceData},n)),7===k.length&&(M.push(l.a.createElement("tr",null,k)),k=[]),n===e&&M.push(l.a.createElement("tr",null,k));break;case 4:k.push(l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "));for(var r=1;r<=e;r++)k.push(l.a.createElement("td",{onClick:this.choiceData},r)),7===k.length&&(M.push(l.a.createElement("tr",null,k)),k=[]),r===e&&M.push(l.a.createElement("tr",null,k));break;case 5:k.push(l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "));for(var c=1;c<=e;c++)k.push(l.a.createElement("td",{onClick:this.choiceData},c)),7===k.length&&(M.push(l.a.createElement("tr",null,k)),k=[]),c===e&&M.push(l.a.createElement("tr",null,k));break;case 6:k.push(l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "));for(var u=1;u<=e;u++)k.push(l.a.createElement("td",{onClick:this.choiceData},u)),7===k.length&&(M.push(l.a.createElement("tr",null,k)),k=[]),u===e&&M.push(l.a.createElement("tr",null,k));break;default:k.push(l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "));for(var o=1;o<=e;o++)k.push(l.a.createElement("td",{onClick:this.choiceData},o)),7===k.length&&(M.push(l.a.createElement("tr",null,k)),k=[]),o===e&&M.push(l.a.createElement("tr",null,k))}return l.a.createElement("table",null,l.a.createElement("caption",null,l.a.createElement("div",{className:"month-year-parent"},l.a.createElement("div",{className:"before",onClick:this.previousMonth}," > "),l.a.createElement("div",{className:"month-year"},g[d]," ",p),l.a.createElement("div",{className:"after",onClick:this.follwingMonth}," > "))),l.a.createElement("thead",null,b),l.a.createElement("tbody",null,M),l.a.createElement("tfoot",null))}},{key:"render",value:function(){return l.a.createElement("div",{id:"calendar2",className:"calendar-container"},this.calendar())}}]),t}(l.a.Component),S=function(e){return l.a.createElement("div",{className:"input2"},l.a.createElement("input",{onClick:function(){document.querySelector("#calendar1").className="calendar-container",document.querySelector("#calendar2").className="calendar-container-visivle"},type:"data",placeholder:"click",value:e.val2}),l.a.createElement(w,{inputVal2:e.inputVal2}))},D=(a(22),a(24),new Date),y=D.getMonth(),C=D.getFullYear(),N=new Date(C,y,1),Y=["Mon","Tue","Wen","Thu","Fri","Sat","Sun"],j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],I=[],O=[],T=[],x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this))).previousMonth=function(){(y-=1)<0&&(y=11,C-=1),a.setState({Month:y,Year:C}),N=new Date(C,y,1),O=[],T=[],I=[]},a.follwingMonth=function(){console.log("aaa"),(y+=1)>11&&(y=0,C+=1),a.setState({Month:y,Year:C}),N=new Date(C,y,1),O=[],T=[],I=[]},a.choiceData=function(e){O=[],T=[],I=[];var t=e.target.innerText,n=document.querySelector(".month-year").innerText.substr(4,4),l=document.querySelector(".month-year").innerText.substr(0,3),r=0;j.forEach(function(e,t){e===l&&(r=t+1)}),1===t.length&&(t="0".concat(t)),1===r.toString().length&&(r="0".concat(r)),1===t.length&&1===r.toString().length&&(t="0".concat(t),r="0".concat(r)),a.props.inputVal1("".concat(n,"-").concat(r,"-").concat(t))},a.state={Month:y,Year:C},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"calendar",value:function(){O=[],T=[],I=[],Y.forEach(function(e){I.push(l.a.createElement("td",null,e))});var e=new Date(C,y+1,0).getDate();switch(N.getDay()){case 1:for(var t=1;t<=e;t++)O.push(l.a.createElement("td",{onClick:this.choiceData},t)),7===O.length&&(T.push(l.a.createElement("tr",null,O)),O=[]),t===e&&T.push(l.a.createElement("tr",null,O));break;case 2:O.push(l.a.createElement("td",null," "));for(var a=1;a<=e;a++)O.push(l.a.createElement("td",{onClick:this.choiceData},a)),7===O.length&&(T.push(l.a.createElement("tr",null,O)),O=[]),a===e&&T.push(l.a.createElement("tr",null,O));break;case 3:O.push(l.a.createElement("td",null," "),l.a.createElement("td",null," "));for(var n=1;n<=e;n++)O.push(l.a.createElement("td",{onClick:this.choiceData},n)),7===O.length&&(T.push(l.a.createElement("tr",null,O)),O=[]),n===e&&T.push(l.a.createElement("tr",null,O));break;case 4:O.push(l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "));for(var r=1;r<=e;r++)O.push(l.a.createElement("td",{onClick:this.choiceData},r)),7===O.length&&(T.push(l.a.createElement("tr",null,O)),O=[]),r===e&&T.push(l.a.createElement("tr",null,O));break;case 5:O.push(l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "));for(var c=1;c<=e;c++)O.push(l.a.createElement("td",{onClick:this.choiceData},c)),7===O.length&&(T.push(l.a.createElement("tr",null,O)),O=[]),c===e&&T.push(l.a.createElement("tr",null,O));break;case 6:O.push(l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "));for(var u=1;u<=e;u++)O.push(l.a.createElement("td",{onClick:this.choiceData},u)),7===O.length&&(T.push(l.a.createElement("tr",null,O)),O=[]),u===e&&T.push(l.a.createElement("tr",null,O));break;default:O.push(l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "));for(var o=1;o<=e;o++)O.push(l.a.createElement("td",{onClick:this.choiceData},o)),7===O.length&&(T.push(l.a.createElement("tr",null,O)),O=[]),o===e&&T.push(l.a.createElement("tr",null,O))}return l.a.createElement("table",null,l.a.createElement("caption",null,l.a.createElement("div",{className:"month-year-parent"},l.a.createElement("div",{className:"before",onClick:this.previousMonth}," > "),l.a.createElement("div",{className:"month-year"},j[y]," ",C),l.a.createElement("div",{className:"after",onClick:this.follwingMonth}," > "))),l.a.createElement("thead",null,I),l.a.createElement("tbody",null,T),l.a.createElement("tfoot",null))}},{key:"render",value:function(){return l.a.createElement("div",{id:"calendar1",className:"calendar-container"},this.calendar())}}]),t}(l.a.Component),q=function(e){return l.a.createElement("div",{className:"input1"},l.a.createElement("input",{onClick:function(){document.querySelector("#calendar1").className="calendar-container-visivle",document.querySelector("#calendar2").className="calendar-container"},type:"data",placeholder:"click",value:e.val1}),l.a.createElement(x,{inputVal1:e.inputVal1}))},A=(a(26),function(e){var t=[],a=[],n=[],r=0,c=0,u="",o="",s=0;return l.a.createElement("div",{className:"table-class"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("th",null,"Data"),l.a.createElement("th",null,"Price")),l.a.createElement("tbody",null,function(){if(e.apiAnswer.forEach(function(a){a.data.substr(0,4)===e.stateYear&&a.data.substr(5,2)===e.stateMonth&&(t.push(a),n.push(a.cena))}),"Price"===e.stateSort?t.sort(function(e,t){return t.cena-e.cena}):t.sort(function(e,t){return e.data.substr(8,2)-t.data.substr(8,2)}),t.forEach(function(e){a.push(l.a.createElement("tr",null,l.a.createElement("td",null,e.data.substr(8,2)),l.a.createElement("td",null,e.cena)))}),r=Math.min.apply(Math,n),c=Math.max.apply(Math,n),t.forEach(function(e){e.cena===c&&(o=e.data),e.cena===r&&(u=e.data)}),n.sort(function(e,t){return e-t}),n.length%2===0){var i=n.length/2;s=(n[i]+n[i-1])/2}else{var h=Math.floor(n.length/2);s=n[h]}return a}()),l.a.createElement("tfoot",null)),l.a.createElement("div",null,l.a.createElement("p",null,"Max price=",c,"    Data=",o),l.a.createElement("p",null,"Min price=",r,"    Data=",u),l.a.createElement("p",null,"Median=",s)),l.a.createElement("label",null,"Sort:",l.a.createElement("select",{onChange:function(t){e.sort(t.target.value)}},l.a.createElement("option",null,"Data"),l.a.createElement("option",null,"Price"))))}),J=function(e){var t=[],a=[],n=[],r=[],c=function(t){e.currentMonth(t.target.value)},u=function(t){e.currentYear(t.target.value)};return 0===e.apiAnswer.length?null:l.a.createElement("div",null,(e.apiAnswer.forEach(function(e){0===t.length?t.push(e.data.substr(0,4)):t[t.length-1]!==e.data.substr(0,4)&&t.push(e.data.substr(0,4))}),t.forEach(function(e){a.push(l.a.createElement("option",null,e))}),l.a.createElement("div",null,l.a.createElement("label",null,"Year:",l.a.createElement("select",{value:e.stateYear,onChange:u},a)))),(e.apiAnswer.forEach(function(e){0===n.length?n.push(e.data.substr(5,2)):n.length<=11&&n[n.length-1]!==e.data.substr(5,2)&&n.push(e.data.substr(5,2))}),n.forEach(function(e){r.push(l.a.createElement("option",null,e))}),l.a.createElement("div",null,l.a.createElement("label",null,"Month:",l.a.createElement("select",{value:e.stateMonth,onChange:c},r)))),l.a.createElement(A,{stateYear:e.stateYear,stateMonth:e.stateMonth,stateSort:e.stateSort,apiAnswer:e.apiAnswer,sort:e.sort}))},V=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this))).valeOfInput1=function(e){a.setState({valueInput1:e})},a.valeOfInput2=function(e){a.setState({valueInput2:e})},a.apiAnswer=function(e){a.setState({apiAnswer:e})},a.currentMonth=function(e){a.setState({currentMonth:e})},a.currentYear=function(e){a.setState({currentYear:e})},a.currentState=function(e,t){a.setState({currentYear:e,currentMonth:t})},a.sort=function(e){a.setState({sort:e})},a.state={valueInput1:"",valueInput2:"",apiAnswer:"",currentYear:"",currentMonth:"",sort:"Data"},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{id:"error",className:"no-error"}),l.a.createElement(J,{apiAnswer:this.state.apiAnswer,currentYear:this.currentYear,currentMonth:this.currentMonth,stateYear:this.state.currentYear,stateMonth:this.state.currentMonth,stateSort:this.state.sort,sort:this.sort}),l.a.createElement(q,{inputVal1:this.valeOfInput1,val1:this.state.valueInput1}),l.a.createElement(S,{inputVal2:this.valeOfInput2,val2:this.state.valueInput2}),l.a.createElement(m,{apiAnswer:this.apiAnswer,val1:this.state.valueInput1,val2:this.state.valueInput2,errorState:this.error,currentState:this.currentState}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.1ecbdcac.chunk.js.map