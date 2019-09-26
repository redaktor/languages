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
        name: 'Yir Yoront',
        nameT: 'Yir Yoront',
        iso3: 'yiy',
        wiki: 'Yir-Yoront_language',
        names: 'Gwandera,Jir Joront,Kokomindjen,Mandjoen,Millera,Mind’jana,Mundjun,Myunduno,Yir Yiront'
    });
});
//# sourceMappingURL=yiy.js.map