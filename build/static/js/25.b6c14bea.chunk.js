(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{109:function(t,e,a){"use strict";var n=a(111),s=a(2),l=a.n(s);Object(n.a)({},l.a,{ID:l.a.oneOfType([l.a.string,l.a.number]).isRequired,component:l.a.oneOfType([l.a.string,l.a.func]),date:l.a.oneOfType([l.a.instanceOf(Date),l.a.string])})},110:function(t,e,a){"use strict";var n=a(40),s=a(16),l=a(5),r=a.n(l),o=a(1),c=a.n(o),i=(a(109),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),m=function(t){var e,a=t.tag,l=t.className,o=t.type,m=Object(s.a)(t,["tag","className","type"]),u=r()(Object(n.a)({},o,!!o),l);return e=a||(!a&&i[o]?i[o]:"p"),c.a.createElement(e,Object.assign({},m,{className:u}))};m.defaultProps={type:"p"},e.a=m},112:function(t,e,a){"use strict";var n=a(16),s=a(1),l=a.n(s),r=(a(109),a(19)),o=a(110),c=r.a.create("page"),i=function(t){var e=t.title,a=t.breadcrumbs,s=t.tag,r=t.className,i=t.children,m=Object(n.a)(t,["title","breadcrumbs","tag","className","children"]),u=c.b("px-3",r);return l.a.createElement(s,Object.assign({className:u},m),l.a.createElement("div",{className:c.e("header")},e&&"string"===typeof e?l.a.createElement(o.a,{type:"h4",className:c.e("title")},e):e,a&&a),i)};i.defaultProps={tag:"div",title:""},e.a=i},135:function(t,e,a){},136:function(t,e,a){t.exports=a.p+"static/media/coin-heads.42a4302c.png"},137:function(t,e,a){t.exports=a.p+"static/media/coin-tails.05783da0.png"},182:function(t,e,a){"use strict";a.r(e);var n=a(40),s=a(9),l=a(10),r=a(12),o=a(11),c=a(13),i=a(26),m=a(1),u=a.n(m),h=a(24),d=a(106),p=a(38),g=a(41),f=a(134),E=a.n(f),y=a(90),b=a(103),x=a(104),C=a(105),k=a(127),v=a(126),O=a(121),S=a(119),N=a(120),j=a(132),T=a(122),w=a(112),L=a(27),_=a.n(L),R=a(28),A=(a(135),a(136)),H=a.n(A),M=a(137),W=a.n(M),I=function(t){function e(){return Object(s.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return u.a.createElement("div",{className:"Coin"},u.a.createElement("div",{className:"Coin-inner ".concat(this.props.side)},u.a.createElement("div",{className:"Coin-heads"},u.a.createElement("img",{src:H.a,alt:"heads",width:"200px",height:"200px"})),u.a.createElement("div",{className:"Coin-tails"},u.a.createElement("img",{src:W.a,alt:"tails",width:"200px",height:"200px"}))))}}]),e}(m.Component),z=a(18),J=a(4),P=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(r.a)(this,Object(o.a)(e).call(this,t))).state={heads_count:0,tails_count:0,select:0,amount:0,heads:0,tails:0,result:0,profit:0,modal:!1,redirectToLogin:!1,status:!1,wallet:0},a.onButtonClick=function(t){return function(){return a.setter.setState({select:t,amount:10}),a.toggle()()}},a.toggle=function(t){return function(){if(!t)return a.setter.setState({modal:!a.state.modal})}},a.onContractChange=function(t){return function(){if("+"===t){if("9"===a.refs.contract.innerHTML)return;a.refs.contract.innerHTML=parseInt(a.refs.contract.innerHTML)+1}else{if("-"!==t)return void a.setter.setState({amount:parseInt(a.refs.contract.innerHTML)*parseInt(t)});if("1"===a.refs.contract.innerHTML)return;a.refs.contract.innerHTML=parseInt(a.refs.contract.innerHTML)-1}a.state.amount>=1e4?a.setter.setState({amount:1e4*parseInt(a.refs.contract.innerHTML)}):a.state.amount>=1e3?a.setter.setState({amount:1e3*parseInt(a.refs.contract.innerHTML)}):a.state.amount>=100?a.setter.setState({amount:100*parseInt(a.refs.contract.innerHTML)}):a.state.amount>=10&&a.setter.setState({amount:10*parseInt(a.refs.contract.innerHTML)})}},a.onAddAmount=function(){0==a.state.select?a.setter.setState({heads:a.state.heads+a.state.amount,modal:!a.state.modal}):a.setter.setState({tails:a.state.tails+a.state.amount,modal:!a.state.modal})},a.onPostState=function(){0==a.state.heads&&0==a.state.tails||(a.setter.setState({status:!0,result:-1}),fetch("/api/toss",{method:"POST",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken},body:JSON.stringify({heads:a.state.heads,tails:a.state.tails})}).then(function(t){t.status<400?t.json().then(function(t){t.error?(a.notificationSystem.addNotification({title:u.a.createElement(J.A,null),message:t.error,level:"info"}),a.setter.setState({status:!1,heads:0,tails:0})):(a.setter.setState({result:t.result}),setTimeout(function(){a.notificationSystem.addNotification({title:u.a.createElement(J.A,null),message:"You got \u20b9"+t.profit,level:"info"}),a.setter.setState({status:!1,profit:t.profit,wallet:t.wallet,heads:0,heads_count:t.heads_count,tails_count:t.tails_count,tails:0})},2e3))}):a.setter.setState({redirectToLogin:!0})}))},a.onRecharge=function(){a.props.history.push("/my/recharge")},a.setter=Object(g.a)(Object(i.a)(Object(i.a)(a))),console.log(t.location.state),a}return Object(c.a)(e,t),Object(l.a)(e,[{key:"componentWillUnmount",value:function(){this.setter.cancel()}},{key:"componentDidMount",value:function(){var t=this;fetch("/api/toss",{method:"GET",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken}}).then(function(e){e.status<400?e.json().then(function(e){var a;t.setter.setState((a={heads_count:e.heads},Object(n.a)(a,"heads_count",e.tails),Object(n.a)(a,"wallet",e.wallet),Object(n.a)(a,"heads_count",e.heads_count),Object(n.a)(a,"tails_count",e.tails_count),a))}):t.setter.setState({redirectToLogin:!0})})}},{key:"render",value:function(){var t=this;return this.state.redirectToLogin?u.a.createElement(d.a,{to:"/login"}):(this.state.time<=2e4?"red":"black",!0===this.state.reload?u.a.createElement(h.a,null):u.a.createElement(w.a,{className:"EnjoyPage",title:u.a.createElement("h4",{style:{padding:"20px 20px 5px 20px"}},"Balance : \u20b9",u.a.createElement(E.a,{value:this.state.wallet,formatValue:function(t){return Number(t).toFixed(2)},duration:500})),breadcrumbs:!0===JSON.parse(localStorage.getItem("auth")).user.admin?u.a.createElement("div",{style:{width:"100%"}},u.a.createElement(p.a,{color:"danger",className:"btn btn-danger",to:"/toss-admin"},"Admin"),u.a.createElement(y.a,{color:"warning",onClick:this.onRecharge},"Recharge"),u.a.createElement(y.a,{color:"link",onClick:this.onReload,style:{float:"right"}},u.a.createElement(z.y,null))):u.a.createElement("div",{style:{width:"100%"}},u.a.createElement(y.a,{color:"warning",onClick:this.onRecharge},"Recharge"),u.a.createElement(y.a,{color:"link",onClick:this.onReload,style:{float:"right"}},u.a.createElement(z.y,null)))},u.a.createElement(b.a,null,u.a.createElement(x.a,{md:"12",sm:"12",xs:"12"},u.a.createElement(C.a,{className:"mb-3"},u.a.createElement(k.a,null,u.a.createElement("div",{style:{textAlign:"center"}},"Total bet : ",this.state.heads_count+this.state.tails_count,", heads ",this.state.heads_count,", tails ",this.state.tails_count)),u.a.createElement(v.a,null,this.state.status?u.a.createElement(b.a,null,u.a.createElement(x.a,{lg:"6",md:"6",sm:"6",xs:"6",style:{textAlign:"center"}},u.a.createElement(y.a,{color:"success",disabled:!0,style:{maxWidth:"180px",width:"80%",borderRadius:"20px"}},u.a.createElement("span",null,"Heads"),u.a.createElement("br",null),u.a.createElement("span",{style:{color:"gold"}},"\u20b9 ",this.state.heads))),u.a.createElement(x.a,{lg:"6",md:"6",sm:"6",xs:"6",style:{textAlign:"center"}},u.a.createElement(y.a,{color:"secondary",disabled:!0,style:{maxWidth:"180px",width:"80%",borderRadius:"20px"}},u.a.createElement("span",null,"Tails"),u.a.createElement("br",null),u.a.createElement("span",{style:{color:"gold"}},"\u20b9 ",this.state.tails)))):u.a.createElement(b.a,null,u.a.createElement(x.a,{lg:"6",md:"6",sm:"6",xs:"6",style:{textAlign:"center"}},u.a.createElement(y.a,{color:"success",onClick:this.onButtonClick(0),style:{height:"50px",width:"80%",maxWidth:"180px",borderRadius:"20px",fontSize:"20px",fontWeight:"200"}},u.a.createElement("span",null,"Heads")),u.a.createElement("br",null),u.a.createElement("span",{style:{color:"darkorange"}},"\u20b9 ",this.state.heads)),u.a.createElement(x.a,{lg:"6",md:"6",sm:"6",xs:"6",style:{textAlign:"center"}},u.a.createElement(y.a,{color:"secondary",onClick:this.onButtonClick(1),style:{height:"50px",width:"80%",maxWidth:"180px",borderRadius:"20px",fontSize:"20px",fontWeight:"200"}},u.a.createElement("span",null,"Tails")),u.a.createElement("br",null),u.a.createElement("span",{style:{color:"darkorange"}},"\u20b9 ",this.state.tails)),u.a.createElement(O.a,{isOpen:this.state.modal,toggle:this.toggle(),className:this.props.className},u.a.createElement(S.a,{toggle:this.toggle()},'Contract Money on "',1==this.state.select?"Tails":"Heads",'"'),u.a.createElement(N.a,null,u.a.createElement(b.a,null,u.a.createElement("span",{style:{padding:"6px 12px"}},"Contract Money :"),u.a.createElement("br",null),u.a.createElement(j.a,{className:" mb-3 ml-auto mr-auto"},u.a.createElement(y.a,{style:{fontWeight:"600"},color:"link",onClick:this.onContractChange("10"),className:this.state.amount>9&&this.state.amount<100?"btn-active":""},"10"),u.a.createElement(y.a,{style:{fontWeight:"600"},color:"link",onClick:this.onContractChange("100"),className:this.state.amount>99&&this.state.amount<1e3?"btn-active":""},"100"),u.a.createElement(y.a,{style:{fontWeight:"600"},color:"link",onClick:this.onContractChange("1000"),className:this.state.amount>999&&this.state.amount<1e4?"btn-active":""},"1000"),u.a.createElement(y.a,{style:{fontWeight:"600"},color:"link",onClick:this.onContractChange("10000"),className:this.state.amount>9999&&this.state.amount<1e5?"btn-active":""},"10000"))),u.a.createElement(b.a,null,u.a.createElement("span",{style:{padding:"10px 12px"}},"Number :"),u.a.createElement("br",null),u.a.createElement("div",null,u.a.createElement(y.a,{color:"link",style:{fontSize:"1.5rem"},onClick:this.onContractChange("-")}," - "),u.a.createElement("span",{style:{padding:"6px 12px"},ref:"contract"},"1"),u.a.createElement(y.a,{color:"link",style:{fontSize:"1.5rem"},onClick:this.onContractChange("+")}," + "))),u.a.createElement(b.a,null,u.a.createElement("span",{style:{padding:"0 12px"}},"Total contract money is \xa0"),u.a.createElement("span",{style:{fontWeight:"600"},className:"text-success"}," ",this.state.amount))),u.a.createElement(T.a,null,u.a.createElement(y.a,{color:"primary",onClick:this.onAddAmount},"OK")," ",u.a.createElement(y.a,{color:"secondary",onClick:this.toggle()},"Cancel")))),u.a.createElement(b.a,null,u.a.createElement("div",{style:{width:"100%",marginLeft:"auto",marginRight:"auto"}},u.a.createElement(I,{side:0==this.state.result?"heads":1==this.state.result?"tails":""})),u.a.createElement("br",null),u.a.createElement(y.a,{color:"primary",onClick:this.onPostState,style:{height:"50px",width:"60%",maxWidth:"200px",borderRadius:"20px",fontSize:"20px",fontWeight:"300",marginLeft:"auto",marginRight:"auto"}},"Flip Coin")))))),u.a.createElement(b.a,null,u.a.createElement("div",{style:{height:"60px"}})),u.a.createElement(_.a,{dismissible:!1,ref:function(e){return t.notificationSystem=e},style:R.a})))}}]),e}(u.a.Component);e.default=P}}]);
//# sourceMappingURL=25.b6c14bea.chunk.js.map