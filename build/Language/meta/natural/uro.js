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
        name: 'Ura (Papua New Guinea)',
        nameT: 'Ura (Papua New Guinea)',
        iso3: 'uro',
        wiki: 'Ura_language_(Papua_New_Guinea)',
        names: 'Auramot,Uramät,Uramet,Uramit,Uramot'
    });
});
//# sourceMappingURL=uro.js.map