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
        name: 'Lishán Didán',
        nameT: 'Lishán Didán',
        iso3: 'trg',
        wiki: 'Lish%C3%A1n_Did%C3%A1n',
        names: 'Galihalu,Lakhlokhi,Lishanán,Lishanid Nash Didán,Persian Azerbaijan Jewish Aramaic'
    });
});
//# sourceMappingURL=trg.js.map