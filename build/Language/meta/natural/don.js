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
        name: 'Toura (Papua New Guinea)',
        nameT: 'Doura',
        iso3: 'don',
        wiki: 'Toura_language_(Papua_New_Guinea)',
        names: 'Doura'
    });
});
//# sourceMappingURL=don.js.map