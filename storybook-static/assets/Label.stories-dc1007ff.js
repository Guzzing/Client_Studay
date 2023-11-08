import{j as a}from"./jsx-runtime-6eef64cc.js";import{I as b}from"./Icon-591b1838.js";import{c as f}from"./index-35f0d4eb.js";import{a as x}from"./cn-ec56f76a.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./ArrowDown-54d7f6d1.js";import"./LikeFilled-8c5d7500.js";const g={default:{medium:"bg-white border border-blue-500 ",small:"bg-blue-400"},selected:{medium:"bg-blue-500",small:"bg-blue-700"},disabled:{medium:"bg-white border border-gray-500",small:"bg-gray-500"}},u={default:{medium:"stroke-blue-500 text-blue-500 ",small:"text-white-0"},selected:{medium:"stroke-white-0 text-white-0",small:"text-white-0"},disabled:{medium:"stroke-gray-500 text-gray-500",small:"text-white-0"}},h=f("flex flex-row justify-center gap-[2px] items-center w-fit px-[5px] ",{variants:{variant:{medium:"rounded-[10px] font-nsk body-14 w-fit h-[32px]",small:"font-nsk caption-13 rounded-[10px]  w-fit h-[28px] text-white"},defaultVariants:{variant:"medium"}}}),l=({variant:e,label:v="라벨",icon:s,color:o="default"})=>a.jsx("label",{className:"w-[66px]",children:a.jsxs("div",{className:x(h({variant:e}),g[o][e],u[o][e]),children:[s&&a.jsx(b,{icon:s,classStyle:u[o][e]}),a.jsx("div",{children:v})]})});try{l.displayName="Label",l.__docgenInfo={description:"",displayName:"Label",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'}]}},label:{defaultValue:{value:"라벨"},description:"",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"SearchMap"'},{value:'"Home"'},{value:'"Timetable"'},{value:'"Info"'},{value:'"Abacus"'},{value:'"Add"'},{value:'"Alarm"'},{value:'"ArrowDown"'},{value:'"BackPush"'},{value:'"Close"'},{value:'"Computer"'},{value:'"Delete"'},{value:'"Edit"'},{value:'"English"'},{value:'"Etc"'},{value:'"Filter"'},{value:'"Gps"'},{value:'"Korean"'},{value:'"LikeBlank"'},{value:'"LikeFilled"'},{value:'"Logout"'},{value:'"MapPin"'},{value:'"Math"'},{value:'"Music"'},{value:'"MyList"'},{value:'"Science"'},{value:'"Search"'},{value:'"SideBar"'},{value:'"Social"'},{value:'"Synthesis"'},{value:'"Time"'},{value:'"User"'},{value:'"Write"'},{value:'"Logo"'}]}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"selected"'},{value:'"disabled"'}]}}}}}catch{}const C={title:"Components/Label",component:l,argTypes:{label:{control:"text"},color:{control:"select",options:["default","selected","disabled"]},icon:{control:"select",options:["Abacus","Computer","English","Etc","Korean","Math","Music","Science","Music","Social","Synthesis","Write"]}}},r={render:e=>a.jsx(l,{icon:e.icon,label:e.label,color:e.color,variant:"medium"})},t={render:e=>a.jsx(l,{label:e.label,color:e.color,variant:"small"})};var i,n,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Label icon={args.icon} label={args.label} color={args.color} variant={'medium'} />
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var m,d,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Label label={args.label} color={args.color} variant={'small'} />
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const V=["Medium","Small"];export{r as Medium,t as Small,V as __namedExportsOrder,C as default};
//# sourceMappingURL=Label.stories-dc1007ff.js.map