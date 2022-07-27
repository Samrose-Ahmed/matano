"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3,title:"Getting started"},i=void 0,l={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"Bootstrapping",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/matanolabs/matano/tree/main/website/docs/getting-started.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Getting started"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Matano directory",permalink:"/docs/matano-directory"}},p={},c=[{value:"Bootstrapping",id:"bootstrapping",level:2},{value:"Create a Matano Directory",id:"create-a-matano-directory",level:2},{value:"Deployment",id:"deployment",level:2}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bootstrapping"},"Bootstrapping"),(0,o.kt)("p",null,"Initialize your AWS environment before deployment by running ",(0,o.kt)("inlineCode",{parentName:"p"},"matano bootstrap"),". This will create the necessary resources in your AWS account before deploying Matano."),(0,o.kt)("p",null,"This command requires valid AWS credentials, either from the environment or the ",(0,o.kt)("inlineCode",{parentName:"p"},"--profile")," flag."),(0,o.kt)("h2",{id:"create-a-matano-directory"},"Create a Matano Directory"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/matano-directory"},"Matano directory")," lets you specify data and configuration values for Matano. Run the following to generate a sample directory to get started:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"matano generate:matano-dir\n")),(0,o.kt)("p",null,"This will create a directory with sample detections and log sources."),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"To deploy matano, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"matano deploy")," command."),(0,o.kt)("p",null,"You must specify the AWS account and region you are deploying to, and the Matano directory you are using."),(0,o.kt)("p",null,"To update your matano deployment, e.g. after adding a detection or log source, re-run ",(0,o.kt)("inlineCode",{parentName:"p"},"matano deploy"),"."))}d.isMDXComponent=!0}}]);