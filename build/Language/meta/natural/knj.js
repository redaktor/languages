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
        name: 'Kanjobal, Western',
        nameT: 'Kanjobal, Western',
        iso3: 'knj',
        wiki: 'Akatek_language',
        names: 'Acatec,Acateco,Conob,Kanjobal,K’anjob’al,Q’anjob’al,San Miguel Acatán Kanjobal,Western Kanjobal,Western Q’anjob’al,Kanjobal de San Miguel Acatán',
        hasDetect: true
    });
});
//# sourceMappingURL=knj.js.map