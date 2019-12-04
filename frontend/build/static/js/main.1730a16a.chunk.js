(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{63:function(e,t,a){e.exports=a(94)},68:function(e,t,a){},91:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),o=a.n(l),i=(a(68),a(14)),c=a(15),s=a(18),h=a(16),u=a(19),d=a(59),m=a(24),g=a(8),p=a(31),E=a(27),y=a(25),f=a(26),b=a.n(f),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={showModal:!1,clearing:!1,done:!1},a.handleModalClose=function(){a.setState({showModal:!1})},a.clear=function(){a.setState({clearing:!0},(function(){b.a.post("/api/clear/").then((function(e){a.setState({clearing:!1,done:!0,showModal:!1}),console.log(e)})).catch((function(e){a.setState({clearing:!1,showModal:!1,done:!0}),console.log(e)}))}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:8}},r.a.createElement("center",null,r.a.createElement("h1",null," TapSearch "),"A tool for inverted paragraph-word indexing.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"What do you want to do?")," ",r.a.createElement("br",null),r.a.createElement(g.a,{variant:"outline-primary",size:"lg",style:{display:"block",width:"80%",height:80,maxWidth:500,margin:20},onClick:function(){return e.props.history.push("/index")}},"Index"),r.a.createElement(g.a,{variant:"outline-success",size:"lg",style:{display:"block",width:"80%",height:80,maxWidth:500,margin:20},onClick:function(){return e.props.history.push("/search")}},"Search"),r.a.createElement(g.a,{variant:"outline-danger",size:"lg",style:{display:"block",width:"80%",height:80,maxWidth:500,margin:20},onClick:function(){return e.setState({showModal:!0})}},"Clear")),r.a.createElement(p.a,{show:this.state.showModal,onHide:this.handleModalClose},r.a.createElement(p.a.Header,{closeButton:!0},r.a.createElement(p.a.Title,null,"Woahhh!")),r.a.createElement(p.a.Body,null,"You're about to clear every paragraph and word from the index."),r.a.createElement(p.a.Footer,null,r.a.createElement(g.a,{variant:"secondary",disabled:this.state.clearing,onClick:this.handleModalClose},"Cancel"),this.state.clearing&&r.a.createElement(g.a,{variant:"danger",disabled:!0,style:{height:37,width:99}},r.a.createElement(E.a,{as:"span",animation:"border",size:"sm",role:"status"})),!this.state.clearing&&r.a.createElement(g.a,{variant:"danger",onClick:this.clear},"Go Ahead"))),r.a.createElement(y.a,{style:{position:"absolute",top:30,left:0,right:0,margin:"auto"},onClose:function(){return e.setState({done:!1})},show:this.state.done,delay:3e3,autohide:!0},r.a.createElement(y.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},"Done!")),r.a.createElement(y.a.Body,null,"Everything has been erased")))}}]),t}(n.Component),v=a(62),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={text:"",working:!1,done:!1},a.onTextChange=function(e){a.setState({text:e.target.value})},a.hitAPI=function(){a.setState({working:!0}),b.a.post("/api/index/",{text:a.state.text}).then((function(e){a.setState({working:!1,done:!0}),console.log(e)})).catch((function(e){a.setState({working:!1}),console.log(e)}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{padding:20,fontSize:24,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement("center",null,"You can enter the text you want to index below",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v.a.Control,{size:"lg",as:"textarea",type:"textarea",id:"text",placeholder:"Text goes here",style:{height:"50%",maxHeight:600,maxWidth:1e3},onKeyDown:function(t){"Enter"===t.key&&""===!e.state.text&&e.hitAPI()},rows:"10",onChange:this.onTextChange}),this.state.working&&r.a.createElement(g.a,{variant:"primary",disabled:!0,style:{marginTop:20,width:"100%",height:49}},r.a.createElement(E.a,{as:"span",animation:"border",size:"sm",role:"status"}),r.a.createElement("span",{className:"sr-only"},"Loading...")),!this.state.working&&r.a.createElement(g.a,{variant:"primary",size:"lg",onClick:this.hitAPI,disabled:""===this.state.text||this.state.working,style:{marginTop:20,width:"100%"}},"Index")),r.a.createElement(y.a,{style:{position:"absolute",top:30,left:0,right:0,margin:"auto"},onClose:function(){return e.setState({done:!1})},show:this.state.done,delay:3e3,autohide:!0},r.a.createElement(y.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},"Done!")),r.a.createElement(y.a.Body,null,"Your text has been processed successfully.")))}}]),t}(n.Component),k=a(28),C=a(20),j=a(38),O=a(39),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={text:""},a.onTextChange=function(e){var t=document.getElementById("text").value;a.setState({text:t})},a.search=function(e){a.props.history.push("/search/".concat(a.state.text),{key:a.state.text})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{padding:20,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},r.a.createElement("h1",null," TapSearch "),r.a.createElement(C.a,{size:"lg",className:"mb-3",style:{maxWidth:600,marginTop:60}},r.a.createElement(C.a.Prepend,null,r.a.createElement(C.a.Text,{id:"inputGroup-sizing-lg"},r.a.createElement(j.a,{icon:O.a}))),r.a.createElement(k.a,{placeholder:"Word","aria-label":"Word","aria-describedby":"basic-addon2",id:"text",onChange:this.onTextChange,onKeyDown:function(t){"Enter"===t.key&&""!==e.state.text&&e.search()}}),r.a.createElement(C.a.Append,null,r.a.createElement(g.a,{variant:"outline-secondary",disabled:""===this.state.text,onClick:this.search},"Go"))))}}]),t}(n.Component),T=a(46),W=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).onTextChange=function(e){var t=document.getElementById("text").value;a.setState({text:t})},a.search=function(e){a.props.history.push("/search/".concat(a.state.text),{key:a.state.text})};var n=a.props.match.params.word;return a.state={text:n,searching:!0,data:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.post("/api/search/",{word:this.state.text}).then((function(t){e.setState({searching:!1,data:t.data.paragraphs}),console.log(t.data)})).catch((function(t){e.setState({searching:!1}),console.log(t)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{style:{padding:20,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",position:"absolute",overflow:"auto"}},r.a.createElement("h1",null," TapSearch "),r.a.createElement(C.a,{size:"lg",className:"mb-3",style:{marginTop:30,maxWidth:600}},r.a.createElement(C.a.Prepend,null,r.a.createElement(C.a.Text,{id:"inputGroup-sizing-lg"},r.a.createElement(j.a,{icon:O.a}))),r.a.createElement(k.a,{placeholder:"Word","aria-label":"Word","aria-describedby":"basic-addon2",id:"text",onChange:this.onTextChange,onKeyDown:function(t){"Enter"===t.key&&""!==e.state.text&&e.search()},value:this.state.text}),r.a.createElement(C.a.Append,null,r.a.createElement(g.a,{variant:"outline-secondary",disabled:""===this.state.text,onClick:this.search},"Go"))),r.a.createElement("div",{style:{background:"",height:"100%",width:"100%",maxWidth:600,marginTop:40}},this.state.searching&&r.a.createElement(E.a,{style:{position:"absolute",left:0,right:0,margin:"auto",top:0,bottom:0},animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),!this.state.searching&&r.a.createElement("div",null,r.a.createElement("b",null,"Results"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T.a,null,0===this.state.data.length&&r.a.createElement("div",null,r.a.createElement("h4",null," Nothing Found ")),this.state.data.map((function(e,t){return r.a.createElement(T.a.Item,{style:{textOverflow:"ellipsis"},key:t},r.a.createElement("b",null," Document ",t+1," "),r.a.createElement("br",null),e)})))))))}}]),t}(n.Component),I=function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h2",null," Not Found "),r.a.createElement("p",null," The page you're looking for does not exists. ")))},z=(a(91),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:x}),r.a.createElement(m.a,{exact:!0,path:"/index",component:w}),r.a.createElement(m.a,{exact:!0,path:"/search/:word",render:function(e){return r.a.createElement(W,Object.assign({key:e.match.params.word},e))}}),r.a.createElement(m.a,{exact:!0,path:"/search",component:S}),r.a.createElement(m.a,{exact:!0,component:I})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[63,1,2]]]);
//# sourceMappingURL=main.1730a16a.chunk.js.map