(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},2101:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>l});var a=i(7096),n=i(6132),r=i(7284),o=i.n(r),s=i(2564),c={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>s[e]);i.d(t,c);let l=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,3982)),"/workspace/3CDisc/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,5345)),"/workspace/3CDisc/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,9291,23)),"next/dist/client/components/not-found-error"]}],d=["/workspace/3CDisc/app/page.tsx"],p="/page",u={require:i,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},5922:(e,t,i)=>{Promise.resolve().then(i.bind(i,1721))},1721:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>page});var a=i(784),n=i(9885),r=i(3258),o=i(9817);let s=o.ZP.div`

`,c=o.ZP.div`
.principalContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30%;
  background: ${'url("https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3b75bfde-2615-40fd-ab9e-588c4475e4b3%2Ffb8dc694-f346-4101-871b-e405ff408adc%2Fbackground.jpeg?table=block&id=2e80160a-f115-4654-a54c-14745cba6d90&spaceId=3b75bfde-2615-40fd-ab9e-588c4475e4b3&width=2000&userId=5b6a38de-4fa1-4691-9a1d-7f2e76e06e3e&cache=v2")'};  
}

.Cardsalign {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.campaign-card {
  text-align: center;
  margin: 10px;
  padding: 20px;
  width: 20%; /* 48% para deixar um espaço mínimo entre as duas divs */
  margin-bottom: 20px;
  gap: 20px;
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1); 
  justify-content: center;
  align-items: center;
   /*  border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5); */
}

.alternate-layout .campaign-card {
  text-align: center;
  margin: 10px;
  padding: 20px;
  width: 10%; /* 48% para deixar um espaço mínimo entre as duas divs */
  margin-bottom: 20px;
  gap: 20px;
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1); 
  justify-content: center;
  align-items: center;
   /*  border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5); */
}

.compact-layout .campaign-card {
  text-align: center;
  margin: 10px;
  padding: 50px;
  width: 48%; /* 48% para deixar um espaço mínimo entre as duas divs */
  margin-bottom: 20px;
  gap: 20px;
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1); 
  justify-content: center;
  align-items: center;
   /*  border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5); */
}

.minimalist-layout .campaign-card {
  text-align: center;
  margin: 10px;
  padding: 50px;
  width: 50%; /* 48% para deixar um espaço mínimo entre as duas divs */
  margin-bottom: 20px;
  gap: 20px;
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1); 
  justify-content: center;
  align-items: center;
   /*  border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5); */
}

.base-container {
  font-size: 20px;
	color: white;
  font-weight: bold;
  text-align: center;
}

h3 { 
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
}

p {
  color: white;
}

.campaign-card:hover {
  transform: scale(1.05);
  cursor: pointer;
  box-shadow: 0 0 8px #fd0018, 0 0 35px #fd0018, 0 0 60px #fd0018;
}

.campaign-card.clicked {
  background: rgba(255, 255, 255, 0.1); 
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
}

/* Estilo dos detalhes de campanha expandidos */
.campaign-percentages {
  display: none;
}

.campaign-card.clicked .campaign-percentages {
  display: block;
  margin-top: 10px;
}

.percentage-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Esconde o conteúdo que transborda */
  text-overflow: ellipsis; /* Mostra "..." para indicar que o texto foi cortado */
  white-space: nowrap; 
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
}

h1 {
  margin-bottom: 3%;
}

.percentage-item h3 {
  margin: 10px;
  font-size: 16px;
  margin: 5px 0;
}

.com-aviso {
  border: 2px solid red;
  box-shadow: 0 0 1px #fd0018, 0 0 15px #fd0018, 0 0 30px #fd0018;
}

.com-aviso-item {
  border: 2px solid red;
}

/* Estilos para porcentagens */
.porcentagem-vermelha {
  color: red;
  font-weight: bold;
}

.porcentagem-verde {
  color: green;
  font-weight: bold;
}

porcentagem-azul {
  color: blue;
  font-weight: bold;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.nav-links{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-self: center;
  align-items: center;
  align-content: center;
  background: #fff; 
  padding: 20px 15px;
  border-radius: 4px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  margin-bottom: 3%;
  flex-wrap: wrap;
  gap: 10px;
}

.link {
  width: 20%;
  justify-content: left;
  display: flex;
  margin-left: 100px;
  flex-direction: row;
  margin-bottom: 10px;
  letter-spacing: 5px;
  gap: 15px;
}

.nav-links:hover {
  box-shadow: 0 0 8px #fd0018, 0 0 35px #fd0018, 0 0 60px #fd0018;
}

.nav-links li{
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0 12px;
}
.nav-links li a{
  position: relative;
  color: black;
  font-size: 25px;
  font-family:'open_sansregular';  
  font-weight: bold;
  padding: 6px 0;
  text-decoration: none;
}
.nav-links li a:before{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background: red;
  border-radius: 12px;
  transition: all 0.4s ease;
}
.nav-links li a:hover:before{
  width: 100%;
}
.nav-links li.center a:before{
  left: 50%;
  transform: translateX(-50%);
}
.nav-links li.upward a:before{
  width: 100%;
  bottom: -5px;
  opacity: 0;
}
.nav-links li.upward a:hover:before{
  bottom: 0px;
  opacity: 1;
}
.nav-links li.forward a:before{
  width: 100%;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}
.nav-links li.forward a:hover:before{
  transform: scaleX(1);
  transform-origin: left;
}

.logo {
  display: flex;
  max-height: 150px;
  width: 30%;
  margin-left: 100px;
  height: auto;
  justify-content: left;
  align-content: center;
  align-items: center;
}

input {
  color: black;
  padding: 15px 25px;
}

.filters {
  display: flex;
  flex-direction: column;
}

.newfunctionalities {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.newfunctionalities input {
  margin-right: 10px;
  padding: 10px 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 20px;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out; /* Adiciona transição para a borda e a sombra */
}

.newfunctionalities input:focus {
  outline: 0;
}

.newfunctionalities label {
  color: black;
      margin-right: 1px;
      cursor: pointer;
      margin-right: 20px;
      letter-spacing: 2px;
      font-weight: 500;

      &:checked {
        color: #007bff;
      }
}

.newfunctionalities button {
  color: white;
  background: linear-gradient(to right, #ff0000, #b91010);
  border-radius: 4px;
}

.newfunctionalities button:hover
{
	color: white;
  background: linear-gradient(to right, #ff0000, #ff0f0f);
	transition-delay: 0.1s;
}

.letter-checkboxes {
   display: flex;
   flex-direction: row;
   transitions: 1.5s;
}

.checkbox-container {
  display: flex;
  align-items: center;
}

.checkbox-label {
  margin-right: 10px;
}

.checkbox-input {
  display: none;
}

.custom-checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid #fd0018;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.checkmark {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: #fd0018; /* Cor do "check" quando marcado */
  display: none;
}

.custom-checkbox.checked .checkmark {
  display: block;
}

.checkbox-input:checked + .custom-checkbox {
  background-color: #fd0018; /* Cor de fundo quando marcado */
  transition: background-color 0.2s ease-in-out; /* Adiciona transição para a cor de fundo */

}

/*--Button Styles--*/
.btn-slice {
  padding: 1.0rem 0.4rem;
  border: 2px solid #ffffff;
  border-radius: 0.5rem;
  color: #ffffff;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.3rem;
  position: relative;
  
  -webkit-transition: all 1000ms cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */
  -webkit-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  -moz-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  -o-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */

  -webkit-transition-timing-function: cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */
  -webkit-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  -moz-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  -o-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */
}

.btn-slice .top  {
  position: relative;
  height: 6px;
  overflow: hidden;
  top: 0;
  -webkit-transition: all 300ms cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */
  -webkit-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  -moz-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  -o-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */

  -webkit-transition-timing-function: cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */
  -webkit-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  -moz-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  -o-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */
  
  -webkit-transition-delay:0.35s;     
  -moz-transition-delay::0.35s; 
  -ms-transition-delay::0.35s;     
  -o-transition-delay::0.35s;     
  transition-delay::0.35s;
}

.btn-slice .bottom  {
  position: relative;
  height: 6px;
  overflow: hidden;
  bottom: 0;
  -webkit-transition: all 300ms cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */
  -webkit-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  -moz-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  -o-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */

  -webkit-transition-timing-function: cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */
  -webkit-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  -moz-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  -o-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */
  
  -webkit-transition-delay:0.35s;     
  -moz-transition-delay::0.35s; 
  -ms-transition-delay::0.35s;     
  -o-transition-delay::0.35s;     
  transition-delay::0.35s;
}

.btn-slice .bottom span {
  top: -6px;
  position: absolute;
  left: 0;
}

.btn-slice:hover .top {
  top: -5px;
  -webkit-transition-delay:0.35s;     
  -moz-transition-delay::0.35s; 
  -ms-transition-delay::0.35s;     
  -o-transition-delay::0.35s;     
  transition-delay::0.35s; 
}

.btn-slice:hover .bottom {
  bottom: -5px;
  -webkit-transition-delay:0.35s;     
  -moz-transition-delay::0.35s; 
  -ms-transition-delay::0.35s;     
  -o-transition-delay::0.35s;     
  transition-delay::0.35s; 
}
.btn-slice:hover, .btn-slice:focus, .btn-slice:active {
  margin-left: 10px;
}
.btn-slice:before{
  content: '';
  height: 1px;
  width: 60px;
  background-color: black;
  position: absolute;
  margin-top: 6px;
  right: -35px;
  
  -webkit-transition: all 1000ms cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */
  -webkit-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  -moz-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  -o-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */

  -webkit-transition-timing-function: cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */
  -webkit-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  -moz-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  -o-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */
}
.btn-slice:hover:before{
  width: 130%;
}
`,alertSound=()=>{let[e,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{(()=>{if(!e){let e=new Audio("/path/to/alert-sound.mp3");e.play(),t(!0)}})()},[e]),null},page=()=>{let[e,t]=(0,n.useState)({}),[i,o]=(0,n.useState)(!0),[l,d]=(0,n.useState)({}),[p,u]=(0,n.useState)(null),[m,b]=(0,n.useState)(new Date),[x,g]=(0,n.useState)(!1),[f,h]=(0,n.useState)(""),[w,k]=(0,n.useState)([]),[v,y]=(0,n.useState)([]),[j,z]=(0,n.useState)([]),[_,q]=(0,n.useState)("default"),handleLetterFilterChange=e=>{j.includes(e)?z(j.filter(t=>t!==e)):z([...j,e])};return(0,n.useEffect)(()=>{async function fetchBaseData(){try{let i="d0NLCpTnvtsY1gQu7S38RyF47fOjnHknynBjGzWxCwpXOJqXaNwWDrGqFomq",a=await r.Z.get(`https://3c.fluxoti.com/api/v1/campaigns?paused=false&page=1&api_token=${i}`),n=a.data.meta.pagination.total_pages,s={},c=!1;for(let t=1;t<=n;t++){let a=await r.Z.get(`https://3c.fluxoti.com/api/v1/campaigns?paused=false&page=${t}&api_token=${i}`),n=a.data.data;for(let t of n){let a=t.id.toString(),n=t.name;(0===j.length||j.some(e=>n.startsWith(e)))&&(e[n]=a);let o=await r.Z.get(`https://3c.fluxoti.com/api/v1/campaigns/${a}/lists?api_token=${i}`),l=o.data.data;s[a]?s[a].push(...l):s[a]=l;let d=l.some(e=>parseFloat(e.completed_percentage)>=90),p=l.some(e=>90===parseFloat(e.completed_percentage));!d||c||v.includes(n)||(c=!0),!p||c||v.includes(n)||(alert(`A base ${n} atingiu 90%!`),y(e=>[...e,n]))}}t(e),d(s),o(!1),b(new Date)}catch(e){console.error("Erro ao buscar os dados:",e),o(!1)}}fetchBaseData();let i=setInterval(fetchBaseData,1e4);return()=>clearInterval(i)},[v,j]),a.jsx(a.Fragment,{children:(0,a.jsxs)(c,{children:[a.jsx(alertSound,{}),(0,a.jsxs)("div",{className:"principalContent",children:[a.jsx("nav",{children:(0,a.jsxs)("ul",{className:"nav-links",children:[(0,a.jsxs)("div",{className:"logo",children:[a.jsx("img",{src:"/logo (1).png",alt:"PH Neg\xf3cios Plataforma",style:{width:"100px",height:"auto",marginTop:"5%",marginBottom:"3%"}}),(0,a.jsxs)("div",{className:"link",children:[a.jsx("li",{children:a.jsx("a",{href:"/",children:"Bases"})}),a.jsx("li",{className:"center",children:a.jsx("a",{href:"https://growth-stage-phi.vercel.app/",children:"Graficos"})}),a.jsx("li",{className:"upward",children:a.jsx("a",{href:"#",children:"Adicionar"})}),a.jsx("li",{className:"forward",children:a.jsx("a",{href:"#",children:"Update"})})]})]}),a.jsx("div",{className:"filters",children:(0,a.jsxs)("div",{className:"newfunctionalities",children:[(0,a.jsxs)("div",{children:[a.jsx("input",{type:"text",placeholder:"Filtrar por nome",value:f,onChange:e=>h(e.target.value)}),a.jsx("button",{onClick:()=>{q(e=>{switch(e){case"default":return"alternate";case"alternate":return"compact";case"compact":return"minimalist";default:return"default"}})},className:"btn-slice",children:"Mudar Layout"})]}),(0,a.jsxs)("div",{className:"letter-checkboxes",children:[["S","E","R","G","B","I","C","M"].map(e=>(0,a.jsxs)("label",{className:"letter-checkbox",children:[a.jsx("input",{type:"checkbox",value:e,checked:j.includes(e),onChange:()=>handleLetterFilterChange(e),className:"checkbox-input"}),a.jsx("span",{className:"custom-checkbox",children:a.jsx("span",{className:"checkmark",children:"✓"})}),e]},e)),"            "]})]})})]})}),i&&a.jsx("p",{children:"Carregando..."}),!i&&a.jsx("div",{className:`Cardsalign${"compact"===_?" compact-layout":""}${"alternate"===_?" alternate-layout":""}${"minimalist"===_?" minimalist-layout":""}`,children:Object.keys(e).map(t=>t.toLowerCase().includes(f.toLowerCase())&&(0===j.length||j.some(e=>t.startsWith(e)))?(0,a.jsxs)("div",{className:`campaign-card${p===e[t]?" clicked":""}`,onClick:()=>(function(e){p===e?u(null):u(e)})(e[t]),children:[a.jsx("div",{className:`base ${l[e[t]]&&l[e[t]].length>0&&parseFloat(l[e[t]][0]?.completed_percentage)>=90?"com-aviso":""}`,children:t}),p===e[t]&&a.jsx("div",{className:"campaign-percentages",children:l[e[t]]?.map(e=>a.jsx(s,{children:a.jsxs("div",{className:`percentage-item ${parseFloat(e.completed_percentage)>=90?"com-aviso":""}`,children:[a.jsx("h3",{children:e.name}),a.jsx("p",{children:e.created_at}),a.jsx("h3",{className:`porcentagem-${"100.00"===e.completed_percentage?"verde":"vermelha"}`,children:function(e){let t=parseFloat(e);if(100===t){let e=t.toFixed(0);return(0,a.jsxs)("span",{className:"porcentagem-azul",children:[e,"%"]})}if(t>=90&&t<=100){let e=t.toFixed(0);return(0,a.jsxs)("span",{className:"porcentagem-vermelha",children:[e,"%"]})}{let e=t.toFixed(0);return(0,a.jsxs)("span",{className:"porcentagem-verde",children:[e,"%"]})}}(e.completed_percentage)}),a.jsxs("p",{children:["\xdaltima atualiza\xe7\xe3o: ",m.toLocaleTimeString()]})]})},e.id))})]},t):null)})]})]})})}},3982:(e,t,i)=>{"use strict";i.r(t),i.d(t,{$$typeof:()=>o,__esModule:()=>r,default:()=>c});var a=i(5153);let n=(0,a.createProxy)(String.raw`/workspace/3CDisc/app/page.tsx`),{__esModule:r,$$typeof:o}=n,s=n.default,c=s}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),i=t.X(0,[214,539,519],()=>__webpack_exec__(2101));module.exports=i})();