(this["webpackJsonpimage-search-app"]=this["webpackJsonpimage-search-app"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(2),i=t.n(r),o=(t(12),t(3)),s=t(4),l=t(6),m=t(5),u=(t(13),function(e){return c.a.createElement("div",{className:"container card-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("img",{alt:"vector-humans",src:"https://robohash.org/".concat(e.images.id,"?set=set5&size=180x180")}),c.a.createElement("h2",null,e.images.name),c.a.createElement("p",null,e.images.email))))}),h=(t(14),function(e){return c.a.createElement("div",{className:"container card-list"},e.images.map((function(e){return c.a.createElement(u,{key:e.id,images:e})})))}),d=(t(15),function(e){var a=e.placeholder,t=e.handleChange;return c.a.createElement("div",{className:"conatiner mt-4"},c.a.createElement("input",{className:"search ",type:"search",placeholder:a,onChange:t}))}),g=(t(16),function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).handleChange=function(a){e.setState({searchField:a.target.value})},e.state={images:[],searchField:""},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(a){return e.setState({images:a})}))}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.searchField,n=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return c.a.createElement("div",{className:"App container-fluid"},c.a.createElement("div",{className:"container mt-5"},c.a.createElement("h1",null,"Picture Roll")),c.a.createElement(d,{placeholder:"search images",handleChange:this.handleChange}),c.a.createElement(h,{images:n}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(17);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.f69015f9.chunk.js.map