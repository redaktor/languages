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
        name: 'Gongduk',
        nameT: 'Gongdubikha',
        iso3: 'goe',
        wiki: 'Gongduk_language',
        names: 'Gongdubikha'
    });
});
//# sourceMappingURL=goe.js.map