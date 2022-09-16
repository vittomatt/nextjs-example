"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(859);
;// CONCATENATED MODULE: ./l10n/en/strings.json
const strings_namespaceObject = JSON.parse('{"home.title":"NextJS Example","home.content.title":"bar"}');
;// CONCATENATED MODULE: ./l10n/es/strings.json
const es_strings_namespaceObject = JSON.parse('{"home.title":"NextJS Example","home.content.title":"bar"}');
;// CONCATENATED MODULE: ./l10n/Languages.ts
/* eslint-disable import/extensions */ 

const DEFAULT_LOCALE = "en";
const DEFAULT_STRINGS = strings_namespaceObject;
const languages = [
    {
        locale: DEFAULT_LOCALE,
        stringId: "landing.sidebar.english",
        strings: DEFAULT_STRINGS
    },
    {
        locale: "es",
        stringId: "landing.sidebar.spanish",
        strings: es_strings_namespaceObject
    }, 
];
const defaultLanguage = languages.find((language)=>language.locale === DEFAULT_LOCALE);
const getLanguageData = (locale)=>languages.find((language)=>language.locale === locale);

/* harmony default export */ const Languages = ((/* unused pure expression or super */ null && (languages)));

;// CONCATENATED MODULE: ./pages/_document.tsx



class NextJsDocument extends next_document["default"] {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_document.Head, {
                    lang: DEFAULT_LOCALE
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const _document = (NextJsDocument);


/***/ }),

/***/ 140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859], () => (__webpack_exec__(833)));
module.exports = __webpack_exports__;

})();