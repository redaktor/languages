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
        name: 'Babungo',
        nameT: 'Babungo',
        iso3: 'bav',
        wiki: 'Vengo_language',
        names: 'Nge,Ngo,Nguu,Ngwa,Pengo,Vengi,Vengoo',
        hasDetect: true
    });
});
//# sourceMappingURL=bav.js.map