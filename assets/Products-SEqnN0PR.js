import{j as s,R as b,r as p,u as S,P as T}from"./index-DIquSlHJ.js";import{u as P,T as y}from"./useActions-DWr2HVYp.js";import{t as I}from"./transition-DYwsXx9t.js";const O=({title:a,type:m,startGuarantee:i,endGuarantee:d,price:l,id:u,img:_,serialNumber:x,orderTitle:c})=>s.jsx("div",{id:u.toString(),className:"product-item",children:s.jsxs("div",{className:"product-item__body",children:[s.jsx("div",{className:"product-item__info",children:s.jsx("img",{className:"product-item__photo",src:_,alt:"product photo"})}),s.jsxs("div",{className:"product-item__info product-item__name",children:[s.jsx("div",{className:"product-item__underline",children:a}),s.jsx("div",{className:"product-item__serialNumber",children:x})]}),s.jsx("div",{className:"product-item__info",children:m!==void 0&&m}),s.jsx("div",{className:"product-item__info",children:s.jsx("div",{className:"product-item__underline",children:c})}),s.jsxs("div",{className:"product-item__info product-item__guarante",children:[s.jsxs("div",{className:"product-item__guarante-wrapper",children:[s.jsx("span",{className:"product-item__smallItem",children:"c "}),s.jsx("span",{children:i})]}),s.jsxs("div",{className:"product-item__guarante-wrapper",children:[s.jsx("span",{className:"product-item__smallItem",children:"по "}),s.jsx("span",{children:d})]})]}),s.jsx("div",{className:"product-item__info product-item__currency",children:l!==void 0&&l.length>0&&l.map(({value:j,symbol:h},e)=>s.jsx(b.Fragment,{children:s.jsx("span",{className:h==="USD"?"product-item__smallItem":"",children:j+" "+h})},e))})]})}),w=({options:a,onSelect:m})=>{const[i,d]=p.useState(!1),[l,u]=p.useState(null),_=()=>{d(!i)},x=c=>{u(c),d(!1),m(c)};return s.jsxs("div",{className:"custom-select",children:[s.jsxs("div",{className:"select-header",onClick:_,children:[l?l.label:"Select an option",s.jsx("span",{className:`arrow ${i?"open":""}`,children:"▼"})]}),i&&s.jsx("div",{className:"options",children:a.map(c=>s.jsx("div",{className:`option ${l===c?"selected":""}`,onClick:()=>x(c),children:c.label},c.value))})]})},F=[{value:"All",label:"Все"},{value:"Monitors",label:"Мониторы"},{value:"Phones",label:"Телефоны"}],A=()=>{const{products:a,isLoading:m}=S(e=>e.products),{orders:i}=S(e=>e.orders),{getProducts:d}=P(),{getOrders:l}=P(),[u,_]=p.useState([]),[x,c]=p.useState(!1);p.useEffect(()=>{d(),l()},[d,l]);const j=p.useMemo(()=>e=>{const r=i.find(n=>n.id===e);return r?r.title:"Unknown Order"},[i]),h=e=>{if(e==="All")c(!1);else{c(!0);const r=a.filter(n=>n.type===e);_(r)}};return s.jsxs(s.Fragment,{children:[s.jsx(w,{options:F,onSelect:e=>h(e.value)}),m?s.jsx(T,{}):s.jsx("div",{className:"products__wrapper",children:x?u.map(({id:e,title:r,type:n,guarantee:t,price:v,photo:N,serialNumber:f,order:o})=>s.jsx(O,{serialNumber:f,img:N,type:n,id:e,title:r,startGuarantee:t==null?void 0:t.start,endGuarantee:t==null?void 0:t.end,price:v||[],orderTitle:j(o==null?void 0:o.toString())},e)):a.map(({id:e,title:r,type:n,guarantee:t,price:v,photo:N,serialNumber:f,order:o})=>s.jsx(O,{serialNumber:f,img:N,type:n,id:e,title:r,startGuarantee:t==null?void 0:t.start,endGuarantee:t==null?void 0:t.end,price:v||[],orderTitle:j(o==null?void 0:o.toString())},e))})]})},G=()=>s.jsx("section",{className:"products",children:s.jsxs("div",{className:"products__body",children:[s.jsx(y,{text:"Продукты"}),s.jsx(A,{})]})}),E=I(G);export{E as default};
