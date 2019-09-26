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
        name: 'Jimi (Nigeria)',
        nameT: 'Bi-Gimu',
        iso3: 'jmi',
        wiki: 'Jimi_language_(Nigeria)',
        names: 'Bi-Gimu'
    });
});
//# sourceMappingURL=jmi.js.map