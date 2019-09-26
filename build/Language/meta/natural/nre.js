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
        name: 'Naga, Southern Rengma',
        nameT: 'Naga, Southern Rengma',
        iso3: 'nre',
        wiki: 'Rengma_language',
        names: 'Injang,Moiyui,Mon,Mozhumi,Nzong,Nzonyu,Rengma,Rengma Naga,Southern Rengma,Unza,Western Rengma'
    });
});
//# sourceMappingURL=nre.js.map