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
        name: 'Jangshung',
        nameT: 'Jangshung',
        iso3: 'jna',
        wiki: 'Kinnauri_language',
        names: 'Central Kinnauri,Jangiam,Jangrami,Thebarskad,Thebor,Thebör Skadd,Zangram,Zhang-Zhung'
    });
});
//# sourceMappingURL=jna.js.map