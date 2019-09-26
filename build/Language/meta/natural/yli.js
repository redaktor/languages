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
        name: 'Yali, Angguruk',
        nameT: 'Yali, Angguruk',
        iso3: 'yli',
        wiki: 'Yali_language',
        names: 'Angguruk,Northern Yali,Yalimo',
        hasDetect: true
    });
});
//# sourceMappingURL=yli.js.map