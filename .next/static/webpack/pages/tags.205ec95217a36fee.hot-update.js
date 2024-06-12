"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tags",{

/***/ "./lib/tags.js":
/*!*********************!*\
  !*** ./lib/tags.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tagList: function() { return /* binding */ tagList; }\n/* harmony export */ });\n// list of all the tags\nconst tagList = [\n    {\n        name: \"Beginner\",\n        color: \"#FF7F50\",\n        description: \"Projects and resources tailored for those who are just starting out in the field of coding and software development. Ideal for beginners looking to build foundational skills.\"\n    },\n    {\n        name: \"Intermediate\",\n        color: \"#FFD700\",\n        description: \"Projects and resources aimed at developers with a moderate level of experience. Suitable for those who have mastered the basics and are ready to tackle more complex challenges.\"\n    },\n    {\n        name: \"Advanced\",\n        color: \"#8A2BE2\",\n        description: \"High-level projects and resources for experienced developers. These require a deep understanding of coding principles and advanced problem-solving skills.\"\n    },\n    {\n        name: \"Looking for Feedback\",\n        color: \"#1E90FF\",\n        description: \"Projects where the creators are seeking constructive feedback from the community to improve their work. An opportunity to give and receive valuable insights.\"\n    },\n    {\n        name: \"Help Wanted\",\n        color: \"#FF4500\",\n        description: \"Projects in need of assistance from other developers. Perfect for those looking to collaborate and contribute to ongoing projects.\"\n    },\n    {\n        name: \"Documentation\",\n        color: \"#DAA520\",\n        description: \"Comprehensive guides and reference materials that document the functionality, usage, and technical details of projects and technologies.\"\n    },\n    {\n        name: \"Tutorial\",\n        color: \"#ADFF2F\",\n        description: \"Detailed step-by-step guides designed to teach specific skills or technologies. Ideal for learners looking to acquire new knowledge in a structured manner.\"\n    },\n    {\n        name: \"Article\",\n        color: \"#FF69B4\",\n        description: \"In-depth articles covering a wide range of tech-related topics. These can include opinion pieces, research findings, and detailed explorations of specific technologies.\"\n    },\n    {\n        name: \"Machine Learning\",\n        color: \"#FFB500\",\n        description: \"Projects and resources focused on the development and application of machine learning algorithms. Includes model building, training, and deployment.\"\n    },\n    {\n        name: \"Data Science\",\n        color: \"#4595B8\",\n        description: \"Projects and resources dedicated to data analysis, visualization, and interpretation. Involves using statistical and computational methods to extract insights from data.\"\n    },\n    {\n        name: \"Web Development\",\n        color: \"#3E7BB6\",\n        description: \"Projects and resources for building and maintaining websites and web applications. Covers both client-side (front-end) and server-side (back-end) development.\"\n    },\n    {\n        name: \"Front-end\",\n        color: \"#FF4081\",\n        description: \"Projects focused on the client side of web development, dealing with the user interface and user experience. Involves HTML, CSS, JavaScript, and related frameworks.\"\n    },\n    {\n        name: \"Back-end\",\n        color: \"#333333\",\n        description: \"Projects focused on server-side development, including database management, server logic, and integration. Involves languages and frameworks like Node.js, Django, Ruby on Rails, etc.\"\n    },\n    {\n        name: \"Full Stack\",\n        color: \"#00D1A1\",\n        description: \"Projects that encompass both front-end and back-end development, providing a comprehensive approach to building complete web applications.\"\n    },\n    {\n        name: \"DevOps\",\n        color: \"#4CAF50\",\n        description: \"Projects and resources related to the practices of DevOps, including continuous integration, continuous delivery (CI/CD), and infrastructure as code. Aimed at improving collaboration and productivity in software development.\"\n    },\n    {\n        name: \"Cloud Computing\",\n        color: \"#FF5722\",\n        description: \"Projects and resources focused on cloud services and infrastructure. Includes topics like cloud storage, cloud computing platforms (AWS, Azure, GCP), and cloud-native application development.\"\n    },\n    {\n        name: \"Mobile Development\",\n        color: \"#FFC107\",\n        description: \"Projects and resources for developing mobile applications for platforms such as Android and iOS. Covers native development, cross-platform development, and mobile UI/UX design.\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGFncy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsdUJBQXVCO0FBQ2hCLE1BQU1BLFVBQVU7SUFDckI7UUFDRUMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7Q0FDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi90YWdzLmpzP2I0NWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGlzdCBvZiBhbGwgdGhlIHRhZ3NcclxuZXhwb3J0IGNvbnN0IHRhZ0xpc3QgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJCZWdpbm5lclwiLFxyXG4gICAgY29sb3I6IFwiI0ZGN0Y1MFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUHJvamVjdHMgYW5kIHJlc291cmNlcyB0YWlsb3JlZCBmb3IgdGhvc2Ugd2hvIGFyZSBqdXN0IHN0YXJ0aW5nIG91dCBpbiB0aGUgZmllbGQgb2YgY29kaW5nIGFuZCBzb2Z0d2FyZSBkZXZlbG9wbWVudC4gSWRlYWwgZm9yIGJlZ2lubmVycyBsb29raW5nIHRvIGJ1aWxkIGZvdW5kYXRpb25hbCBza2lsbHMuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkludGVybWVkaWF0ZVwiLFxyXG4gICAgY29sb3I6IFwiI0ZGRDcwMFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUHJvamVjdHMgYW5kIHJlc291cmNlcyBhaW1lZCBhdCBkZXZlbG9wZXJzIHdpdGggYSBtb2RlcmF0ZSBsZXZlbCBvZiBleHBlcmllbmNlLiBTdWl0YWJsZSBmb3IgdGhvc2Ugd2hvIGhhdmUgbWFzdGVyZWQgdGhlIGJhc2ljcyBhbmQgYXJlIHJlYWR5IHRvIHRhY2tsZSBtb3JlIGNvbXBsZXggY2hhbGxlbmdlcy5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQWR2YW5jZWRcIixcclxuICAgIGNvbG9yOiBcIiM4QTJCRTJcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkhpZ2gtbGV2ZWwgcHJvamVjdHMgYW5kIHJlc291cmNlcyBmb3IgZXhwZXJpZW5jZWQgZGV2ZWxvcGVycy4gVGhlc2UgcmVxdWlyZSBhIGRlZXAgdW5kZXJzdGFuZGluZyBvZiBjb2RpbmcgcHJpbmNpcGxlcyBhbmQgYWR2YW5jZWQgcHJvYmxlbS1zb2x2aW5nIHNraWxscy5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTG9va2luZyBmb3IgRmVlZGJhY2tcIixcclxuICAgIGNvbG9yOiBcIiMxRTkwRkZcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlByb2plY3RzIHdoZXJlIHRoZSBjcmVhdG9ycyBhcmUgc2Vla2luZyBjb25zdHJ1Y3RpdmUgZmVlZGJhY2sgZnJvbSB0aGUgY29tbXVuaXR5IHRvIGltcHJvdmUgdGhlaXIgd29yay4gQW4gb3Bwb3J0dW5pdHkgdG8gZ2l2ZSBhbmQgcmVjZWl2ZSB2YWx1YWJsZSBpbnNpZ2h0cy5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiSGVscCBXYW50ZWRcIixcclxuICAgIGNvbG9yOiBcIiNGRjQ1MDBcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlByb2plY3RzIGluIG5lZWQgb2YgYXNzaXN0YW5jZSBmcm9tIG90aGVyIGRldmVsb3BlcnMuIFBlcmZlY3QgZm9yIHRob3NlIGxvb2tpbmcgdG8gY29sbGFib3JhdGUgYW5kIGNvbnRyaWJ1dGUgdG8gb25nb2luZyBwcm9qZWN0cy5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRG9jdW1lbnRhdGlvblwiLFxyXG4gICAgY29sb3I6IFwiI0RBQTUyMFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQ29tcHJlaGVuc2l2ZSBndWlkZXMgYW5kIHJlZmVyZW5jZSBtYXRlcmlhbHMgdGhhdCBkb2N1bWVudCB0aGUgZnVuY3Rpb25hbGl0eSwgdXNhZ2UsIGFuZCB0ZWNobmljYWwgZGV0YWlscyBvZiBwcm9qZWN0cyBhbmQgdGVjaG5vbG9naWVzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJUdXRvcmlhbFwiLFxyXG4gICAgY29sb3I6IFwiI0FERkYyRlwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiRGV0YWlsZWQgc3RlcC1ieS1zdGVwIGd1aWRlcyBkZXNpZ25lZCB0byB0ZWFjaCBzcGVjaWZpYyBza2lsbHMgb3IgdGVjaG5vbG9naWVzLiBJZGVhbCBmb3IgbGVhcm5lcnMgbG9va2luZyB0byBhY3F1aXJlIG5ldyBrbm93bGVkZ2UgaW4gYSBzdHJ1Y3R1cmVkIG1hbm5lci5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQXJ0aWNsZVwiLFxyXG4gICAgY29sb3I6IFwiI0ZGNjlCNFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSW4tZGVwdGggYXJ0aWNsZXMgY292ZXJpbmcgYSB3aWRlIHJhbmdlIG9mIHRlY2gtcmVsYXRlZCB0b3BpY3MuIFRoZXNlIGNhbiBpbmNsdWRlIG9waW5pb24gcGllY2VzLCByZXNlYXJjaCBmaW5kaW5ncywgYW5kIGRldGFpbGVkIGV4cGxvcmF0aW9ucyBvZiBzcGVjaWZpYyB0ZWNobm9sb2dpZXMuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk1hY2hpbmUgTGVhcm5pbmdcIixcclxuICAgIGNvbG9yOiBcIiNGRkI1MDBcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlByb2plY3RzIGFuZCByZXNvdXJjZXMgZm9jdXNlZCBvbiB0aGUgZGV2ZWxvcG1lbnQgYW5kIGFwcGxpY2F0aW9uIG9mIG1hY2hpbmUgbGVhcm5pbmcgYWxnb3JpdGhtcy4gSW5jbHVkZXMgbW9kZWwgYnVpbGRpbmcsIHRyYWluaW5nLCBhbmQgZGVwbG95bWVudC5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRGF0YSBTY2llbmNlXCIsXHJcbiAgICBjb2xvcjogXCIjNDU5NUI4XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJQcm9qZWN0cyBhbmQgcmVzb3VyY2VzIGRlZGljYXRlZCB0byBkYXRhIGFuYWx5c2lzLCB2aXN1YWxpemF0aW9uLCBhbmQgaW50ZXJwcmV0YXRpb24uIEludm9sdmVzIHVzaW5nIHN0YXRpc3RpY2FsIGFuZCBjb21wdXRhdGlvbmFsIG1ldGhvZHMgdG8gZXh0cmFjdCBpbnNpZ2h0cyBmcm9tIGRhdGEuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIldlYiBEZXZlbG9wbWVudFwiLFxyXG4gICAgY29sb3I6IFwiIzNFN0JCNlwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUHJvamVjdHMgYW5kIHJlc291cmNlcyBmb3IgYnVpbGRpbmcgYW5kIG1haW50YWluaW5nIHdlYnNpdGVzIGFuZCB3ZWIgYXBwbGljYXRpb25zLiBDb3ZlcnMgYm90aCBjbGllbnQtc2lkZSAoZnJvbnQtZW5kKSBhbmQgc2VydmVyLXNpZGUgKGJhY2stZW5kKSBkZXZlbG9wbWVudC5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRnJvbnQtZW5kXCIsXHJcbiAgICBjb2xvcjogXCIjRkY0MDgxXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJQcm9qZWN0cyBmb2N1c2VkIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB3ZWIgZGV2ZWxvcG1lbnQsIGRlYWxpbmcgd2l0aCB0aGUgdXNlciBpbnRlcmZhY2UgYW5kIHVzZXIgZXhwZXJpZW5jZS4gSW52b2x2ZXMgSFRNTCwgQ1NTLCBKYXZhU2NyaXB0LCBhbmQgcmVsYXRlZCBmcmFtZXdvcmtzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJCYWNrLWVuZFwiLFxyXG4gICAgY29sb3I6IFwiIzMzMzMzM1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUHJvamVjdHMgZm9jdXNlZCBvbiBzZXJ2ZXItc2lkZSBkZXZlbG9wbWVudCwgaW5jbHVkaW5nIGRhdGFiYXNlIG1hbmFnZW1lbnQsIHNlcnZlciBsb2dpYywgYW5kIGludGVncmF0aW9uLiBJbnZvbHZlcyBsYW5ndWFnZXMgYW5kIGZyYW1ld29ya3MgbGlrZSBOb2RlLmpzLCBEamFuZ28sIFJ1Ynkgb24gUmFpbHMsIGV0Yy5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRnVsbCBTdGFja1wiLFxyXG4gICAgY29sb3I6IFwiIzAwRDFBMVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUHJvamVjdHMgdGhhdCBlbmNvbXBhc3MgYm90aCBmcm9udC1lbmQgYW5kIGJhY2stZW5kIGRldmVsb3BtZW50LCBwcm92aWRpbmcgYSBjb21wcmVoZW5zaXZlIGFwcHJvYWNoIHRvIGJ1aWxkaW5nIGNvbXBsZXRlIHdlYiBhcHBsaWNhdGlvbnMuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkRldk9wc1wiLFxyXG4gICAgY29sb3I6IFwiIzRDQUY1MFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUHJvamVjdHMgYW5kIHJlc291cmNlcyByZWxhdGVkIHRvIHRoZSBwcmFjdGljZXMgb2YgRGV2T3BzLCBpbmNsdWRpbmcgY29udGludW91cyBpbnRlZ3JhdGlvbiwgY29udGludW91cyBkZWxpdmVyeSAoQ0kvQ0QpLCBhbmQgaW5mcmFzdHJ1Y3R1cmUgYXMgY29kZS4gQWltZWQgYXQgaW1wcm92aW5nIGNvbGxhYm9yYXRpb24gYW5kIHByb2R1Y3Rpdml0eSBpbiBzb2Z0d2FyZSBkZXZlbG9wbWVudC5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ2xvdWQgQ29tcHV0aW5nXCIsXHJcbiAgICBjb2xvcjogXCIjRkY1NzIyXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJQcm9qZWN0cyBhbmQgcmVzb3VyY2VzIGZvY3VzZWQgb24gY2xvdWQgc2VydmljZXMgYW5kIGluZnJhc3RydWN0dXJlLiBJbmNsdWRlcyB0b3BpY3MgbGlrZSBjbG91ZCBzdG9yYWdlLCBjbG91ZCBjb21wdXRpbmcgcGxhdGZvcm1zIChBV1MsIEF6dXJlLCBHQ1ApLCBhbmQgY2xvdWQtbmF0aXZlIGFwcGxpY2F0aW9uIGRldmVsb3BtZW50LlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJNb2JpbGUgRGV2ZWxvcG1lbnRcIixcclxuICAgIGNvbG9yOiBcIiNGRkMxMDdcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlByb2plY3RzIGFuZCByZXNvdXJjZXMgZm9yIGRldmVsb3BpbmcgbW9iaWxlIGFwcGxpY2F0aW9ucyBmb3IgcGxhdGZvcm1zIHN1Y2ggYXMgQW5kcm9pZCBhbmQgaU9TLiBDb3ZlcnMgbmF0aXZlIGRldmVsb3BtZW50LCBjcm9zcy1wbGF0Zm9ybSBkZXZlbG9wbWVudCwgYW5kIG1vYmlsZSBVSS9VWCBkZXNpZ24uXCIsXHJcbiAgfSxcclxuXTtcclxuIl0sIm5hbWVzIjpbInRhZ0xpc3QiLCJuYW1lIiwiY29sb3IiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/tags.js\n"));

/***/ })

});