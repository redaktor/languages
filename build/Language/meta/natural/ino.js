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
        name: 'Inoke-Yate',
        nameT: 'Inoke-Yate',
        iso3: 'ino',
        wiki: 'Inoke_language',
        names: 'Inoke,Jate,Yate'
    });
});
//# sourceMappingURL=ino.js.map