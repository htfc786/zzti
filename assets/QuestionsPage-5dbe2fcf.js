import{c as q,d as I,b as Q,e as y}from"./index-5941fa44.js";import{d as M,r as m,q as N,a as l,b as p,c as g,f as a,g as n,F as h,e as x,j as V,i as j,h as D,t as f,v as E,_ as F}from"./index-2333ea51.js";const $=["onClick"],z=M({__name:"QuestionsPage",setup(L){const r=q(),c=m([""]),_=m([]),s=m([]),b=e=>{e.keyPath&&(s.value=I(e.keyPath))};N(()=>{const e=Q(s.value);if(!e){_.value=[];return}_.value=e});const k=e=>{s.value=e,c.value=y(e,r)},P=e=>{const t=[];for(var o=0,i=s.value.length;o<i&&!(o>e);o++)t.push(s.value[o]);s.value=t,c.value=y(t,r)};return(e,t)=>{const o=l("a-breadcrumb-item"),i=l("a-breadcrumb"),B=l("a-menu"),v=l("a-col"),C=l("a-list-item"),K=l("a-list"),w=l("a-row");return p(),g(h,null,[a(i,null,{default:n(()=>[a(o,null,{default:n(()=>[x("a",{onClick:t[0]||(t[0]=u=>k([]))},"全部题目")]),_:1}),(p(!0),g(h,null,V(s.value,(u,d)=>(p(),E(o,null,{default:n(()=>[x("a",{onClick:O=>P(d)},f(u),9,$)]),_:2},1024))),256))]),_:1}),a(w,{type:"flex",align:"start"},{default:n(()=>[a(v,{flex:"100px",style:{"margin-right":"16px"}},{default:n(()=>[a(B,{style:{width:"250px"},mode:"inline",items:j(r),selectedKeys:c.value,"onUpdate:selectedKeys":t[1]||(t[1]=u=>c.value=u),onClick:b},null,8,["items","selectedKeys"])]),_:1}),a(v,{flex:"auto"},{default:n(()=>[a(K,{"item-layout":"horizontal","data-source":_.value},{renderItem:n(({item:u,index:d})=>[a(C,null,{default:n(()=>[D(f(d+1)+"、"+f(u),1)]),_:2},1024)]),_:1},8,["data-source"])]),_:1})]),_:1})],64)}}});const U=F(z,[["__scopeId","data-v-33cca11e"]]);export{U as default};
