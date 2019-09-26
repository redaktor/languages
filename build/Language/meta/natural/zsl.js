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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Zambian Sign Language',
        nameT: 'ZAMSL',
        iso3: 'zsl',
        wiki: 'Zambian_Sign_Language',
        names: 'ZAMSL'
    });
});
//# sourceMappingURL=zsl.js.map