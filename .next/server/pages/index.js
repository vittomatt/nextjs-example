(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 515:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "index_container__HpKSV",
	"title": "index_title__qVQRs"
};


/***/ }),

/***/ 114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getRoute": () => (/* binding */ getRoute),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-intl"
const external_react_intl_namespaceObject = require("react-intl");
// EXTERNAL MODULE: ./pages/index.module.scss
var index_module = __webpack_require__(515);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./pages/index.tsx



const getRoute = ()=>({
        pathname: "/"
    });
const HomePage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (index_module_default()).title,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_namespaceObject.FormattedMessage, {
                    id: "home.content.title"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {})
        ]
    });
};
const getStaticProps = async ()=>{
    return {
        props: {},
        revalidate: 300
    };
};
HomePage.displayName = "HomePage";

/* harmony default export */ const pages = (HomePage);


/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(114));
module.exports = __webpack_exports__;

})();