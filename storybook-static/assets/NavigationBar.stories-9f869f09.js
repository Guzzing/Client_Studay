import{j as r}from"./jsx-runtime-6eef64cc.js";import{r as n}from"./index-c013ead5.js";import{I as g}from"./Icon-591b1838.js";import{u as x}from"./index-a55e5995.js";import"./_commonjsHelpers-725317a4.js";import"./ArrowDown-54d7f6d1.js";import"./LikeFilled-8c5d7500.js";const v="text-black-700",b="fill-black-700 stroke-black-700",y="fill-black-700",I="text-gray-300",N="fill-gray-300 stroke-gray-300",S=[{icon:"SearchMap",text:"학원 지도",select:!1},{icon:"Home",text:"홈",select:!0},{icon:"Timetable",text:"시간표",select:!1},{icon:"Info",text:"학원 정보",select:!1}],l=({selectIcon:c})=>{const i=x(),[o,p]=n.useState(S.map(e=>({...e,select:e.icon===c})));n.useEffect(()=>{console.log(o),p(e=>e.map(a=>({...a,select:a.icon===c})))},[c]);const f=n.useCallback(e=>{const a=o.map(t=>t.icon===e?(t.icon==="SearchMap"?i("/selectcity"):t.icon==="Home"&&i("/home"),{...t,select:!0}):{...t,select:!1});p(a)},[o]);return r.jsx("div",{className:"flex flex-row w-[390px] h-[81px] bg-white-0 border border-solid border-gray-100 absolute bottom-0",children:o&&o.map((e,a)=>r.jsxs("div",{className:"flex flex-col w-full justify-center items-center cursor-pointer","data-id":e.icon,onClick:t=>f(t.currentTarget.dataset.id),children:[r.jsx(g,{icon:e.icon,classStyle:`${e.select?e.icon==="Timetable"||e.icon==="Info"?b:y:N}`}),r.jsx("span",{className:`${e.select?v:I} font-nsk body-10`,children:e.text})]},a))})};try{l.displayName="NavigationBar",l.__docgenInfo={description:"",displayName:"NavigationBar",props:{selectIcon:{defaultValue:null,description:"",name:"selectIcon",required:!0,type:{name:"enum",value:[{value:'"SearchMap"'},{value:'"Home"'},{value:'"Timetable"'},{value:'"Info"'}]}}}}}catch{}const B={component:l,tags:["autodocs"],title:"components/NavigationBar",argTypes:{selectIcon:{control:"select"}}},s={args:{selectIcon:"Home"}};var m,u,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    selectIcon: 'Home'
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const D=["Default"];export{s as Default,D as __namedExportsOrder,B as default};
//# sourceMappingURL=NavigationBar.stories-9f869f09.js.map