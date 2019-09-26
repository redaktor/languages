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
        name: 'Miao, Small Flowery',
        nameT: 'Miao, Small Flowery',
        iso3: 'sfm',
        wiki: 'Small_Flowery_Miao',
        names: 'Atse,Ghab-Mvb Ghab-Svd,Gha-Mu,Ghuab-Hmongb Ghuab-Soud,Hsiao Hwa Miao,Xiao Hua Miao'
    });
});
//# sourceMappingURL=sfm.js.map