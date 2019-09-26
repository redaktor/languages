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
        name: 'Denya',
        nameT: 'Denya',
        iso3: 'anv',
        wiki: 'Denya_language',
        names: 'Agnang,Anyah,Anyan,Anyang,Eyan,Nyang,Obonya,Takamanda',
        hasDetect: true
    });
});
//# sourceMappingURL=anv.js.map