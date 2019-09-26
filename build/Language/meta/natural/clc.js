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
        name: 'Chilcotin',
        nameT: 'Chilcotin',
        iso3: 'clc',
        wiki: 'Chilcotin_language',
        names: 'Nenqayni Ch’ih,Tsilhqot’in,Tzilkotin'
    });
});
//# sourceMappingURL=clc.js.map