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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardContent: function() { return /* binding */ CardContent; },\n/* harmony export */   Container: function() { return /* binding */ Container; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ \"(app-pages-browser)/./app/theme.ts\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n.principalContent {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  padding-bottom: 30%;\\n  background: \",\n        \";  \\n}\\n\\n.Cardsalign {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n}\\n\\n.campaign-card {\\n  margin: 10px;\\n  padding: 20px;\\n  width: 20%; /* 48% para deixar um espa\\xe7o m\\xednimo entre as duas divs */\\n  margin-bottom: 20px;\\n  gap: 20px;\\n  border-radius: 5px;\\n  transition: transform 0.2s ease-in-out;\\n  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);\\n  background: rgba(255, 255, 255, 0.1); \\n  justify-content: center;\\n  align-items: center;\\n   /*  border-top: 1px solid rgba(255, 255, 255, 0.5);\\n    border-left: 1px solid rgba(255, 255, 255, 0.5); */\\n}\\n\\n.base-container {\\n  font-size: 20px;\\n\tcolor: white;\\n  font-weight: bold;\\n  text-align: center;\\n}\\n\\nh3 { \\n  color: white;\\n  font-weight: bold;\\n  letter-spacing: 2px;\\n}\\n\\np {\\n  color: white;\\n}\\n\\n.campaign-card:hover {\\n  transform: scale(1.05);\\n  cursor: pointer;\\n  box-shadow: 0 0 8px #fd0018, 0 0 35px #fd0018, 0 0 60px #fd0018;\\n}\\n\\n.campaign-card.clicked {\\n  background: rgba(255, 255, 255, 0.1); \\n    justify-content: center;\\n    align-items: center;\\n    border-top: 1px solid rgba(255, 255, 255, 0.5);\\n    border-left: 1px solid rgba(255, 255, 255, 0.5);\\n}\\n\\n/* Estilo dos detalhes de campanha expandidos */\\n.campaign-percentages {\\n  display: none;\\n}\\n\\n.campaign-card.clicked .campaign-percentages {\\n  display: block;\\n  margin-top: 10px;\\n}\\n\\n.percentage-item {\\n  display: flex;\\n  flex-direction: column;\\n  border: 1px solid #ddd;\\n  border-radius: 5px;\\n  padding: 10px;\\n  margin-top: 10px;\\n  justify-content: center;\\n  align-items: center;\\n  overflow: hidden; /* Esconde o conte\\xfado que transborda */\\n  text-overflow: ellipsis; /* Mostra \\\"...\\\" para indicar que o texto foi cortado */\\n  white-space: nowrap; \\n}\\n\\n.title {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center; \\n}\\n\\nh1 {\\n  margin-bottom: 3%;\\n}\\n\\n.percentage-item h3 {\\n  margin: 10px;\\n  font-size: 16px;\\n  margin: 5px 0;\\n}\\n\\n.com-aviso {\\n  border: 2px solid red;\\n  box-shadow: 0 0 1px #fd0018, 0 0 15px #fd0018, 0 0 30px #fd0018;\\n}\\n\\n.com-aviso-item {\\n  border: 2px solid red;\\n}\\n\\n/* Estilos para porcentagens */\\n.porcentagem-vermelha {\\n  color: red;\\n  font-weight: bold;\\n}\\n\\n.porcentagem-verde {\\n  color: green;\\n  font-weight: bold;\\n}\\n\\nnav {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n}\\n\\n.nav-links{\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  width: 100%;\\n  align-items: center;\\n  background: #fff; \\n  padding: 20px 15px;\\n  border-radius: 4px;\\n  box-shadow: 0 5px 10px rgba(0,0,0,0.2);\\n  margin-bottom: 3%;\\n  flex-wrap: wrap;\\n  gap: 10px;\\n}\\n\\n.link {\\n  width: 20%;\\n  justify-content: left;\\n  display: flex;\\n  flex-direction: row;\\n  margin-bottom: 10px;\\n}\\n\\n.nav-links:hover {\\n  box-shadow: 0 0 8px #fd0018, 0 0 35px #fd0018, 0 0 60px #fd0018;\\n}\\n\\n.nav-links li{\\n  display: flex;\\n  flex-direction: row;\\n  list-style: none;\\n  margin: 0 12px;\\n}\\n.nav-links li a{\\n  position: relative;\\n  color: black;\\n  font-size: 25px;\\n  font-family:'open_sansregular';  \\n  font-weight: bold;\\n  padding: 6px 0;\\n  text-decoration: none;\\n}\\n.nav-links li a:before{\\n  content: '';\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n  height: 3px;\\n  width: 0%;\\n  background: red;\\n  border-radius: 12px;\\n  transition: all 0.4s ease;\\n}\\n.nav-links li a:hover:before{\\n  width: 100%;\\n}\\n.nav-links li.center a:before{\\n  left: 50%;\\n  transform: translateX(-50%);\\n}\\n.nav-links li.upward a:before{\\n  width: 100%;\\n  bottom: -5px;\\n  opacity: 0;\\n}\\n.nav-links li.upward a:hover:before{\\n  bottom: 0px;\\n  opacity: 1;\\n}\\n.nav-links li.forward a:before{\\n  width: 100%;\\n  transform: scaleX(0);\\n  transform-origin: right;\\n  transition: transform 0.4s ease;\\n}\\n.nav-links li.forward a:hover:before{\\n  transform: scaleX(1);\\n  transform-origin: left;\\n}\\n\\n.logo {\\n  display: flex;\\n  max-height: 150px;\\n  width: 30%;\\n  margin-left: 100px;\\n  margin-rig: 100px;\\n  height: auto;\\n  justify-content: left;\\n  align-content: center;\\n  align-items: center;\\n}\\n\\ninput {\\n  color: black;\\n  padding: 15px 25px;\\n}\\n\\n.filters {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.newfunctionalities {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-bottom: 20px;\\n}\\n\\n.newfunctionalities input {\\n  margin-right: 10px;\\n  padding: 10px 20px;\\n  margin-right: 10px;\\n  border: 1px solid #ccc;\\n  border-radius: 5px;\\n  font-size: 14px;\\n  margin-bottom: 20px;\\n  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out; /* Adiciona transi\\xe7\\xe3o para a borda e a sombra */\\n}\\n\\n.newfunctionalities label {\\n  color: black;\\n      margin-right: 1px;\\n      cursor: pointer;\\n      margin-right: 20px;\\n      letter-spacing: 2px;\\n      font-weight: 500;\\n\\n      &:checked {\\n        color: #007bff;\\n      }\\n}\\n\\n.newfunctionalities button {\\n padding: 10px 15px;\\n background-color: #007bff;\\n  color: #fff;\\n  border: none;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n\\n  &:hover {\\n    background-color: #007bff;\\n    border: 2px solid red;\\n\\n  }\\n}\\n\\n.letter-checkboxes {\\n   display: flex;\\n   flex-direction: row;\\n}\\n\\n.checkbox-container {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.checkbox-label {\\n  margin-right: 10px;\\n}\\n\\n.checkbox-input {\\n  display: none;\\n}\\n\\n.custom-checkbox {\\n  width: 20px;\\n  height: 20px;\\n  border: 2px solid #4caf50;\\n  border-radius: 4px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  cursor: pointer;\\n}\\n\\n.checkmark {\\n  width: 12px;\\n  height: 12px;\\n  border-radius: 2px;\\n  background-color: #4caf50; /* Cor do \\\"check\\\" quando marcado */\\n  display: none;\\n}\\n\\n.custom-checkbox.checked .checkmark {\\n  display: block;\\n}\\n\\n.checkbox-input:checked + .custom-checkbox {\\n  background-color: #4caf50; /* Cor de fundo quando marcado */\\n  transition: background-color 0.2s ease-in-out; /* Adiciona transi\\xe7\\xe3o para a cor de fundo */\\n\\n}\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\nconst CardContent = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1(), _theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colors.background);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zdHlsZXNwYWdlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDWDtBQUdyQixNQUFNRSxZQUFZRix5REFBTUEsQ0FBQ0csR0FBRyxvQkFFakM7QUFFSyxNQUFNQyxjQUFjSix5REFBTUEsQ0FBQ0csR0FBRyxxQkFPckJGLDhDQUFLQSxDQUFDSSxNQUFNLENBQUNDLFVBQVUsRUFnVXRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zdHlsZXNwYWdlLnRzPzQwNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi90aGVtZSc7XG5cblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5cbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJkQ29udGVudCA9IHN0eWxlZC5kaXZgXG4ucHJpbmNpcGFsQ29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzAlO1xuICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTsgIFxufVxuXG4uQ2FyZHNhbGlnbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYW1wYWlnbi1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMjAlOyAvKiA0OCUgcGFyYSBkZWl4YXIgdW0gZXNwYcOnbyBtw61uaW1vIGVudHJlIGFzIGR1YXMgZGl2cyAqL1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBnYXA6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJveC1zaGFkb3c6IDIwcHggMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyBcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAvKiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgKi9cbn1cblxuLmJhc2UtY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuXHRjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgzIHsgXG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbnAge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYW1wYWlnbi1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDAgOHB4ICNmZDAwMTgsIDAgMCAzNXB4ICNmZDAwMTgsIDAgMCA2MHB4ICNmZDAwMTg7XG59XG5cbi5jYW1wYWlnbi1jYXJkLmNsaWNrZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLyogRXN0aWxvIGRvcyBkZXRhbGhlcyBkZSBjYW1wYW5oYSBleHBhbmRpZG9zICovXG4uY2FtcGFpZ24tcGVyY2VudGFnZXMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2FtcGFpZ24tY2FyZC5jbGlja2VkIC5jYW1wYWlnbi1wZXJjZW50YWdlcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucGVyY2VudGFnZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogRXNjb25kZSBvIGNvbnRlw7pkbyBxdWUgdHJhbnNib3JkYSAqL1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgLyogTW9zdHJhIFwiLi4uXCIgcGFyYSBpbmRpY2FyIHF1ZSBvIHRleHRvIGZvaSBjb3J0YWRvICovXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxufVxuXG4udGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG59XG5cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi5wZXJjZW50YWdlLWl0ZW0gaDMge1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmNvbS1hdmlzbyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjZmQwMDE4LCAwIDAgMTVweCAjZmQwMDE4LCAwIDAgMzBweCAjZmQwMDE4O1xufVxuXG4uY29tLWF2aXNvLWl0ZW0ge1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG59XG5cbi8qIEVzdGlsb3MgcGFyYSBwb3JjZW50YWdlbnMgKi9cbi5wb3JjZW50YWdlbS12ZXJtZWxoYSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucG9yY2VudGFnZW0tdmVyZGUge1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtbGlua3N7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7IFxuICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsMCwwLDAuMik7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbn1cblxuLmxpbmsge1xuICB3aWR0aDogMjAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5uYXYtbGlua3M6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgOHB4ICNmZDAwMTgsIDAgMCAzNXB4ICNmZDAwMTgsIDAgMCA2MHB4ICNmZDAwMTg7XG59XG5cbi5uYXYtbGlua3MgbGl7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMCAxMnB4O1xufVxuLm5hdi1saW5rcyBsaSBhe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LWZhbWlseTonb3Blbl9zYW5zcmVndWxhcic7ICBcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDZweCAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubmF2LWxpbmtzIGxpIGE6YmVmb3Jle1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogMCU7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbn1cbi5uYXYtbGlua3MgbGkgYTpob3ZlcjpiZWZvcmV7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hdi1saW5rcyBsaS5jZW50ZXIgYTpiZWZvcmV7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLm5hdi1saW5rcyBsaS51cHdhcmQgYTpiZWZvcmV7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IC01cHg7XG4gIG9wYWNpdHk6IDA7XG59XG4ubmF2LWxpbmtzIGxpLnVwd2FyZCBhOmhvdmVyOmJlZm9yZXtcbiAgYm90dG9tOiAwcHg7XG4gIG9wYWNpdHk6IDE7XG59XG4ubmF2LWxpbmtzIGxpLmZvcndhcmQgYTpiZWZvcmV7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XG59XG4ubmF2LWxpbmtzIGxpLmZvcndhcmQgYTpob3ZlcjpiZWZvcmV7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIG1hcmdpbi1yaWc6IDEwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pbnB1dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTVweCAyNXB4O1xufVxuXG4uZmlsdGVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uZXdmdW5jdGlvbmFsaXRpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubmV3ZnVuY3Rpb25hbGl0aWVzIGlucHV0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMnMgZWFzZS1pbi1vdXQ7IC8qIEFkaWNpb25hIHRyYW5zacOnw6NvIHBhcmEgYSBib3JkYSBlIGEgc29tYnJhICovXG59XG5cbi5uZXdmdW5jdGlvbmFsaXRpZXMgbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAmOmNoZWNrZWQge1xuICAgICAgICBjb2xvcjogIzAwN2JmZjtcbiAgICAgIH1cbn1cblxuLm5ld2Z1bmN0aW9uYWxpdGllcyBidXR0b24ge1xuIHBhZGRpbmc6IDEwcHggMTVweDtcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuXG4gIH1cbn1cblxuLmxldHRlci1jaGVja2JveGVzIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY2hlY2tib3gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNoZWNrYm94LWxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2hlY2tib3gtaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3VzdG9tLWNoZWNrYm94IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzRjYWY1MDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hlY2ttYXJrIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwOyAvKiBDb3IgZG8gXCJjaGVja1wiIHF1YW5kbyBtYXJjYWRvICovXG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jdXN0b20tY2hlY2tib3guY2hlY2tlZCAuY2hlY2ttYXJrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jaGVja2JveC1pbnB1dDpjaGVja2VkICsgLmN1c3RvbS1jaGVja2JveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7IC8qIENvciBkZSBmdW5kbyBxdWFuZG8gbWFyY2FkbyAqL1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7IC8qIEFkaWNpb25hIHRyYW5zacOnw6NvIHBhcmEgYSBjb3IgZGUgZnVuZG8gKi9cblxufVxuYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJ0aGVtZSIsIkNvbnRhaW5lciIsImRpdiIsIkNhcmRDb250ZW50IiwiY29sb3JzIiwiYmFja2dyb3VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/stylespage.ts\n"));

/***/ })

});