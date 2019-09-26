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
        name: 'Bo (Papua New Guinea)',
        nameT: 'Bo (Papua New Guinea)',
        iso3: 'bpw',
        wiki: 'Bo_language_(New_Guinea)',
        names: 'Po,Sorimi'
    });
});
//# sourceMappingURL=bpw.js.map