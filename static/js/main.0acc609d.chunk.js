(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2bkPr"}},11:function(e,t,a){e.exports={App:"App_App__16ZpL",loader:"App_loader__2fptQ"}},14:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},15:function(e,t,a){e.exports={Button:"Button_Button__oZxMe"}},22:function(e,t,a){},3:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85","SearchFormButton-label":"Searchbar_SearchFormButton-label__2QH50",SearchFormInput:"Searchbar_SearchFormInput__VhsfU",themeSwitch:"Searchbar_themeSwitch__2DBZl",themeSwitchIcon:"Searchbar_themeSwitchIcon__3HpHB",themeSwitchControl:"Searchbar_themeSwitchControl__1zuJx",themeSwitchToggle:"Searchbar_themeSwitchToggle__Vxq5W",themeSwitchTrack:"Searchbar_themeSwitchTrack__8NsN9",themeSwitchMarker:"Searchbar_themeSwitchMarker__1VEo2",green:"Searchbar_green__3XG4y",red:"Searchbar_red__dm0-w"}},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),l=a(13),o=a.n(l),i=(a(22),a(12)),s=a(4),h=a(5),m=a(7),u=a(6),d=a(3),g=a.n(d),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:"",isActiveScroll:!1},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.value),e.setState({value:""})},e.handleChange=function(t){e.setState({value:t.target.value})},e.handleChangeScroll=function(){e.props.handleInfinitScrollToggle(),e.setState((function(e){return{isActiveScroll:!e.isActiveScroll}}))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=g.a.Searchbar,t=g.a.SearchForm,a=g.a.SearchFormButton,r=g.a.SearchFormButtonLabel,c=g.a.SearchFormInput,l=g.a.themeSwitch,o=g.a.themeSwitchControl,i=g.a.themeSwitchToggle,s=g.a.themeSwitchTrack,h=g.a.themeSwitchMarker,m=g.a.green,u=g.a.red,d=this.state,S=d.value,p=d.isActiveScroll;return Object(n.jsxs)("header",{className:e,children:[Object(n.jsxs)("form",{className:t,onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:a,children:Object(n.jsx)("span",{className:r})}),Object(n.jsx)("input",{className:c,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:S,onChange:this.handleChange})]}),Object(n.jsxs)("div",{className:l,children:[Object(n.jsxs)("div",{className:o,children:[Object(n.jsx)("input",{className:i,type:"checkbox",name:"theme",id:"theme-switch-toggle",onChange:this.handleChangeScroll}),Object(n.jsx)("label",{"aria-hidden":"true",className:s,htmlFor:"theme-switch-toggle"}),Object(n.jsx)("div",{"aria-hidden":"true",className:h})]}),Object(n.jsx)("span",{className:p?m:u,children:"Infinit Scroll"})]})]})}}]),a}(r.Component),p=a(10),f=a.n(p),b=function(e){var t=e.largeImageURL,a=e.previewURL,r=e.handleClickImg,c=f.a.ImageGalleryItem,l=f.a.ImageGalleryItemImage;return Object(n.jsx)("li",{className:c,onClick:function(){return r(t)},children:Object(n.jsx)("img",{src:a,alt:"",className:l})})},j=a(14),_=a.n(j),v=function(e){var t=e.hits,a=e.handleClickImg,r=_.a.ImageGallery;return Object(n.jsx)("ul",{className:r,children:t.map((function(e,t){return Object(n.jsx)(b,{largeImageURL:e.largeImageURL,previewURL:e.previewURL,handleClickImg:a},t.toString())}))})},I=a(15),w=a.n(I),y=function(e){var t=e.handleClick,a=e.children;return Object(n.jsx)("button",{className:w.a.Button,type:"button",onClick:t,children:a})},O=a(8),x=a.n(O),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onCloseModal=function(t){"Escape"!==t.code&&"DIV"!==t.target.nodeName||e.props.closeModal()},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onCloseModal),window.addEventListener("click",this.onCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onCloseModal),window.removeEventListener("click",this.onCloseModal)}},{key:"render",value:function(){var e=this.props,t=e.largeImageURL,a=e.isModal,r=x.a.Overlay,c=x.a.Modal,l=x.a.isHidden,o=x.a.OverlayHidden;return Object(n.jsx)("div",{className:a?r:o,children:Object(n.jsx)("div",{className:a?c:l,children:Object(n.jsx)("img",{src:t,alt:""})})})}}]),a}(r.Component),k=a(11),M=a.n(k),L=a(16),N=a.n(L),F=(a(44),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hits:[],query:"",page:1,total:0,largeImageURL:"",isModal:!1,loader:!1,scroll:null,infiniteScroll:!1},e.onInfinitScroll=function(){document.documentElement.offsetHeight-document.documentElement.scrollTop-document.documentElement.clientHeight<100&&(e.setState((function(e){return{page:e.page+1}})),window.removeEventListener("scroll",e.onInfinitScroll))},e.fetchQuery=function(){e.setState({loader:!0}),fetch("https://pixabay.com/api/?q=".concat(e.state.query,"&page=").concat(e.state.page,"&key=18941462-97e9f218cf6db5cf76e5888b1&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(t){e.setState((function(e){return{hits:[].concat(Object(i.a)(e.hits),Object(i.a)(t.hits)),total:t.total,loader:!1}})),e.state.page>1&&!e.state.infiniteScroll&&window.scrollTo({top:e.state.scroll,behavior:"smooth"})}))},e.onSubmit=function(t){e.setState({hits:[],query:t,page:1})},e.handleClick=function(){e.setState((function(e){return{page:e.page+1}}))},e.handleClickImg=function(t){e.setState({largeImageURL:t,isModal:!0})},e.closeModal=function(){e.setState({isModal:!1}),setTimeout((function(){e.setState({largeImageURL:""})}),500)},e.handleInfinitScrollToggle=function(){e.setState((function(e){return{infiniteScroll:!e.infiniteScroll}}))},e}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query===this.state.query&&t.page===this.state.page||(this.fetchQuery(),this.setState({scroll:document.documentElement.scrollHeight-145})),this.state.infiniteScroll&&window.addEventListener("scroll",this.onInfinitScroll),this.state.infiniteScroll||window.removeEventListener("scroll",this.onInfinitScroll)}},{key:"render",value:function(){var e=this.state,t=e.hits,a=e.total,r=e.page,c=e.largeImageURL,l=e.loader,o=e.infiniteScroll,i=e.isModal,s=l?Object(n.jsx)("span",{className:M.a.loader,children:Object(n.jsx)(N.a,{type:"Puff",color:"#3f51b5",height:100,width:100})}):a>12*r&&!o&&Object(n.jsx)(y,{handleClick:this.handleClick,children:"Load more"});return Object(n.jsxs)("div",{className:M.a.App,children:[Object(n.jsx)(S,{onSubmit:this.onSubmit,handleInfinitScrollToggle:this.handleInfinitScrollToggle}),t.length>0&&Object(n.jsx)(v,{hits:t,handleClickImg:this.handleClickImg}),s,Object(n.jsx)(C,{largeImageURL:c,closeModal:this.closeModal,isModal:i})]})}}]),a}(r.Component)),T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root")),T()},8:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",OverlayHidden:"Modal_OverlayHidden__3QvdD",Modal:"Modal_Modal__2WBTT",isHidden:"Modal_isHidden__3utxB"}}},[[45,1,2]]]);
//# sourceMappingURL=main.0acc609d.chunk.js.map