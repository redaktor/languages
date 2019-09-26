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
        name: 'Guaymi',
        nameT: 'Guaymi',
        iso3: 'gym',
        wiki: 'Guaym%C3%AD_language',
        names: 'Guaymí,Chiriqui,Ngäbe,Ngobere,Valiente',
        hasDetect: true
    });
});
//# sourceMappingURL=gym.js.map