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
        name: 'Tewe',
        nameT: 'Tewe',
        iso3: 'twx',
        wiki: 'Manyika_dialect',
        names: 'Chiute,Ciute,Teve,Utee,Vateve,Wateve'
    });
});
//# sourceMappingURL=twx.js.map