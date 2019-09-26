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
        name: 'Mixtec, Western Juxtlahuaca',
        nameT: 'Mixtec, Western Juxtlahuaca',
        iso3: 'jmx',
        wiki: 'Silacayoapan_Mixtec',
        names: 'Coicoyán Mixtec,Mixteco del Oeste de Juxtlahuaca,To’on Savi'
    });
});
//# sourceMappingURL=jmx.js.map