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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardContent: function() { return /* binding */ CardContent; },\n/* harmony export */   Container: function() { return /* binding */ Container; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ \"(app-pages-browser)/./app/theme.ts\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n.principalContent {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  padding-bottom: 30%;\\n  background: \",\n        \";  \\n}\\n\\n.Cardsalign {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n}\\n\\n.campaign-card {\\n  margin: 10px;\\n  padding: 20px;\\n  width: 20%; /* 48% para deixar um espa\\xe7o m\\xednimo entre as duas divs */\\n  margin-bottom: 20px;\\n  gap: 20px;\\n  border-radius: 5px;\\n  transition: transform 0.2s ease-in-out;\\n  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);\\n  background: rgba(255, 255, 255, 0.1); \\n  justify-content: center;\\n  align-items: center;\\n   /*  border-top: 1px solid rgba(255, 255, 255, 0.5);\\n    border-left: 1px solid rgba(255, 255, 255, 0.5); */\\n}\\n\\n.alternate-layout .campaign-card {\\n  margin: 10px;\\n  padding: 20px;\\n  width: 10%; /* 48% para deixar um espa\\xe7o m\\xednimo entre as duas divs */\\n  margin-bottom: 20px;\\n  gap: 20px;\\n  border-radius: 5px;\\n  transition: transform 0.2s ease-in-out;\\n  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);\\n  background: rgba(255, 255, 255, 0.1); \\n  justify-content: center;\\n  align-items: center;\\n   /*  border-top: 1px solid rgba(255, 255, 255, 0.5);\\n    border-left: 1px solid rgba(255, 255, 255, 0.5); */\\n}\\n\\n.compact-layout .campaign-card {\\n  margin: 10px;\\n  padding: 20px;\\n  width: 50%; /* 48% para deixar um espa\\xe7o m\\xednimo entre as duas divs */\\n  margin-bottom: 20px;\\n  gap: 20px;\\n  border-radius: 5px;\\n  transition: transform 0.2s ease-in-out;\\n  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);\\n  background: rgba(255, 255, 255, 0.1); \\n  justify-content: center;\\n  align-items: center;\\n   /*  border-top: 1px solid rgba(255, 255, 255, 0.5);\\n    border-left: 1px solid rgba(255, 255, 255, 0.5); */\\n}\\n\\n.base-container {\\n  font-size: 20px;\\n\tcolor: white;\\n  font-weight: bold;\\n  text-align: center;\\n}\\n\\nh3 { \\n  color: white;\\n  font-weight: bold;\\n  letter-spacing: 2px;\\n}\\n\\np {\\n  color: white;\\n}\\n\\n.campaign-card:hover {\\n  transform: scale(1.05);\\n  cursor: pointer;\\n  box-shadow: 0 0 8px #fd0018, 0 0 35px #fd0018, 0 0 60px #fd0018;\\n}\\n\\n.campaign-card.clicked {\\n  background: rgba(255, 255, 255, 0.1); \\n    justify-content: center;\\n    align-items: center;\\n    border-top: 1px solid rgba(255, 255, 255, 0.5);\\n    border-left: 1px solid rgba(255, 255, 255, 0.5);\\n}\\n\\n/* Estilo dos detalhes de campanha expandidos */\\n.campaign-percentages {\\n  display: none;\\n}\\n\\n.campaign-card.clicked .campaign-percentages {\\n  display: block;\\n  margin-top: 10px;\\n}\\n\\n.percentage-item {\\n  display: flex;\\n  flex-direction: column;\\n  border: 1px solid #ddd;\\n  border-radius: 5px;\\n  padding: 10px;\\n  margin-top: 10px;\\n  justify-content: center;\\n  align-items: center;\\n  overflow: hidden; /* Esconde o conte\\xfado que transborda */\\n  text-overflow: ellipsis; /* Mostra \\\"...\\\" para indicar que o texto foi cortado */\\n  white-space: nowrap; \\n}\\n\\n.title {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center; \\n}\\n\\nh1 {\\n  margin-bottom: 3%;\\n}\\n\\n.percentage-item h3 {\\n  margin: 10px;\\n  font-size: 16px;\\n  margin: 5px 0;\\n}\\n\\n.com-aviso {\\n  border: 2px solid red;\\n  box-shadow: 0 0 1px #fd0018, 0 0 15px #fd0018, 0 0 30px #fd0018;\\n}\\n\\n.com-aviso-item {\\n  border: 2px solid red;\\n}\\n\\n/* Estilos para porcentagens */\\n.porcentagem-vermelha {\\n  color: red;\\n  font-weight: bold;\\n}\\n\\n.porcentagem-verde {\\n  color: green;\\n  font-weight: bold;\\n}\\n\\nporcentagem-azul {\\n  color: blue;\\n  font-weight: bold;\\n}\\n\\nnav {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n}\\n\\n.nav-links{\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  width: 100%;\\n  align-self: center;\\n  align-items: center;\\n  align-content: center;\\n  background: #fff; \\n  padding: 20px 15px;\\n  border-radius: 4px;\\n  box-shadow: 0 5px 10px rgba(0,0,0,0.2);\\n  margin-bottom: 3%;\\n  flex-wrap: wrap;\\n  gap: 10px;\\n}\\n\\n.link {\\n  width: 20%;\\n  justify-content: left;\\n  display: flex;\\n  margin-left: 100px;\\n  flex-direction: row;\\n  margin-bottom: 10px;\\n  letter-spacing: 5px;\\n  gap: 15px;\\n}\\n\\n.nav-links:hover {\\n  box-shadow: 0 0 8px #fd0018, 0 0 35px #fd0018, 0 0 60px #fd0018;\\n}\\n\\n.nav-links li{\\n  display: flex;\\n  flex-direction: row;\\n  list-style: none;\\n  margin: 0 12px;\\n}\\n.nav-links li a{\\n  position: relative;\\n  color: black;\\n  font-size: 25px;\\n  font-family:'open_sansregular';  \\n  font-weight: bold;\\n  padding: 6px 0;\\n  text-decoration: none;\\n}\\n.nav-links li a:before{\\n  content: '';\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n  height: 3px;\\n  width: 0%;\\n  background: red;\\n  border-radius: 12px;\\n  transition: all 0.4s ease;\\n}\\n.nav-links li a:hover:before{\\n  width: 100%;\\n}\\n.nav-links li.center a:before{\\n  left: 50%;\\n  transform: translateX(-50%);\\n}\\n.nav-links li.upward a:before{\\n  width: 100%;\\n  bottom: -5px;\\n  opacity: 0;\\n}\\n.nav-links li.upward a:hover:before{\\n  bottom: 0px;\\n  opacity: 1;\\n}\\n.nav-links li.forward a:before{\\n  width: 100%;\\n  transform: scaleX(0);\\n  transform-origin: right;\\n  transition: transform 0.4s ease;\\n}\\n.nav-links li.forward a:hover:before{\\n  transform: scaleX(1);\\n  transform-origin: left;\\n}\\n\\n.logo {\\n  display: flex;\\n  max-height: 150px;\\n  width: 30%;\\n  margin-left: 100px;\\n  height: auto;\\n  justify-content: left;\\n  align-content: center;\\n  align-items: center;\\n}\\n\\ninput {\\n  color: black;\\n  padding: 15px 25px;\\n}\\n\\n.filters {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.newfunctionalities {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-bottom: 20px;\\n}\\n\\n.newfunctionalities input {\\n  margin-right: 10px;\\n  padding: 10px 10px;\\n  margin-right: 10px;\\n  border: 1px solid #ccc;\\n  border-radius: 5px;\\n  font-size: 14px;\\n  margin-bottom: 20px;\\n  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out; /* Adiciona transi\\xe7\\xe3o para a borda e a sombra */\\n}\\n\\n.newfunctionalities input:focus {\\n  outline: 0;\\n}\\n\\n.newfunctionalities label {\\n  color: black;\\n      margin-right: 1px;\\n      cursor: pointer;\\n      margin-right: 20px;\\n      letter-spacing: 2px;\\n      font-weight: 500;\\n\\n      &:checked {\\n        color: #007bff;\\n      }\\n}\\n\\n.newfunctionalities button {\\n  color: white;\\n\tbackground: red;\\n}\\n\\n.newfunctionalities button:hover\\n{\\n\tcolor: white;\\n\tbackground: red;\\n\ttransition-delay: 1s;\\n}\\n\\n.letter-checkboxes {\\n   display: flex;\\n   flex-direction: row;\\n   transitions: 1.5s;\\n}\\n\\n.checkbox-container {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.checkbox-label {\\n  margin-right: 10px;\\n}\\n\\n.checkbox-input {\\n  display: none;\\n}\\n\\n.custom-checkbox {\\n  width: 20px;\\n  height: 20px;\\n  border: 2px solid #fd0018;\\n  border-radius: 4px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  cursor: pointer;\\n}\\n\\n.checkmark {\\n  width: 12px;\\n  height: 12px;\\n  border-radius: 2px;\\n  background-color: #fd0018; /* Cor do \\\"check\\\" quando marcado */\\n  display: none;\\n}\\n\\n.custom-checkbox.checked .checkmark {\\n  display: block;\\n}\\n\\n.checkbox-input:checked + .custom-checkbox {\\n  background-color: #fd0018; /* Cor de fundo quando marcado */\\n  transition: background-color 0.2s ease-in-out; /* Adiciona transi\\xe7\\xe3o para a cor de fundo */\\n\\n}\\n\\n/*--Button Styles--*/\\n.btn-slice {\\n  padding: 1.0rem 0.4rem;\\n  border: 2px solid #ffffff;\\n  border-radius: 0.5rem;\\n  color: #ffffff;\\n  font-size: 0.6875rem;\\n  font-weight: 700;\\n  letter-spacing: 0.3rem;\\n  position: relative;\\n  \\n  -webkit-transition: all 1000ms cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */\\n  -webkit-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  -moz-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  -o-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */\\n\\n  -webkit-transition-timing-function: cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */\\n  -webkit-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  -moz-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  -o-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */\\n}\\n\\n.btn-slice .top  {\\n  position: relative;\\n  height: 6px;\\n  overflow: hidden;\\n  top: 0;\\n  -webkit-transition: all 300ms cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */\\n  -webkit-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  -moz-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  -o-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */\\n\\n  -webkit-transition-timing-function: cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */\\n  -webkit-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  -moz-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  -o-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */\\n  \\n  -webkit-transition-delay:0.35s;     \\n  -moz-transition-delay::0.35s; \\n  -ms-transition-delay::0.35s;     \\n  -o-transition-delay::0.35s;     \\n  transition-delay::0.35s;\\n}\\n\\n.btn-slice .bottom  {\\n  position: relative;\\n  height: 6px;\\n  overflow: hidden;\\n  bottom: 0;\\n  -webkit-transition: all 300ms cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */\\n  -webkit-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  -moz-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  -o-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */\\n\\n  -webkit-transition-timing-function: cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */\\n  -webkit-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  -moz-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  -o-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); \\n  transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */\\n  \\n  -webkit-transition-delay:0.35s;     \\n  -moz-transition-delay::0.35s; \\n  -ms-transition-delay::0.35s;     \\n  -o-transition-delay::0.35s;     \\n  transition-delay::0.35s;\\n}\\n\\n.btn-slice .bottom span {\\n  top: -6px;\\n  position: absolute;\\n  left: 0;\\n}\\n\\n.btn-slice:hover .top {\\n  top: -5px;\\n  -webkit-transition-delay:0.35s;     \\n  -moz-transition-delay::0.35s; \\n  -ms-transition-delay::0.35s;     \\n  -o-transition-delay::0.35s;     \\n  transition-delay::0.35s; \\n}\\n\\n.btn-slice:hover .bottom {\\n  bottom: -5px;\\n  -webkit-transition-delay:0.35s;     \\n  -moz-transition-delay::0.35s; \\n  -ms-transition-delay::0.35s;     \\n  -o-transition-delay::0.35s;     \\n  transition-delay::0.35s; \\n}\\n.btn-slice:hover, .btn-slice:focus, .btn-slice:active {\\n  margin-left: 10px;\\n}\\n.btn-slice:before{\\n  content: '';\\n  height: 1px;\\n  width: 60px;\\n  background-color: black;\\n  position: absolute;\\n  margin-top: 6px;\\n  right: -35px;\\n  \\n  -webkit-transition: all 1000ms cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */\\n  -webkit-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  -moz-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  -o-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */\\n\\n  -webkit-transition-timing-function: cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */\\n  -webkit-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  -moz-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  -o-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); \\n  transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */\\n}\\n.btn-slice:hover:before{\\n  width: 130%;\\n}\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\nconst CardContent = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1(), _theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colors.background);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zdHlsZXNwYWdlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDWDtBQUdyQixNQUFNRSxZQUFZRix5REFBTUEsQ0FBQ0csR0FBRyxvQkFFakM7QUFFSyxNQUFNQyxjQUFjSix5REFBTUEsQ0FBQ0csR0FBRyxxQkFPckJGLDhDQUFLQSxDQUFDSSxNQUFNLENBQUNDLFVBQVUsRUFxZXRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zdHlsZXNwYWdlLnRzPzQwNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi90aGVtZSc7XG5cblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5cbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJkQ29udGVudCA9IHN0eWxlZC5kaXZgXG4ucHJpbmNpcGFsQ29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzAlO1xuICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTsgIFxufVxuXG4uQ2FyZHNhbGlnbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYW1wYWlnbi1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMjAlOyAvKiA0OCUgcGFyYSBkZWl4YXIgdW0gZXNwYcOnbyBtw61uaW1vIGVudHJlIGFzIGR1YXMgZGl2cyAqL1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBnYXA6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJveC1zaGFkb3c6IDIwcHggMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyBcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAvKiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgKi9cbn1cblxuLmFsdGVybmF0ZS1sYXlvdXQgLmNhbXBhaWduLWNhcmQge1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAxMCU7IC8qIDQ4JSBwYXJhIGRlaXhhciB1bSBlc3Bhw6dvIG3DrW5pbW8gZW50cmUgYXMgZHVhcyBkaXZzICovXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGdhcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbiAgYm94LXNoYWRvdzogMjBweCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIC8qICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyAqL1xufVxuXG4uY29tcGFjdC1sYXlvdXQgLmNhbXBhaWduLWNhcmQge1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiA1MCU7IC8qIDQ4JSBwYXJhIGRlaXhhciB1bSBlc3Bhw6dvIG3DrW5pbW8gZW50cmUgYXMgZHVhcyBkaXZzICovXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGdhcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbiAgYm94LXNoYWRvdzogMjBweCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIC8qICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyAqL1xufVxuXG4uYmFzZS1jb250YWluZXIge1xuICBmb250LXNpemU6IDIwcHg7XG5cdGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDMgeyBcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhbXBhaWduLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggI2ZkMDAxOCwgMCAwIDM1cHggI2ZkMDAxOCwgMCAwIDYwcHggI2ZkMDAxODtcbn1cblxuLmNhbXBhaWduLWNhcmQuY2xpY2tlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4vKiBFc3RpbG8gZG9zIGRldGFsaGVzIGRlIGNhbXBhbmhhIGV4cGFuZGlkb3MgKi9cbi5jYW1wYWlnbi1wZXJjZW50YWdlcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jYW1wYWlnbi1jYXJkLmNsaWNrZWQgLmNhbXBhaWduLXBlcmNlbnRhZ2VzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5wZXJjZW50YWdlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuOyAvKiBFc2NvbmRlIG8gY29udGXDumRvIHF1ZSB0cmFuc2JvcmRhICovXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAvKiBNb3N0cmEgXCIuLi5cIiBwYXJhIGluZGljYXIgcXVlIG8gdGV4dG8gZm9pIGNvcnRhZG8gKi9cbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXG59XG5cbi50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbn1cblxuaDEge1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxuLnBlcmNlbnRhZ2UtaXRlbSBoMyB7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4uY29tLWF2aXNvIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICNmZDAwMTgsIDAgMCAxNXB4ICNmZDAwMTgsIDAgMCAzMHB4ICNmZDAwMTg7XG59XG5cbi5jb20tYXZpc28taXRlbSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbn1cblxuLyogRXN0aWxvcyBwYXJhIHBvcmNlbnRhZ2VucyAqL1xuLnBvcmNlbnRhZ2VtLXZlcm1lbGhhIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wb3JjZW50YWdlbS12ZXJkZSB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnBvcmNlbnRhZ2VtLWF6dWwge1xuICBjb2xvcjogYmx1ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdi1saW5rc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7IFxuICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsMCwwLDAuMik7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbn1cblxuLmxpbmsge1xuICB3aWR0aDogMjAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgZ2FwOiAxNXB4O1xufVxuXG4ubmF2LWxpbmtzOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAjZmQwMDE4LCAwIDAgMzVweCAjZmQwMDE4LCAwIDAgNjBweCAjZmQwMDE4O1xufVxuXG4ubmF2LWxpbmtzIGxpe1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDAgMTJweDtcbn1cbi5uYXYtbGlua3MgbGkgYXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC1mYW1pbHk6J29wZW5fc2Fuc3JlZ3VsYXInOyAgXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA2cHggMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm5hdi1saW5rcyBsaSBhOmJlZm9yZXtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDAlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG59XG4ubmF2LWxpbmtzIGxpIGE6aG92ZXI6YmVmb3Jle1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYXYtbGlua3MgbGkuY2VudGVyIGE6YmVmb3Jle1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi5uYXYtbGlua3MgbGkudXB3YXJkIGE6YmVmb3Jle1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAtNXB4O1xuICBvcGFjaXR5OiAwO1xufVxuLm5hdi1saW5rcyBsaS51cHdhcmQgYTpob3ZlcjpiZWZvcmV7XG4gIGJvdHRvbTogMHB4O1xuICBvcGFjaXR5OiAxO1xufVxuLm5hdi1saW5rcyBsaS5mb3J3YXJkIGE6YmVmb3Jle1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xufVxuLm5hdi1saW5rcyBsaS5mb3J3YXJkIGE6aG92ZXI6YmVmb3Jle1xuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pbnB1dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTVweCAyNXB4O1xufVxuXG4uZmlsdGVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uZXdmdW5jdGlvbmFsaXRpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubmV3ZnVuY3Rpb25hbGl0aWVzIGlucHV0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMnMgZWFzZS1pbi1vdXQ7IC8qIEFkaWNpb25hIHRyYW5zacOnw6NvIHBhcmEgYSBib3JkYSBlIGEgc29tYnJhICovXG59XG5cbi5uZXdmdW5jdGlvbmFsaXRpZXMgaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4ubmV3ZnVuY3Rpb25hbGl0aWVzIGxhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgJjpjaGVja2VkIHtcbiAgICAgICAgY29sb3I6ICMwMDdiZmY7XG4gICAgICB9XG59XG5cbi5uZXdmdW5jdGlvbmFsaXRpZXMgYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5uZXdmdW5jdGlvbmFsaXRpZXMgYnV0dG9uOmhvdmVyXG57XG5cdGNvbG9yOiB3aGl0ZTtcblx0YmFja2dyb3VuZDogcmVkO1xuXHR0cmFuc2l0aW9uLWRlbGF5OiAxcztcbn1cblxuLmxldHRlci1jaGVja2JveGVzIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgdHJhbnNpdGlvbnM6IDEuNXM7XG59XG5cbi5jaGVja2JveC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2hlY2tib3gtbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jaGVja2JveC1pbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jdXN0b20tY2hlY2tib3gge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmQwMDE4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGVja21hcmsge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDAwMTg7IC8qIENvciBkbyBcImNoZWNrXCIgcXVhbmRvIG1hcmNhZG8gKi9cbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmN1c3RvbS1jaGVja2JveC5jaGVja2VkIC5jaGVja21hcmsge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNoZWNrYm94LWlucHV0OmNoZWNrZWQgKyAuY3VzdG9tLWNoZWNrYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkMDAxODsgLyogQ29yIGRlIGZ1bmRvIHF1YW5kbyBtYXJjYWRvICovXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDsgLyogQWRpY2lvbmEgdHJhbnNpw6fDo28gcGFyYSBhIGNvciBkZSBmdW5kbyAqL1xuXG59XG5cbi8qLS1CdXR0b24gU3R5bGVzLS0qL1xuLmJ0bi1zbGljZSB7XG4gIHBhZGRpbmc6IDEuMHJlbSAwLjRyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxMDAwbXMgY3ViaWMtYmV6aWVyKDAuODkwLCAwLCAwLjE0MCwgMSk7IC8qIG9sZGVyIHdlYmtpdCAqL1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxMDAwbXMgY3ViaWMtYmV6aWVyKDAuODkwLCAtMC4xNzAsIDAuMTQwLCAxLjIyNSk7IFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAxMDAwbXMgY3ViaWMtYmV6aWVyKDAuODkwLCAtMC4xNzAsIDAuMTQwLCAxLjIyNSk7IFxuICAtby10cmFuc2l0aW9uOiBhbGwgMTAwMG1zIGN1YmljLWJlemllcigwLjg5MCwgLTAuMTcwLCAwLjE0MCwgMS4yMjUpOyBcbiAgdHJhbnNpdGlvbjogYWxsIDEwMDBtcyBjdWJpYy1iZXppZXIoMC44OTAsIC0wLjE3MCwgMC4xNDAsIDEuMjI1KTsgLyogY3VzdG9tICovXG5cbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuODkwLCAwLCAwLjE0MCwgMSk7IC8qIG9sZGVyIHdlYmtpdCAqL1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44OTAsIC0wLjE3MCwgMC4xNDAsIDEuMjI1KTsgXG4gIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjg5MCwgLTAuMTcwLCAwLjE0MCwgMS4yMjUpOyBcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjg5MCwgLTAuMTcwLCAwLjE0MCwgMS4yMjUpOyBcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjg5MCwgLTAuMTcwLCAwLjE0MCwgMS4yMjUpOyAvKiBjdXN0b20gKi9cbn1cblxuLmJ0bi1zbGljZSAudG9wICB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAwLCAwLjAyNSwgMSk7IC8qIG9sZGVyIHdlYmtpdCAqL1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjA1NSwgMC4wMjUsIDEuMDQwKTsgXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMDU1LCAwLjAyNSwgMS4wNDApOyBcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMDU1LCAwLjAyNSwgMS4wNDApOyBcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMDU1LCAwLjAyNSwgMS4wNDApOyAvKiBjdXN0b20gKi9cblxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIDAsIDAuMDI1LCAxKTsgLyogb2xkZXIgd2Via2l0ICovXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMDU1LCAwLjAyNSwgMS4wNDApOyBcbiAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4wNTUsIDAuMDI1LCAxLjA0MCk7IFxuICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4wNTUsIDAuMDI1LCAxLjA0MCk7IFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4wNTUsIDAuMDI1LCAxLjA0MCk7IC8qIGN1c3RvbSAqL1xuICBcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OjAuMzVzOyAgICAgXG4gIC1tb3otdHJhbnNpdGlvbi1kZWxheTo6MC4zNXM7IFxuICAtbXMtdHJhbnNpdGlvbi1kZWxheTo6MC4zNXM7ICAgICBcbiAgLW8tdHJhbnNpdGlvbi1kZWxheTo6MC4zNXM7ICAgICBcbiAgdHJhbnNpdGlvbi1kZWxheTo6MC4zNXM7XG59XG5cbi5idG4tc2xpY2UgLmJvdHRvbSAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3R0b206IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigxLjAwMCwgMCwgMC4wMjUsIDEpOyAvKiBvbGRlciB3ZWJraXQgKi9cbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4wNTUsIDAuMDI1LCAxLjA0MCk7IFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjA1NSwgMC4wMjUsIDEuMDQwKTsgXG4gIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjA1NSwgMC4wMjUsIDEuMDQwKTsgXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjA1NSwgMC4wMjUsIDEuMDQwKTsgLyogY3VzdG9tICovXG5cbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAwLCAwLjAyNSwgMSk7IC8qIG9sZGVyIHdlYmtpdCAqL1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjA1NSwgMC4wMjUsIDEuMDQwKTsgXG4gIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMDU1LCAwLjAyNSwgMS4wNDApOyBcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMDU1LCAwLjAyNSwgMS4wNDApOyBcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMDU1LCAwLjAyNSwgMS4wNDApOyAvKiBjdXN0b20gKi9cbiAgXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTowLjM1czsgICAgIFxuICAtbW96LXRyYW5zaXRpb24tZGVsYXk6OjAuMzVzOyBcbiAgLW1zLXRyYW5zaXRpb24tZGVsYXk6OjAuMzVzOyAgICAgXG4gIC1vLXRyYW5zaXRpb24tZGVsYXk6OjAuMzVzOyAgICAgXG4gIHRyYW5zaXRpb24tZGVsYXk6OjAuMzVzO1xufVxuXG4uYnRuLXNsaWNlIC5ib3R0b20gc3BhbiB7XG4gIHRvcDogLTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufVxuXG4uYnRuLXNsaWNlOmhvdmVyIC50b3Age1xuICB0b3A6IC01cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTowLjM1czsgICAgIFxuICAtbW96LXRyYW5zaXRpb24tZGVsYXk6OjAuMzVzOyBcbiAgLW1zLXRyYW5zaXRpb24tZGVsYXk6OjAuMzVzOyAgICAgXG4gIC1vLXRyYW5zaXRpb24tZGVsYXk6OjAuMzVzOyAgICAgXG4gIHRyYW5zaXRpb24tZGVsYXk6OjAuMzVzOyBcbn1cblxuLmJ0bi1zbGljZTpob3ZlciAuYm90dG9tIHtcbiAgYm90dG9tOiAtNXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6MC4zNXM7ICAgICBcbiAgLW1vei10cmFuc2l0aW9uLWRlbGF5OjowLjM1czsgXG4gIC1tcy10cmFuc2l0aW9uLWRlbGF5OjowLjM1czsgICAgIFxuICAtby10cmFuc2l0aW9uLWRlbGF5OjowLjM1czsgICAgIFxuICB0cmFuc2l0aW9uLWRlbGF5OjowLjM1czsgXG59XG4uYnRuLXNsaWNlOmhvdmVyLCAuYnRuLXNsaWNlOmZvY3VzLCAuYnRuLXNsaWNlOmFjdGl2ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmJ0bi1zbGljZTpiZWZvcmV7XG4gIGNvbnRlbnQ6ICcnO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgcmlnaHQ6IC0zNXB4O1xuICBcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTAwMG1zIGN1YmljLWJlemllcigwLjg5MCwgMCwgMC4xNDAsIDEpOyAvKiBvbGRlciB3ZWJraXQgKi9cbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTAwMG1zIGN1YmljLWJlemllcigwLjg5MCwgLTAuMTcwLCAwLjE0MCwgMS4yMjUpOyBcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMTAwMG1zIGN1YmljLWJlemllcigwLjg5MCwgLTAuMTcwLCAwLjE0MCwgMS4yMjUpOyBcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDEwMDBtcyBjdWJpYy1iZXppZXIoMC44OTAsIC0wLjE3MCwgMC4xNDAsIDEuMjI1KTsgXG4gIHRyYW5zaXRpb246IGFsbCAxMDAwbXMgY3ViaWMtYmV6aWVyKDAuODkwLCAtMC4xNzAsIDAuMTQwLCAxLjIyNSk7IC8qIGN1c3RvbSAqL1xuXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjg5MCwgMCwgMC4xNDAsIDEpOyAvKiBvbGRlciB3ZWJraXQgKi9cbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuODkwLCAtMC4xNzAsIDAuMTQwLCAxLjIyNSk7IFxuICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44OTAsIC0wLjE3MCwgMC4xNDAsIDEuMjI1KTsgXG4gIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44OTAsIC0wLjE3MCwgMC4xNDAsIDEuMjI1KTsgXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44OTAsIC0wLjE3MCwgMC4xNDAsIDEuMjI1KTsgLyogY3VzdG9tICovXG59XG4uYnRuLXNsaWNlOmhvdmVyOmJlZm9yZXtcbiAgd2lkdGg6IDEzMCU7XG59XG5gIl0sIm5hbWVzIjpbInN0eWxlZCIsInRoZW1lIiwiQ29udGFpbmVyIiwiZGl2IiwiQ2FyZENvbnRlbnQiLCJjb2xvcnMiLCJiYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/stylespage.ts\n"));

/***/ })

});