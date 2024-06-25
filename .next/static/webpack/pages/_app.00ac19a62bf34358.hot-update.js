"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/firebase.js":
/*!*************************!*\
  !*** ./lib/firebase.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   STATE_CHANGED: function() { return /* binding */ STATE_CHANGED; },\n/* harmony export */   auth: function() { return /* binding */ auth; },\n/* harmony export */   fetchPostsByTech: function() { return /* binding */ fetchPostsByTech; },\n/* harmony export */   firestore: function() { return /* binding */ firestore; },\n/* harmony export */   getUserWithUsername: function() { return /* binding */ getUserWithUsername; },\n/* harmony export */   googleAuthProvider: function() { return /* binding */ googleAuthProvider; },\n/* harmony export */   increment: function() { return /* binding */ increment; },\n/* harmony export */   postToJSON: function() { return /* binding */ postToJSON; },\n/* harmony export */   serverTimestamp: function() { return /* reexport safe */ firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.serverTimestamp; },\n/* harmony export */   storage: function() { return /* binding */ storage; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n// Import the functions you need from the SDKs you need\n // Import initializeApp from Firebase\n // Import authentication functions from Firebase\n // Import Firestore functions\n // Import storage functions from Firebase\nconst firebaseConfig = {\n    apiKey: \"AIzaSyA89wCoxsf8ZjjM0BxTbQt73DoTVDX44IA\",\n    authDomain: \"dev-circle-1b2a0.firebaseapp.com\",\n    projectId: \"dev-circle-1b2a0\",\n    storageBucket: \"dev-circle-1b2a0.appspot.com\",\n    messagingSenderId: \"147806722079\",\n    appId: \"1:147806722079:web:6218067643169a67a09d2a\",\n    measurementId: \"G-845JDMS4TV\"\n};\n// Initialize Firebase with the configuration\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n// Initialize Firebase services\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app); // Initialize Firebase Authentication\nconst googleAuthProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider(); // Initialize Google Auth Provider\nconst firestore = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app); // Initialize Firestore\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app); // Initialize Firebase Storage\nconst STATE_CHANGED = \"state_changed\";\nconst increment = firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.FieldValue.increment;\n// Export the services for use in other parts of your app\n\n// Helper functions\n/**`\r\n * Gets a users/{uid} document with username\r\n * @param  {string} username\r\n */ async function getUserWithUsername(username) {\n    const usersRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(firestore, \"users\"); // Reference to the \"users\" collection\n    const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(usersRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"username\", \"==\", username), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.limit)(1)); // Create a query to find the user with the specified username\n    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(q); // Execute the query\n    const userDoc = querySnapshot.docs[0]; // Get the first document from the query result\n    return userDoc; // Return the user document\n}\n/**`\r\n * Converts a firestore document to JSON\r\n * @param  {DocumentSnapshot} doc\r\n */ function postToJSON(doc) {\n    const data = doc.data(); // Get the data from the document\n    return {\n        ...data,\n        // Gotcha! Firestore timestamp NOT serializable to JSON. Must convert to milliseconds\n        createdAt: data.createdAt.toMillis(),\n        updatedAt: data.updatedAt.toMillis()\n    };\n}\n// Function to normalize tech names from URL parameters to database format\nfunction normalizeTechName(name) {\n    return name.split(\"-\").map((word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(\"\");\n}\n/**`\r\n * Fetches all posts with a specific technology\r\n * @param  {string} techName\r\n */ async function fetchPostsByTech(techName) {\n    const postsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(firestore, \"posts\");\n    const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(postsCollection, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"published\", \"==\", true), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"tech\", \"array-contains\", normalizeTechName(techName)));\n    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(q);\n    const posts = querySnapshot.docs.map((doc)=>({\n            id: doc.id,\n            ...doc.data()\n        }));\n    return posts;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmlyZWJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDVixDQUFDLHFDQUFxQztBQUN2QixDQUFDLGdEQUFnRDtBQVVqRixDQUFDLDZCQUE2QjtBQUNaLENBQUMseUNBQXlDO0FBRXhGLE1BQU1ZLGlCQUFpQjtJQUNyQkMsUUFBUUMseUNBQXdDO0lBQ2hERyxZQUFZO0lBQ1pDLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxtQkFBbUI7SUFDbkJDLE9BQU87SUFDUEMsZUFBZTtBQUNqQjtBQUVBLDZDQUE2QztBQUM3QyxNQUFNQyxNQUFNdkIsMkRBQWFBLENBQUNZO0FBRTFCLCtCQUErQjtBQUMvQixNQUFNWSxPQUFPdkIsc0RBQU9BLENBQUNzQixNQUFNLHFDQUFxQztBQUNoRSxNQUFNRSxxQkFBcUIsSUFBSXZCLDZEQUFrQkEsSUFBSSxrQ0FBa0M7QUFDdkYsTUFBTXdCLFlBQVl2QixnRUFBWUEsQ0FBQ29CLE1BQU0sdUJBQXVCO0FBQzVELE1BQU1JLFVBQVVoQiw0REFBVUEsQ0FBQ1ksTUFBTSw4QkFBOEI7QUFDL0QsTUFBTUssZ0JBQWdCO0FBQ3RCLE1BQU1DLFlBQVluQiwwREFBVUEsQ0FBQ21CLFNBQVM7QUFFdEMseURBQXlEO0FBU3ZEO0FBRUYsbUJBQW1CO0FBRW5COzs7Q0FHQyxHQUNNLGVBQWVDLG9CQUFvQkMsUUFBUTtJQUNoRCxNQUFNQyxXQUFXNUIsOERBQVVBLENBQUNzQixXQUFXLFVBQVUsc0NBQXNDO0lBQ3ZGLE1BQU1PLElBQUk1Qix5REFBS0EsQ0FBQzJCLFVBQVUxQix5REFBS0EsQ0FBQyxZQUFZLE1BQU15QixXQUFXeEIseURBQUtBLENBQUMsS0FBSyw4REFBOEQ7SUFDdEksTUFBTTJCLGdCQUFnQixNQUFNMUIsMkRBQU9BLENBQUN5QixJQUFJLG9CQUFvQjtJQUM1RCxNQUFNRSxVQUFVRCxjQUFjRSxJQUFJLENBQUMsRUFBRSxFQUFFLCtDQUErQztJQUN0RixPQUFPRCxTQUFTLDJCQUEyQjtBQUM3QztBQUVBOzs7Q0FHQyxHQUNNLFNBQVNFLFdBQVdDLEdBQUc7SUFDNUIsTUFBTUMsT0FBT0QsSUFBSUMsSUFBSSxJQUFJLGlDQUFpQztJQUMxRCxPQUFPO1FBQ0wsR0FBR0EsSUFBSTtRQUNQLHFGQUFxRjtRQUNyRkMsV0FBV0QsS0FBS0MsU0FBUyxDQUFDQyxRQUFRO1FBQ2xDQyxXQUFXSCxLQUFLRyxTQUFTLENBQUNELFFBQVE7SUFDcEM7QUFDRjtBQUVBLDBFQUEwRTtBQUMxRSxTQUFTRSxrQkFBa0JDLElBQUk7SUFDN0IsT0FBT0EsS0FDSkMsS0FBSyxDQUFDLEtBQ05DLEdBQUcsQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxNQUFNLENBQUMsR0FBR0MsV0FBVyxLQUFLRixLQUFLRyxLQUFLLENBQUMsR0FBR0MsV0FBVyxJQUN0RUMsSUFBSSxDQUFDO0FBQ1Y7QUFFQTs7O0NBR0MsR0FDTSxlQUFlQyxpQkFBaUJDLFFBQVE7SUFDN0MsTUFBTUMsa0JBQWtCbkQsOERBQVVBLENBQUNzQixXQUFXO0lBQzlDLE1BQU1PLElBQUk1Qix5REFBS0EsQ0FDYmtELGlCQUNBakQseURBQUtBLENBQUMsYUFBYSxNQUFNLE9BQ3pCQSx5REFBS0EsQ0FBQyxRQUFRLGtCQUFrQnFDLGtCQUFrQlc7SUFFcEQsTUFBTXBCLGdCQUFnQixNQUFNMUIsMkRBQU9BLENBQUN5QjtJQUNwQyxNQUFNdUIsUUFBUXRCLGNBQWNFLElBQUksQ0FBQ1UsR0FBRyxDQUFDLENBQUNSLE1BQVM7WUFDN0NtQixJQUFJbkIsSUFBSW1CLEVBQUU7WUFDVixHQUFHbkIsSUFBSUMsSUFBSSxFQUFFO1FBQ2Y7SUFDQSxPQUFPaUI7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvZmlyZWJhc2UuanM/YWI0NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7IC8vIEltcG9ydCBpbml0aWFsaXplQXBwIGZyb20gRmlyZWJhc2VcclxuaW1wb3J0IHsgZ2V0QXV0aCwgR29vZ2xlQXV0aFByb3ZpZGVyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjsgLy8gSW1wb3J0IGF1dGhlbnRpY2F0aW9uIGZ1bmN0aW9ucyBmcm9tIEZpcmViYXNlXHJcbmltcG9ydCB7XHJcbiAgZ2V0RmlyZXN0b3JlLFxyXG4gIGNvbGxlY3Rpb24sXHJcbiAgcXVlcnksXHJcbiAgd2hlcmUsXHJcbiAgbGltaXQsXHJcbiAgZ2V0RG9jcyxcclxuICBzZXJ2ZXJUaW1lc3RhbXAsXHJcbiAgRmllbGRWYWx1ZSxcclxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7IC8vIEltcG9ydCBGaXJlc3RvcmUgZnVuY3Rpb25zXHJcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiOyAvLyBJbXBvcnQgc3RvcmFnZSBmdW5jdGlvbnMgZnJvbSBGaXJlYmFzZVxyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IFwiZGV2LWNpcmNsZS0xYjJhMC5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwiZGV2LWNpcmNsZS0xYjJhMFwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiZGV2LWNpcmNsZS0xYjJhMC5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjE0NzgwNjcyMjA3OVwiLFxyXG4gIGFwcElkOiBcIjE6MTQ3ODA2NzIyMDc5OndlYjo2MjE4MDY3NjQzMTY5YTY3YTA5ZDJhXCIsXHJcbiAgbWVhc3VyZW1lbnRJZDogXCJHLTg0NUpETVM0VFZcIixcclxufTtcclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2Ugd2l0aCB0aGUgY29uZmlndXJhdGlvblxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2Ugc2VydmljZXNcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTsgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZSBBdXRoZW50aWNhdGlvblxyXG5jb25zdCBnb29nbGVBdXRoUHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7IC8vIEluaXRpYWxpemUgR29vZ2xlIEF1dGggUHJvdmlkZXJcclxuY29uc3QgZmlyZXN0b3JlID0gZ2V0RmlyZXN0b3JlKGFwcCk7IC8vIEluaXRpYWxpemUgRmlyZXN0b3JlXHJcbmNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKGFwcCk7IC8vIEluaXRpYWxpemUgRmlyZWJhc2UgU3RvcmFnZVxyXG5jb25zdCBTVEFURV9DSEFOR0VEID0gXCJzdGF0ZV9jaGFuZ2VkXCI7XHJcbmNvbnN0IGluY3JlbWVudCA9IEZpZWxkVmFsdWUuaW5jcmVtZW50O1xyXG5cclxuLy8gRXhwb3J0IHRoZSBzZXJ2aWNlcyBmb3IgdXNlIGluIG90aGVyIHBhcnRzIG9mIHlvdXIgYXBwXHJcbmV4cG9ydCB7XHJcbiAgYXV0aCxcclxuICBnb29nbGVBdXRoUHJvdmlkZXIsXHJcbiAgZmlyZXN0b3JlLFxyXG4gIHN0b3JhZ2UsXHJcbiAgc2VydmVyVGltZXN0YW1wLFxyXG4gIFNUQVRFX0NIQU5HRUQsXHJcbiAgaW5jcmVtZW50LFxyXG59O1xyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uc1xyXG5cclxuLyoqYFxyXG4gKiBHZXRzIGEgdXNlcnMve3VpZH0gZG9jdW1lbnQgd2l0aCB1c2VybmFtZVxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVzZXJuYW1lXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcldpdGhVc2VybmFtZSh1c2VybmFtZSkge1xyXG4gIGNvbnN0IHVzZXJzUmVmID0gY29sbGVjdGlvbihmaXJlc3RvcmUsIFwidXNlcnNcIik7IC8vIFJlZmVyZW5jZSB0byB0aGUgXCJ1c2Vyc1wiIGNvbGxlY3Rpb25cclxuICBjb25zdCBxID0gcXVlcnkodXNlcnNSZWYsIHdoZXJlKFwidXNlcm5hbWVcIiwgXCI9PVwiLCB1c2VybmFtZSksIGxpbWl0KDEpKTsgLy8gQ3JlYXRlIGEgcXVlcnkgdG8gZmluZCB0aGUgdXNlciB3aXRoIHRoZSBzcGVjaWZpZWQgdXNlcm5hbWVcclxuICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTsgLy8gRXhlY3V0ZSB0aGUgcXVlcnlcclxuICBjb25zdCB1c2VyRG9jID0gcXVlcnlTbmFwc2hvdC5kb2NzWzBdOyAvLyBHZXQgdGhlIGZpcnN0IGRvY3VtZW50IGZyb20gdGhlIHF1ZXJ5IHJlc3VsdFxyXG4gIHJldHVybiB1c2VyRG9jOyAvLyBSZXR1cm4gdGhlIHVzZXIgZG9jdW1lbnRcclxufVxyXG5cclxuLyoqYFxyXG4gKiBDb252ZXJ0cyBhIGZpcmVzdG9yZSBkb2N1bWVudCB0byBKU09OXHJcbiAqIEBwYXJhbSAge0RvY3VtZW50U25hcHNob3R9IGRvY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RUb0pTT04oZG9jKSB7XHJcbiAgY29uc3QgZGF0YSA9IGRvYy5kYXRhKCk7IC8vIEdldCB0aGUgZGF0YSBmcm9tIHRoZSBkb2N1bWVudFxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5kYXRhLCAvLyBTcHJlYWQgdGhlIGRhdGFcclxuICAgIC8vIEdvdGNoYSEgRmlyZXN0b3JlIHRpbWVzdGFtcCBOT1Qgc2VyaWFsaXphYmxlIHRvIEpTT04uIE11c3QgY29udmVydCB0byBtaWxsaXNlY29uZHNcclxuICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQudG9NaWxsaXMoKSwgLy8gQ29udmVydCBjcmVhdGVkQXQgdGltZXN0YW1wIHRvIG1pbGxpc2Vjb25kc1xyXG4gICAgdXBkYXRlZEF0OiBkYXRhLnVwZGF0ZWRBdC50b01pbGxpcygpLCAvLyBDb252ZXJ0IHVwZGF0ZWRBdCB0aW1lc3RhbXAgdG8gbWlsbGlzZWNvbmRzXHJcbiAgfTtcclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdG8gbm9ybWFsaXplIHRlY2ggbmFtZXMgZnJvbSBVUkwgcGFyYW1ldGVycyB0byBkYXRhYmFzZSBmb3JtYXRcclxuZnVuY3Rpb24gbm9ybWFsaXplVGVjaE5hbWUobmFtZSkge1xyXG4gIHJldHVybiBuYW1lXHJcbiAgICAuc3BsaXQoXCItXCIpXHJcbiAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgLmpvaW4oXCJcIik7XHJcbn1cclxuXHJcbi8qKmBcclxuICogRmV0Y2hlcyBhbGwgcG9zdHMgd2l0aCBhIHNwZWNpZmljIHRlY2hub2xvZ3lcclxuICogQHBhcmFtICB7c3RyaW5nfSB0ZWNoTmFtZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUG9zdHNCeVRlY2godGVjaE5hbWUpIHtcclxuICBjb25zdCBwb3N0c0NvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKGZpcmVzdG9yZSwgXCJwb3N0c1wiKTtcclxuICBjb25zdCBxID0gcXVlcnkoXHJcbiAgICBwb3N0c0NvbGxlY3Rpb24sXHJcbiAgICB3aGVyZShcInB1Ymxpc2hlZFwiLCBcIj09XCIsIHRydWUpLFxyXG4gICAgd2hlcmUoXCJ0ZWNoXCIsIFwiYXJyYXktY29udGFpbnNcIiwgbm9ybWFsaXplVGVjaE5hbWUodGVjaE5hbWUpKVxyXG4gICk7XHJcbiAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XHJcbiAgY29uc3QgcG9zdHMgPSBxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICBpZDogZG9jLmlkLFxyXG4gICAgLi4uZG9jLmRhdGEoKSxcclxuICB9KSk7XHJcbiAgcmV0dXJuIHBvc3RzO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsImdldEZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIndoZXJlIiwibGltaXQiLCJnZXREb2NzIiwic2VydmVyVGltZXN0YW1wIiwiRmllbGRWYWx1ZSIsImdldFN0b3JhZ2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZIiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImF1dGgiLCJnb29nbGVBdXRoUHJvdmlkZXIiLCJmaXJlc3RvcmUiLCJzdG9yYWdlIiwiU1RBVEVfQ0hBTkdFRCIsImluY3JlbWVudCIsImdldFVzZXJXaXRoVXNlcm5hbWUiLCJ1c2VybmFtZSIsInVzZXJzUmVmIiwicSIsInF1ZXJ5U25hcHNob3QiLCJ1c2VyRG9jIiwiZG9jcyIsInBvc3RUb0pTT04iLCJkb2MiLCJkYXRhIiwiY3JlYXRlZEF0IiwidG9NaWxsaXMiLCJ1cGRhdGVkQXQiLCJub3JtYWxpemVUZWNoTmFtZSIsIm5hbWUiLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwidG9Mb3dlckNhc2UiLCJqb2luIiwiZmV0Y2hQb3N0c0J5VGVjaCIsInRlY2hOYW1lIiwicG9zdHNDb2xsZWN0aW9uIiwicG9zdHMiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/firebase.js\n"));

/***/ })

});