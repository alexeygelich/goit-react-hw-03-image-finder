(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},11:function(e,t,a){e.exports={App:"App_App__16ZpL",loader:"App_loader__2fptQ"}},14:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},15:function(e,t,a){e.exports={Button:"Button_Button__oZxMe"}},22:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(13),l=a.n(c),i=(a(22),a(12)),s=a(3),u=a(4),h=a(6),m=a(5),d=a(7),p=a.n(d),g=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.value),e.setState({value:""})},e.handleChange=function(t){e.setState({value:t.target.value})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=p.a.Searchbar,t=p.a.SearchForm,a=p.a.SearchFormButton,r=p.a.SearchFormButtonLabel,o=p.a.SearchFormInput;return Object(n.jsx)("header",{className:e,children:Object(n.jsxs)("form",{className:t,onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:a,children:Object(n.jsx)("span",{className:r})}),Object(n.jsx)("input",{className:o,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.value,onChange:this.handleChange})]})})}}]),a}(r.Component),b=a(9),j=a.n(b),f=function(e){var t=e.largeImageURL,a=e.previewURL,r=e.handleClickImg,o=j.a.ImageGalleryItem,c=j.a.ImageGalleryItemImage;return Object(n.jsx)("li",{className:o,onClick:function(){return r(t)},children:Object(n.jsx)("img",{src:a,alt:"",className:c})})},v=a(14),y=a.n(v),I=function(e){var t=e.hits,a=e.handleClickImg,r=y.a.ImageGallery;return Object(n.jsx)("ul",{className:r,children:t.map((function(e){var t=e.id,r=e.largeImageURL,o=e.previewURL;return Object(n.jsx)(f,{largeImageURL:r,previewURL:o,handleClickImg:a},t.toString())}))})},S=a(15),_=a.n(S),O=function(e){var t=e.handleClick,a=e.children;return Object(n.jsx)("button",{className:_.a.Button,type:"button",onClick:t,children:a})},x=a(10),C=a.n(x),k=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onCloseModal=function(t){"Escape"!==t.code&&"DIV"!==t.target.nodeName||e.props.closeModal()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onCloseModal),window.addEventListener("click",this.onCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onCloseModal),window.removeEventListener("click",this.onCloseModal)}},{key:"render",value:function(){var e=this.props.largeImageURL,t=C.a.Overlay,a=C.a.Modal;return Object(n.jsx)("div",{className:t,children:Object(n.jsx)("div",{className:a,children:Object(n.jsx)("img",{src:e,alt:""})})})}}]),a}(r.Component),w=a(11),L=a.n(w),M=a(16),F=a.n(M),U=(a(44),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hits:[],query:"",page:1,total:0,largeImageURL:"",loader:!1,scroll:null},e.fetchQuery=function(){e.setState({loader:!0}),fetch("https://pixabay.com/api/?q=".concat(e.state.query,"&page=").concat(e.state.page,"&key=18941462-97e9f218cf6db5cf76e5888b1&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(t){e.setState((function(e){return{hits:[].concat(Object(i.a)(e.hits),Object(i.a)(t.hits)),total:t.total}})),e.setState({loader:!1}),e.state.page>1&&window.scrollTo({top:e.state.scroll,behavior:"smooth"})}))},e.onSubmit=function(t){e.setState({hits:[],query:t,page:1})},e.handleClick=function(){e.setState((function(e){return{page:e.page+1}}))},e.handleClickImg=function(t){e.setState({largeImageURL:t})},e.closeModal=function(){e.setState({largeImageURL:""})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query===this.state.query&&t.page===this.state.page||(this.fetchQuery(),this.setState({scroll:document.documentElement.scrollHeight-145}))}},{key:"render",value:function(){var e=this.state,t=e.hits,a=e.total,r=e.page,o=e.largeImageURL,c=e.loader?Object(n.jsx)("span",{className:L.a.loader,children:Object(n.jsx)(F.a,{type:"Puff",color:"#3f51b5",height:100,width:100})}):a>12*r&&Object(n.jsx)(O,{handleClick:this.handleClick,children:"Load more"});return Object(n.jsxs)("div",{className:L.a.App,children:[Object(n.jsx)(g,{onSubmit:this.onSubmit}),t.length>0&&Object(n.jsx)(I,{hits:t,handleClickImg:this.handleClickImg}),c,o&&Object(n.jsx)(k,{largeImageURL:o,closeModal:this.closeModal})]})}}]),a}(r.Component)),N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};l.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root")),N()},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85","SearchFormButton-label":"Searchbar_SearchFormButton-label__2QH50",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}},9:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2bkPr"}}},[[45,1,2]]]);
//# sourceMappingURL=main.cbc38379.chunk.js.map