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
        name: 'Tawbuid, Eastern',
        nameT: 'Tawbuid, Eastern',
        iso3: 'bnj',
        wiki: 'Tawbuid_language',
        names: 'Bangon,Barangan,Batangan,Binatangan,Fanawbuid,Suri,Tabuid,Taubuid,Tiron'
    });
});
//# sourceMappingURL=bnj.js.map