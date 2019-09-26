(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../meta"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Chiangmai Sign Language',
        nameT: 'Chiangmai Sign Language',
        iso3: 'csd',
        wiki: 'Chiangmai_Sign_Language',
        names: 'Chiengmai Sign Language,OCMSL,Old Chiang Mai Sign Language,Old Chiangmai Sign Language,Original Chiang Mai Sign Language,Original Chiangmai Sign Language'
    });
});
//# sourceMappingURL=csd.js.map