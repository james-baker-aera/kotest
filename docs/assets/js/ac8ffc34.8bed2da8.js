"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[14953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?o.createElement(k,a(a({ref:t},c),{},{components:n})):o.createElement(k,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const s={id:"ktor",title:"Ktor",sidebar_label:"Ktor",slug:"ktor.html"},a=void 0,i={unversionedId:"extensions/ktor",id:"version-5.4/extensions/ktor",title:"Ktor",description:"The `kotest-assertions-ktor` module provides response matchers for a Ktor application. There are matchers",source:"@site/versioned_docs/version-5.4/extensions/ktor.md",sourceDirName:"extensions",slug:"/extensions/ktor.html",permalink:"/docs/5.4/extensions/ktor.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/extensions/ktor.md",tags:[],version:"5.4",frontMatter:{id:"ktor",title:"Ktor",sidebar_label:"Ktor",slug:"ktor.html"},sidebar:"extensions",previous:{title:"Spring",permalink:"/docs/5.4/extensions/spring.html"},next:{title:"System Extensions",permalink:"/docs/5.4/extensions/system_extensions.html"}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"kotest-assertions-ktor")," module provides response matchers for a ",(0,r.kt)("a",{parentName:"p",href:"https://ktor.io"},"Ktor")," application. There are matchers\nfor both ",(0,r.kt)("inlineCode",{parentName:"p"},"TestApplicationResponse")," if you are using the server side test support, and for ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpResponse")," if you are using the ktor\nHTTP client."),(0,r.kt)("p",null,"To add Ktor matchers, add the following dependency to your project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"io.kotest.extensions:kotest-assertions-ktor:${version}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest.extensions/kotest-assertions-ktor"},(0,r.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-assertions-ktor.svg?label=latest%20release"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/extensions/kotest-assertions-ktor/"},(0,r.kt)("img",{src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest.extensions/kotest-assertions-ktor.svg?label=latest%20snapshot"}))),(0,r.kt)("p",null,"An example of using the matchers with the server side test support:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'withTestApplication({ module(testing = true) }) {\n   handleRequest(HttpMethod.Get, "/").apply {\n      response shouldHaveStatus HttpStatusCode.OK\n      response shouldNotHaveContent "failure"\n      response.shouldHaveHeader(name = "Authorization", value = "Bearer")\n      response.shouldNotHaveCookie(name = "Set-Cookie", cookieValue = "id=1234")\n   }\n}\n')),(0,r.kt)("p",null,"And an example of using the client support:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val client = HttpClient(CIO)\nval response = client.post("http://mydomain.com/foo")\nresponse.shouldHaveStatus(HttpStatusCode.OK)\nresponse.shouldHaveHeader(name = "Authorization", value = "Bearer")\n\n')))}u.isMDXComponent=!0}}]);