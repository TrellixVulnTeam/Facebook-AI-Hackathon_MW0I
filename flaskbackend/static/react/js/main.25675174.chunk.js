(this.webpackJsonpfacebooklogin=this.webpackJsonpfacebooklogin||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"media/logo.ee7cd8ed.svg"},,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(2),s=a.n(c),i=(a(14),a(3)),l=a.n(i),r=(a(15),a(4)),m=a(5),p=a(7),u=a(8),d=a(6),h=a.n(d),g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={isLoggedIn:!1,userID:"",name:"",email:"",picture:"",access_token:""},e.responseFacebook=function(t){console.log(t),e.setState({isLoggedIn:!0,userID:t.userID,name:t.name,email:t.email,picture:t.picture.data.url,access_token:t.accessToken}),console.log("I recorded the values and the token is "+e.state.access_token),fetch("/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({facebook_access_token:e.state.access_token})}).then((function(e){return e.text()})).then((function(e){console.log("POST response: "),console.log(e)}))},e.componentClicked=function(){return console.log("clicked")},e}return Object(m.a)(a,[{key:"render",value:function(){var e;return e=this.state.isLoggedIn?o.a.createElement("div",{style:{width:"400px",margin:"auto",background:"444444",padding:"20px"}},o.a.createElement("img",{src:this.state.picture,alt:this.state.name}),o.a.createElement("h2",null," Welcome ",this.state.name),"Email: ",this.state.email):o.a.createElement(h.a,{appId:"204445320862914",autoLoad:!0,fields:"name,email,picture",scope:"public_profile,user_friends,email,manage_pages,publish_pages,publish_to_groups,pages_show_list,groups_access_member_info",onClick:this.componentClicked,callback:this.responseFacebook}),o.a.createElement("div",null,e)}}]),a}(n.Component);var f=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Facebook Artificial Intelligence Hackathon: Sentimentally Postify"),o.a.createElement("p",null,"My Token = ",window.token),o.a.createElement(g,null)),o.a.createElement("main",{role:"main",class:"container"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-md-8"},o.a.createElement("form",{id:"upload-form",method:"POST",enctype:"multipart/form-data"},o.a.createElement("h1",null,"Facebook Hackathon: Sentimentally Postify"),o.a.createElement("p",null,"Please submit an image to get a list of your Facebook groups that this image would be relevant to. You will have the choice to select the groups you would like to post. Approximte time is 3 minutes."),o.a.createElement("div",{class:"form-group"},o.a.createElement("input",{type:"text",name:"Title",placeholder:"Enter a title"})),o.a.createElement("div",{class:"form-group"},o.a.createElement("input",{type:"file",name:"file",accept:"image/*",multiple:!0})),o.a.createElement("input",{type:"submit",value:"Submit"}),o.a.createElement("div",null,o.a.createElement("h2",null,"Thank you for using Sentimentally Postify!")))))),o.a.createElement("script",{src:"https://code.jquery.com/jquery-3.2.1.slim.min.js",integrity:"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",crossorigin:"anonymous"}),o.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",integrity:"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",crossorigin:"anonymous"}),o.a.createElement("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",integrity:"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",crossorigin:"anonymous"}),o.a.createElement("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.25675174.chunk.js.map