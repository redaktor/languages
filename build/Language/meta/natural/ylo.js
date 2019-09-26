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
        name: 'Yi, Naluo',
        nameT: 'Yi, Naluo',
        iso3: 'ylo',
        wiki: 'Naluo_language',
        names: 'Aluo Naluo,Gan Yi,Laluo,Naruo,Shui Yi,Shuitian'
    });
});
//# sourceMappingURL=ylo.js.map