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
        name: 'Khakas',
        nameT: 'Хакас Tілі',
        iso3: 'kjh',
        wiki: 'Khakas_language',
        OT: 'KHA',
        names: 'Abakan Tatar,Fuyü Gïrgïs,Fuyu Ka’erkezi,Hakasi,Khakhas,Khakhass,Manchurian Kirghiz,Yenisei Tatar,Hakass,Xakas,Yenisei,Yennisej Tatar',
        hasDetect: true
    });
});
//# sourceMappingURL=kjh.js.map