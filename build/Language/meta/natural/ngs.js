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
        name: 'Gvoko',
        nameT: 'Gvoko',
        iso3: 'ngs',
        wiki: 'Gvoko_language',
        names: 'Gavoko,Gevoko,Ghboko,Kuvoko,Ngoshe-Ndhang,Ngoshi,Ngossi,Nggweshe,Ngoshe Sama,Ngweshe-Ndaghan'
    });
});
//# sourceMappingURL=ngs.js.map