(this["webpackJsonplucky-draw"]=this["webpackJsonplucky-draw"]||[]).push([[0],{26:function(e,t,c){e.exports={GiftBox:"GiftBox_GiftBox__UbYeL"}},37:function(e,t,c){e.exports={LightRope:"LightRope_LightRope__k-f6g","flash-1":"LightRope_flash-1__3-yHm","flash-2":"LightRope_flash-2__3FAYo","flash-3":"LightRope_flash-3__3wmWc"}},39:function(e,t,c){e.exports={AllGifts:"AllGifts_AllGifts__1PBRR"}},41:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){e.exports={RollNumber:"RollNumber_RollNumber__2IRh2"}},72:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c(0),l=c.n(i),n=c(12),j=c.n(n),a=(c(49),c(80)),r=c(81),o=c(82),b=(c(50),c(19)),x=c(37),h=c.n(x),O=function(){return Object(s.jsxs)("ul",{className:h.a.LightRope,children:[Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{})]})};O.defaultProps={};var d=O,u=c.p+"static/media/chrismas.f88ac2e9.png",f=c(14),p=c(15),m=c(10),g=c(17),L=c(16),C=(c(51),c(38)),v=c.n(C),k=c(77),y=c(25),I=c(52),w=l.a.createContext(),N="http://127.0.0.1:8080/config/",R=function(e){Object(g.a)(c,e);var t=Object(L.a)(c);function c(){var e;return Object(f.a)(this,c),(e=t.call(this)).state={showModel:!1,currentPerson:"",currentModelImg:"",currentDescription:"Description",RollNum:0,UsersList:[],GiftList:[],BoxList:[]},e.handleImgClick=e.handleImgClick.bind(Object(m.a)(e)),e.reduceUserListTest=e.reduceUserListTest.bind(Object(m.a)(e)),e.handleRollNumClick=e.handleRollNumClick.bind(Object(m.a)(e)),e}return Object(p.a)(c,[{key:"handleRollNumClick",value:function(){var e=this.state.UsersList[0].LanID,t=[];this.state.GiftList.forEach((function(c,s){console.log("%d: %s",s,c),""===c.acceptPPL&&c.FromLanID!==e&&t.push(s)}));var c=Math.floor(Math.random()*t.length),s=t[c];this.setState({RollNum:s})}},{key:"handleImgClick",value:function(e,t){console.log("click for model"),this.setState((function(c){return{showModel:!c.showModel,currentModelImg:e,currentDescription:t}}))}},{key:"reduceUserListTest",value:function(e){var t=this;this.state.UsersList.length>0&&(this.state.GiftList[e].acceptPPL=this.state.UsersList[0].Text,console.log(this.state.GiftList[e]),this.setState((function(e){return{UsersList:e.UsersList.slice(1),GiftList:t.state.GiftList}})))}},{key:"componentWillMount",value:function(){var e=this;I.get(N+"Users.json").then((function(t){console.log(t.data);var c=t.data,s=[];Object.keys(c).forEach((function(e){s.push({LanID:c[e],type:"Light",Text:e})})),e.setState({UsersList:s})})).catch((function(e){console.error(e)})),I.get(N+"Gifts.json").then((function(t){var c=t.data;c.forEach((function(e){e.acceptPPL=""})),console.log(c),e.setState({GiftList:c})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return Object(s.jsx)(w.Provider,{value:Object(y.a)(Object(y.a)({},this.state),{},{handleImgClick:this.handleImgClick,reduceUserListTest:this.reduceUserListTest,handleRollNumClick:this.handleRollNumClick}),children:this.props.children})}}]),c}(l.a.Component),_=function(e){Object(g.a)(c,e);var t=Object(L.a)(c);function c(){var e;return Object(f.a)(this,c),(e=t.call(this)).handleClick=function(){e.setState({num:Math.floor(100*Math.random())})},e.state={num:0},e.handleClick=e.handleClick.bind(Object(m.a)(e)),e}return Object(p.a)(c,[{key:"render",value:function(){return Object(s.jsx)(w.Consumer,{children:function(e){return Object(s.jsxs)(a.a,{lg:6,children:[Object(s.jsx)(r.a,{}),Object(s.jsx)(r.a,{children:Object(s.jsx)(v.a,{num:e.RollNum,length:2,divider:"",delay:"1"})}),Object(s.jsx)(r.a,{children:Object(s.jsx)(k.a,{onClick:e.handleRollNumClick,variant:"warning",style:{height:"3rem"},children:"ROLL "})})]})}})}}]),c}(l.a.Component),G=c(39),U=c.n(G),P=c(13),B=c(26),D=c.n(B),T=c(85),A=c.p+"static/media/giftbox.875b9000.svg",M=c(40),F=c.n(M),S=(c.p,function(e){Object(g.a)(c,e);var t=Object(L.a)(c);function c(){var e;return Object(f.a)(this,c),(e=t.call(this)).state={isFlipped:!1},e.handleClick=e.handleClick.bind(Object(m.a)(e)),e}return Object(p.a)(c,[{key:"handleClick",value:function(e,t){t(e),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){var e,t,c=this,i="http://127.0.0.1:8080/imgs/",l=this.context,n=(l.currentPerson,l.handleImgClick),j=l.reduceUserListTest,a=l.GiftList,r=this.props,o=r.BoxNum,b=r.WrappedImg,x=r.UnWrappedImg,h=r.Description;return b&&""!==b||(b="LanIDAAA_wrapped.jpg"),x&&""!==x||(x="LanIDAAA_unwrapped.jpg"),b=i+b,x=i+x,Object(s.jsxs)(F.a,{isFlipped:this.state.isFlipped,flipDirection:"horizontal",children:[Object(s.jsxs)(T.a,(e={className:D.a.GiftBox,bg:"warning",text:"white",style:{width:"10rem"}},Object(P.a)(e,"className","mb-2"),Object(P.a)(e,"children",[Object(s.jsxs)(T.a.Body,{children:[Object(s.jsx)(T.a.Img,{src:A,alt:"Card image"}),Object(s.jsx)(T.a.ImgOverlay,{style:{height:"50px"},onClick:function(){return n(b,h)},children:Object(s.jsx)(T.a.Text,{style:{fontSize:"6rem"},children:o})})]}),Object(s.jsx)(T.a.Footer,{children:Object(s.jsx)(k.a,{variant:"secondary",size:"sm",onClick:function(){return c.handleClick(o,j)},children:"Accept"})})]),e)),Object(s.jsxs)(T.a,(t={className:D.a.GiftBox,bg:"warning",text:"white",style:{width:"10rem"}},Object(P.a)(t,"className","mb-2"),Object(P.a)(t,"children",[Object(s.jsxs)(T.a.Body,{children:[Object(s.jsx)(T.a.Img,{src:b,alt:"Card image",style:{height:"118px"}}),Object(s.jsx)(T.a.ImgOverlay,{style:{height:"50px"},onClick:function(){return n(x,h)},children:Object(s.jsx)(T.a.Text,{style:{fontSize:"6rem"},children:o})})]}),Object(s.jsx)(T.a.Footer,{children:Object(s.jsxs)("small",{children:["Accepted By ",a[o].acceptPPL]})})]),t))]})}}]),c}(l.a.Component));S.contextType=w;var W=function(){return Object(s.jsx)("div",{className:U.a.AllGifts,children:Object(s.jsx)(w.Consumer,{children:function(e){var t=e.GiftList;if(t&&0!==t.length){var c=[];return t.forEach((function(e,t){console.log("%d: %s",t,e),c.push(Object(s.jsx)(S,{BoxNum:t,WrappedImg:e.WrappedImg,UnWrappedImg:e.UnWrappedImg,Description:e.Description}))})),c}}})})};W.defaultProps={};var E=W,z=c(41),H=c.n(z),J=c(83),Y=function(){return Object(s.jsx)(w.Consumer,{children:function(e){return Object(s.jsxs)(J.a,{dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",show:e.showModel,onHide:function(){return e.handleImgClick()},animation:!0,className:H.a.Model,children:[Object(s.jsx)(J.a.Header,{closeButton:!0,children:Object(s.jsx)(J.a.Title,{children:e.currentDescription})}),Object(s.jsx)(J.a.Body,{children:Object(s.jsx)(o.a,{src:e.currentModelImg,fluid:!0})})]})}})};Y.defaultProps={};var V=Y,q=(c(72),c(84)),K=c(43),Q=function(){return Object(s.jsx)(w.Consumer,{children:function(e){var t=e.UsersList;return t&&0!==t.length?(t[0].type="info",Object(s.jsx)(q.a,{as:"ul",className:"peopleList",children:t.map((function(e){return Object(s.jsx)(q.a.Item,{as:"li",variant:e.type,children:e.Text})}))})):Object(s.jsx)(K.CSVLink,{data:e.GiftList,separator:";",children:"Download Result"})}})};Q.defaultProps={};var X=Q,Z=function(){return Object(s.jsxs)(b.a,{className:"content",children:[Object(s.jsx)(d,{}),Object(s.jsxs)(b.a,{className:"content",children:[Object(s.jsx)(a.a,{style:{height:"30px",width:"100%"},children:" "}),Object(s.jsxs)(a.a,{style:{marginLeft:"50px"},children:[Object(s.jsx)(r.a,{lg:2,children:Object(s.jsx)(o.a,{src:u,roundedCircle:!0,width:"100px"})}),Object(s.jsx)(r.a,{lg:8,children:Object(s.jsxs)(b.a,{style:{margin:"0px"},children:[Object(s.jsx)("h1",{style:{color:"#234423"},children:"2020 GCAD Christmas Gifts Exchange "}),Object(s.jsx)(_,{}),Object(s.jsx)(a.a,{})]})}),Object(s.jsx)(r.a,{lg:2,children:Object(s.jsx)(o.a,{src:u,roundedCircle:!0,width:"100px"})})]}),Object(s.jsx)(a.a,{style:{height:"10px",width:"100%"},children:" "}),Object(s.jsxs)(a.a,{children:[Object(s.jsx)(r.a,{lg:3,children:Object(s.jsx)(b.a,{children:Object(s.jsx)(X,{})})}),Object(s.jsx)(r.a,{lg:9,children:Object(s.jsx)(E,{})})]})]}),Object(s.jsx)(V,{})]})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,86)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,l=t.getLCP,n=t.getTTFB;c(e),s(e),i(e),l(e),n(e)}))};j.a.render(Object(s.jsx)(l.a.StrictMode,{children:Object(s.jsx)(R,{children:Object(s.jsx)(Z,{})})}),document.getElementById("root")),$()}},[[76,1,2]]]);
//# sourceMappingURL=main.064d8b45.chunk.js.map