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
        name: 'Bauria',
        nameT: 'Bauria',
        iso3: 'bge',
        wiki: 'Bauria_language',
        names: 'Babri,Badak,Baori,Basria,Bawari,Bawaria,Bhoria,Vaghri'
    });
});
//# sourceMappingURL=bge.js.map