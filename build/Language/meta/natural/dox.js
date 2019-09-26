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
        name: 'Bussa',
        nameT: 'Bussa',
        iso3: 'dox',
        wiki: 'Bussa_language',
        names: 'Dobase,D’oopace,D’opaasunte,Gobeze,Goraze,Gowase,Lohu,Mashelle,Mashile,Masholle,Mosiye,Musiye,Orase'
    });
});
//# sourceMappingURL=dox.js.map