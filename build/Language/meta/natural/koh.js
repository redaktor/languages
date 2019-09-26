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
        name: 'Koyo',
        nameT: 'Koyo',
        iso3: 'koh',
        wiki: 'Koyo_language_(Congo)',
        names: 'Ekoyo,Kouyou'
    });
});
//# sourceMappingURL=koh.js.map