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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   STATE_CHANGED: function() { return /* binding */ STATE_CHANGED; },\n/* harmony export */   auth: function() { return /* binding */ auth; },\n/* harmony export */   fetchPostsByTech: function() { return /* binding */ fetchPostsByTech; },\n/* harmony export */   firestore: function() { return /* binding */ firestore; },\n/* harmony export */   getUserWithUsername: function() { return /* binding */ getUserWithUsername; },\n/* harmony export */   googleAuthProvider: function() { return /* binding */ googleAuthProvider; },\n/* harmony export */   increment: function() { return /* binding */ increment; },\n/* harmony export */   normalizeTechName: function() { return /* binding */ normalizeTechName; },\n/* harmony export */   postToJSON: function() { return /* binding */ postToJSON; },\n/* harmony export */   serverTimestamp: function() { return /* reexport safe */ firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.serverTimestamp; },\n/* harmony export */   storage: function() { return /* binding */ storage; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var _tech__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tech */ \"./lib/tech.js\");\n// Import the functions you need from the SDKs you need\n // Import initializeApp from Firebase\n // Import authentication functions from Firebase\n // Import Firestore functions\n // Import storage functions from Firebase\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyA89wCoxsf8ZjjM0BxTbQt73DoTVDX44IA\",\n    authDomain: \"dev-circle-1b2a0.firebaseapp.com\",\n    projectId: \"dev-circle-1b2a0\",\n    storageBucket: \"dev-circle-1b2a0.appspot.com\",\n    messagingSenderId: \"147806722079\",\n    appId: \"1:147806722079:web:6218067643169a67a09d2a\",\n    measurementId: \"G-845JDMS4TV\"\n};\n// Initialize Firebase with the configuration\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n// Initialize Firebase services\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app); // Initialize Firebase Authentication\nconst googleAuthProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider(); // Initialize Google Auth Provider\nconst firestore = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app); // Initialize Firestore\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app); // Initialize Firebase Storage\nconst STATE_CHANGED = \"state_changed\";\nconst increment = firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.FieldValue.increment;\n// Export the services for use in other parts of your app\n\n// Helper functions\n/**`\r\n * Gets a users/{uid} document with username\r\n * @param  {string} username\r\n */ async function getUserWithUsername(username) {\n    const usersRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(firestore, \"users\"); // Reference to the \"users\" collection\n    const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(usersRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"username\", \"==\", username), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.limit)(1)); // Create a query to find the user with the specified username\n    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(q); // Execute the query\n    const userDoc = querySnapshot.docs[0]; // Get the first document from the query result\n    return userDoc; // Return the user document\n}\n/**`\r\n * Converts a firestore document to JSON\r\n * @param  {DocumentSnapshot} doc\r\n */ function postToJSON(doc) {\n    const data = doc.data(); // Get the data from the document\n    return {\n        ...data,\n        // Gotcha! Firestore timestamp NOT serializable to JSON. Must convert to milliseconds\n        createdAt: data.createdAt.toMillis(),\n        updatedAt: data.updatedAt.toMillis()\n    };\n}\n// Function to normalize tech names from URL parameters to database format\nfunction normalizeTechName(name) {\n    if (_tech__WEBPACK_IMPORTED_MODULE_4__.techMapping[name]) {\n        return _tech__WEBPACK_IMPORTED_MODULE_4__.techMapping[name];\n    }\n    return name.split(\"-\").map((word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(\"\");\n}\n/**`\r\n * Fetches all posts with a specific technology\r\n * @param  {string} techName\r\n */ async function fetchPostsByTech(techName) {\n    const LIMIT = 10;\n    const postsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collectionGroup)(firestore, \"posts\");\n    const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(postsCollection, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"published\", \"==\", true), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"tech\", \"array-contains\", normalizeTechName(techName)), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.limit)(LIMIT));\n    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(q);\n    const posts = querySnapshot.docs.map(postToJSON);\n    console.log(posts);\n    return posts;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmlyZWJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUNWLENBQUMscUNBQXFDO0FBQ3ZCLENBQUMsZ0RBQWdEO0FBV2pGLENBQUMsNkJBQTZCO0FBQ1osQ0FBQyx5Q0FBeUM7QUFDbkQ7QUFFckMsTUFBTWMsaUJBQWlCO0lBQ3JCQyxRQUFRQyx5Q0FBd0M7SUFDaERHLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztJQUNQQyxlQUFlO0FBQ2pCO0FBRUEsNkNBQTZDO0FBQzdDLE1BQU1DLE1BQU16QiwyREFBYUEsQ0FBQ2M7QUFFMUIsK0JBQStCO0FBQy9CLE1BQU1ZLE9BQU96QixzREFBT0EsQ0FBQ3dCLE1BQU0scUNBQXFDO0FBQ2hFLE1BQU1FLHFCQUFxQixJQUFJekIsNkRBQWtCQSxJQUFJLGtDQUFrQztBQUN2RixNQUFNMEIsWUFBWXpCLGdFQUFZQSxDQUFDc0IsTUFBTSx1QkFBdUI7QUFDNUQsTUFBTUksVUFBVWpCLDREQUFVQSxDQUFDYSxNQUFNLDhCQUE4QjtBQUMvRCxNQUFNSyxnQkFBZ0I7QUFDdEIsTUFBTUMsWUFBWXBCLDBEQUFVQSxDQUFDb0IsU0FBUztBQUV0Qyx5REFBeUQ7QUFTdkQ7QUFFRixtQkFBbUI7QUFFbkI7OztDQUdDLEdBQ00sZUFBZUMsb0JBQW9CQyxRQUFRO0lBQ2hELE1BQU1DLFdBQVc5Qiw4REFBVUEsQ0FBQ3dCLFdBQVcsVUFBVSxzQ0FBc0M7SUFDdkYsTUFBTU8sSUFBSTdCLHlEQUFLQSxDQUFDNEIsVUFBVTNCLHlEQUFLQSxDQUFDLFlBQVksTUFBTTBCLFdBQVd6Qix5REFBS0EsQ0FBQyxLQUFLLDhEQUE4RDtJQUN0SSxNQUFNNEIsZ0JBQWdCLE1BQU0zQiwyREFBT0EsQ0FBQzBCLElBQUksb0JBQW9CO0lBQzVELE1BQU1FLFVBQVVELGNBQWNFLElBQUksQ0FBQyxFQUFFLEVBQUUsK0NBQStDO0lBQ3RGLE9BQU9ELFNBQVMsMkJBQTJCO0FBQzdDO0FBRUE7OztDQUdDLEdBQ00sU0FBU0UsV0FBV0MsR0FBRztJQUM1QixNQUFNQyxPQUFPRCxJQUFJQyxJQUFJLElBQUksaUNBQWlDO0lBQzFELE9BQU87UUFDTCxHQUFHQSxJQUFJO1FBQ1AscUZBQXFGO1FBQ3JGQyxXQUFXRCxLQUFLQyxTQUFTLENBQUNDLFFBQVE7UUFDbENDLFdBQVdILEtBQUtHLFNBQVMsQ0FBQ0QsUUFBUTtJQUNwQztBQUNGO0FBRUEsMEVBQTBFO0FBQ25FLFNBQVNFLGtCQUFrQkMsSUFBSTtJQUNwQyxJQUFJakMsOENBQVcsQ0FBQ2lDLEtBQUssRUFBRTtRQUNyQixPQUFPakMsOENBQVcsQ0FBQ2lDLEtBQUs7SUFDMUI7SUFDQSxPQUFPQSxLQUNKQyxLQUFLLENBQUMsS0FDTkMsR0FBRyxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLE1BQU0sQ0FBQyxHQUFHQyxXQUFXLEtBQUtGLEtBQUtHLEtBQUssQ0FBQyxHQUFHQyxXQUFXLElBQ3RFQyxJQUFJLENBQUM7QUFDVjtBQUVBOzs7Q0FHQyxHQUNNLGVBQWVDLGlCQUFpQkMsUUFBUTtJQUM3QyxNQUFNQyxRQUFRO0lBQ2QsTUFBTUMsa0JBQWtCckQsbUVBQWVBLENBQUN1QixXQUFXO0lBQ25ELE1BQU1PLElBQUk3Qix5REFBS0EsQ0FDYm9ELGlCQUNBbkQseURBQUtBLENBQUMsYUFBYSxNQUFNLE9BQ3pCQSx5REFBS0EsQ0FBQyxRQUFRLGtCQUFrQnNDLGtCQUFrQlcsWUFDbERoRCx5REFBS0EsQ0FBQ2lEO0lBRVIsTUFBTXJCLGdCQUFnQixNQUFNM0IsMkRBQU9BLENBQUMwQjtJQUNwQyxNQUFNd0IsUUFBUXZCLGNBQWNFLElBQUksQ0FBQ1UsR0FBRyxDQUFDVDtJQUNyQ3FCLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixPQUFPQTtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9maXJlYmFzZS5qcz9hYjQ0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjsgLy8gSW1wb3J0IGluaXRpYWxpemVBcHAgZnJvbSBGaXJlYmFzZVxyXG5pbXBvcnQgeyBnZXRBdXRoLCBHb29nbGVBdXRoUHJvdmlkZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiOyAvLyBJbXBvcnQgYXV0aGVudGljYXRpb24gZnVuY3Rpb25zIGZyb20gRmlyZWJhc2VcclxuaW1wb3J0IHtcclxuICBnZXRGaXJlc3RvcmUsXHJcbiAgY29sbGVjdGlvbixcclxuICBjb2xsZWN0aW9uR3JvdXAsXHJcbiAgcXVlcnksXHJcbiAgd2hlcmUsXHJcbiAgbGltaXQsXHJcbiAgZ2V0RG9jcyxcclxuICBzZXJ2ZXJUaW1lc3RhbXAsXHJcbiAgRmllbGRWYWx1ZSxcclxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7IC8vIEltcG9ydCBGaXJlc3RvcmUgZnVuY3Rpb25zXHJcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiOyAvLyBJbXBvcnQgc3RvcmFnZSBmdW5jdGlvbnMgZnJvbSBGaXJlYmFzZVxyXG5pbXBvcnQgeyB0ZWNoTWFwcGluZyB9IGZyb20gXCIuL3RlY2hcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBcImRldi1jaXJjbGUtMWIyYTAuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcImRldi1jaXJjbGUtMWIyYTBcIixcclxuICBzdG9yYWdlQnVja2V0OiBcImRldi1jaXJjbGUtMWIyYTAuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxNDc4MDY3MjIwNzlcIixcclxuICBhcHBJZDogXCIxOjE0NzgwNjcyMjA3OTp3ZWI6NjIxODA2NzY0MzE2OWE2N2EwOWQyYVwiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy04NDVKRE1TNFRWXCIsXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlIHdpdGggdGhlIGNvbmZpZ3VyYXRpb25cclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlIHNlcnZpY2VzXHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7IC8vIEluaXRpYWxpemUgRmlyZWJhc2UgQXV0aGVudGljYXRpb25cclxuY29uc3QgZ29vZ2xlQXV0aFByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpOyAvLyBJbml0aWFsaXplIEdvb2dsZSBBdXRoIFByb3ZpZGVyXHJcbmNvbnN0IGZpcmVzdG9yZSA9IGdldEZpcmVzdG9yZShhcHApOyAvLyBJbml0aWFsaXplIEZpcmVzdG9yZVxyXG5jb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShhcHApOyAvLyBJbml0aWFsaXplIEZpcmViYXNlIFN0b3JhZ2VcclxuY29uc3QgU1RBVEVfQ0hBTkdFRCA9IFwic3RhdGVfY2hhbmdlZFwiO1xyXG5jb25zdCBpbmNyZW1lbnQgPSBGaWVsZFZhbHVlLmluY3JlbWVudDtcclxuXHJcbi8vIEV4cG9ydCB0aGUgc2VydmljZXMgZm9yIHVzZSBpbiBvdGhlciBwYXJ0cyBvZiB5b3VyIGFwcFxyXG5leHBvcnQge1xyXG4gIGF1dGgsXHJcbiAgZ29vZ2xlQXV0aFByb3ZpZGVyLFxyXG4gIGZpcmVzdG9yZSxcclxuICBzdG9yYWdlLFxyXG4gIHNlcnZlclRpbWVzdGFtcCxcclxuICBTVEFURV9DSEFOR0VELFxyXG4gIGluY3JlbWVudCxcclxufTtcclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbnNcclxuXHJcbi8qKmBcclxuICogR2V0cyBhIHVzZXJzL3t1aWR9IGRvY3VtZW50IHdpdGggdXNlcm5hbWVcclxuICogQHBhcmFtICB7c3RyaW5nfSB1c2VybmFtZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJXaXRoVXNlcm5hbWUodXNlcm5hbWUpIHtcclxuICBjb25zdCB1c2Vyc1JlZiA9IGNvbGxlY3Rpb24oZmlyZXN0b3JlLCBcInVzZXJzXCIpOyAvLyBSZWZlcmVuY2UgdG8gdGhlIFwidXNlcnNcIiBjb2xsZWN0aW9uXHJcbiAgY29uc3QgcSA9IHF1ZXJ5KHVzZXJzUmVmLCB3aGVyZShcInVzZXJuYW1lXCIsIFwiPT1cIiwgdXNlcm5hbWUpLCBsaW1pdCgxKSk7IC8vIENyZWF0ZSBhIHF1ZXJ5IHRvIGZpbmQgdGhlIHVzZXIgd2l0aCB0aGUgc3BlY2lmaWVkIHVzZXJuYW1lXHJcbiAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7IC8vIEV4ZWN1dGUgdGhlIHF1ZXJ5XHJcbiAgY29uc3QgdXNlckRvYyA9IHF1ZXJ5U25hcHNob3QuZG9jc1swXTsgLy8gR2V0IHRoZSBmaXJzdCBkb2N1bWVudCBmcm9tIHRoZSBxdWVyeSByZXN1bHRcclxuICByZXR1cm4gdXNlckRvYzsgLy8gUmV0dXJuIHRoZSB1c2VyIGRvY3VtZW50XHJcbn1cclxuXHJcbi8qKmBcclxuICogQ29udmVydHMgYSBmaXJlc3RvcmUgZG9jdW1lbnQgdG8gSlNPTlxyXG4gKiBAcGFyYW0gIHtEb2N1bWVudFNuYXBzaG90fSBkb2NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0VG9KU09OKGRvYykge1xyXG4gIGNvbnN0IGRhdGEgPSBkb2MuZGF0YSgpOyAvLyBHZXQgdGhlIGRhdGEgZnJvbSB0aGUgZG9jdW1lbnRcclxuICByZXR1cm4ge1xyXG4gICAgLi4uZGF0YSwgLy8gU3ByZWFkIHRoZSBkYXRhXHJcbiAgICAvLyBHb3RjaGEhIEZpcmVzdG9yZSB0aW1lc3RhbXAgTk9UIHNlcmlhbGl6YWJsZSB0byBKU09OLiBNdXN0IGNvbnZlcnQgdG8gbWlsbGlzZWNvbmRzXHJcbiAgICBjcmVhdGVkQXQ6IGRhdGEuY3JlYXRlZEF0LnRvTWlsbGlzKCksIC8vIENvbnZlcnQgY3JlYXRlZEF0IHRpbWVzdGFtcCB0byBtaWxsaXNlY29uZHNcclxuICAgIHVwZGF0ZWRBdDogZGF0YS51cGRhdGVkQXQudG9NaWxsaXMoKSwgLy8gQ29udmVydCB1cGRhdGVkQXQgdGltZXN0YW1wIHRvIG1pbGxpc2Vjb25kc1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIG5vcm1hbGl6ZSB0ZWNoIG5hbWVzIGZyb20gVVJMIHBhcmFtZXRlcnMgdG8gZGF0YWJhc2UgZm9ybWF0XHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVUZWNoTmFtZShuYW1lKSB7XHJcbiAgaWYgKHRlY2hNYXBwaW5nW25hbWVdKSB7XHJcbiAgICByZXR1cm4gdGVjaE1hcHBpbmdbbmFtZV07XHJcbiAgfVxyXG4gIHJldHVybiBuYW1lXHJcbiAgICAuc3BsaXQoXCItXCIpXHJcbiAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgLmpvaW4oXCJcIik7XHJcbn1cclxuXHJcbi8qKmBcclxuICogRmV0Y2hlcyBhbGwgcG9zdHMgd2l0aCBhIHNwZWNpZmljIHRlY2hub2xvZ3lcclxuICogQHBhcmFtICB7c3RyaW5nfSB0ZWNoTmFtZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUG9zdHNCeVRlY2godGVjaE5hbWUpIHtcclxuICBjb25zdCBMSU1JVCA9IDEwO1xyXG4gIGNvbnN0IHBvc3RzQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb25Hcm91cChmaXJlc3RvcmUsIFwicG9zdHNcIik7XHJcbiAgY29uc3QgcSA9IHF1ZXJ5KFxyXG4gICAgcG9zdHNDb2xsZWN0aW9uLFxyXG4gICAgd2hlcmUoXCJwdWJsaXNoZWRcIiwgXCI9PVwiLCB0cnVlKSxcclxuICAgIHdoZXJlKFwidGVjaFwiLCBcImFycmF5LWNvbnRhaW5zXCIsIG5vcm1hbGl6ZVRlY2hOYW1lKHRlY2hOYW1lKSksXHJcbiAgICBsaW1pdChMSU1JVClcclxuICApO1xyXG4gIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xyXG4gIGNvbnN0IHBvc3RzID0gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcChwb3N0VG9KU09OKTtcclxuICBjb25zb2xlLmxvZyhwb3N0cyk7XHJcbiAgcmV0dXJuIHBvc3RzO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsImdldEZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJjb2xsZWN0aW9uR3JvdXAiLCJxdWVyeSIsIndoZXJlIiwibGltaXQiLCJnZXREb2NzIiwic2VydmVyVGltZXN0YW1wIiwiRmllbGRWYWx1ZSIsImdldFN0b3JhZ2UiLCJ0ZWNoTWFwcGluZyIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiYXV0aCIsImdvb2dsZUF1dGhQcm92aWRlciIsImZpcmVzdG9yZSIsInN0b3JhZ2UiLCJTVEFURV9DSEFOR0VEIiwiaW5jcmVtZW50IiwiZ2V0VXNlcldpdGhVc2VybmFtZSIsInVzZXJuYW1lIiwidXNlcnNSZWYiLCJxIiwicXVlcnlTbmFwc2hvdCIsInVzZXJEb2MiLCJkb2NzIiwicG9zdFRvSlNPTiIsImRvYyIsImRhdGEiLCJjcmVhdGVkQXQiLCJ0b01pbGxpcyIsInVwZGF0ZWRBdCIsIm5vcm1hbGl6ZVRlY2hOYW1lIiwibmFtZSIsInNwbGl0IiwibWFwIiwid29yZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsImpvaW4iLCJmZXRjaFBvc3RzQnlUZWNoIiwidGVjaE5hbWUiLCJMSU1JVCIsInBvc3RzQ29sbGVjdGlvbiIsInBvc3RzIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/firebase.js\n"));

/***/ })

});