"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/stylespage.ts":
/*!***************************!*\
  !*** ./app/stylespage.ts ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardContent: function() { return /* binding */ CardContent; },\n/* harmony export */   Container: function() { return /* binding */ Container; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ \"(app-pages-browser)/./app/theme.ts\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n.principalContent {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  padding-bottom: 30%;\\n  background: \",\n        \";  \\n}\\n\\n.Cardsalign {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n}\\n\\n.campaign-card {\\n  margin: 10px;\\n  padding: 20px;\\n  width: 20%; /* 48% para deixar um espa\\xe7o m\\xednimo entre as duas divs */\\n  margin-bottom: 20px;\\n  gap: 20px;\\n  border-radius: 5px;\\n  transition: transform 0.2s ease-in-out;\\n  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);\\n  background: rgba(255, 255, 255, 0.1); \\n  justify-content: center;\\n  align-items: center;\\n   /*  border-top: 1px solid rgba(255, 255, 255, 0.5);\\n    border-left: 1px solid rgba(255, 255, 255, 0.5); */\\n}\\n\\n/* ... (estilos existentes) */\\n\\n.alternate-layout .campaign-card {\\n  margin: 10px;\\n  padding: 20px;\\n  width: 45%; /* Ajustei o width para 45% para deixar um espa\\xe7o m\\xednimo entre as divs */\\n  margin-bottom: 20px;\\n  gap: 20px;\\n  border-radius: 10px; /* Aumentei o raio da borda para um visual mais arredondado */\\n  transition: transform 0.2s ease-in-out;\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 16px 32px rgba(0, 0, 0, 0.2); /* Atualizei a sombra para um visual mais suave */\\n  background: rgba(255, 255, 255, 0.8); /* Ajustei a opacidade para um fundo mais claro */\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center; /* Centralizei o texto no card */\\n}\\n\\n.compact-layout .campaign-card {\\n  margin: 10px;\\n  padding: 20px;\\n  width: 100%;\\n  margin-bottom: 20px;\\n  gap: 20px;\\n  border-radius: 15px; /* Aumentei o raio da borda para um visual mais arredondado */\\n  transition: transform 0.2s ease-in-out;\\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 32px 64px rgba(0, 0, 0, 0.4); /* Atualizei a sombra para um visual mais suave */\\n  background: rgba(255, 255, 255, 0.5); /* Ajustei a opacidade para um fundo mais claro */\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center; /* Centralizei o texto no card */\\n}\\n\\n/* ... (mais estilos conforme necess\\xe1rio) */\\n\\n.base-container {\\n  font-size: 20px;\\n\tcolor: white;\\n  font-weight: bold;\\n  text-align: center;\\n}\\n\\nh3 { \\n  color: white;\\n  font-weight: bold;\\n  letter-spacing: 2px;\\n}\\n\\np {\\n  color: white;\\n}\\n\\n.campaign-card:hover {\\n  transform: scale(1.05);\\n  cursor: pointer;\\n  box-shadow: 0 0 8px #fd0018, 0 0 35px #fd0018, 0 0 60px #fd0018;\\n}\\n\\n.campaign-card.clicked {\\n  background: rgba(255, 255, 255, 0.1); \\n    justify-content: center;\\n    align-items: center;\\n    border-top: 1px solid rgba(255, 255, 255, 0.5);\\n    border-left: 1px solid rgba(255, 255, 255, 0.5);\\n}\\n\\n/* Estilo dos detalhes de campanha expandidos */\\n.campaign-percentages {\\n  display: none;\\n}\\n\\n.campaign-card.clicked .campaign-percentages {\\n  display: block;\\n  margin-top: 10px;\\n}\\n\\n.percentage-item {\\n  display: flex;\\n  flex-direction: column;\\n  border: 1px solid #ddd;\\n  border-radius: 5px;\\n  padding: 10px;\\n  margin-top: 10px;\\n  justify-content: center;\\n  align-items: center;\\n  overflow: hidden; /* Esconde o conte\\xfado que transborda */\\n  text-overflow: ellipsis; /* Mostra \\\"...\\\" para indicar que o texto foi cortado */\\n  white-space: nowrap; \\n}\\n\\n.title {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center; \\n}\\n\\nh1 {\\n  margin-bottom: 3%;\\n}\\n\\n.percentage-item h3 {\\n  margin: 10px;\\n  font-size: 16px;\\n  margin: 5px 0;\\n}\\n\\n.com-aviso {\\n  border: 2px solid red;\\n  box-shadow: 0 0 1px #fd0018, 0 0 15px #fd0018, 0 0 30px #fd0018;\\n}\\n\\n.com-aviso-item {\\n  border: 2px solid red;\\n}\\n\\n/* Estilos para porcentagens */\\n.porcentagem-vermelha {\\n  color: red;\\n  font-weight: bold;\\n}\\n\\n.porcentagem-verde {\\n  color: green;\\n  font-weight: bold;\\n}\\n\\nporcentagem-azul {\\n  color: blue;\\n  font-weight: bold;\\n}\\n\\nnav {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n}\\n\\n.nav-links{\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  width: 100%;\\n  align-self: center;\\n  align-items: center;\\n  align-content: center;\\n  background: #fff; \\n  padding: 20px 15px;\\n  border-radius: 4px;\\n  box-shadow: 0 5px 10px rgba(0,0,0,0.2);\\n  margin-bottom: 3%;\\n  flex-wrap: wrap;\\n  gap: 10px;\\n}\\n\\n.link {\\n  width: 20%;\\n  justify-content: left;\\n  display: flex;\\n  margin-left: 100px;\\n  flex-direction: row;\\n  margin-bottom: 10px;\\n  letter-spacing: 5px;\\n  gap: 15px;\\n}\\n\\n.nav-links:hover {\\n  box-shadow: 0 0 8px #fd0018, 0 0 35px #fd0018, 0 0 60px #fd0018;\\n}\\n\\n.nav-links li{\\n  display: flex;\\n  flex-direction: row;\\n  list-style: none;\\n  margin: 0 12px;\\n}\\n.nav-links li a{\\n  position: relative;\\n  color: black;\\n  font-size: 25px;\\n  font-family:'open_sansregular';  \\n  font-weight: bold;\\n  padding: 6px 0;\\n  text-decoration: none;\\n}\\n.nav-links li a:before{\\n  content: '';\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n  height: 3px;\\n  width: 0%;\\n  background: red;\\n  border-radius: 12px;\\n  transition: all 0.4s ease;\\n}\\n.nav-links li a:hover:before{\\n  width: 100%;\\n}\\n.nav-links li.center a:before{\\n  left: 50%;\\n  transform: translateX(-50%);\\n}\\n.nav-links li.upward a:before{\\n  width: 100%;\\n  bottom: -5px;\\n  opacity: 0;\\n}\\n.nav-links li.upward a:hover:before{\\n  bottom: 0px;\\n  opacity: 1;\\n}\\n.nav-links li.forward a:before{\\n  width: 100%;\\n  transform: scaleX(0);\\n  transform-origin: right;\\n  transition: transform 0.4s ease;\\n}\\n.nav-links li.forward a:hover:before{\\n  transform: scaleX(1);\\n  transform-origin: left;\\n}\\n\\n.logo {\\n  display: flex;\\n  max-height: 150px;\\n  width: 30%;\\n  margin-left: 100px;\\n  height: auto;\\n  justify-content: left;\\n  align-content: center;\\n  align-items: center;\\n}\\n\\ninput {\\n  color: black;\\n  padding: 15px 25px;\\n}\\n\\n.filters {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.newfunctionalities {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-bottom: 20px;\\n}\\n\\n.newfunctionalities input {\\n  margin-right: 10px;\\n  padding: 10px 10px;\\n  margin-right: 10px;\\n  border: 1px solid #ccc;\\n  border-radius: 5px;\\n  font-size: 14px;\\n  margin-bottom: 20px;\\n  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out; /* Adiciona transi\\xe7\\xe3o para a borda e a sombra */\\n}\\n\\n.newfunctionalities input:focus {\\n  outline: 0;\\n}\\n\\n.newfunctionalities label {\\n  color: black;\\n      margin-right: 1px;\\n      cursor: pointer;\\n      margin-right: 20px;\\n      letter-spacing: 2px;\\n      font-weight: 500;\\n\\n      &:checked {\\n        color: #007bff;\\n      }\\n}\\n\\n.newfunctionalities button {\\n  color: white;\\n\tbackground: red;\\n}\\n\\n.newfunctionalities button:hover\\n{\\n\tcolor: white;\\n\tbackground: red;\\n\ttransition-delay: 1s;\\n}\\n\\n.letter-checkboxes {\\n   display: flex;\\n   flex-direction: row;\\n   transitions: 1.5s;\\n}\\n\\n.checkbox-container {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.checkbox-label {\\n  margin-right: 10px;\\n}\\n\\n.checkbox-input {\\n  display: none;\\n}\\n\\n.custom-checkbox {\\n  width: 20px;\\n  height: 20px;\\n  border: 2px solid #fd0018;\\n  border-radius: 4px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  cursor: pointer;\\n}\\n\\n.checkmark {\\n  width: 12px;\\n  height: 12px;\\n  border-radius: 2px;\\n  background-color: #fd0018; /* Cor do \\\"check\\\" quando marcado */\\n  display: none;\\n}\\n\\n.custom-checkbox.checked .checkmark {\\n  display: block;\\n}\\n\\n.checkbox-input:checked + .custom-checkbox {\\n  background-color: #fd0018; /* Cor de fundo quando marcado */\\n  transition: background-color 0.2s ease-in-out; /* Adiciona transi\\xe7\\xe3o para a cor de fundo */\\n\\n}\\n\\n/*--Button Styles--*/\\n.btn-slice {\\n  padding: 1.0rem 0.4rem;\\n  border: 2px solid #ffffff;\\n  border-radius: 0.5rem;\\n  color: #ffffff;\\n  font-size: 0.6875rem;\\n  font-weight: 700;\\n  letter-spacing: 0.3rem;\\n  position: relative;\\n  \\n  -webkit-transition: all 1000ms cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */\\n  -webkit-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  -moz-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  -o-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */\\n\\n  -webkit-transition-timing-function: cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */\\n  -webkit-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  -moz-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  -o-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */\\n}\\n\\n.btn-slice .top  {\\n  position: relative;\\n  height: 6px;\\n  overflow: hidden;\\n  top: 0;\\n  -webkit-transition: all 300ms cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */\\n  -webkit-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  -moz-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  -o-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */\\n\\n  -webkit-transition-timing-function: cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */\\n  -webkit-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  -moz-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  -o-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */\\n  \\n  -webkit-transition-delay:0.35s;     \\n  -moz-transition-delay::0.35s; \\n  -ms-transition-delay::0.35s;     \\n  -o-transition-delay::0.35s;     \\n  transition-delay::0.35s;\\n}\\n\\n.btn-slice .bottom  {\\n  position: relative;\\n  height: 6px;\\n  overflow: hidden;\\n  bottom: 0;\\n  -webkit-transition: all 300ms cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */\\n  -webkit-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  -moz-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  -o-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */\\n\\n  -webkit-transition-timing-function: cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */\\n  -webkit-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  -moz-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  -o-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */\\n  \\n  -webkit-transition-delay:0.35s;     \\n  -moz-transition-delay::0.35s; \\n  -ms-transition-delay::0.35s;     \\n  -o-transition-delay::0.35s;     \\n  transition-delay::0.35s;\\n}\\n\\n.btn-slice .bottom span {\\n  top: -6px;\\n  position: absolute;\\n  left: 0;\\n}\\n\\n.btn-slice:hover .top {\\n  top: -5px;\\n  -webkit-transition-delay:0.35s;     \\n  -moz-transition-delay::0.35s; \\n  -ms-transition-delay::0.35s;     \\n  -o-transition-delay::0.35s;     \\n  transition-delay::0.35s; \\n}\\n\\n.btn-slice:hover .bottom {\\n  bottom: -5px;\\n  -webkit-transition-delay:0.35s;     \\n  -moz-transition-delay::0.35s; \\n  -ms-transition-delay::0.35s;     \\n  -o-transition-delay::0.35s;     \\n  transition-delay::0.35s; \\n}\\n.btn-slice:hover, .btn-slice:focus, .btn-slice:active {\\n  margin-left: 10px;\\n}\\n.btn-slice:before{\\n  content: '';\\n  height: 1px;\\n  width: 60px;\\n  background-color: black;\\n  position: absolute;\\n  margin-top: 6px;\\n  right: -35px;\\n  \\n  -webkit-transition: all 1000ms cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */\\n  -webkit-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  -moz-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  -o-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */\\n\\n  -webkit-transition-timing-function: cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */\\n  -webkit-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  -moz-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  -o-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */\\n}\\n.btn-slice:hover:before{\\n  width: 130%;\\n}\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\nconst CardContent = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1(), _theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colors.background);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zdHlsZXNwYWdlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDWDtBQUdyQixNQUFNRSxZQUFZRix5REFBTUEsQ0FBQ0csR0FBRyxvQkFFakM7QUFFSyxNQUFNQyxjQUFjSix5REFBTUEsQ0FBQ0csR0FBRyxxQkFPckJGLDhDQUFLQSxDQUFDSSxNQUFNLENBQUNDLFVBQVUsRUF1ZXRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zdHlsZXNwYWdlLnRzPzQwNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi90aGVtZSc7XG5cblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5cbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJkQ29udGVudCA9IHN0eWxlZC5kaXZgXG4ucHJpbmNpcGFsQ29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzAlO1xuICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTsgIFxufVxuXG4uQ2FyZHNhbGlnbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYW1wYWlnbi1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMjAlOyAvKiA0OCUgcGFyYSBkZWl4YXIgdW0gZXNwYcOnbyBtw61uaW1vIGVudHJlIGFzIGR1YXMgZGl2cyAqL1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBnYXA6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJveC1zaGFkb3c6IDIwcHggMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyBcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAvKiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgKi9cbn1cblxuLyogLi4uIChlc3RpbG9zIGV4aXN0ZW50ZXMpICovXG5cbi5hbHRlcm5hdGUtbGF5b3V0IC5jYW1wYWlnbi1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogNDUlOyAvKiBBanVzdGVpIG8gd2lkdGggcGFyYSA0NSUgcGFyYSBkZWl4YXIgdW0gZXNwYcOnbyBtw61uaW1vIGVudHJlIGFzIGRpdnMgKi9cbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZ2FwOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4OyAvKiBBdW1lbnRlaSBvIHJhaW8gZGEgYm9yZGEgcGFyYSB1bSB2aXN1YWwgbWFpcyBhcnJlZG9uZGFkbyAqL1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxNnB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvKiBBdHVhbGl6ZWkgYSBzb21icmEgcGFyYSB1bSB2aXN1YWwgbWFpcyBzdWF2ZSAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IC8qIEFqdXN0ZWkgYSBvcGFjaWRhZGUgcGFyYSB1bSBmdW5kbyBtYWlzIGNsYXJvICovXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRyYWxpemVpIG8gdGV4dG8gbm8gY2FyZCAqL1xufVxuXG4uY29tcGFjdC1sYXlvdXQgLmNhbXBhaWduLWNhcmQge1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBnYXA6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7IC8qIEF1bWVudGVpIG8gcmFpbyBkYSBib3JkYSBwYXJhIHVtIHZpc3VhbCBtYWlzIGFycmVkb25kYWRvICovXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAzMnB4IDY0cHggcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBBdHVhbGl6ZWkgYSBzb21icmEgcGFyYSB1bSB2aXN1YWwgbWFpcyBzdWF2ZSAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IC8qIEFqdXN0ZWkgYSBvcGFjaWRhZGUgcGFyYSB1bSBmdW5kbyBtYWlzIGNsYXJvICovXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRyYWxpemVpIG8gdGV4dG8gbm8gY2FyZCAqL1xufVxuXG4vKiAuLi4gKG1haXMgZXN0aWxvcyBjb25mb3JtZSBuZWNlc3PDoXJpbykgKi9cblxuLmJhc2UtY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuXHRjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgzIHsgXG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbnAge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYW1wYWlnbi1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDAgOHB4ICNmZDAwMTgsIDAgMCAzNXB4ICNmZDAwMTgsIDAgMCA2MHB4ICNmZDAwMTg7XG59XG5cbi5jYW1wYWlnbi1jYXJkLmNsaWNrZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLyogRXN0aWxvIGRvcyBkZXRhbGhlcyBkZSBjYW1wYW5oYSBleHBhbmRpZG9zICovXG4uY2FtcGFpZ24tcGVyY2VudGFnZXMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2FtcGFpZ24tY2FyZC5jbGlja2VkIC5jYW1wYWlnbi1wZXJjZW50YWdlcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucGVyY2VudGFnZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogRXNjb25kZSBvIGNvbnRlw7pkbyBxdWUgdHJhbnNib3JkYSAqL1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgLyogTW9zdHJhIFwiLi4uXCIgcGFyYSBpbmRpY2FyIHF1ZSBvIHRleHRvIGZvaSBjb3J0YWRvICovXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxufVxuXG4udGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG59XG5cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi5wZXJjZW50YWdlLWl0ZW0gaDMge1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmNvbS1hdmlzbyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjZmQwMDE4LCAwIDAgMTVweCAjZmQwMDE4LCAwIDAgMzBweCAjZmQwMDE4O1xufVxuXG4uY29tLWF2aXNvLWl0ZW0ge1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG59XG5cbi8qIEVzdGlsb3MgcGFyYSBwb3JjZW50YWdlbnMgKi9cbi5wb3JjZW50YWdlbS12ZXJtZWxoYSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucG9yY2VudGFnZW0tdmVyZGUge1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5wb3JjZW50YWdlbS1henVsIHtcbiAgY29sb3I6IGJsdWU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtbGlua3N7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmOyBcbiAgcGFkZGluZzogMjBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLDAsMCwwLjIpO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEwcHg7XG59XG5cbi5saW5rIHtcbiAgd2lkdGg6IDIwJTtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIGdhcDogMTVweDtcbn1cblxuLm5hdi1saW5rczpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggI2ZkMDAxOCwgMCAwIDM1cHggI2ZkMDAxOCwgMCAwIDYwcHggI2ZkMDAxODtcbn1cblxuLm5hdi1saW5rcyBsaXtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwIDEycHg7XG59XG4ubmF2LWxpbmtzIGxpIGF7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OidvcGVuX3NhbnNyZWd1bGFyJzsgIFxuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogNnB4IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5uYXYtbGlua3MgbGkgYTpiZWZvcmV7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiAwJTtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xufVxuLm5hdi1saW5rcyBsaSBhOmhvdmVyOmJlZm9yZXtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmF2LWxpbmtzIGxpLmNlbnRlciBhOmJlZm9yZXtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4ubmF2LWxpbmtzIGxpLnVwd2FyZCBhOmJlZm9yZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogLTVweDtcbiAgb3BhY2l0eTogMDtcbn1cbi5uYXYtbGlua3MgbGkudXB3YXJkIGE6aG92ZXI6YmVmb3Jle1xuICBib3R0b206IDBweDtcbiAgb3BhY2l0eTogMTtcbn1cbi5uYXYtbGlua3MgbGkuZm9yd2FyZCBhOmJlZm9yZXtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcbn1cbi5uYXYtbGlua3MgbGkuZm9yd2FyZCBhOmhvdmVyOmJlZm9yZXtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW5wdXQge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbn1cblxuLmZpbHRlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubmV3ZnVuY3Rpb25hbGl0aWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm5ld2Z1bmN0aW9uYWxpdGllcyBpbnB1dCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjJzIGVhc2UtaW4tb3V0OyAvKiBBZGljaW9uYSB0cmFuc2nDp8OjbyBwYXJhIGEgYm9yZGEgZSBhIHNvbWJyYSAqL1xufVxuXG4ubmV3ZnVuY3Rpb25hbGl0aWVzIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLm5ld2Z1bmN0aW9uYWxpdGllcyBsYWJlbCB7XG4gIGNvbG9yOiBibGFjaztcbiAgICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgICY6Y2hlY2tlZCB7XG4gICAgICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgICAgfVxufVxuXG4ubmV3ZnVuY3Rpb25hbGl0aWVzIGJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcblx0YmFja2dyb3VuZDogcmVkO1xufVxuXG4ubmV3ZnVuY3Rpb25hbGl0aWVzIGJ1dHRvbjpob3Zlclxue1xuXHRjb2xvcjogd2hpdGU7XG5cdGJhY2tncm91bmQ6IHJlZDtcblx0dHJhbnNpdGlvbi1kZWxheTogMXM7XG59XG5cbi5sZXR0ZXItY2hlY2tib3hlcyB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgIHRyYW5zaXRpb25zOiAxLjVzO1xufVxuXG4uY2hlY2tib3gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNoZWNrYm94LWxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2hlY2tib3gtaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3VzdG9tLWNoZWNrYm94IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZkMDAxODtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hlY2ttYXJrIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQwMDE4OyAvKiBDb3IgZG8gXCJjaGVja1wiIHF1YW5kbyBtYXJjYWRvICovXG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jdXN0b20tY2hlY2tib3guY2hlY2tlZCAuY2hlY2ttYXJrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jaGVja2JveC1pbnB1dDpjaGVja2VkICsgLmN1c3RvbS1jaGVja2JveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDAwMTg7IC8qIENvciBkZSBmdW5kbyBxdWFuZG8gbWFyY2FkbyAqL1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7IC8qIEFkaWNpb25hIHRyYW5zacOnw6NvIHBhcmEgYSBjb3IgZGUgZnVuZG8gKi9cblxufVxuXG4vKi0tQnV0dG9uIFN0eWxlcy0tKi9cbi5idG4tc2xpY2Uge1xuICBwYWRkaW5nOiAxLjByZW0gMC40cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTAwMG1zIGN1YmljLWJlemllcigwLjg5MCwgMCwgMC4xNDAsIDEpOyAvKiBvbGRlciB3ZWJraXQgKi9cbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTAwMG1zIGN1YmljLWJlemllcigwLjg5MCwgLTAuMTcwLCAwLjE0MCwgMS4yMjUpOyBcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMTAwMG1zIGN1YmljLWJlemllcigwLjg5MCwgLTAuMTcwLCAwLjE0MCwgMS4yMjUpOyBcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDEwMDBtcyBjdWJpYy1iZXppZXIoMC44OTAsIC0wLjE3MCwgMC4xNDAsIDEuMjI1KTsgXG4gIHRyYW5zaXRpb246IGFsbCAxMDAwbXMgY3ViaWMtYmV6aWVyKDAuODkwLCAtMC4xNzAsIDAuMTQwLCAxLjIyNSk7IC8qIGN1c3RvbSAqL1xuXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjg5MCwgMCwgMC4xNDAsIDEpOyAvKiBvbGRlciB3ZWJraXQgKi9cbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuODkwLCAtMC4xNzAsIDAuMTQwLCAxLjIyNSk7IFxuICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44OTAsIC0wLjE3MCwgMC4xNDAsIDEuMjI1KTsgXG4gIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44OTAsIC0wLjE3MCwgMC4xNDAsIDEuMjI1KTsgXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44OTAsIC0wLjE3MCwgMC4xNDAsIDEuMjI1KTsgLyogY3VzdG9tICovXG59XG5cbi5idG4tc2xpY2UgLnRvcCAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3A6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigxLjAwMCwgMCwgMC4wMjUsIDEpOyAvKiBvbGRlciB3ZWJraXQgKi9cbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4wNTUsIDAuMDI1LCAxLjA0MCk7IFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjA1NSwgMC4wMjUsIDEuMDQwKTsgXG4gIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjA1NSwgMC4wMjUsIDEuMDQwKTsgXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjA1NSwgMC4wMjUsIDEuMDQwKTsgLyogY3VzdG9tICovXG5cbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAwLCAwLjAyNSwgMSk7IC8qIG9sZGVyIHdlYmtpdCAqL1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjA1NSwgMC4wMjUsIDEuMDQwKTsgXG4gIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMDU1LCAwLjAyNSwgMS4wNDApOyBcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMDU1LCAwLjAyNSwgMS4wNDApOyBcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMDU1LCAwLjAyNSwgMS4wNDApOyAvKiBjdXN0b20gKi9cbiAgXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTowLjM1czsgICAgIFxuICAtbW96LXRyYW5zaXRpb24tZGVsYXk6OjAuMzVzOyBcbiAgLW1zLXRyYW5zaXRpb24tZGVsYXk6OjAuMzVzOyAgICAgXG4gIC1vLXRyYW5zaXRpb24tZGVsYXk6OjAuMzVzOyAgICAgXG4gIHRyYW5zaXRpb24tZGVsYXk6OjAuMzVzO1xufVxuXG4uYnRuLXNsaWNlIC5ib3R0b20gIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm90dG9tOiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIDAsIDAuMDI1LCAxKTsgLyogb2xkZXIgd2Via2l0ICovXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMDU1LCAwLjAyNSwgMS4wNDApOyBcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4wNTUsIDAuMDI1LCAxLjA0MCk7IFxuICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4wNTUsIDAuMDI1LCAxLjA0MCk7IFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4wNTUsIDAuMDI1LCAxLjA0MCk7IC8qIGN1c3RvbSAqL1xuXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgMCwgMC4wMjUsIDEpOyAvKiBvbGRlciB3ZWJraXQgKi9cbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4wNTUsIDAuMDI1LCAxLjA0MCk7IFxuICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjA1NSwgMC4wMjUsIDEuMDQwKTsgXG4gIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjA1NSwgMC4wMjUsIDEuMDQwKTsgXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjA1NSwgMC4wMjUsIDEuMDQwKTsgLyogY3VzdG9tICovXG4gIFxuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6MC4zNXM7ICAgICBcbiAgLW1vei10cmFuc2l0aW9uLWRlbGF5OjowLjM1czsgXG4gIC1tcy10cmFuc2l0aW9uLWRlbGF5OjowLjM1czsgICAgIFxuICAtby10cmFuc2l0aW9uLWRlbGF5OjowLjM1czsgICAgIFxuICB0cmFuc2l0aW9uLWRlbGF5OjowLjM1cztcbn1cblxuLmJ0bi1zbGljZSAuYm90dG9tIHNwYW4ge1xuICB0b3A6IC02cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbn1cblxuLmJ0bi1zbGljZTpob3ZlciAudG9wIHtcbiAgdG9wOiAtNXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6MC4zNXM7ICAgICBcbiAgLW1vei10cmFuc2l0aW9uLWRlbGF5OjowLjM1czsgXG4gIC1tcy10cmFuc2l0aW9uLWRlbGF5OjowLjM1czsgICAgIFxuICAtby10cmFuc2l0aW9uLWRlbGF5OjowLjM1czsgICAgIFxuICB0cmFuc2l0aW9uLWRlbGF5OjowLjM1czsgXG59XG5cbi5idG4tc2xpY2U6aG92ZXIgLmJvdHRvbSB7XG4gIGJvdHRvbTogLTVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OjAuMzVzOyAgICAgXG4gIC1tb3otdHJhbnNpdGlvbi1kZWxheTo6MC4zNXM7IFxuICAtbXMtdHJhbnNpdGlvbi1kZWxheTo6MC4zNXM7ICAgICBcbiAgLW8tdHJhbnNpdGlvbi1kZWxheTo6MC4zNXM7ICAgICBcbiAgdHJhbnNpdGlvbi1kZWxheTo6MC4zNXM7IFxufVxuLmJ0bi1zbGljZTpob3ZlciwgLmJ0bi1zbGljZTpmb2N1cywgLmJ0bi1zbGljZTphY3RpdmUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5idG4tc2xpY2U6YmVmb3Jle1xuICBjb250ZW50OiAnJztcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIHJpZ2h0OiAtMzVweDtcbiAgXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEwMDBtcyBjdWJpYy1iZXppZXIoMC44OTAsIDAsIDAuMTQwLCAxKTsgLyogb2xkZXIgd2Via2l0ICovXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEwMDBtcyBjdWJpYy1iZXppZXIoMC44OTAsIC0wLjE3MCwgMC4xNDAsIDEuMjI1KTsgXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDEwMDBtcyBjdWJpYy1iZXppZXIoMC44OTAsIC0wLjE3MCwgMC4xNDAsIDEuMjI1KTsgXG4gIC1vLXRyYW5zaXRpb246IGFsbCAxMDAwbXMgY3ViaWMtYmV6aWVyKDAuODkwLCAtMC4xNzAsIDAuMTQwLCAxLjIyNSk7IFxuICB0cmFuc2l0aW9uOiBhbGwgMTAwMG1zIGN1YmljLWJlemllcigwLjg5MCwgLTAuMTcwLCAwLjE0MCwgMS4yMjUpOyAvKiBjdXN0b20gKi9cblxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44OTAsIDAsIDAuMTQwLCAxKTsgLyogb2xkZXIgd2Via2l0ICovXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjg5MCwgLTAuMTcwLCAwLjE0MCwgMS4yMjUpOyBcbiAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuODkwLCAtMC4xNzAsIDAuMTQwLCAxLjIyNSk7IFxuICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuODkwLCAtMC4xNzAsIDAuMTQwLCAxLjIyNSk7IFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuODkwLCAtMC4xNzAsIDAuMTQwLCAxLjIyNSk7IC8qIGN1c3RvbSAqL1xufVxuLmJ0bi1zbGljZTpob3ZlcjpiZWZvcmV7XG4gIHdpZHRoOiAxMzAlO1xufVxuYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJ0aGVtZSIsIkNvbnRhaW5lciIsImRpdiIsIkNhcmRDb250ZW50IiwiY29sb3JzIiwiYmFja2dyb3VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/stylespage.ts\n"));

/***/ })

});