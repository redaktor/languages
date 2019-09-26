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
        name: 'Trieng',
        nameT: 'Trieng',
        iso3: 'stg',
        wiki: 'Tariang_language',
        names: 'Dgiéh,Giang Ray,Gie-Trieng,Pin,Strieng,Talieng,Tareh,Ta-Rieng,Treng'
    });
});
//# sourceMappingURL=stg.js.map