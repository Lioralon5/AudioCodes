(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{132:function(e,t,s){},133:function(e,t,s){},149:function(e,t,s){},150:function(e,t,s){},152:function(e,t,s){},153:function(e,t,s){},154:function(e,t,s){},155:function(e,t,s){},156:function(e,t,s){},157:function(e,t,s){},158:function(e,t,s){},159:function(e,t,s){},160:function(e,t,s){},161:function(e,t,s){},162:function(e,t,s){"use strict";s.r(t);var i=s(94),c=s.n(i),n=s(38),a=(s(132),s(8)),r=(s(133),s.p+"static/media/vision.1828201c.png"),l=s(103),u=s.n(l),d=s(104),o=s.n(d),j=s(222),b=s(212),h=s(1),O=s(41),m=s(76),x=Object(m.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),f=x.actions,C=f.login,p=f.logout,S=function(e){return e.user.user},v=x.reducer,k=s(55),g=k.a.initializeApp({apiKey:"AIzaSyBkTvEGd2VdwDXKRkGzsYDxcFs_QvM7UOw",authDomain:"test-cases-tracker.firebaseapp.com",projectId:"test-cases-tracker",storageBucket:"test-cases-tracker.appspot.com",messagingSenderId:"141029564994",appId:"1:141029564994:web:8eee56b7f3b2ef9deac3db"}).firestore(),N=k.a.auth(),_=s(220),q=s(2);var A=function(){var e=Object(h.useState)(!0),t=Object(a.a)(e,2),s=t[0],i=t[1],c=Object(h.useState)(!1),l=Object(a.a)(c,2),d=l[0],m=l[1],x=Object(O.b)(),f=Object(O.c)(S);return Object(q.jsxs)("div",{className:"sidebar",children:[Object(q.jsx)("img",{src:r,alt:""}),Object(q.jsx)(_.a,{sx:{bgcolor:"#863654"},onClick:function(){x(p()),N.signOut()},className:"sidebar__email",src:f.photoUrl,alt:"",title:"Logout",children:f.email[0].toUpperCase()}),Object(q.jsx)("hr",{}),Object(q.jsx)(b.a,{title:"Test Development",arrow:!0,placement:"right",children:Object(q.jsx)(n.b,{to:"/",children:Object(q.jsx)(j.a,{onClick:function(){i(!0),m(!1)},children:Object(q.jsx)(u.a,{className:"icon",sx:{color:s?"#FFFFFF":"#863654"}})})})}),Object(q.jsx)(b.a,{title:"Suite",arrow:!0,placement:"right",children:Object(q.jsx)(n.b,{to:"/suite",children:Object(q.jsx)(j.a,{onClick:function(){m(!0),i(!1)},children:Object(q.jsx)(o.a,{className:"icon",sx:{color:d?"#FFFFFF":"#863654"}})})})})]})},y=s(21),R=(s(149),s(62)),T=s.n(R),F=s(75),w=s.n(F);var W=function(e){return Object(q.jsxs)("div",{className:"createHeader",children:[Object(q.jsx)("div",{className:"createHeader__left",children:Object(q.jsx)("h3",{children:"New Test Case"})}),Object(q.jsxs)("div",{className:"createHeader__right",children:[""!==e.title&&""!==e.requirement&&""!==e.assignee&&""!==e.run&&""!==e.status&&Object(q.jsx)(b.a,{title:"New",placement:"bottom",children:Object(q.jsx)(n.b,{to:"/",children:Object(q.jsx)(j.a,{onClick:function(t){g.collection("testCases").add({title:e.title,requirement:e.requirement,assignee:e.assignee,run:e.run,status:e.status,timestamp:k.a.firestore.FieldValue.serverTimestamp()})},children:Object(q.jsx)(T.a,{sx:{color:"#863654"}})})})}),(""===e.title||""===e.requirement||""===e.assignee||""===e.run||""===e.status)&&Object(q.jsx)(b.a,{title:"Please Fill Required Fields",placement:"bottom",children:Object(q.jsx)(j.a,{children:Object(q.jsx)(T.a,{sx:{color:"#bdbdbd",cursor:"default"}})})}),Object(q.jsx)(b.a,{title:"Cancel",placement:"bottom",children:Object(q.jsx)(n.b,{to:"/",children:Object(q.jsx)(j.a,{children:Object(q.jsx)(w.a,{sx:{color:"#863654"}})})})})]})]})},I=s(217),H=s(225),E=s(218),D=s(213),P=s(216);s(150);var L=function(e){return Object(q.jsxs)("div",{className:"inputs",children:[Object(q.jsx)("div",{className:"input__title",children:Object(q.jsx)(I.a,{value:e.title,onChange:function(t){return e.setTitle(t.target.value)},type:"text",fullWidth:!0,label:"Title",id:"fullWidth",required:!0,placeholder:"Enter Title"})}),Object(q.jsxs)("div",{className:"input__select",children:[Object(q.jsx)("div",{className:"input__requirement",children:Object(q.jsxs)(H.a,{required:!0,style:{minWidth:180},children:[Object(q.jsx)(E.a,{children:"Requirement"}),Object(q.jsxs)(D.a,{value:e.requirement,onChange:function(t){e.setRequirement(t.target.value)},label:"Requirement",children:[Object(q.jsx)(P.a,{value:"ST functional",children:"ST functional"}),Object(q.jsx)(P.a,{value:"MI functional",children:"MI functional"})]})]})}),Object(q.jsx)("div",{className:"input__assignee",children:Object(q.jsxs)(H.a,{required:!0,style:{minWidth:180},children:[Object(q.jsx)(E.a,{children:"Assignee"}),Object(q.jsxs)(D.a,{value:e.assignee,onChange:function(t){e.setAssignee(t.target.value)},label:"Assignee",children:[Object(q.jsx)(P.a,{value:"Lior Alon",children:"Lior Alon"}),Object(q.jsx)(P.a,{value:"Rocky Blaboa",children:"Rocky Blaboa"}),Object(q.jsx)(P.a,{value:"Will Smith",children:"Will Smith"}),Object(q.jsx)(P.a,{value:"Leonardo DiCaprio",children:"Leonardo DiCaprio"}),Object(q.jsx)(P.a,{value:"Goku",children:"Goku"})]})]})}),Object(q.jsx)("div",{className:"input__run",children:Object(q.jsxs)(H.a,{required:!0,style:{minWidth:180},children:[Object(q.jsx)(E.a,{children:"Run"}),Object(q.jsxs)(D.a,{value:e.run,onChange:function(t){e.setRun(t.target.value)},label:"Run",children:[Object(q.jsx)(P.a,{value:"No Run",children:"No Run"}),Object(q.jsx)(P.a,{value:"Passed",children:"Passed"}),Object(q.jsx)(P.a,{value:"Failed",children:"Failed"})]})]})}),Object(q.jsx)("div",{className:"input__status",children:Object(q.jsxs)(H.a,{required:!0,style:{minWidth:180},children:[Object(q.jsx)(E.a,{children:"Status"}),Object(q.jsxs)(D.a,{value:e.status,onChange:function(t){e.setStatus(t.target.value)},label:"Status",children:[Object(q.jsx)(P.a,{value:"Open",children:"Open"}),Object(q.jsx)(P.a,{value:"Done",children:"Done"}),Object(q.jsx)(P.a,{value:"WIP",children:"WIP"})]})]})})]})]})};s(152);var U=function(){var e=Object(h.useState)(""),t=Object(a.a)(e,2),s=t[0],i=t[1],c=Object(h.useState)(""),n=Object(a.a)(c,2),r=n[0],l=n[1],u=Object(h.useState)(""),d=Object(a.a)(u,2),o=d[0],j=d[1],b=Object(h.useState)(""),O=Object(a.a)(b,2),m=O[0],x=O[1],f=Object(h.useState)(""),C=Object(a.a)(f,2),p=C[0],S=C[1];return Object(q.jsxs)("div",{className:"create",children:[Object(q.jsx)(W,{title:s,setTitle:i,requirement:r,setRequirement:l,assignee:o,setAssignee:j,run:m,setRun:x,status:p,setStatus:S}),Object(q.jsx)(L,{title:s,setTitle:i,requirement:r,setRequirement:l,assignee:o,setAssignee:j,run:m,setRun:x,status:p,setStatus:S})]})};s(153),s(154);var B=function(){var e=Object(h.useState)(""),t=Object(a.a)(e,2),s=t[0],i=t[1],c=Object(h.useState)(""),n=Object(a.a)(c,2),l=n[0],u=n[1],d=Object(h.useState)(""),o=Object(a.a)(d,2),j=o[0],b=o[1],m=Object(h.useState)(""),x=Object(a.a)(m,2),f=x[0],p=x[1],S=Object(O.b)();return Object(q.jsxs)("div",{style:{backgroundImage:'url("")'},className:"login",children:[Object(q.jsx)("img",{src:r,alt:""}),Object(q.jsxs)("form",{children:[Object(q.jsx)("input",{value:j,onChange:function(e){return b(e.target.value)},placeholder:"Full name (required if registering)",type:"text"}),Object(q.jsx)("input",{value:f,onChange:function(e){return p(e.target.value)},placeholder:"Profile pic URL (optional)",type:"text"}),Object(q.jsx)("input",{value:s,onChange:function(e){return i(e.target.value)},placeholder:"Email",type:"email"}),Object(q.jsx)("input",{value:l,onChange:function(e){return u(e.target.value)},placeholder:"Password",type:"password"}),Object(q.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),N.signInWithEmailAndPassword(s,l).then((function(e){S(C({email:e.user.email,uid:e.user.uid,displayName:e.user.displayName,profileUrl:e.user.photoURL}))})).catch((function(e){return alert(e)}))},children:"Sign In"})]}),Object(q.jsxs)("p",{children:["Not a member?"," ",Object(q.jsx)("span",{className:"login__register",onClick:function(){if(!j)return alert("Please enter a full name!");N.createUserWithEmailAndPassword(s,l).then((function(e){e.user.updateProfile({displayName:j,photoURL:f}).then((function(){S(C({email:e.user.email,uid:e.user.id,displayName:j,photoUrl:f}))}))})).catch((function(e){return alert(e)}))},children:"Register Now"})]})]})},M=s(32),z=(s(155),s(106)),G=s.n(z),V=s(105),J=s.n(V);s(156);var K=function(e){return Object(q.jsxs)("div",{className:"removeModal",children:[Object(q.jsx)("p",{children:"You are going to delete selected tests"}),Object(q.jsx)("button",{className:"btn",onClick:e.onDelete,children:"Delete"}),Object(q.jsx)("button",{className:"btn btn--alt",onClick:e.onCancel,children:"Cancel"})]})};s(157);var Y=function(e){return Object(q.jsx)("div",{className:"backdrop",onClick:e.onClick})};var Q=function(e){var t=function(t,s){var i=e.isSuite?"suiteCases":"testCases";g.collection(i).where(s,"==",t.target.textContent).onSnapshot((function(t){e.isSuite,e.setAreCasesFiltered(!0),e.setCases(t.docs.map((function(e){return{id:e.id,data:e.data()}})))}))},s=Object(h.useState)({requirement:!1,assignee:!1,run:!1,status:!1}),i=Object(a.a)(s,2),c=i[0],n=i[1];return Object(q.jsxs)("div",{children:[!c.requirement&&!c.assignee&&!c.run&&!c.status&&Object(q.jsxs)(H.a,{style:{minWidth:180},children:[Object(q.jsx)(E.a,{children:"Filter by"}),Object(q.jsxs)(D.a,{label:"Filter",children:[Object(q.jsx)(P.a,{onClick:function(){n({requirement:!0,assignee:!1,run:!1,status:!1})},children:"Requirement"}),Object(q.jsx)(P.a,{onClick:function(){n({requirement:!1,assignee:!0,run:!1,status:!1})},children:"Assignee"}),Object(q.jsx)(P.a,{onClick:function(){n({requirement:!1,assignee:!1,run:!0,status:!1})},children:"Run"}),Object(q.jsx)(P.a,{onClick:function(){n({requirement:!1,assignee:!1,run:!1,status:!0})},children:"Status"})]})]}),c.requirement&&Object(q.jsxs)(H.a,{style:{minWidth:180},children:[Object(q.jsx)(E.a,{children:"Requirement"}),Object(q.jsxs)(D.a,{defaultOpen:!0,label:"Requirement",children:[Object(q.jsx)(P.a,{value:0,onClick:function(e){return t(e,"requirement")},children:"ST functional"}),Object(q.jsx)(P.a,{value:1,onClick:function(e){return t(e,"requirement")},children:"MI functional"})]})]}),c.assignee&&Object(q.jsxs)(H.a,{style:{minWidth:180},children:[Object(q.jsx)(E.a,{children:"Assignee"}),Object(q.jsxs)(D.a,{defaultOpen:!0,label:"Assignee",children:[Object(q.jsx)(P.a,{value:0,onClick:function(e){return t(e,"assignee")},children:"Lior Alon"}),Object(q.jsx)(P.a,{value:1,onClick:function(e){return t(e,"assignee")},children:"Rocky Blaboa"}),Object(q.jsx)(P.a,{value:2,onClick:function(e){return t(e,"assignee")},children:"Will Smith"}),Object(q.jsx)(P.a,{value:3,onClick:function(e){return t(e,"assignee")},children:"Leonardo DiCaprio"}),Object(q.jsx)(P.a,{value:4,onClick:function(e){return t(e,"assignee")},children:"Goku"})]})]}),c.run&&Object(q.jsxs)(H.a,{style:{minWidth:180},children:[Object(q.jsx)(E.a,{children:"Run"}),Object(q.jsxs)(D.a,{defaultOpen:!0,label:"Run",children:[Object(q.jsx)(P.a,{value:0,onClick:function(e){return t(e,"run")},children:"No Run"}),Object(q.jsx)(P.a,{value:1,onClick:function(e){return t(e,"run")},children:"Passed"}),Object(q.jsx)(P.a,{value:2,onClick:function(e){return t(e,"run")},children:"Failed"})]})]}),c.status&&Object(q.jsxs)(H.a,{style:{minWidth:180},children:[Object(q.jsx)(E.a,{children:"Status"}),Object(q.jsxs)(D.a,{defaultOpen:!0,label:"Status",children:[Object(q.jsx)(P.a,{value:0,onClick:function(e){return t(e,"status")},children:"Done"}),Object(q.jsx)(P.a,{value:1,onClick:function(e){return t(e,"status")},children:"Open"}),Object(q.jsx)(P.a,{value:2,onClick:function(e){return t(e,"status")},children:"WIP"})]})]})]})};var X=function(e){var t=Object(h.useState)(!1),s=Object(a.a)(t,2),i=s[0],c=s[1],r=Object(h.useState)(!1),l=Object(a.a)(r,2),u=l[0],d=l[1],o=Object(h.useState)(!1),O=Object(a.a)(o,2),m=O[0],x=O[1],f=Object(h.useState)(!1),C=Object(a.a)(f,2),p=C[0],S=C[1],v=Object(h.useState)(!1),N=Object(a.a)(v,2),_=N[0],A=N[1],y=Object(h.useState)(""),R=Object(a.a)(y,2),F=R[0],W=R[1],H=function(){e.isSuite?g.collection("suiteCases").onSnapshot((function(t){e.setSuiteCases(t.docs.map((function(e){return{id:e.id,data:e.data()}})))})):g.collection("testCases").onSnapshot((function(t){e.setTestCases(t.docs.map((function(e){return{id:e.id,data:e.data()}})))}))},E=function(){e.isSuite?e.suiteCases.filter((function(e){return e.isChecked})).map((function(e){return g.collection("suiteCases").where("timestamp","==",e.data.timestamp).get().then((function(e){e.forEach((function(e){e.ref.delete()}))})),e})):e.testCases.filter((function(e){return e.isChecked})).map((function(e){return g.collection("testCases").where("timestamp","==",e.data.timestamp).get().then((function(t){t.forEach((function(e){e.ref.delete()})),g.collection("suiteCases").where("id","==",e.id).get().then((function(e){e.forEach((function(e){e.ref.delete()}))}))})),e}))};return Object(h.useEffect)((function(){if(""===F)H();else{var t=F.slice(0,F.length-1)+String.fromCharCode(F.slice(F.length-1,F.length).charCodeAt(0)+1);e.isSuite?g.collection("suiteCases").where("title",">=",F).where("title","<",t).onSnapshot((function(t){e.setSuiteCases(t.docs.map((function(e){return{id:e.id,data:e.data()}})))})):g.collection("testCases").where("title",">=",F).where("title","<",t).onSnapshot((function(t){e.setTestCases(t.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}}),[F]),Object(q.jsxs)("div",{className:"test-cases-header",children:[Object(q.jsxs)("div",{className:"test-cases-header__left",children:[Object(q.jsx)("h3",{children:e.isSuite?"Suite":"Test Cases"}),Object(q.jsx)("form",{children:Object(q.jsx)(I.a,{id:"search-bar",className:"text",onInput:function(e){W(e.target.value)},label:"Search...",variant:"outlined",placeholder:"Search...",size:"small"})})]}),Object(q.jsxs)("div",{className:"test-cases-header__right",children:[(e.isSuite&&(p||_)||!e.isSuite&&(u||m))&&Object(q.jsx)(b.a,{title:"Cancel",placement:"bottom",children:Object(q.jsx)(j.a,{onClick:function(){e.isSuite?(S(!1),A(!1)):(d(!1),x(!1)),H()},children:Object(q.jsx)(J.a,{sx:{color:"#863654"}})})}),(e.isSuite&&p||!e.isSuite&&u)&&Object(q.jsx)(Q,{isSuite:e.isSuite,setCases:e.isSuite?e.setSuiteCases:e.setTestCases,setIsFilterActive:e.isSuite?S:d,setAreCasesFiltered:e.isSuite?A:x}),(e.isSuite&&!p&&!_||!e.isSuite&&!u&&!m)&&Object(q.jsx)(b.a,{title:"Filter",placement:"bottom",children:Object(q.jsx)(j.a,{onClick:function(){e.isSuite?S(!0):d(!0)},children:Object(q.jsx)(G.a,{sx:{color:"#863654"}})})}),!e.isSuite&&!e.isSomeChecked&&!e.isAllChecked&&Object(q.jsx)(b.a,{title:"New",placement:"bottom",children:Object(q.jsx)(n.b,{to:"/create",children:Object(q.jsx)(j.a,{children:Object(q.jsx)(T.a,{sx:{color:"#863654"}})})})}),!e.isSuite&&(e.isSomeChecked||e.isAllChecked)&&Object(q.jsx)(b.a,{title:"Add to Suite",placement:"bottom",children:Object(q.jsx)(j.a,{onClick:function(t){e.testCases.filter((function(e){return e.isChecked})).map((function(e){g.collection("suiteCases").where("id","==",e.id).get().then((function(t){if(0!==t.size)return e;g.collection("suiteCases").add({id:e.id,title:e.data.title,requirement:e.data.requirement,assignee:e.data.assignee,run:e.data.run,status:e.data.status,timestamp:k.a.firestore.FieldValue.serverTimestamp()})}))}))},children:Object(q.jsx)(T.a,{sx:{color:"#863654"}})})}),(e.isSuite&&(e.isSomeSuiteChecked||e.isAllSuiteChecked)||!e.isSuite&&(e.isSomeChecked||e.isAllChecked))&&Object(q.jsx)(b.a,{title:"Remove",placement:"bottom",children:Object(q.jsx)(j.a,{onClick:function(){return c(!0)},children:Object(q.jsx)(w.a,{sx:{color:"#863654"}})})})]}),i&&Object(q.jsx)(K,{onCancel:function(){return c(!1)},onDelete:function(){c(!1),E()}}),i&&Object(q.jsx)(Y,{onClick:function(){return c(!1)}})]})},Z=(s(158),s(215)),$=(s(159),s(107)),ee=s.n($),te=s(108),se=s.n(te);var ie=function(e){var t=Object(h.useState)("asc"),s=Object(a.a)(t,2),i=s[0],c=s[1];return Object(q.jsxs)("div",{className:"casesTableHead",children:[Object(q.jsx)("div",{className:"casesTableHead__options",children:Object(q.jsx)(Z.a,{onClick:e.headClickHandler,checked:e.isSuite?e.isAllSuiteChecked:e.isAllChecked,indeterminate:e.isSuite?e.isSomeSuiteChecked:e.isSomeChecked,sx:{"&.Mui-checked":{color:"#863654"},"&.Mui-indeterminate":{color:"#863654"}}})}),Object(q.jsxs)("div",{onClick:function(){c("asc"===i?"desc":"asc"),e.isSuite?g.collection("suiteCases").orderBy("title",i).onSnapshot((function(t){return e.setSuiteCases(t.docs.map((function(e){return{id:e.id,data:e.data()}})))})):g.collection("testCases").orderBy("title",i).onSnapshot((function(t){return e.setTestCases(t.docs.map((function(e){return{id:e.id,data:e.data()}})))}))},className:"casesTableHead__title",children:[Object(q.jsx)("b",{children:"Title"}),"asc"===i&&Object(q.jsx)(ee.a,{sx:{color:"#863654"}}),"desc"===i&&Object(q.jsx)(se.a,{sx:{color:"#863654"}})]}),Object(q.jsx)("div",{className:"casesTableHead__requirement",children:Object(q.jsx)("b",{children:"Requirement"})}),Object(q.jsx)("div",{className:"casesTableHead__assignee",children:Object(q.jsx)("b",{children:"Assignee"})}),Object(q.jsx)("div",{className:"casesTableHead__run",children:Object(q.jsx)("b",{children:"Run"})}),Object(q.jsx)("div",{className:"casesTableHead__status",children:Object(q.jsx)("b",{children:"Status"})})]})},ce=s(109),ne=(s(160),Object(h.forwardRef)((function(e,t){return Object(q.jsxs)("div",{ref:t,className:"case",children:[Object(q.jsx)("div",{className:"case__options",children:Object(q.jsx)(Z.a,{onClick:function(){return e.onChecked(e.id)},checked:e.isChecked,sx:{"&.Mui-checked":{color:"#863654"}}})}),Object(q.jsx)("div",{className:"case__title",children:e.title}),Object(q.jsx)("div",{className:"case__requirement",children:e.requirement}),Object(q.jsx)("div",{className:"case__assignee",children:e.assignee}),Object(q.jsx)("div",{className:"Passed"===e.run?"case__run-green":"Failed"===e.run?"case__run-red":"case__run-no",children:e.run}),Object(q.jsx)("div",{className:"case__status",children:e.status})]})})));var ae=function(e){return Object(q.jsxs)("div",{className:"testCases",children:[e.isSuite?Object(q.jsx)(ie,{isSuite:e.isSuite,headClickHandler:e.headClickHandler,isAllSuiteChecked:e.isAllSuiteChecked,isSomeSuiteChecked:e.isSomeSuiteChecked,setSuiteCases:e.setSuiteCases}):Object(q.jsx)(ie,{isSuite:e.isSuite,headClickHandler:e.headClickHandler,isAllChecked:e.isAllChecked,isSomeChecked:e.isSomeChecked,setTestCases:e.setTestCases}),Object(q.jsx)(ce.a,{children:e.isSuite?e.suiteCases.map((function(t){var s=t.id,i=t.data,c=i.title,n=i.requirement,a=i.assignee,r=i.run,l=i.status,u=t.isChecked;return Object(q.jsx)(ne,{id:s,title:c,requirement:n,assignee:a,run:r,status:l,isChecked:u,onChecked:e.onChecked},s)})):e.testCases.map((function(t){var s=t.id,i=t.data,c=i.title,n=i.requirement,a=i.assignee,r=i.run,l=i.status,u=t.isChecked;return Object(q.jsx)(ne,{id:s,title:c,requirement:n,assignee:a,run:r,status:l,isChecked:u,onChecked:e.onChecked},s)}))})]})};var re=function(){var e=Object(h.useState)([]),t=Object(a.a)(e,2),s=t[0],i=t[1],c=Object(h.useState)(!1),n=Object(a.a)(c,2),r=n[0],l=n[1],u=Object(h.useState)(!1),d=Object(a.a)(u,2),o=d[0],j=d[1];return Object(h.useEffect)((function(){var e=s.filter((function(e){return e.isChecked})).length,t=s.length;l(0!==e&&e<t),j(e===t&&0!==t)}),[s]),Object(h.useEffect)((function(){g.collection("testCases").orderBy("timestamp","asc").onSnapshot((function(e){return i(e.docs.map((function(e){return{id:e.id,data:e.data(),isChecked:!1}})))}))}),[]),Object(q.jsxs)("div",{className:"allTestCases",children:[Object(q.jsx)(X,{isSuite:!1,testCases:s,setTestCases:i,isSomeChecked:r,isAllChecked:o}),Object(q.jsx)(ae,{isSuite:!1,headClickHandler:function(){j(!o),i(s.map((function(e){return Object(M.a)(Object(M.a)({},e),{},{isChecked:!o})})))},onChecked:function(e){i(s.map((function(t){return t.id===e?Object(M.a)(Object(M.a)({},t),{},{isChecked:!t.isChecked}):t})))},testCases:s,isSomeChecked:r,isAllChecked:o})]})};s(161);var le=function(){var e=Object(h.useState)([]),t=Object(a.a)(e,2),s=t[0],i=t[1],c=Object(h.useState)(!1),n=Object(a.a)(c,2),r=n[0],l=n[1],u=Object(h.useState)(!1),d=Object(a.a)(u,2),o=d[0],j=d[1];return Object(h.useEffect)((function(){var e=s.filter((function(e){return e.isChecked})).length,t=s.length;l(0!==e&&e<t),j(e===t&&0!==t)}),[s]),Object(h.useEffect)((function(){g.collection("suiteCases").orderBy("timestamp","asc").onSnapshot((function(e){return i(e.docs.map((function(e){return{id:e.id,data:e.data(),isChecked:!1}})))}))}),[]),Object(q.jsxs)("div",{className:"suite",children:[Object(q.jsx)(X,{isSuite:!0,suiteCases:s,setSuiteCases:i,isSomeSuiteChecked:r,isAllSuiteChecked:o}),Object(q.jsx)(ae,{isSuite:!0,headClickHandler:function(){j(!o),i(s.map((function(e){return Object(M.a)(Object(M.a)({},e),{},{isChecked:!o})})))},onChecked:function(e){i(s.map((function(t){return t.id===e?Object(M.a)(Object(M.a)({},t),{},{isChecked:!t.isChecked}):t})))},suiteCases:s,setSuiteCases:i,isSomeSuiteChecked:r,setIsSomeSuiteChecked:l,isAllSuiteChecked:o,setIsAllSuiteChecked:j})]})};var ue=function(){var e=Object(O.c)(S),t=Object(O.b)();return Object(h.useEffect)((function(){N.onAuthStateChanged((function(e){t(e?C({email:e.email,uid:e.uid,displayName:e.displayName,photoUrl:e.photoURL}):p())}))}),[]),Object(q.jsx)("div",{className:"app",children:Object(q.jsx)("div",{className:"app__body",children:e?Object(q.jsxs)("div",{className:"app__body",children:[Object(q.jsx)(A,{}),Object(q.jsx)(y.a,{path:"/",exact:!0,children:Object(q.jsx)(re,{})}),Object(q.jsx)(y.a,{path:"/suite",children:Object(q.jsx)(le,{})}),Object(q.jsx)(y.a,{path:"/create",children:Object(q.jsx)(U,{})})]}):Object(q.jsx)(B,{})})})},de=Object(m.a)({reducer:{user:v}});c.a.createRoot(document.getElementById("root")).render(Object(q.jsx)(n.a,{children:Object(q.jsx)(O.a,{store:de,children:Object(q.jsx)(ue,{})})}))}},[[162,1,2]]]);
//# sourceMappingURL=main.46e7826a.chunk.js.map