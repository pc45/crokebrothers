"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/PrimaryFeatures.jsx":
/*!********************************************!*\
  !*** ./src/components/PrimaryFeatures.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PrimaryFeatures\": function() { return /* binding */ PrimaryFeatures; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Container */ \"./src/components/Container.jsx\");\n/* harmony import */ var _images_screenshots_one_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/images/screenshots/one.jpg */ \"./src/images/screenshots/one.jpg\");\n/* harmony import */ var _images_screenshots_two_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/images/screenshots/two.jpg */ \"./src/images/screenshots/two.jpg\");\n/* harmony import */ var _images_screenshots_three_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/images/screenshots/three.jpg */ \"./src/images/screenshots/three.jpg\");\n/* harmony import */ var _images_screenshots_four_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/images/screenshots/four.jpg */ \"./src/images/screenshots/four.jpg\");\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar features = [\n    {\n        title: \"item 1\",\n        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, tempora?\",\n        image: _images_screenshots_two_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        title: \"item 2\",\n        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, tempora?\",\n        image: _images_screenshots_one_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        title: \"item 3\",\n        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, tempora?\",\n        image: _images_screenshots_four_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    },\n    {\n        title: \"item 4\",\n        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, tempora?\",\n        image: _images_screenshots_three_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    }, \n];\nfunction PrimaryFeatures() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"horizontal\"), tabOrientation = ref[0], setTabOrientation = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var onMediaQueryChange = function onMediaQueryChange(param) {\n            var matches = param.matches;\n            setTabOrientation(matches ? \"vertical\" : \"horizontal\");\n        };\n        var lgMediaQuery = window.matchMedia(\"(min-width: 1024px)\");\n        onMediaQueryChange(lgMediaQuery);\n        lgMediaQuery.addEventListener(\"change\", onMediaQueryChange);\n        return function() {\n            lgMediaQuery.removeEventListener(\"change\", onMediaQueryChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"features\",\n        \"aria-labelledby\": \"features-title\",\n        className: \"relative overflow-hidden bg-red-600 pt-20 pb-28 sm:py-32\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            className: \"relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-2xl md:mx-auto md:text-center xl:max-w-none\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            id: \"features-title\",\n                            className: \"font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl\",\n                            children: \"Lorem ipsum dolor sit amet, consectetur.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-6 text-lg tracking-tight text-blue-100\",\n                            children: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi itaque labore perspiciatis quae, sequi.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Tab.Group, {\n                    as: \"div\",\n                    className: \"mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0\",\n                    vertical: tabOrientation === \"vertical\",\n                    children: function(param) {\n                        var selectedIndex = param.selectedIndex;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Tab.List, {\n                                        className: \"relative z-10 flex space-x-2 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:space-y-1 lg:space-x-0 lg:whitespace-normal\",\n                                        children: features.map(function(feature, featureIndex) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6\", {\n                                                    \"bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10\": selectedIndex === featureIndex,\n                                                    \"hover:bg-white/10 lg:hover:bg-white/5\": selectedIndex !== featureIndex\n                                                }),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Tab, {\n                                                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"font-display text-lg [&:not(:focus-visible)]:focus:outline-none\", {\n                                                                \"text-blue-600 lg:text-white\": selectedIndex === featureIndex,\n                                                                \"text-blue-100 hover:text-white lg:text-white\": selectedIndex !== featureIndex\n                                                            }),\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                    className: \"absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n                                                                    lineNumber: 111,\n                                                                    columnNumber: 27\n                                                                }, _this),\n                                                                feature.title\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n                                                            lineNumber: 100,\n                                                            columnNumber: 25\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 23\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"mt-2 hidden text-sm lg:block\", {\n                                                            \"text-white\": selectedIndex === featureIndex,\n                                                            \"text-blue-100 group-hover:text-white\": selectedIndex !== featureIndex\n                                                        }),\n                                                        children: feature.description\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n                                                        lineNumber: 115,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                ]\n                                            }, feature.title, true, {\n                                                fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 21\n                                            }, _this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Tab.Panels, {\n                                    className: \"lg:col-span-7\",\n                                    children: features.map(function(feature) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Tab.Panel, {\n                                            unmount: false,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"relative sm:px-6 lg:hidden\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"absolute -inset-x-4 -top-[6.5rem] -bottom-[4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n                                                            lineNumber: 132,\n                                                            columnNumber: 23\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"relative mx-auto max-w-2xl text-base text-white sm:text-center\",\n                                                            children: feature.description\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n                                                            lineNumber: 133,\n                                                            columnNumber: 23\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n                                                    lineNumber: 131,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"relative mt-10 aspect-[1085/730] w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        src: feature.image,\n                                                        alt: \"\",\n                                                        layout: \"fill\",\n                                                        priority: true,\n                                                        sizes: \"(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n                                                        lineNumber: 138,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n                                                    lineNumber: 137,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            ]\n                                        }, feature.title, true, {\n                                            fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n                                            lineNumber: 130,\n                                            columnNumber: 19\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/petecroke/projects/crokebrothers/src/components/PrimaryFeatures.jsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(PrimaryFeatures, \"A65wj7WddsmZd/w9iSE0TiXUQss=\");\n_c = PrimaryFeatures;\nvar _c;\n$RefreshReg$(_c, \"PrimaryFeatures\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QcmltYXJ5RmVhdHVyZXMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMkM7QUFDYjtBQUNTO0FBQ2hCO0FBRTJCO0FBRVc7QUFDRDtBQUNJO0FBQ0E7O0FBRWhFLElBQU1VLFFBQVEsR0FBRztJQUNmO1FBQ0VDLEtBQUssRUFBRSxRQUFRO1FBQ2ZDLFdBQVcsRUFDVCw4RUFBOEU7UUFDaEZDLEtBQUssRUFBRU4sbUVBQWlCO0tBQ3pCO0lBQ0Q7UUFDRUksS0FBSyxFQUFFLFFBQVE7UUFDZkMsV0FBVyxFQUNULDhFQUE4RTtRQUNoRkMsS0FBSyxFQUFFUCxtRUFBa0I7S0FDMUI7SUFDRDtRQUNFSyxLQUFLLEVBQUUsUUFBUTtRQUNmQyxXQUFXLEVBQ1QsOEVBQThFO1FBQ2hGQyxLQUFLLEVBQUVKLG9FQUFvQjtLQUM1QjtJQUNEO1FBQ0VFLEtBQUssRUFBRSxRQUFRO1FBQ2ZDLFdBQVcsRUFDVCw4RUFBOEU7UUFDaEZDLEtBQUssRUFBRUwscUVBQW1CO0tBQzNCO0NBQ0Y7QUFFTSxTQUFTTSxlQUFlLEdBQUc7OztJQUNoQyxJQUEwQ2IsR0FBc0IsR0FBdEJBLCtDQUFRLENBQUMsWUFBWSxDQUFDLEVBeENsRSxjQXdDcUIsR0FBdUJBLEdBQXNCLEdBQTdDLEVBeENyQixpQkF3Q3dDLEdBQUlBLEdBQXNCLEdBQTFCO0lBRXRDRCxnREFBUyxDQUFDLFdBQU07WUFHTGlCLGtCQUFrQixHQUEzQixTQUFTQSxrQkFBa0IsQ0FBQyxLQUFXLEVBQUU7Z0JBQWIsT0FBUyxHQUFULEtBQVcsQ0FBVEMsT0FBTztZQUNuQ0YsaUJBQWlCLENBQUNFLE9BQU8sR0FBRyxVQUFVLEdBQUcsWUFBWSxDQUFDO1NBQ3ZEO1FBSkQsSUFBSUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztRQU0zREosa0JBQWtCLENBQUNFLFlBQVksQ0FBQztRQUNoQ0EsWUFBWSxDQUFDRyxnQkFBZ0IsQ0FB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R0FBRyxFQUFFUCxPQUFPLENBQUN4QixLQUFLO3dEQUNsQmdDLEdBQUcsRUFBQyxFQUFFO3dEQUNOQyxNQUFNLEVBQUMsTUFBTTt3REFDYkMsUUFBUTt3REFDUkMsS0FBSyxFQUFDLGlFQUFpRTs7Ozs7NkRBQ3ZFOzs7Ozt5REFDRTs7MkNBZlFYLE9BQU8sQ0FBQzFCLEtBQUs7Ozs7aURBZ0JqQjtxQ0FDYixDQUFDOzs7Ozt5Q0FDUzs7d0NBQ1o7cUJBQ0o7Ozs7O3dCQUNTOzs7Ozs7Z0JBQ0Y7Ozs7O1lBQ0osQ0FDWDtDQUNGO0dBbkhlRyxlQUFlO0FBQWZBLEtBQUFBLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJpbWFyeUZlYXR1cmVzLmpzeD85YzQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgVGFiIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xuXG5pbXBvcnQgc2NyZWVuc2hvdEV4cGVuc2VzIGZyb20gJ0AvaW1hZ2VzL3NjcmVlbnNob3RzL29uZS5qcGcnXG5pbXBvcnQgc2NyZWVuc2hvdFBheXJvbGwgZnJvbSAnQC9pbWFnZXMvc2NyZWVuc2hvdHMvdHdvLmpwZydcbmltcG9ydCBzY3JlZW5zaG90UmVwb3J0aW5nIGZyb20gJ0AvaW1hZ2VzL3NjcmVlbnNob3RzL3RocmVlLmpwZydcbmltcG9ydCBzY3JlZW5zaG90VmF0UmV0dXJucyBmcm9tICdAL2ltYWdlcy9zY3JlZW5zaG90cy9mb3VyLmpwZydcblxuY29uc3QgZmVhdHVyZXMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ2l0ZW0gMScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTdXNjaXBpdCwgdGVtcG9yYT9cIixcbiAgICBpbWFnZTogc2NyZWVuc2hvdFBheXJvbGwsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ2l0ZW0gMicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTdXNjaXBpdCwgdGVtcG9yYT9cIixcbiAgICBpbWFnZTogc2NyZWVuc2hvdEV4cGVuc2VzLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdpdGVtIDMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU3VzY2lwaXQsIHRlbXBvcmE/XCIsXG4gICAgaW1hZ2U6IHNjcmVlbnNob3RWYXRSZXR1cm5zLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdpdGVtIDQnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTdXNjaXBpdCwgdGVtcG9yYT8nLFxuICAgIGltYWdlOiBzY3JlZW5zaG90UmVwb3J0aW5nLFxuICB9LFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gUHJpbWFyeUZlYXR1cmVzKCkge1xuICBsZXQgW3RhYk9yaWVudGF0aW9uLCBzZXRUYWJPcmllbnRhdGlvbl0gPSB1c2VTdGF0ZSgnaG9yaXpvbnRhbCcpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgbGdNZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEwMjRweCknKVxuXG4gICAgZnVuY3Rpb24gb25NZWRpYVF1ZXJ5Q2hhbmdlKHsgbWF0Y2hlcyB9KSB7XG4gICAgICBzZXRUYWJPcmllbnRhdGlvbihtYXRjaGVzID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJylcbiAgICB9XG5cbiAgICBvbk1lZGlhUXVlcnlDaGFuZ2UobGdNZWRpYVF1ZXJ5KVxuICAgIGxnTWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvbk1lZGlhUXVlcnlDaGFuZ2UpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbGdNZWRpYVF1ZXJ5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG9uTWVkaWFRdWVyeUNoYW5nZSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIGlkPVwiZmVhdHVyZXNcIlxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZmVhdHVyZXMtdGl0bGVcIlxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGJnLXJlZC02MDAgcHQtMjAgcGItMjggc206cHktMzJcIlxuICAgID5cblxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCBtZDpteC1hdXRvIG1kOnRleHQtY2VudGVyIHhsOm1heC13LW5vbmVcIj5cbiAgICAgICAgICA8aDJcbiAgICAgICAgICAgIGlkPVwiZmVhdHVyZXMtdGl0bGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQtM3hsIHRyYWNraW5nLXRpZ2h0IHRleHQtd2hpdGUgc206dGV4dC00eGwgbWQ6dGV4dC01eGxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ci5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTYgdGV4dC1sZyB0cmFja2luZy10aWdodCB0ZXh0LWJsdWUtMTAwXCI+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWNjdXNhbnRpdW0gY29tbW9kaSBpdGFxdWUgbGFib3JlIHBlcnNwaWNpYXRpcyBxdWFlLCBzZXF1aS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VGFiLkdyb3VwXG4gICAgICAgICAgYXM9XCJkaXZcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTE2IGdyaWQgZ3JpZC1jb2xzLTEgaXRlbXMtY2VudGVyIGdhcC15LTIgcHQtMTAgc206Z2FwLXktNiBtZDptdC0yMCBsZzpncmlkLWNvbHMtMTIgbGc6cHQtMFwiXG4gICAgICAgICAgdmVydGljYWw9e3RhYk9yaWVudGF0aW9uID09PSAndmVydGljYWwnfVxuICAgICAgICA+XG4gICAgICAgICAgeyh7IHNlbGVjdGVkSW5kZXggfSkgPT4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXgtNCBmbGV4IG92ZXJmbG93LXgtYXV0byBwYi00IHNtOm14LTAgc206b3ZlcmZsb3ctdmlzaWJsZSBzbTpwYi0wIGxnOmNvbC1zcGFuLTVcIj5cbiAgICAgICAgICAgICAgICA8VGFiLkxpc3QgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBmbGV4IHNwYWNlLXgtMiB3aGl0ZXNwYWNlLW5vd3JhcCBweC00IHNtOm14LWF1dG8gc206cHgtMCBsZzpteC0wIGxnOmJsb2NrIGxnOnNwYWNlLXktMSBsZzpzcGFjZS14LTAgbGc6d2hpdGVzcGFjZS1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICAgIHtmZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGZlYXR1cmVJbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtmZWF0dXJlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdncm91cCByZWxhdGl2ZSByb3VuZGVkLWZ1bGwgcHktMSBweC00IGxnOnJvdW5kZWQtci1ub25lIGxnOnJvdW5kZWQtbC14bCBsZzpwLTYnLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYmctd2hpdGUgbGc6Ymctd2hpdGUvMTAgbGc6cmluZy0xIGxnOnJpbmctaW5zZXQgbGc6cmluZy13aGl0ZS8xMCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9PT0gZmVhdHVyZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnaG92ZXI6Ymctd2hpdGUvMTAgbGc6aG92ZXI6Ymctd2hpdGUvNSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCAhPT0gZmVhdHVyZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZm9udC1kaXNwbGF5IHRleHQtbGcgWyY6bm90KDpmb2N1cy12aXNpYmxlKV06Zm9jdXM6b3V0bGluZS1ub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1ibHVlLTYwMCBsZzp0ZXh0LXdoaXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9PT0gZmVhdHVyZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtYmx1ZS0xMDAgaG92ZXI6dGV4dC13aGl0ZSBsZzp0ZXh0LXdoaXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCAhPT0gZmVhdHVyZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCByb3VuZGVkLWZ1bGwgbGc6cm91bmRlZC1yLW5vbmUgbGc6cm91bmRlZC1sLXhsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ210LTIgaGlkZGVuIHRleHQtc20gbGc6YmxvY2snLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXdoaXRlJzogc2VsZWN0ZWRJbmRleCA9PT0gZmVhdHVyZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1ibHVlLTEwMCBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ICE9PSBmZWF0dXJlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9UYWIuTGlzdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxUYWIuUGFuZWxzIGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTdcIj5cbiAgICAgICAgICAgICAgICB7ZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VGFiLlBhbmVsIGtleT17ZmVhdHVyZS50aXRsZX0gdW5tb3VudD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNtOnB4LTYgbGc6aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtaW5zZXQteC00IC10b3AtWzYuNXJlbV0gLWJvdHRvbS1bNC4yNXJlbV0gYmctd2hpdGUvMTAgcmluZy0xIHJpbmctaW5zZXQgcmluZy13aGl0ZS8xMCBzbTppbnNldC14LTAgc206cm91bmRlZC10LXhsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteC1hdXRvIG1heC13LTJ4bCB0ZXh0LWJhc2UgdGV4dC13aGl0ZSBzbTp0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmUuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC0xMCBhc3BlY3QtWzEwODUvNzMwXSB3LVs0NXJlbV0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQteGwgYmctc2xhdGUtNTAgc2hhZG93LXhsIHNoYWRvdy1ibHVlLTkwMC8yMCBzbTp3LWF1dG8gbGc6bXQtMCBsZzp3LVs2Ny44MTI1cmVtXVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmZWF0dXJlLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzPVwiKG1pbi13aWR0aDogMTAyNHB4KSA2Ny44MTI1cmVtLCAobWluLXdpZHRoOiA2NDBweCkgMTAwdncsIDQ1cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmVsPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1RhYi5QYW5lbHM+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1RhYi5Hcm91cD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJUYWIiLCJjbHN4IiwiQ29udGFpbmVyIiwic2NyZWVuc2hvdEV4cGVuc2VzIiwic2NyZWVuc2hvdFBheXJvbGwiLCJzY3JlZW5zaG90UmVwb3J0aW5nIiwic2NyZWVuc2hvdFZhdFJldHVybnMiLCJmZWF0dXJlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsIlByaW1hcnlGZWF0dXJlcyIsInRhYk9yaWVudGF0aW9uIiwic2V0VGFiT3JpZW50YXRpb24iLCJvbk1lZGlhUXVlcnlDaGFuZ2UiLCJtYXRjaGVzIiwibGdNZWRpYVF1ZXJ5Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VjdGlvbiIsImlkIiwiYXJpYS1sYWJlbGxlZGJ5IiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJwIiwiR3JvdXAiLCJhcyIsInZlcnRpY2FsIiwic2VsZWN0ZWRJbmRleCIsIkxpc3QiLCJtYXAiLCJmZWF0dXJlIiwiZmVhdHVyZUluZGV4IiwiaDMiLCJzcGFuIiwiUGFuZWxzIiwiUGFuZWwiLCJ1bm1vdW50Iiwic3JjIiwiYWx0IiwibGF5b3V0IiwicHJpb3JpdHkiLCJzaXplcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/PrimaryFeatures.jsx\n");

/***/ })

});