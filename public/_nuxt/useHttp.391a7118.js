import{m as r}from"./entry.6c1c23c3.js";const i=()=>{const{public:{apiUrl:n}}=r(),o={"Content-Type":"application/json"};return{get:async(t,e={})=>{const s=new URLSearchParams(e).toString();return await $fetch(`${t}?${s}`,{baseURL:n,headers:o})},post:(t,e={})=>$fetch(t,{method:"POST",baseURL:n,body:e,headers:o}),put:(t,e={})=>$fetch(t,{method:"PUT",baseURL:n,body:e,headers:o}),httpDelete:t=>$fetch(t,{method:"DELETE",baseURL:n,headers:o})}};export{i as u};