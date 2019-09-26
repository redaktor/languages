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
        name: 'Irarutu',
        nameT: 'Irarutu',
        iso3: 'irh',
        wiki: 'Irarutu_language',
        names: 'Arguni Bay,Irahutu,Irutu,Kaitero,Kasira'
    });
});
//# sourceMappingURL=irh.js.map