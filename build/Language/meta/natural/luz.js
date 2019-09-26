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
        name: 'Luri, Southern',
        nameT: 'Luri, Southern',
        iso3: 'luz',
        wiki: 'Luri_language',
        names: 'Lor,Lori,Lori-ye Jonubi,Lur,Ruliy Luri'
    });
});
//# sourceMappingURL=luz.js.map