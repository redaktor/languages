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
        name: 'Jiamao',
        nameT: 'Jiamao',
        iso3: 'jio',
        wiki: 'Jiamao_language',
        names: 'Gevou,Kamau,Ku vou,Tai'
    });
});
//# sourceMappingURL=jio.js.map