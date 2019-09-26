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
        name: 'Chin, Chinbon',
        nameT: 'Chin, Chinbon',
        iso3: 'cnb',
        wiki: 'Sh%C3%B6_language',
        OT: 'QIN',
        names: 'Chindwin Chin,Chinpon,Oo-pu,Sho,Tuishiip,Tuiship,Uppu,Ütbü'
    });
});
//# sourceMappingURL=cnb.js.map