(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6549:function(n,e,t){Promise.resolve().then(t.bind(t,7081))},7081:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return page}});var i=t(7437),a=t(2265),o=t(9222),r=t(230),s=t(802);function _templateObject(){let n=(0,r._)(["\n\n"]);return _templateObject=function(){return n},n}function _templateObject1(){let n=(0,r._)(["\n.principalContent {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 30%;\n  background: ",";  \n}\n\n.Cardsalign {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.campaign-card {\n  text-align: center;\n  margin: 10px;\n  padding: 20px;\n  width: 20%; /* 48% para deixar um espa\xe7o m\xednimo entre as duas divs */\n  margin-bottom: 20px;\n  gap: 20px;\n  border-radius: 5px;\n  transition: transform 0.2s ease-in-out;\n  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);\n  background: rgba(255, 255, 255, 0.1); \n  justify-content: center;\n  align-items: center;\n   /*  border-top: 1px solid rgba(255, 255, 255, 0.5);\n    border-left: 1px solid rgba(255, 255, 255, 0.5); */\n}\n\n.alternate-layout .campaign-card {\n  text-align: center;\n  margin: 10px;\n  padding: 20px;\n  width: 10%; /* 48% para deixar um espa\xe7o m\xednimo entre as duas divs */\n  margin-bottom: 20px;\n  gap: 20px;\n  border-radius: 5px;\n  transition: transform 0.2s ease-in-out;\n  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);\n  background: rgba(255, 255, 255, 0.1); \n  justify-content: center;\n  align-items: center;\n   /*  border-top: 1px solid rgba(255, 255, 255, 0.5);\n    border-left: 1px solid rgba(255, 255, 255, 0.5); */\n}\n\n.compact-layout .campaign-card {\n  text-align: center;\n  margin: 10px;\n  padding: 50px;\n  width: 48%; /* 48% para deixar um espa\xe7o m\xednimo entre as duas divs */\n  margin-bottom: 20px;\n  gap: 20px;\n  border-radius: 5px;\n  transition: transform 0.2s ease-in-out;\n  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);\n  background: rgba(255, 255, 255, 0.1); \n  justify-content: center;\n  align-items: center;\n   /*  border-top: 1px solid rgba(255, 255, 255, 0.5);\n    border-left: 1px solid rgba(255, 255, 255, 0.5); */\n}\n\n.minimalist-layout .campaign-card {\n  text-align: center;\n  margin: 10px;\n  padding: 50px;\n  width: 50%; /* 48% para deixar um espa\xe7o m\xednimo entre as duas divs */\n  margin-bottom: 20px;\n  gap: 20px;\n  border-radius: 5px;\n  transition: transform 0.2s ease-in-out;\n  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);\n  background: rgba(255, 255, 255, 0.1); \n  justify-content: center;\n  align-items: center;\n   /*  border-top: 1px solid rgba(255, 255, 255, 0.5);\n    border-left: 1px solid rgba(255, 255, 255, 0.5); */\n}\n\n.base-container {\n  font-size: 20px;\n	color: white;\n  font-weight: bold;\n  text-align: center;\n}\n\nh3 { \n  color: white;\n  font-weight: bold;\n  letter-spacing: 2px;\n}\n\np {\n  color: white;\n}\n\n.campaign-card:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n  box-shadow: 0 0 8px #fd0018, 0 0 35px #fd0018, 0 0 60px #fd0018;\n}\n\n.campaign-card.clicked {\n  background: rgba(255, 255, 255, 0.1); \n    justify-content: center;\n    align-items: center;\n    border-top: 1px solid rgba(255, 255, 255, 0.5);\n    border-left: 1px solid rgba(255, 255, 255, 0.5);\n}\n\n/* Estilo dos detalhes de campanha expandidos */\n.campaign-percentages {\n  display: none;\n}\n\n.campaign-card.clicked .campaign-percentages {\n  display: block;\n  margin-top: 10px;\n}\n\n.percentage-item {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding: 10px;\n  margin-top: 10px;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden; /* Esconde o conte\xfado que transborda */\n  text-overflow: ellipsis; /* Mostra \"...\" para indicar que o texto foi cortado */\n  white-space: nowrap; \n}\n\n.title {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; \n}\n\nh1 {\n  margin-bottom: 3%;\n}\n\n.percentage-item h3 {\n  margin: 10px;\n  font-size: 16px;\n  margin: 5px 0;\n}\n\n.com-aviso {\n  border: 2px solid red;\n  box-shadow: 0 0 1px #fd0018, 0 0 15px #fd0018, 0 0 30px #fd0018;\n}\n\n.com-aviso-item {\n  border: 2px solid red;\n}\n\n/* Estilos para porcentagens */\n.porcentagem-vermelha {\n  color: red;\n  font-weight: bold;\n}\n\n.porcentagem-verde {\n  color: green;\n  font-weight: bold;\n}\n\nporcentagem-azul {\n  color: blue;\n  font-weight: bold;\n}\n\nnav {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.nav-links{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  align-self: center;\n  align-items: center;\n  align-content: center;\n  background: #fff; \n  padding: 20px 15px;\n  border-radius: 4px;\n  box-shadow: 0 5px 10px rgba(0,0,0,0.2);\n  margin-bottom: 3%;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.link {\n  width: 20%;\n  justify-content: left;\n  display: flex;\n  margin-left: 100px;\n  flex-direction: row;\n  margin-bottom: 10px;\n  letter-spacing: 5px;\n  gap: 15px;\n}\n\n.nav-links:hover {\n  box-shadow: 0 0 8px #fd0018, 0 0 35px #fd0018, 0 0 60px #fd0018;\n}\n\n.nav-links li{\n  display: flex;\n  flex-direction: row;\n  list-style: none;\n  margin: 0 12px;\n}\n.nav-links li a{\n  position: relative;\n  color: black;\n  font-size: 25px;\n  font-family:'open_sansregular';  \n  font-weight: bold;\n  padding: 6px 0;\n  text-decoration: none;\n}\n.nav-links li a:before{\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  width: 0%;\n  background: red;\n  border-radius: 12px;\n  transition: all 0.4s ease;\n}\n.nav-links li a:hover:before{\n  width: 100%;\n}\n.nav-links li.center a:before{\n  left: 50%;\n  transform: translateX(-50%);\n}\n.nav-links li.upward a:before{\n  width: 100%;\n  bottom: -5px;\n  opacity: 0;\n}\n.nav-links li.upward a:hover:before{\n  bottom: 0px;\n  opacity: 1;\n}\n.nav-links li.forward a:before{\n  width: 100%;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.4s ease;\n}\n.nav-links li.forward a:hover:before{\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.logo {\n  display: flex;\n  max-height: 150px;\n  width: 30%;\n  margin-left: 100px;\n  height: auto;\n  justify-content: left;\n  align-content: center;\n  align-items: center;\n}\n\ninput {\n  color: black;\n  padding: 15px 25px;\n}\n\n.filters {\n  display: flex;\n  flex-direction: column;\n}\n\n.newfunctionalities {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.newfunctionalities input {\n  margin-right: 10px;\n  padding: 10px 10px;\n  margin-right: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 14px;\n  margin-bottom: 20px;\n  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out; /* Adiciona transi\xe7\xe3o para a borda e a sombra */\n}\n\n.newfunctionalities input:focus {\n  outline: 0;\n}\n\n.newfunctionalities label {\n  color: black;\n      margin-right: 1px;\n      cursor: pointer;\n      margin-right: 20px;\n      letter-spacing: 2px;\n      font-weight: 500;\n\n      &:checked {\n        color: #007bff;\n      }\n}\n\n.newfunctionalities button {\n  color: white;\n  background: linear-gradient(to right, #ff0000, #b91010);\n  border-radius: 4px;\n}\n\n.newfunctionalities button:hover\n{\n	color: white;\n  background: linear-gradient(to right, #ff0000, #ff0f0f);\n	transition-delay: 0.1s;\n}\n\n.letter-checkboxes {\n   display: flex;\n   flex-direction: row;\n   transitions: 1.5s;\n}\n\n.checkbox-container {\n  display: flex;\n  align-items: center;\n}\n\n.checkbox-label {\n  margin-right: 10px;\n}\n\n.checkbox-input {\n  display: none;\n}\n\n.custom-checkbox {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #fd0018;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.checkmark {\n  width: 12px;\n  height: 12px;\n  border-radius: 2px;\n  background-color: #fd0018; /* Cor do \"check\" quando marcado */\n  display: none;\n}\n\n.custom-checkbox.checked .checkmark {\n  display: block;\n}\n\n.checkbox-input:checked + .custom-checkbox {\n  background-color: #fd0018; /* Cor de fundo quando marcado */\n  transition: background-color 0.2s ease-in-out; /* Adiciona transi\xe7\xe3o para a cor de fundo */\n\n}\n\n/*--Button Styles--*/\n.btn-slice {\n  padding: 1.0rem 0.4rem;\n  border: 2px solid #ffffff;\n  border-radius: 0.5rem;\n  color: #ffffff;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.3rem;\n  position: relative;\n  \n  -webkit-transition: all 1000ms cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */\n  -webkit-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); \n  -moz-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); \n  -o-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); \n  transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */\n\n  -webkit-transition-timing-function: cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */\n  -webkit-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); \n  -moz-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); \n  -o-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); \n  transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */\n}\n\n.btn-slice .top  {\n  position: relative;\n  height: 6px;\n  overflow: hidden;\n  top: 0;\n  -webkit-transition: all 300ms cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */\n  -webkit-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); \n  -moz-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); \n  -o-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); \n  transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */\n\n  -webkit-transition-timing-function: cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */\n  -webkit-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); \n  -moz-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); \n  -o-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); \n  transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */\n  \n  -webkit-transition-delay:0.35s;     \n  -moz-transition-delay::0.35s; \n  -ms-transition-delay::0.35s;     \n  -o-transition-delay::0.35s;     \n  transition-delay::0.35s;\n}\n\n.btn-slice .bottom  {\n  position: relative;\n  height: 6px;\n  overflow: hidden;\n  bottom: 0;\n  -webkit-transition: all 300ms cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */\n  -webkit-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); \n  -moz-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); \n  -o-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); \n  transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */\n\n  -webkit-transition-timing-function: cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */\n  -webkit-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); \n  -moz-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); \n  -o-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); \n  transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */\n  \n  -webkit-transition-delay:0.35s;     \n  -moz-transition-delay::0.35s; \n  -ms-transition-delay::0.35s;     \n  -o-transition-delay::0.35s;     \n  transition-delay::0.35s;\n}\n\n.btn-slice .bottom span {\n  top: -6px;\n  position: absolute;\n  left: 0;\n}\n\n.btn-slice:hover .top {\n  top: -5px;\n  -webkit-transition-delay:0.35s;     \n  -moz-transition-delay::0.35s; \n  -ms-transition-delay::0.35s;     \n  -o-transition-delay::0.35s;     \n  transition-delay::0.35s; \n}\n\n.btn-slice:hover .bottom {\n  bottom: -5px;\n  -webkit-transition-delay:0.35s;     \n  -moz-transition-delay::0.35s; \n  -ms-transition-delay::0.35s;     \n  -o-transition-delay::0.35s;     \n  transition-delay::0.35s; \n}\n.btn-slice:hover, .btn-slice:focus, .btn-slice:active {\n  margin-left: 10px;\n}\n.btn-slice:before{\n  content: '';\n  height: 1px;\n  width: 60px;\n  background-color: black;\n  position: absolute;\n  margin-top: 6px;\n  right: -35px;\n  \n  -webkit-transition: all 1000ms cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */\n  -webkit-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); \n  -moz-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); \n  -o-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); \n  transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */\n\n  -webkit-transition-timing-function: cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */\n  -webkit-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); \n  -moz-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); \n  -o-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); \n  transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */\n}\n.btn-slice:hover:before{\n  width: 130%;\n}\n"]);return _templateObject1=function(){return n},n}let c=s.ZP.div(_templateObject()),l=s.ZP.div(_templateObject1(),'url("https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3b75bfde-2615-40fd-ab9e-588c4475e4b3%2Ffb8dc694-f346-4101-871b-e405ff408adc%2Fbackground.jpeg?table=block&id=2e80160a-f115-4654-a54c-14745cba6d90&spaceId=3b75bfde-2615-40fd-ab9e-588c4475e4b3&width=2000&userId=5b6a38de-4fa1-4691-9a1d-7f2e76e06e3e&cache=v2")');var alertSound=()=>{let[n,e]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{(()=>{if(!n){let n=new Audio("/path/to/alert-sound.mp3");n.play(),e(!0)}})()},[n]),null},page=()=>{let[n,e]=(0,a.useState)({}),[t,r]=(0,a.useState)(!0),[s,d]=(0,a.useState)({}),[p,b]=(0,a.useState)(null),[m,u]=(0,a.useState)(new Date),[x,g]=(0,a.useState)(!1),[f,h]=(0,a.useState)(""),[w,k]=(0,a.useState)([]),[v,y]=(0,a.useState)([]),[j,z]=(0,a.useState)([]),[N,_]=(0,a.useState)("default"),handleLetterFilterChange=n=>{j.includes(n)?z(j.filter(e=>e!==n)):z([...j,n])};return(0,a.useEffect)(()=>{async function fetchBaseData(){try{let t="d0NLCpTnvtsY1gQu7S38RyF47fOjnHknynBjGzWxCwpXOJqXaNwWDrGqFomq",i=await o.Z.get("https://3c.fluxoti.com/api/v1/campaigns?paused=false&page=1&api_token=".concat(t)),a=i.data.meta.pagination.total_pages,s={},c=!1;for(let e=1;e<=a;e++){let i=await o.Z.get("https://3c.fluxoti.com/api/v1/campaigns?paused=false&page=".concat(e,"&api_token=").concat(t)),a=i.data.data;for(let e of a){let i=e.id.toString(),a=e.name;(0===j.length||j.some(n=>a.startsWith(n)))&&(n[a]=i);let r=await o.Z.get("https://3c.fluxoti.com/api/v1/campaigns/".concat(i,"/lists?api_token=").concat(t)),l=r.data.data;s[i]?s[i].push(...l):s[i]=l;let d=l.some(n=>parseFloat(n.completed_percentage)>=90),p=l.some(n=>90===parseFloat(n.completed_percentage));!d||c||v.includes(a)||(c=!0),!p||c||v.includes(a)||(alert("A base ".concat(a," atingiu 90%!")),y(n=>[...n,a]))}}e(n),d(s),r(!1),u(new Date)}catch(n){console.error("Erro ao buscar os dados:",n),r(!1)}}fetchBaseData();let t=setInterval(fetchBaseData,1e4);return()=>clearInterval(t)},[v,j]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(l,{children:[(0,i.jsx)(alertSound,{}),(0,i.jsxs)("div",{className:"principalContent",children:[(0,i.jsx)("nav",{children:(0,i.jsxs)("ul",{className:"nav-links",children:[(0,i.jsxs)("div",{className:"logo",children:[(0,i.jsx)("img",{src:"/logo (1).png",alt:"PH Neg\xf3cios Plataforma",style:{width:"100px",height:"auto",marginTop:"5%",marginBottom:"3%"}}),(0,i.jsxs)("div",{className:"link",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/",children:"Bases"})}),(0,i.jsx)("li",{className:"center",children:(0,i.jsx)("a",{href:"https://growth-stage-phi.vercel.app/",children:"Graficos"})}),(0,i.jsx)("li",{className:"upward",children:(0,i.jsx)("a",{href:"#",children:"Adicionar"})}),(0,i.jsx)("li",{className:"forward",children:(0,i.jsx)("a",{href:"#",children:"Update"})})]})]}),(0,i.jsx)("div",{className:"filters",children:(0,i.jsxs)("div",{className:"newfunctionalities",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{type:"text",placeholder:"Filtrar por nome",value:f,onChange:n=>h(n.target.value)}),(0,i.jsx)("button",{onClick:()=>{_(n=>{switch(n){case"default":return"alternate";case"alternate":return"compact";case"compact":return"minimalist";default:return"default"}})},className:"btn-slice",children:"Mudar Layout"})]}),(0,i.jsxs)("div",{className:"letter-checkboxes",children:[["S","E","R","G","B","I","C","M"].map(n=>(0,i.jsxs)("label",{className:"letter-checkbox",children:[(0,i.jsx)("input",{type:"checkbox",value:n,checked:j.includes(n),onChange:()=>handleLetterFilterChange(n),className:"checkbox-input"}),(0,i.jsx)("span",{className:"custom-checkbox",children:(0,i.jsx)("span",{className:"checkmark",children:"✓"})}),n]},n)),"            "]})]})})]})}),t&&(0,i.jsx)("p",{children:"Carregando..."}),!t&&(0,i.jsx)("div",{className:"Cardsalign".concat("compact"===N?" compact-layout":"").concat("alternate"===N?" alternate-layout":"").concat("minimalist"===N?" minimalist-layout":""),children:Object.keys(n).map(e=>{if(e.toLowerCase().includes(f.toLowerCase())&&(0===j.length||j.some(n=>e.startsWith(n)))){var t,a;return(0,i.jsxs)("div",{className:"campaign-card".concat(p===n[e]?" clicked":""),onClick:()=>{var t;p===(t=n[e])?b(null):b(t)},children:[(0,i.jsx)("div",{className:"base ".concat(s[n[e]]&&s[n[e]].length>0&&parseFloat(null===(t=s[n[e]][0])||void 0===t?void 0:t.completed_percentage)>=90?"com-aviso":""),children:e}),p===n[e]&&(0,i.jsx)("div",{className:"campaign-percentages",children:null===(a=s[n[e]])||void 0===a?void 0:a.map(n=>(0,i.jsx)(c,{children:(0,i.jsxs)("div",{className:"percentage-item ".concat(parseFloat(n.completed_percentage)>=90?"com-aviso":""),children:[(0,i.jsx)("h3",{children:n.name}),(0,i.jsx)("p",{children:n.created_at}),(0,i.jsx)("h3",{className:"porcentagem-".concat("100.00"===n.completed_percentage?"verde":"vermelha"),children:function(n){let e=parseFloat(n);if(100===e){let n=e.toFixed(0);return(0,i.jsxs)("span",{className:"porcentagem-azul",children:[n,"%"]})}if(e>=90&&e<=100){let n=e.toFixed(0);return(0,i.jsxs)("span",{className:"porcentagem-vermelha",children:[n,"%"]})}{let n=e.toFixed(0);return(0,i.jsxs)("span",{className:"porcentagem-verde",children:[n,"%"]})}}(n.completed_percentage)}),(0,i.jsxs)("p",{children:["\xdaltima atualiza\xe7\xe3o: ",m.toLocaleTimeString()]})]})},n.id))})]},e)}return null})})]})]})})}}},function(n){n.O(0,[381,971,472,744],function(){return n(n.s=6549)}),_N_E=n.O()}]);