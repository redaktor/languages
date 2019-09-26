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
        name: 'Lalo, Central',
        nameT: 'Lalo, Central',
        iso3: 'ywt',
        wiki: 'Lalo_language',
        names: 'Lalaw,Lalo,Lalopa,Lalu,Laluo,Misapa,Western Yi,Xishanba Lalo'
    });
});
//# sourceMappingURL=ywt.js.map