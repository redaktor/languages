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
        name: 'Sanie',
        nameT: 'Sanie',
        iso3: 'ysy',
        wiki: 'Sanie_language',
        names: 'Bai Lolo,Bai Yi,Sa’nguie,Sanyie,Shanie,Shaniepu,White Yi'
    });
});
//# sourceMappingURL=ysy.js.map