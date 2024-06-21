"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tags/documentation",{

/***/ "./lib/tags.js":
/*!*********************!*\
  !*** ./lib/tags.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tagList: function() { return /* binding */ tagList; }\n/* harmony export */ });\n// list of all the tags\nconst tagList = [\n    {\n        name: \"Beginner\",\n        color: \"#FF7F50\",\n        description: \"Projects and resources tailored for those who are just starting out in the field of coding and software development. Ideal for beginners looking to build foundational skills.\"\n    },\n    {\n        name: \"Intermediate\",\n        color: \"#FFD700\",\n        description: \"Projects and resources aimed at developers with a moderate level of experience. Suitable for those who have mastered the basics and are ready to tackle more complex challenges.\"\n    },\n    {\n        name: \"Advanced\",\n        color: \"#8A2BE2\",\n        description: \"High-level projects and resources for experienced developers. These require a deep understanding of coding principles and advanced problem-solving skills.\"\n    },\n    {\n        name: \"Looking for Feedback\",\n        color: \"#1E90FF\",\n        description: \"Projects where the creators are seeking constructive feedback from the community to improve their work. An opportunity to give and receive valuable insights.\"\n    },\n    {\n        name: \"Help Wanted\",\n        color: \"#FF4500\",\n        description: \"Projects in need of assistance from other developers. Perfect for those looking to collaborate and contribute to ongoing projects.\"\n    },\n    {\n        name: \"Documentation\",\n        color: \"#DAA520\",\n        description: \"Comprehensive guides and reference materials that document the functionality, usage, and technical details of projects and technologies.\"\n    },\n    {\n        name: \"Tutorial\",\n        color: \"#ADFF2F\",\n        description: \"Detailed step-by-step guides designed to teach specific skills or technologies. Ideal for learners looking to acquire new knowledge in a structured manner.\"\n    },\n    {\n        name: \"Machine Learning\",\n        color: \"#FFB500\",\n        description: \"Projects and resources focused on the development and application of machine learning algorithms. Includes model building, training, and deployment.\"\n    },\n    {\n        name: \"Data Science\",\n        color: \"#4595B8\",\n        description: \"Projects and resources dedicated to data analysis, visualization, and interpretation. Involves using statistical and computational methods to extract insights from data.\"\n    },\n    {\n        name: \"Web Development\",\n        color: \"#3E7BB6\",\n        description: \"Projects and resources for building and maintaining websites and web applications. Covers both client-side (front-end) and server-side (back-end) development.\"\n    },\n    {\n        name: \"Front-end\",\n        color: \"#FF4081\",\n        description: \"Projects focused on the client side of web development, dealing with the user interface and user experience. Involves HTML, CSS, JavaScript, and related frameworks.\"\n    },\n    {\n        name: \"Back-end\",\n        color: \"#333333\",\n        description: \"Projects focused on server-side development, including database management, server logic, and integration. Involves languages and frameworks like Node.js, Django, Ruby on Rails, etc.\"\n    },\n    {\n        name: \"Full Stack\",\n        color: \"#00D1A1\",\n        description: \"Projects that encompass both front-end and back-end development, providing a comprehensive approach to building complete web applications.\"\n    },\n    {\n        name: \"DevOps\",\n        color: \"#4CAF50\",\n        description: \"Projects and resources related to the practices of DevOps, including continuous integration, continuous delivery (CI/CD), and infrastructure as code. Aimed at improving collaboration and productivity in software development.\"\n    },\n    {\n        name: \"Cloud Computing\",\n        color: \"#FF5722\",\n        description: \"Projects and resources focused on cloud services and infrastructure. Includes topics like cloud storage, cloud computing platforms (AWS, Azure, GCP), and cloud-native application development.\"\n    },\n    {\n        name: \"Mobile Development\",\n        color: \"#FFC107\",\n        description: \"Projects and resources for developing mobile applications for platforms such as Android and iOS. Covers native development, cross-platform development, and mobile UI/UX design.\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGFncy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsdUJBQXVCO0FBQ2hCLE1BQU1BLFVBQVU7SUFDckI7UUFDRUMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGFBQ0U7SUFDSjtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3RhZ3MuanM/YjQ1YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaXN0IG9mIGFsbCB0aGUgdGFnc1xyXG5leHBvcnQgY29uc3QgdGFnTGlzdCA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkJlZ2lubmVyXCIsXHJcbiAgICBjb2xvcjogXCIjRkY3RjUwXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJQcm9qZWN0cyBhbmQgcmVzb3VyY2VzIHRhaWxvcmVkIGZvciB0aG9zZSB3aG8gYXJlIGp1c3Qgc3RhcnRpbmcgb3V0IGluIHRoZSBmaWVsZCBvZiBjb2RpbmcgYW5kIHNvZnR3YXJlIGRldmVsb3BtZW50LiBJZGVhbCBmb3IgYmVnaW5uZXJzIGxvb2tpbmcgdG8gYnVpbGQgZm91bmRhdGlvbmFsIHNraWxscy5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiSW50ZXJtZWRpYXRlXCIsXHJcbiAgICBjb2xvcjogXCIjRkZENzAwXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJQcm9qZWN0cyBhbmQgcmVzb3VyY2VzIGFpbWVkIGF0IGRldmVsb3BlcnMgd2l0aCBhIG1vZGVyYXRlIGxldmVsIG9mIGV4cGVyaWVuY2UuIFN1aXRhYmxlIGZvciB0aG9zZSB3aG8gaGF2ZSBtYXN0ZXJlZCB0aGUgYmFzaWNzIGFuZCBhcmUgcmVhZHkgdG8gdGFja2xlIG1vcmUgY29tcGxleCBjaGFsbGVuZ2VzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBZHZhbmNlZFwiLFxyXG4gICAgY29sb3I6IFwiIzhBMkJFMlwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSGlnaC1sZXZlbCBwcm9qZWN0cyBhbmQgcmVzb3VyY2VzIGZvciBleHBlcmllbmNlZCBkZXZlbG9wZXJzLiBUaGVzZSByZXF1aXJlIGEgZGVlcCB1bmRlcnN0YW5kaW5nIG9mIGNvZGluZyBwcmluY2lwbGVzIGFuZCBhZHZhbmNlZCBwcm9ibGVtLXNvbHZpbmcgc2tpbGxzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMb29raW5nIGZvciBGZWVkYmFja1wiLFxyXG4gICAgY29sb3I6IFwiIzFFOTBGRlwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUHJvamVjdHMgd2hlcmUgdGhlIGNyZWF0b3JzIGFyZSBzZWVraW5nIGNvbnN0cnVjdGl2ZSBmZWVkYmFjayBmcm9tIHRoZSBjb21tdW5pdHkgdG8gaW1wcm92ZSB0aGVpciB3b3JrLiBBbiBvcHBvcnR1bml0eSB0byBnaXZlIGFuZCByZWNlaXZlIHZhbHVhYmxlIGluc2lnaHRzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJIZWxwIFdhbnRlZFwiLFxyXG4gICAgY29sb3I6IFwiI0ZGNDUwMFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUHJvamVjdHMgaW4gbmVlZCBvZiBhc3Npc3RhbmNlIGZyb20gb3RoZXIgZGV2ZWxvcGVycy4gUGVyZmVjdCBmb3IgdGhvc2UgbG9va2luZyB0byBjb2xsYWJvcmF0ZSBhbmQgY29udHJpYnV0ZSB0byBvbmdvaW5nIHByb2plY3RzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJEb2N1bWVudGF0aW9uXCIsXHJcbiAgICBjb2xvcjogXCIjREFBNTIwXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJDb21wcmVoZW5zaXZlIGd1aWRlcyBhbmQgcmVmZXJlbmNlIG1hdGVyaWFscyB0aGF0IGRvY3VtZW50IHRoZSBmdW5jdGlvbmFsaXR5LCB1c2FnZSwgYW5kIHRlY2huaWNhbCBkZXRhaWxzIG9mIHByb2plY3RzIGFuZCB0ZWNobm9sb2dpZXMuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlR1dG9yaWFsXCIsXHJcbiAgICBjb2xvcjogXCIjQURGRjJGXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJEZXRhaWxlZCBzdGVwLWJ5LXN0ZXAgZ3VpZGVzIGRlc2lnbmVkIHRvIHRlYWNoIHNwZWNpZmljIHNraWxscyBvciB0ZWNobm9sb2dpZXMuIElkZWFsIGZvciBsZWFybmVycyBsb29raW5nIHRvIGFjcXVpcmUgbmV3IGtub3dsZWRnZSBpbiBhIHN0cnVjdHVyZWQgbWFubmVyLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJNYWNoaW5lIExlYXJuaW5nXCIsXHJcbiAgICBjb2xvcjogXCIjRkZCNTAwXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJQcm9qZWN0cyBhbmQgcmVzb3VyY2VzIGZvY3VzZWQgb24gdGhlIGRldmVsb3BtZW50IGFuZCBhcHBsaWNhdGlvbiBvZiBtYWNoaW5lIGxlYXJuaW5nIGFsZ29yaXRobXMuIEluY2x1ZGVzIG1vZGVsIGJ1aWxkaW5nLCB0cmFpbmluZywgYW5kIGRlcGxveW1lbnQuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkRhdGEgU2NpZW5jZVwiLFxyXG4gICAgY29sb3I6IFwiIzQ1OTVCOFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUHJvamVjdHMgYW5kIHJlc291cmNlcyBkZWRpY2F0ZWQgdG8gZGF0YSBhbmFseXNpcywgdmlzdWFsaXphdGlvbiwgYW5kIGludGVycHJldGF0aW9uLiBJbnZvbHZlcyB1c2luZyBzdGF0aXN0aWNhbCBhbmQgY29tcHV0YXRpb25hbCBtZXRob2RzIHRvIGV4dHJhY3QgaW5zaWdodHMgZnJvbSBkYXRhLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJXZWIgRGV2ZWxvcG1lbnRcIixcclxuICAgIGNvbG9yOiBcIiMzRTdCQjZcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlByb2plY3RzIGFuZCByZXNvdXJjZXMgZm9yIGJ1aWxkaW5nIGFuZCBtYWludGFpbmluZyB3ZWJzaXRlcyBhbmQgd2ViIGFwcGxpY2F0aW9ucy4gQ292ZXJzIGJvdGggY2xpZW50LXNpZGUgKGZyb250LWVuZCkgYW5kIHNlcnZlci1zaWRlIChiYWNrLWVuZCkgZGV2ZWxvcG1lbnQuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkZyb250LWVuZFwiLFxyXG4gICAgY29sb3I6IFwiI0ZGNDA4MVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUHJvamVjdHMgZm9jdXNlZCBvbiB0aGUgY2xpZW50IHNpZGUgb2Ygd2ViIGRldmVsb3BtZW50LCBkZWFsaW5nIHdpdGggdGhlIHVzZXIgaW50ZXJmYWNlIGFuZCB1c2VyIGV4cGVyaWVuY2UuIEludm9sdmVzIEhUTUwsIENTUywgSmF2YVNjcmlwdCwgYW5kIHJlbGF0ZWQgZnJhbWV3b3Jrcy5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQmFjay1lbmRcIixcclxuICAgIGNvbG9yOiBcIiMzMzMzMzNcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlByb2plY3RzIGZvY3VzZWQgb24gc2VydmVyLXNpZGUgZGV2ZWxvcG1lbnQsIGluY2x1ZGluZyBkYXRhYmFzZSBtYW5hZ2VtZW50LCBzZXJ2ZXIgbG9naWMsIGFuZCBpbnRlZ3JhdGlvbi4gSW52b2x2ZXMgbGFuZ3VhZ2VzIGFuZCBmcmFtZXdvcmtzIGxpa2UgTm9kZS5qcywgRGphbmdvLCBSdWJ5IG9uIFJhaWxzLCBldGMuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkZ1bGwgU3RhY2tcIixcclxuICAgIGNvbG9yOiBcIiMwMEQxQTFcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlByb2plY3RzIHRoYXQgZW5jb21wYXNzIGJvdGggZnJvbnQtZW5kIGFuZCBiYWNrLWVuZCBkZXZlbG9wbWVudCwgcHJvdmlkaW5nIGEgY29tcHJlaGVuc2l2ZSBhcHByb2FjaCB0byBidWlsZGluZyBjb21wbGV0ZSB3ZWIgYXBwbGljYXRpb25zLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJEZXZPcHNcIixcclxuICAgIGNvbG9yOiBcIiM0Q0FGNTBcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlByb2plY3RzIGFuZCByZXNvdXJjZXMgcmVsYXRlZCB0byB0aGUgcHJhY3RpY2VzIG9mIERldk9wcywgaW5jbHVkaW5nIGNvbnRpbnVvdXMgaW50ZWdyYXRpb24sIGNvbnRpbnVvdXMgZGVsaXZlcnkgKENJL0NEKSwgYW5kIGluZnJhc3RydWN0dXJlIGFzIGNvZGUuIEFpbWVkIGF0IGltcHJvdmluZyBjb2xsYWJvcmF0aW9uIGFuZCBwcm9kdWN0aXZpdHkgaW4gc29mdHdhcmUgZGV2ZWxvcG1lbnQuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkNsb3VkIENvbXB1dGluZ1wiLFxyXG4gICAgY29sb3I6IFwiI0ZGNTcyMlwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUHJvamVjdHMgYW5kIHJlc291cmNlcyBmb2N1c2VkIG9uIGNsb3VkIHNlcnZpY2VzIGFuZCBpbmZyYXN0cnVjdHVyZS4gSW5jbHVkZXMgdG9waWNzIGxpa2UgY2xvdWQgc3RvcmFnZSwgY2xvdWQgY29tcHV0aW5nIHBsYXRmb3JtcyAoQVdTLCBBenVyZSwgR0NQKSwgYW5kIGNsb3VkLW5hdGl2ZSBhcHBsaWNhdGlvbiBkZXZlbG9wbWVudC5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTW9iaWxlIERldmVsb3BtZW50XCIsXHJcbiAgICBjb2xvcjogXCIjRkZDMTA3XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJQcm9qZWN0cyBhbmQgcmVzb3VyY2VzIGZvciBkZXZlbG9waW5nIG1vYmlsZSBhcHBsaWNhdGlvbnMgZm9yIHBsYXRmb3JtcyBzdWNoIGFzIEFuZHJvaWQgYW5kIGlPUy4gQ292ZXJzIG5hdGl2ZSBkZXZlbG9wbWVudCwgY3Jvc3MtcGxhdGZvcm0gZGV2ZWxvcG1lbnQsIGFuZCBtb2JpbGUgVUkvVVggZGVzaWduLlwiLFxyXG4gIH0sXHJcbl07XHJcbiJdLCJuYW1lcyI6WyJ0YWdMaXN0IiwibmFtZSIsImNvbG9yIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/tags.js\n"));

/***/ })

});