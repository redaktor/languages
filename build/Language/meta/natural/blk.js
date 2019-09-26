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
        name: 'Karen, Pa’o',
        nameT: 'Karen, Pa’o',
        iso3: 'blk',
        wiki: 'Pa%27O_language',
        names: 'Black Karen,Northern Taungthu,Pa Oh,Pa-O,Pa’o Karen,Pa-U,Pa’0,Taungtu'
    });
});
//# sourceMappingURL=blk.js.map