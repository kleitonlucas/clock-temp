import{s as t,j as m,r as u,R as b,a as v}from"./vendor.ca821bfb.js";const A=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}};A();const D=t.div`
    width: 100vw;
    height: 100vh;
    background-color: #736555;
    color: #ddd;
`,I=t.div`
    max-width: 1000px;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;

    hr{
        background-color: #D97925;
        border: 0;
        height: 3px;
        box-shadow: 0 0 1em #D9A577;
    }
`,k=t.div`
    width: 100%;
    text-align: center;

    h2{
        padding: 10px;
        font-size: 30px;
        margin: 20px 0;
    }
    input{
        width: 250px;
        border-radius: 20px;
        border: 0;
        padding: 10px 15px;
        font-size: 20px;
    }
    button{
        margin-left: 20px;
        padding: 10px 15px;
        border: 0;
        border-radius: 20px;
        font-size: 20px;
        font-weight: bold;
        background-color: #D97925;
        color: #f2e2ce;
    }
    button:hover{
        background-color: #D9A577;
    }
`,z=t.div`
    width: 400px;
    margin: auto;
    background-color: #663333;
    margin-top: 40px;
    padding: 20px;
    border: 2px solid #D97925;
    border-radius: 20px;
    box-shadow: 0 0 1em #D9A577;
    display: ${s=>s.display};
    justify-content: center;
    align-items: center;
`,S=t.div`
    display: flex;
    flex-direction: column;
`,C=t.div`
    img{
        width: 120px;
        height: 120px;
    }
`,j=t.div`
    width: 400px;
    margin: auto;
    background-color: #663333;
    font-size: 30px;
    font-weight: bold;
    margin-top: 40px;
    padding: 20px;
    border: 2px solid #D97925;
    border-radius: 20px;
    box-shadow: 0 0 1em #D9A577;
    display: ${s=>s.display};
    justify-content: center;
    align-items: center;
`,E=t.div`
    font-size: 25px;
    font-weight: bold;
`,L=t.div`
    margin: 5px;
    display: flex;
`,T=t.div`
    font-size: 20px;
`,R=t.div`
    margin-left: 5px;
    font-size: 18px;
`,$=t.div`
    margin: 5px;
    display: flex;
`,H=t.div`
    font-size: 20px;
`,M=t.div`
    margin-left: 5px;
    font-size: 18px;
`,O=t.div`
    margin: 5px;
    display: flex;
`,P=t.div`
    font-size: 20px;
`,B=t.div`
    margin-left: 5px;
    font-size: 18px;
`,n=m.exports.jsx,o=m.exports.jsxs,N=()=>{const[s,d]=u.exports.useState(!1),[r,c]=u.exports.useState({name:"",country:"",temp:"",tempIcon:"",windSpeed:"",humidity:""}),[e,i]=u.exports.useState("none"),[l,h]=u.exports.useState("none"),[f,g]=u.exports.useState(""),y=a=>{x(""),i("flex"),c(a)},x=a=>{a!==""?(h("flex"),i("none"),g(a)):h("none")};return o(k,{children:[n("h2",{children:"Previs\xE3o do Tempo"}),n("input",{type:"text"}),n("button",{onClick:async()=>{let a=document.getElementsByTagName("input")[0].value;if(a!==""){d(!0);let w=`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(a)}&APPID=c561d9a1f600861e459ca18081cab54e&units=metric&lang=pt_br`;d(!1);let p=await(await fetch(w)).json();p.cod===200?y({name:p.name,country:p.sys.country,temp:p.main.temp,tempIcon:`http://openweathermap.org/img/wn/${p.weather[0].icon}@2x.png`,windSpeed:p.wind.speed,humidity:p.main.humidity}):x("Localiza\xE7\xE3o n\xE3o encontrada!")}else x("Digite uma localiza\xE7\xE3o!")},children:"Buscar"}),o(z,{display:e,children:[o(S,{children:[o(E,{children:[r.name,", ",r.country]}),o(L,{children:[n(T,{children:"Temperatura:"}),o(R,{children:[r.temp,n("sup",{children:"\xB0"}),"C"]})]}),o($,{children:[n(H,{children:"Vento:"}),o(M,{children:[r.windSpeed,n("span",{children:"km/h"})]})]}),o(O,{children:[n(P,{children:"Humidade do ar:"}),o(B,{children:[r.humidity,"%"]})]})]}),n(C,{children:n("img",{src:r.tempIcon})})]}),n(j,{display:l,children:f})]})},W=t.div`
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 50px;
    }
`,q=()=>{const[s,d]=u.exports.useState(new Date);let r=s.getHours(),c=s.getMinutes(),e=s.getSeconds();const i=()=>{let h=new Date;d(h)},l=()=>{setInterval(i,1e3)};return o(W,{children:[o("h1",{children:[r<10?"0"+r:r,":",c<10?"0"+c:c,":",e<10?"0"+e:e]}),l()]})},F=()=>n(D,{children:o(I,{children:[n(q,{}),n("hr",{}),n(N,{})]})});b.render(n(v.StrictMode,{children:n(F,{})}),document.getElementById("root"));
