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
        name: 'Kalami',
        nameT: 'Kalami',
        iso3: 'gwc',
        wiki: 'Kalami_language',
        names: 'Bashgharik,Bashkarik,Baskarik,Dir Kohistani,Diri,Dirwali,Gaawro,Garwa,Garwi,Gawri,Gowri,Kalami Kohistani,Kohistana,Kohistani'
    });
});
//# sourceMappingURL=gwc.js.map