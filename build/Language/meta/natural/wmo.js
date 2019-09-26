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
        name: 'Wom (Papua New Guinea)',
        nameT: 'Wam',
        iso3: 'wmo',
        wiki: 'Wom_language_(Papua_New_Guinea)',
        names: 'Wam'
    });
});
//# sourceMappingURL=wmo.js.map