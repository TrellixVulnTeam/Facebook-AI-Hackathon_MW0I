(this.webpackJsonpfacebooklogin=this.webpackJsonpfacebooklogin||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(8),s=a.n(o),r=(a(16),a(1)),l=a(6),i=a(2),m=a(3),u=a(4),p=a(5),h=a(9),d=a.n(h),b=(a(17),function(e){var t=e.label,a=e.isSelected,n=e.onCheckboxChange;return c.a.createElement("div",{className:"form-check"},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",name:t,checked:a,onChange:n,className:"form-check-input"}),t))}),k=a(10),f=a.n(k),g=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isLoggedIn:!1,userID:"",name:"",email:"",picture:"",access_token:""},e.responseFacebook=function(t){console.log(t),e.setState({isLoggedIn:!0,userID:t.userID,name:t.name,email:t.email,picture:t.picture.data.url,access_token:t.accessToken}),console.log("I recorded the values and the token is "+e.state.access_token),fetch("/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({facebook_access_token:e.state.access_token})}).then((function(e){return e.text()})).then((function(e){console.log("POST response: "),console.log(e)}))},e.componentClicked=function(){return console.log("clicked")},e}return Object(m.a)(a,[{key:"render",value:function(){var e;return e=this.state.isLoggedIn?c.a.createElement("div",{style:{width:"400px",margin:"auto",background:"444444",padding:"20px"}},c.a.createElement("img",{src:this.state.picture,alt:this.state.name}),c.a.createElement("h2",null," Welcome ",this.state.name),"Email: ",this.state.email):c.a.createElement(f.a,{appId:"204445320862914",autoLoad:!0,fields:"name,email,picture",scope:"public_profile,user_friends,email,manage_pages,publish_pages,publish_to_groups,pages_show_list,groups_access_member_info",onClick:this.componentClicked,callback:this.responseFacebook}),c.a.createElement("div",null,e)}}]),a}(n.Component),E=["One","Two","Three","Four","Five"],v=[],j=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={checkboxes:E.reduce((function(e,t){return Object(l.a)({},e,Object(r.a)({},t,!1))}),{}),isActive:!0},e.selectAllCheckboxes=function(t){Object.keys(e.state.checkboxes).forEach((function(a){e.setState((function(e){return{checkboxes:Object(l.a)({},e.checkboxes,Object(r.a)({},a,t))}}))}))},e.selectAll=function(){return e.selectAllCheckboxes(!0)},e.deselectAll=function(){return e.selectAllCheckboxes(!1)},e.handleCheckboxChange=function(t){var a=t.target.name;e.setState((function(e){return{checkboxes:Object(l.a)({},e.checkboxes,Object(r.a)({},a,!e.checkboxes[a]))}}))},e.createCheckbox=function(t){return c.a.createElement(b,{label:t,isSelected:e.state.checkboxes[t],onCheckboxChange:e.handleCheckboxChange,key:t})},e.createCheckboxes=function(){return E.map(e.createCheckbox)},e.handleFormSubmit=function(t){t.preventDefault(),Object.keys(e.state.checkboxes).filter((function(t){return e.state.checkboxes[t]})).forEach((function(e){v.push(e),console.log(e,"is selected."),console.log(v)})),e.setState({isActive:!1})},e}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),c.a.createElement("p",null,"Edit ",c.a.createElement("code",null,"src/App.js")," and save to reload."),c.a.createElement("p",null,"My Token = ",window.token),c.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"),c.a.createElement(g,null)),c.a.createElement("main",{role:"main",class:"container"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-md-8"},c.a.createElement("form",{id:"upload-form",method:"POST",enctype:"multipart/form-data"},c.a.createElement("h1",null,"Facebook Hackathon"),c.a.createElement("div",{class:"form-group"},c.a.createElement("input",{name:"Title"})),c.a.createElement("div",{class:"form-group"},c.a.createElement("input",{name:"Access Token",value:"Plan is to get token here as a JSON"})),c.a.createElement("div",{class:"form-group"},c.a.createElement("input",{type:"file",name:"file",accept:"image/*",multiple:!0})),c.a.createElement("input",{id:"submit",type:"submit",value:"Submit"})),c.a.createElement("div",{className:"checkboxContainer"},this.state.isActive?c.a.createElement("form",{onSubmit:this.handleFormSubmit},this.createCheckboxes(),c.a.createElement("div",{className:"form-group mt-2"},c.a.createElement("button",{type:"button",className:"toSelectall",onClick:this.selectAll},"Select All"),c.a.createElement("button",{type:"button",className:"toDeselectall",onClick:this.deselectAll},"Deselect All"),c.a.createElement("button",{type:"submit",className:"SavetoSubmit"},"Save"))):null,c.a.createElement("p",null,"You chose: ",v.map((function(e){return c.a.createElement("li",{key:e},e)})))),c.a.createElement("div",{id:"successAlert",class:"alert alert-success",role:"alert"}),c.a.createElement("div",{id:"errorAlert",class:"alert alert-danger",role:"alert"}," ")))),c.a.createElement("script",{src:"https://code.jquery.com/jquery-3.2.1.slim.min.js",integrity:"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",crossorigin:"anonymous"}),c.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",integrity:"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",crossorigin:"anonymous"}),c.a.createElement("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",integrity:"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",crossorigin:"anonymous"}),c.a.createElement("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"}),c.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",integrity:"sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7",crossorigin:"anonymous"}))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a.p+"media/logo.ee7cd8ed.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.19b0ecde.chunk.js.map