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
        name: 'Molbog',
        nameT: 'Molbog',
        iso3: 'pwm',
        wiki: 'Molbog_language',
        names: 'Balabak,Molbog Palawan'
    });
});
//# sourceMappingURL=pwm.js.map