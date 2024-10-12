"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[49501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||s;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={id:"assumptions",title:"Assumptions",slug:"property-test-assumptions.html",sidebar_label:"Assumptions"},o=void 0,l={unversionedId:"proptest/assumptions",id:"version-5.7/proptest/assumptions",title:"Assumptions",description:"To restrict the set the generated values from a generator, we can use filter to return a constrained arb.",source:"@site/versioned_docs/version-5.7/proptest/assumptions.md",sourceDirName:"proptest",slug:"/proptest/property-test-assumptions.html",permalink:"/docs/5.7/proptest/property-test-assumptions.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.7/proptest/assumptions.md",tags:[],version:"5.7",frontMatter:{id:"assumptions",title:"Assumptions",slug:"property-test-assumptions.html",sidebar_label:"Assumptions"},sidebar:"proptest",previous:{title:"Generator Operations",permalink:"/docs/5.7/proptest/generator-operations.html"},next:{title:"Seeds",permalink:"/docs/5.7/proptest/property-test-seeds.html"}},i={},p=[{value:"Assertions",id:"assertions",level:3},{value:"Max Discard Percentage",id:"max-discard-percentage",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To restrict the set the generated values from a generator, we can use filter to return a constrained arb."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val evens = Arb.int().filter { it.value % 2 == 0 }\n")),(0,r.kt)("p",null,"However if we need to restrict inputs based on the relationship between values, then filtering on a single arb won't\nwork. Consider an example where we want to test that two non-equal strings have a non-zero Levenshtein distance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"checkAll<String, String> { a, b ->\n  levenshtein(a, b) shouldBeGreaterThan 0\n}\n")),(0,r.kt)("p",null,"This will periodically fail - whenever two equal strings are generated. One approach would be to just wrap the tests in\nan if/else block and avoid those undesired inputs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"checkAll<String, String> { a, b ->\n  if (a != b)\n    levenshtein(a, b) shouldBeGreaterThan 0\n}\n")),(0,r.kt)("p",null,"But in more complicated scenarios we could easily introduce a bug and filter ",(0,r.kt)("em",{parentName:"p"},"all")," our inputs."),(0,r.kt)("p",null,"Kotest provides a feature called ",(0,r.kt)("em",{parentName:"p"},"assumptions")," that will filter out unwanted combinations, while tracking that we\nare not filtering too many."),(0,r.kt)("p",null,"An assumption accepts a boolean value passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"withAssumptions")," function, that if true, will allow the property\ntest to continue, but if false, that particular iteration is skipped. For example, the previous example will now pass:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"checkAll<String, String> { a, b ->\n  withAssumptions(a != b) {\n    levenshtein(a, b) shouldBeGreaterThan 0\n  }\n}\n")),(0,r.kt)("p",null,"Alternatively, you can use inline syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"checkAll<String, String> { a, b ->\n  assume(a != b)\n  levenshtein(a, b) shouldBeGreaterThan 0\n}\n")),(0,r.kt)("h3",{id:"assertions"},"Assertions"),(0,r.kt)("p",null,"Kotest expands on basic boolean assumptions by allowing you to specify assertions in an assumption function."),(0,r.kt)("p",null,"For example, building on the previous example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"checkAll(Arb.string(3..4, Codepoint.az()), Arb.string(3..4, Codepoint.az())) { a, b ->\n  withAssumptions({\n    a shouldNotBe b\n    a shouldHaveLength (b.length)\n  }) {\n     a.compareTo(b) shouldNotBe 0\n  }\n}\n")),(0,r.kt)("p",null,"Here we are ensuring that all inputs are not equal, and that the inputs have the same length. Any assertion that\nthrows ",(0,r.kt)("inlineCode",{parentName:"p"},"AssertionError")," can be used here, including all the assertions provided by Kotest."),(0,r.kt)("p",null,"This also supports inline syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"checkAll<String, String> { a, b ->\n  assume {\n    a shouldNotBe b\n    a shouldHaveLength (b.length)\n  }\n  levenshtein(a, b) shouldBeGreaterThan 0\n}\n")),(0,r.kt)("h3",{id:"max-discard-percentage"},"Max Discard Percentage"),(0,r.kt)("p",null,"By default, the maximum discard percentage is 10%. If more combinations are discarded than that, the property test will\nfail. This helps avoid a scenario where we erroneously discard too many, or even all, our inputs."),(0,r.kt)("p",null,"For example, the following would fail by default because we would be filtering ~50% of values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"checkAll<Int, Int> { a, b ->\n  withAssumptions(a % 2 == 0) {\n    ..\n  }\n}\n")),(0,r.kt)("p",null,"But if we wanted to allow this regardless, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"maxDiscardPercentage")," to increase the allowed discard rate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"checkAll<Int, Int>(PropTestConfig(maxDiscardPercentage = 55)) { a, b ->\n  withAssumptions(a % 2 == 0) {\n    ..\n  }\n}\n")),(0,r.kt)("p",null,"It is generally better to adjust your arbs to produce values closer to what you need, so that you only need to filter\nout unwanted edge cases."))}c.isMDXComponent=!0}}]);