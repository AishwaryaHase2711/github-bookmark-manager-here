(this["webpackJsonpgithub-bookmark-manager"]=this["webpackJsonpgithub-bookmark-manager"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t){document.getElementById("myForm").addEventListener("submit",(function(e){e.preventDefault();var t=document.getElementById("search").value.split(" ").join("");document.getElementById("result").innerHTML="",fetch("https://api.github.com/users/"+t).then((function(e){return e.json()})).then((function(e){console.log(e),document.getElementById("result").innerHTML="\n      <h3>".concat(e.name,'</h3>\n      <img src="').concat(e.avatar_url,'"/>\n      <a href="https://www.github.com/').concat(t,'"/>\n      <h4>').concat(e.repos_url,"</h4>\n      \n      \n      \n      ")}))}))},26:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n.n(r),a=n(17),i=n.n(a),o=(n(24),n(25),n(9)),j=n(12),b=n(15),l=n.n(b);n(26);var u=function(){return Object(c.jsx)(j.a,{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(l.a,{path:"/github-bookmark-manager-here/",exact:!0,strict:!0,render:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("h1",{className:"heading",children:"Github-Bookmark-Manager"}),Object(c.jsx)("br",{}),Object(c.jsx)(j.b,{className:"repo",to:"/github-bookmark-manager-here/repo/",children:"Add Repositories to Manager"}),Object(c.jsx)("h1",{className:"loading",children:""})]})}}),Object(c.jsx)(l.a,{path:"/github-bookmark-manager-here/repo/",exact:!0,strict:!0,render:function(){return Object(c.jsx)(h,{})}})]})})};var h=function(){var e=s.a.useState(""),t=Object(o.a)(e,2),n=t[0],r=t[1],a=s.a.useState(!1),i=Object(o.a)(a,2),j=i[0],b=i[1],l=s.a.useState(!1),u=Object(o.a)(l,2),h=u[0],d=u[1],g=s.a.useState([]),m=Object(o.a)(g,2),O=m[0],x=m[1],p=s.a.useState(""),f=Object(o.a)(p,2),v=f[0],k=f[1];return s.a.useEffect((function(){n&&(b(!0),fetch("https://api.github.com/search/repositories?q="+n).then((function(e){return e.json()})).then((function(e){console.log(e),b(!1),x(e.items)})).catch((function(e){b(!1),d(!0),console.error(e)})))}),[n]),Object(c.jsxs)("div",{children:[Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(e.target.elements.query.value)},children:[Object(c.jsx)("input",{type:"text",name:"query",placeholder:"Search Github Repositories",class:"form-control"}),Object(c.jsxs)("div",{class:"form-group",children:[Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"btn btn-primary btn-block",children:"Search Repository"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]})]}),j&&Object(c.jsx)("div",{className:"loading",children:"Loadingggggggggggggggg"}),h&&Object(c.jsx)("div",{children:"Unexpected Error Occurred fetching data. Please try again later!"}),Object(c.jsx)("ul",{children:O.map((function(e){return Object(c.jsxs)("li",{children:[Object(c.jsx)("a",{href:e.html_url,target:"_self",children:e.name}),"\xa0\xa0",Object(c.jsx)("button",{onClick:function(t){t.preventDefault(),k(v+" "+e.html_url),console.log({outputValue:v})},children:"Add"},e.id),Object(c.jsx)("p",{children:e.description})]},e.id)}))}),Object(c.jsx)("h3",{className:"loading",children:"Newly Added Repositories :"}),Object(c.jsx)("br",{}),Object(c.jsx)("ul",{children:Object(c.jsxs)("li",{children:[Object(c.jsx)("a",{href:v,target:"_self",children:v}),"\xa0\xa0"]})}),Object(c.jsx)("br",{})]})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.b7c91711.chunk.js.map