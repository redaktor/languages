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
        name: 'Guduf-Gava',
        nameT: 'Guduf-Gava',
        iso3: 'gdf',
        wiki: 'Guduf-Gava_language',
        names: 'Afkabiye,Gudupe'
    });
});
//# sourceMappingURL=gdf.js.map