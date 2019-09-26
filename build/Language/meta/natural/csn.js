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
        name: 'Colombian Sign Language',
        nameT: 'Colombian Sign Language',
        iso3: 'csn',
        wiki: 'Colombian_Sign_Language',
        names: 'Lengua de señas colombiana,LSC'
    });
});
//# sourceMappingURL=csn.js.map