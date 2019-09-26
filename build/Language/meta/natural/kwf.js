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
        name: 'Kwara’ae',
        nameT: 'Kwara’ae',
        iso3: 'kwf',
        wiki: 'Kwara%27ae_language',
        names: 'Fiu',
        hasDetect: true
    });
});
//# sourceMappingURL=kwf.js.map