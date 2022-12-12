(this.webpackJsonpgooglesearch=this.webpackJsonpgooglesearch||[]).push([[0],{32:function(e,t,a){e.exports=a(68)},37:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),o=a(28),s=a.n(o),r=a(29),i=a(9);function c({fluid:e,children:t}){return l.a.createElement("div",{className:"container".concat(e?"-fluid":"")},t)}function m({fluid:e,children:t}){return l.a.createElement("div",{className:"row".concat(e?"-fluid":"")},t)}function u({size:e,children:t}){return l.a.createElement("div",{className:e.split(" ").map(e=>"col-"+e).join(" ")},t)}a(37);var h=function({src:e}){return l.a.createElement("div",{className:"thumbnail",role:"img","aria-label":"Recipe Image",style:{backgroundImage:"url(".concat(e,")")}})};function p({children:e}){return l.a.createElement("ul",{className:"list-group"},e)}class d extends l.a.Component{render(){return console.log(this.props),l.a.createElement("li",null,l.a.createElement(c,null,l.a.createElement(m,null,l.a.createElement(u,{size:"xs-4 sm-2"},l.a.createElement(h,{src:this.props.thumbnail})),l.a.createElement(u,{size:"xs-8 sm-9"},l.a.createElement("h3",null,this.props.title,l.a.createElement("span",null,l.a.createElement("h5",null,this.props.authors.join(", ")))),l.a.createElement("p",null,this.props.synopsis),l.a.createElement("a",{target:"_blank",href:this.props.link,rel:"noopener noreferrer"},"Go to Book!")))))}}var v=a(10),b=a.n(v);function E(){return l.a.createElement("div",null,l.a.createElement("h2",null,"No Books Available"))}var k=function({type:e="default",className:t,children:a,onClick:n}){return l.a.createElement("button",{onClick:n,className:["btn btn-lg","btn-".concat(e),t].join(" ")},a)};var f=function(e){return l.a.createElement(k,Object.assign({type:"danger",className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"Delete")},g=a(11);class y extends n.Component{constructor(...e){super(...e),this.state={savedBooks:[],initialized:!0},this.getBooks=()=>{b.a.get("/api/books").then(e=>{this.setState({savedBooks:e.data})}).catch(e=>console.log(e))},this.deleteFromDB=e=>{console.log(e),b.a.delete("/api/books/".concat(e)).then(()=>{g.c.error("Book Deleted"),this.getBooks()}).catch(e=>console.log(e))}}componentDidMount(){this.getBooks()}render(){return l.a.createElement("div",null,l.a.createElement(m,null,l.a.createElement(u,{size:"md-12"},this.state.savedBooks.length>0?l.a.createElement(p,null,this.state.savedBooks.map(e=>(console.log(e),l.a.createElement("div",null,l.a.createElement(d,{key:e._id,authors:e.authors,title:e.title,synopsis:e.synopsis,link:e.link,thumbnail:e.thumbnail}),l.a.createElement(f,{onClick:()=>this.deleteFromDB(e._id)}))))):l.a.createElement(E,null))))}}var B=y;a(61);class I extends l.a.Component{constructor(...e){super(...e),this.postToDB=e=>{var t={title:e.title,authors:e.authors,synopsis:e.synopsis,thumbnail:e.thumbnail,link:e.link};b.a.post("/api/books",t).then(()=>g.c.success("You added ".concat(e.title," to your bookshelf"))).catch(e=>console.log(e))}}render(){return l.a.createElement("div",null,l.a.createElement(k,{type:"primary",onClick:()=>{this.postToDB(this.props)}},"Save Book"))}}var N=I;class C extends n.Component{constructor(...e){super(...e),this.state={searchRes:[],query:"",books:[]},this.displayRes=e=>{this.setState({books:e.items})},this.searchGBooks=()=>{let e="https://www.googleapis.com/books/v1/volumes?q=".concat(this.state.query);b.a.get(e).then(e=>{this.displayRes(e.data)}).catch(e=>console.log(e))},this.handleInput=e=>{const t=e.target,a=t.name,n=t.value;this.setState({[a]:n})}}render(){return l.a.createElement(m,null,l.a.createElement(u,{size:"md-12"},l.a.createElement("div",null,l.a.createElement("input",{id:"bookQ",className:"form-control form-control-lg",autoComplete:"off",type:"text",name:"query",onChange:this.handleInput}),l.a.createElement("button",{type:"submit",onClick:this.searchGBooks},"Search for Books"),this.state.books&&this.state.books.length>0?l.a.createElement(p,null,this.state.books.map(e=>l.a.createElement("div",null,l.a.createElement(d,{key:e.id,authors:e.volumeInfo.authors?e.volumeInfo.authors:["No Author Available"],title:e.volumeInfo.title,synopsis:e.volumeInfo.description?e.volumeInfo.description:"No Description Available",link:e.volumeInfo.infoLink,thumbnail:e.volumeInfo.imageLinks.thumbnail?e.volumeInfo.imageLinks.thumbnail:"#"}),l.a.createElement(N,{authors:e.volumeInfo.authors?e.volumeInfo.authors:["No Author Available"],title:e.volumeInfo.title,synopsis:e.volumeInfo.description?e.volumeInfo.description:"No Description Available",link:e.volumeInfo.infoLink,thumbnail:e.volumeInfo.imageLinks.thumbnail?e.volumeInfo.imageLinks.thumbnail:"#"})))):l.a.createElement(E,null))))}}var x=C;a(62);var w=function(){return l.a.createElement("div",{className:"jumbotron text-center"},l.a.createElement("h1",null,l.a.createElement("span",null,l.a.createElement("a",{className:"white",id:"jumboHead",href:"/"},"libraryWeb"))),l.a.createElement("div",null,l.a.createElement("a",{className:"white",target:"_blank",rel:"noopener noreferrer",href:"http://developers.google.com/books/"},"Powered by Google Books")))};var D=function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",id:"homeLink",href:"/"},"bookHome!"),l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link navbar-brand",id:"savedLink",href:"/bookshelf"},"Saved Books!")))),l.a.createElement(w,null))};a(63),a(64);class L extends n.Component{render(){return l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement(r.a,null,l.a.createElement(c,null,l.a.createElement(g.a,{position:"top-center",autoClose:5e3,transition:g.b,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!0,draggable:!1,pauseOnHover:!0}),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:x}),l.a.createElement(i.a,{path:"/bookshelf",component:B}),l.a.createElement(i.a,{exact:!0,path:"/books/:id",component:null}),l.a.createElement(i.a,{component:null})))))}}var A=L;s.a.render(l.a.createElement(A,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.ed18984f.chunk.js.map