"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@ethersproject+address@5.7.0";
exports.ids = ["vendor-chunks/@ethersproject+address@5.7.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@ethersproject+address@5.7.0/node_modules/@ethersproject/address/lib.esm/_version.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ethersproject+address@5.7.0/node_modules/@ethersproject/address/lib.esm/_version.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   version: () => (/* binding */ version)\n/* harmony export */ });\nconst version = \"address/5.7.0\";\n//# sourceMappingURL=_version.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGV0aGVyc3Byb2plY3QrYWRkcmVzc0A1LjcuMC9ub2RlX21vZHVsZXMvQGV0aGVyc3Byb2plY3QvYWRkcmVzcy9saWIuZXNtL192ZXJzaW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lja3N0YXJ0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL0BldGhlcnNwcm9qZWN0K2FkZHJlc3NANS43LjAvbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L2FkZHJlc3MvbGliLmVzbS9fdmVyc2lvbi5qcz8yYzdmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB2ZXJzaW9uID0gXCJhZGRyZXNzLzUuNy4wXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1fdmVyc2lvbi5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@ethersproject+address@5.7.0/node_modules/@ethersproject/address/lib.esm/_version.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@ethersproject+address@5.7.0/node_modules/@ethersproject/address/lib.esm/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ethersproject+address@5.7.0/node_modules/@ethersproject/address/lib.esm/index.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAddress: () => (/* binding */ getAddress),\n/* harmony export */   getContractAddress: () => (/* binding */ getContractAddress),\n/* harmony export */   getCreate2Address: () => (/* binding */ getCreate2Address),\n/* harmony export */   getIcapAddress: () => (/* binding */ getIcapAddress),\n/* harmony export */   isAddress: () => (/* binding */ isAddress)\n/* harmony export */ });\n/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/bytes */ \"(ssr)/./node_modules/.pnpm/@ethersproject+bytes@5.7.0/node_modules/@ethersproject/bytes/lib.esm/index.js\");\n/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ethersproject/bignumber */ \"(ssr)/./node_modules/.pnpm/@ethersproject+bignumber@5.7.0/node_modules/@ethersproject/bignumber/lib.esm/bignumber.js\");\n/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/keccak256 */ \"(ssr)/./node_modules/.pnpm/@ethersproject+keccak256@5.7.0/node_modules/@ethersproject/keccak256/lib.esm/index.js\");\n/* harmony import */ var _ethersproject_rlp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/rlp */ \"(ssr)/./node_modules/.pnpm/@ethersproject+rlp@5.7.0/node_modules/@ethersproject/rlp/lib.esm/index.js\");\n/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ \"(ssr)/./node_modules/.pnpm/@ethersproject+logger@5.7.0/node_modules/@ethersproject/logger/lib.esm/index.js\");\n/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ \"(ssr)/./node_modules/.pnpm/@ethersproject+address@5.7.0/node_modules/@ethersproject/address/lib.esm/_version.js\");\n\n\n\n\n\n\n\nconst logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);\nfunction getChecksumAddress(address) {\n    if (!(0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.isHexString)(address, 20)) {\n        logger.throwArgumentError(\"invalid address\", \"address\", address);\n    }\n    address = address.toLowerCase();\n    const chars = address.substring(2).split(\"\");\n    const expanded = new Uint8Array(40);\n    for (let i = 0; i < 40; i++) {\n        expanded[i] = chars[i].charCodeAt(0);\n    }\n    const hashed = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.arrayify)((0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_3__.keccak256)(expanded));\n    for (let i = 0; i < 40; i += 2) {\n        if ((hashed[i >> 1] >> 4) >= 8) {\n            chars[i] = chars[i].toUpperCase();\n        }\n        if ((hashed[i >> 1] & 0x0f) >= 8) {\n            chars[i + 1] = chars[i + 1].toUpperCase();\n        }\n    }\n    return \"0x\" + chars.join(\"\");\n}\n// Shims for environments that are missing some required constants and functions\nconst MAX_SAFE_INTEGER = 0x1fffffffffffff;\nfunction log10(x) {\n    if (Math.log10) {\n        return Math.log10(x);\n    }\n    return Math.log(x) / Math.LN10;\n}\n// See: https://en.wikipedia.org/wiki/International_Bank_Account_Number\n// Create lookup table\nconst ibanLookup = {};\nfor (let i = 0; i < 10; i++) {\n    ibanLookup[String(i)] = String(i);\n}\nfor (let i = 0; i < 26; i++) {\n    ibanLookup[String.fromCharCode(65 + i)] = String(10 + i);\n}\n// How many decimal digits can we process? (for 64-bit float, this is 15)\nconst safeDigits = Math.floor(log10(MAX_SAFE_INTEGER));\nfunction ibanChecksum(address) {\n    address = address.toUpperCase();\n    address = address.substring(4) + address.substring(0, 2) + \"00\";\n    let expanded = address.split(\"\").map((c) => { return ibanLookup[c]; }).join(\"\");\n    // Javascript can handle integers safely up to 15 (decimal) digits\n    while (expanded.length >= safeDigits) {\n        let block = expanded.substring(0, safeDigits);\n        expanded = parseInt(block, 10) % 97 + expanded.substring(block.length);\n    }\n    let checksum = String(98 - (parseInt(expanded, 10) % 97));\n    while (checksum.length < 2) {\n        checksum = \"0\" + checksum;\n    }\n    return checksum;\n}\n;\nfunction getAddress(address) {\n    let result = null;\n    if (typeof (address) !== \"string\") {\n        logger.throwArgumentError(\"invalid address\", \"address\", address);\n    }\n    if (address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {\n        // Missing the 0x prefix\n        if (address.substring(0, 2) !== \"0x\") {\n            address = \"0x\" + address;\n        }\n        result = getChecksumAddress(address);\n        // It is a checksummed address with a bad checksum\n        if (address.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && result !== address) {\n            logger.throwArgumentError(\"bad address checksum\", \"address\", address);\n        }\n        // Maybe ICAP? (we only support direct mode)\n    }\n    else if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {\n        // It is an ICAP address with a bad checksum\n        if (address.substring(2, 4) !== ibanChecksum(address)) {\n            logger.throwArgumentError(\"bad icap checksum\", \"address\", address);\n        }\n        result = (0,_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__._base36To16)(address.substring(4));\n        while (result.length < 40) {\n            result = \"0\" + result;\n        }\n        result = getChecksumAddress(\"0x\" + result);\n    }\n    else {\n        logger.throwArgumentError(\"invalid address\", \"address\", address);\n    }\n    return result;\n}\nfunction isAddress(address) {\n    try {\n        getAddress(address);\n        return true;\n    }\n    catch (error) { }\n    return false;\n}\nfunction getIcapAddress(address) {\n    let base36 = (0,_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__._base16To36)(getAddress(address).substring(2)).toUpperCase();\n    while (base36.length < 30) {\n        base36 = \"0\" + base36;\n    }\n    return \"XE\" + ibanChecksum(\"XE00\" + base36) + base36;\n}\n// http://ethereum.stackexchange.com/questions/760/how-is-the-address-of-an-ethereum-contract-computed\nfunction getContractAddress(transaction) {\n    let from = null;\n    try {\n        from = getAddress(transaction.from);\n    }\n    catch (error) {\n        logger.throwArgumentError(\"missing from address\", \"transaction\", transaction);\n    }\n    const nonce = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.stripZeros)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.arrayify)(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(transaction.nonce).toHexString()));\n    return getAddress((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.hexDataSlice)((0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_3__.keccak256)((0,_ethersproject_rlp__WEBPACK_IMPORTED_MODULE_5__.encode)([from, nonce])), 12));\n}\nfunction getCreate2Address(from, salt, initCodeHash) {\n    if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.hexDataLength)(salt) !== 32) {\n        logger.throwArgumentError(\"salt must be 32 bytes\", \"salt\", salt);\n    }\n    if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.hexDataLength)(initCodeHash) !== 32) {\n        logger.throwArgumentError(\"initCodeHash must be 32 bytes\", \"initCodeHash\", initCodeHash);\n    }\n    return getAddress((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.hexDataSlice)((0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_3__.keccak256)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.concat)([\"0xff\", getAddress(from), salt, initCodeHash])), 12));\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGV0aGVyc3Byb2plY3QrYWRkcmVzc0A1LjcuMC9ub2RlX21vZHVsZXMvQGV0aGVyc3Byb2plY3QvYWRkcmVzcy9saWIuZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWE7QUFDaUc7QUFDL0I7QUFDMUI7QUFDVDtBQUNHO0FBQ1Y7QUFDckMsbUJBQW1CLHlEQUFNLENBQUMsNkNBQU87QUFDakM7QUFDQSxTQUFTLGlFQUFXO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0EsbUJBQW1CLDhEQUFRLENBQUMsbUVBQVM7QUFDckMsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCx1QkFBdUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxHQUFHO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsRUFBRSxZQUFZLE1BQU07QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUVBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxpQkFBaUIscUVBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnRUFBVSxDQUFDLDhEQUFRLENBQUMsK0RBQVM7QUFDL0Msc0JBQXNCLGtFQUFZLENBQUMsbUVBQVMsQ0FBQywwREFBTTtBQUNuRDtBQUNPO0FBQ1AsUUFBUSxtRUFBYTtBQUNyQjtBQUNBO0FBQ0EsUUFBUSxtRUFBYTtBQUNyQjtBQUNBO0FBQ0Esc0JBQXNCLGtFQUFZLENBQUMsbUVBQVMsQ0FBQyw0REFBTTtBQUNuRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lja3N0YXJ0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL0BldGhlcnNwcm9qZWN0K2FkZHJlc3NANS43LjAvbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L2FkZHJlc3MvbGliLmVzbS9pbmRleC5qcz81ZWQ1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHsgYXJyYXlpZnksIGNvbmNhdCwgaGV4RGF0YUxlbmd0aCwgaGV4RGF0YVNsaWNlLCBpc0hleFN0cmluZywgc3RyaXBaZXJvcyB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9ieXRlc1wiO1xuaW1wb3J0IHsgQmlnTnVtYmVyLCBfYmFzZTE2VG8zNiwgX2Jhc2UzNlRvMTYgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYmlnbnVtYmVyXCI7XG5pbXBvcnQgeyBrZWNjYWsyNTYgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3Qva2VjY2FrMjU2XCI7XG5pbXBvcnQgeyBlbmNvZGUgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvcmxwXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvbG9nZ2VyXCI7XG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSBcIi4vX3ZlcnNpb25cIjtcbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIodmVyc2lvbik7XG5mdW5jdGlvbiBnZXRDaGVja3N1bUFkZHJlc3MoYWRkcmVzcykge1xuICAgIGlmICghaXNIZXhTdHJpbmcoYWRkcmVzcywgMjApKSB7XG4gICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJpbnZhbGlkIGFkZHJlc3NcIiwgXCJhZGRyZXNzXCIsIGFkZHJlc3MpO1xuICAgIH1cbiAgICBhZGRyZXNzID0gYWRkcmVzcy50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGNoYXJzID0gYWRkcmVzcy5zdWJzdHJpbmcoMikuc3BsaXQoXCJcIik7XG4gICAgY29uc3QgZXhwYW5kZWQgPSBuZXcgVWludDhBcnJheSg0MCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XG4gICAgICAgIGV4cGFuZGVkW2ldID0gY2hhcnNbaV0uY2hhckNvZGVBdCgwKTtcbiAgICB9XG4gICAgY29uc3QgaGFzaGVkID0gYXJyYXlpZnkoa2VjY2FrMjU2KGV4cGFuZGVkKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSArPSAyKSB7XG4gICAgICAgIGlmICgoaGFzaGVkW2kgPj4gMV0gPj4gNCkgPj0gOCkge1xuICAgICAgICAgICAgY2hhcnNbaV0gPSBjaGFyc1tpXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoaGFzaGVkW2kgPj4gMV0gJiAweDBmKSA+PSA4KSB7XG4gICAgICAgICAgICBjaGFyc1tpICsgMV0gPSBjaGFyc1tpICsgMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXCIweFwiICsgY2hhcnMuam9pbihcIlwiKTtcbn1cbi8vIFNoaW1zIGZvciBlbnZpcm9ubWVudHMgdGhhdCBhcmUgbWlzc2luZyBzb21lIHJlcXVpcmVkIGNvbnN0YW50cyBhbmQgZnVuY3Rpb25zXG5jb25zdCBNQVhfU0FGRV9JTlRFR0VSID0gMHgxZmZmZmZmZmZmZmZmZjtcbmZ1bmN0aW9uIGxvZzEwKHgpIHtcbiAgICBpZiAoTWF0aC5sb2cxMCkge1xuICAgICAgICByZXR1cm4gTWF0aC5sb2cxMCh4KTtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGgubG9nKHgpIC8gTWF0aC5MTjEwO1xufVxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JbnRlcm5hdGlvbmFsX0JhbmtfQWNjb3VudF9OdW1iZXJcbi8vIENyZWF0ZSBsb29rdXAgdGFibGVcbmNvbnN0IGliYW5Mb29rdXAgPSB7fTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGliYW5Mb29rdXBbU3RyaW5nKGkpXSA9IFN0cmluZyhpKTtcbn1cbmZvciAobGV0IGkgPSAwOyBpIDwgMjY7IGkrKykge1xuICAgIGliYW5Mb29rdXBbU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpXSA9IFN0cmluZygxMCArIGkpO1xufVxuLy8gSG93IG1hbnkgZGVjaW1hbCBkaWdpdHMgY2FuIHdlIHByb2Nlc3M/IChmb3IgNjQtYml0IGZsb2F0LCB0aGlzIGlzIDE1KVxuY29uc3Qgc2FmZURpZ2l0cyA9IE1hdGguZmxvb3IobG9nMTAoTUFYX1NBRkVfSU5URUdFUikpO1xuZnVuY3Rpb24gaWJhbkNoZWNrc3VtKGFkZHJlc3MpIHtcbiAgICBhZGRyZXNzID0gYWRkcmVzcy50b1VwcGVyQ2FzZSgpO1xuICAgIGFkZHJlc3MgPSBhZGRyZXNzLnN1YnN0cmluZyg0KSArIGFkZHJlc3Muc3Vic3RyaW5nKDAsIDIpICsgXCIwMFwiO1xuICAgIGxldCBleHBhbmRlZCA9IGFkZHJlc3Muc3BsaXQoXCJcIikubWFwKChjKSA9PiB7IHJldHVybiBpYmFuTG9va3VwW2NdOyB9KS5qb2luKFwiXCIpO1xuICAgIC8vIEphdmFzY3JpcHQgY2FuIGhhbmRsZSBpbnRlZ2VycyBzYWZlbHkgdXAgdG8gMTUgKGRlY2ltYWwpIGRpZ2l0c1xuICAgIHdoaWxlIChleHBhbmRlZC5sZW5ndGggPj0gc2FmZURpZ2l0cykge1xuICAgICAgICBsZXQgYmxvY2sgPSBleHBhbmRlZC5zdWJzdHJpbmcoMCwgc2FmZURpZ2l0cyk7XG4gICAgICAgIGV4cGFuZGVkID0gcGFyc2VJbnQoYmxvY2ssIDEwKSAlIDk3ICsgZXhwYW5kZWQuc3Vic3RyaW5nKGJsb2NrLmxlbmd0aCk7XG4gICAgfVxuICAgIGxldCBjaGVja3N1bSA9IFN0cmluZyg5OCAtIChwYXJzZUludChleHBhbmRlZCwgMTApICUgOTcpKTtcbiAgICB3aGlsZSAoY2hlY2tzdW0ubGVuZ3RoIDwgMikge1xuICAgICAgICBjaGVja3N1bSA9IFwiMFwiICsgY2hlY2tzdW07XG4gICAgfVxuICAgIHJldHVybiBjaGVja3N1bTtcbn1cbjtcbmV4cG9ydCBmdW5jdGlvbiBnZXRBZGRyZXNzKGFkZHJlc3MpIHtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICBpZiAodHlwZW9mIChhZGRyZXNzKSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCBhZGRyZXNzXCIsIFwiYWRkcmVzc1wiLCBhZGRyZXNzKTtcbiAgICB9XG4gICAgaWYgKGFkZHJlc3MubWF0Y2goL14oMHgpP1swLTlhLWZBLUZdezQwfSQvKSkge1xuICAgICAgICAvLyBNaXNzaW5nIHRoZSAweCBwcmVmaXhcbiAgICAgICAgaWYgKGFkZHJlc3Muc3Vic3RyaW5nKDAsIDIpICE9PSBcIjB4XCIpIHtcbiAgICAgICAgICAgIGFkZHJlc3MgPSBcIjB4XCIgKyBhZGRyZXNzO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IGdldENoZWNrc3VtQWRkcmVzcyhhZGRyZXNzKTtcbiAgICAgICAgLy8gSXQgaXMgYSBjaGVja3N1bW1lZCBhZGRyZXNzIHdpdGggYSBiYWQgY2hlY2tzdW1cbiAgICAgICAgaWYgKGFkZHJlc3MubWF0Y2goLyhbQS1GXS4qW2EtZl0pfChbYS1mXS4qW0EtRl0pLykgJiYgcmVzdWx0ICE9PSBhZGRyZXNzKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiYmFkIGFkZHJlc3MgY2hlY2tzdW1cIiwgXCJhZGRyZXNzXCIsIGFkZHJlc3MpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1heWJlIElDQVA/ICh3ZSBvbmx5IHN1cHBvcnQgZGlyZWN0IG1vZGUpXG4gICAgfVxuICAgIGVsc2UgaWYgKGFkZHJlc3MubWF0Y2goL15YRVswLTldezJ9WzAtOUEtWmEtel17MzAsMzF9JC8pKSB7XG4gICAgICAgIC8vIEl0IGlzIGFuIElDQVAgYWRkcmVzcyB3aXRoIGEgYmFkIGNoZWNrc3VtXG4gICAgICAgIGlmIChhZGRyZXNzLnN1YnN0cmluZygyLCA0KSAhPT0gaWJhbkNoZWNrc3VtKGFkZHJlc3MpKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiYmFkIGljYXAgY2hlY2tzdW1cIiwgXCJhZGRyZXNzXCIsIGFkZHJlc3MpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IF9iYXNlMzZUbzE2KGFkZHJlc3Muc3Vic3RyaW5nKDQpKTtcbiAgICAgICAgd2hpbGUgKHJlc3VsdC5sZW5ndGggPCA0MCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gXCIwXCIgKyByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gZ2V0Q2hlY2tzdW1BZGRyZXNzKFwiMHhcIiArIHJlc3VsdCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCBhZGRyZXNzXCIsIFwiYWRkcmVzc1wiLCBhZGRyZXNzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FkZHJlc3MoYWRkcmVzcykge1xuICAgIHRyeSB7XG4gICAgICAgIGdldEFkZHJlc3MoYWRkcmVzcyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRJY2FwQWRkcmVzcyhhZGRyZXNzKSB7XG4gICAgbGV0IGJhc2UzNiA9IF9iYXNlMTZUbzM2KGdldEFkZHJlc3MoYWRkcmVzcykuc3Vic3RyaW5nKDIpKS50b1VwcGVyQ2FzZSgpO1xuICAgIHdoaWxlIChiYXNlMzYubGVuZ3RoIDwgMzApIHtcbiAgICAgICAgYmFzZTM2ID0gXCIwXCIgKyBiYXNlMzY7XG4gICAgfVxuICAgIHJldHVybiBcIlhFXCIgKyBpYmFuQ2hlY2tzdW0oXCJYRTAwXCIgKyBiYXNlMzYpICsgYmFzZTM2O1xufVxuLy8gaHR0cDovL2V0aGVyZXVtLnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy83NjAvaG93LWlzLXRoZS1hZGRyZXNzLW9mLWFuLWV0aGVyZXVtLWNvbnRyYWN0LWNvbXB1dGVkXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJhY3RBZGRyZXNzKHRyYW5zYWN0aW9uKSB7XG4gICAgbGV0IGZyb20gPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICAgIGZyb20gPSBnZXRBZGRyZXNzKHRyYW5zYWN0aW9uLmZyb20pO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcIm1pc3NpbmcgZnJvbSBhZGRyZXNzXCIsIFwidHJhbnNhY3Rpb25cIiwgdHJhbnNhY3Rpb24pO1xuICAgIH1cbiAgICBjb25zdCBub25jZSA9IHN0cmlwWmVyb3MoYXJyYXlpZnkoQmlnTnVtYmVyLmZyb20odHJhbnNhY3Rpb24ubm9uY2UpLnRvSGV4U3RyaW5nKCkpKTtcbiAgICByZXR1cm4gZ2V0QWRkcmVzcyhoZXhEYXRhU2xpY2Uoa2VjY2FrMjU2KGVuY29kZShbZnJvbSwgbm9uY2VdKSksIDEyKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3JlYXRlMkFkZHJlc3MoZnJvbSwgc2FsdCwgaW5pdENvZGVIYXNoKSB7XG4gICAgaWYgKGhleERhdGFMZW5ndGgoc2FsdCkgIT09IDMyKSB7XG4gICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJzYWx0IG11c3QgYmUgMzIgYnl0ZXNcIiwgXCJzYWx0XCIsIHNhbHQpO1xuICAgIH1cbiAgICBpZiAoaGV4RGF0YUxlbmd0aChpbml0Q29kZUhhc2gpICE9PSAzMikge1xuICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW5pdENvZGVIYXNoIG11c3QgYmUgMzIgYnl0ZXNcIiwgXCJpbml0Q29kZUhhc2hcIiwgaW5pdENvZGVIYXNoKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldEFkZHJlc3MoaGV4RGF0YVNsaWNlKGtlY2NhazI1Nihjb25jYXQoW1wiMHhmZlwiLCBnZXRBZGRyZXNzKGZyb20pLCBzYWx0LCBpbml0Q29kZUhhc2hdKSksIDEyKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@ethersproject+address@5.7.0/node_modules/@ethersproject/address/lib.esm/index.js\n");

/***/ })

};
;