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
        name: 'Pumi, Southern',
        nameT: 'Pumi, Southern',
        iso3: 'pmj',
        wiki: 'Pumi_language',
        names: 'Pimi,P’ömi,Primmi,P’rome,Pruumi,P’umi'
    });
});
//# sourceMappingURL=pmj.js.map