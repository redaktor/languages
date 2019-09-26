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
        name: 'Nogai',
        nameT: 'Ногай',
        iso2: 'nog',
        iso3: 'nog',
        wiki: 'Nogai_language',
        OT: 'NOG',
        names: 'Karanogai,Kubanogai,Nogaitsy,Nogalar,Nogay,Noghai,Noghay,Noghaylar'
    });
});
//# sourceMappingURL=nog.js.map