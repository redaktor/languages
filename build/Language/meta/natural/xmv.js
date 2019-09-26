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
        name: 'Malagasy, Antankarana',
        nameT: 'Malagasy, Antankarana',
        iso3: 'xmv',
        wiki: 'Malagasy_language',
        names: 'Antakarana,Antakarana Malagasy,Antekarana,Antekarana Malagasy,Tankarana,Tankarana Malagasy'
    });
});
//# sourceMappingURL=xmv.js.map