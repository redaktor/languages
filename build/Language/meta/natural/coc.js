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
        name: 'Cocopa',
        nameT: 'Kwikapa',
        iso3: 'coc',
        wiki: 'Cocopah_language',
        names: 'Cocopá,Cocopah,Cucapá,Cucupá,Kikimá,Kuapá,Kwikapá,Delta River Yuman,Kikima'
    });
});
//# sourceMappingURL=coc.js.map