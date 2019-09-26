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
        name: 'Surigaonon',
        nameT: 'Surigaonon',
        iso3: 'sgd',
        wiki: 'Surigaonon_language',
        names: 'Jaun-Jaun,Sinurigao,Waya-Waya'
    });
});
//# sourceMappingURL=sgd.js.map