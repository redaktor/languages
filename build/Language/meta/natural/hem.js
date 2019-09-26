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
        name: 'Hemba',
        nameT: 'Hemba',
        iso3: 'hem',
        wiki: 'Hemba_language',
        names: 'Eastern Luba,Emba,Kiemba,Kihemba,Luba-Hemba'
    });
});
//# sourceMappingURL=hem.js.map