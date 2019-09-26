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
        name: 'Ingrian',
        nameT: 'ižoran keeli',
        iso3: 'izh',
        wiki: 'Ingrian_language',
        names: 'Ingermanlandian,Inkeroisen,Izhor,Izhorian'
    });
});
//# sourceMappingURL=izh.js.map