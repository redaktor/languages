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
        name: 'Aché',
        nameT: 'Aché',
        iso3: 'guq',
        wiki: 'Ach%C3%A9_language',
        names: 'Ache-Guayaki,Axe ("Guaiaqui","Guayakí","Guoyagui")'
    });
});
//# sourceMappingURL=guq.js.map