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
        name: 'Yau (Sandaun Province)',
        nameT: 'Yau (Sandaun Province)',
        iso3: 'yyu',
        wiki: 'Yau_language_(Torricelli)'
    });
});
//# sourceMappingURL=yyu.js.map