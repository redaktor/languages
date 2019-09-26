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
        name: 'Cabecar',
        nameT: 'Cabecar',
        iso3: 'cjp',
        wiki: 'Cab%C3%A9car_language',
        names: 'Chirripó',
        hasDetect: true
    });
});
//# sourceMappingURL=cjp.js.map