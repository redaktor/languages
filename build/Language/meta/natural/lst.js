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
        name: 'Trinidad and Tobago Sign Language',
        nameT: 'Trinidad and Tobago Sign Language',
        iso3: 'lst',
        wiki: 'Trinidad_and_Tobago_Sign_Language',
        names: 'Trinidad Sign Language,TSL,TTSL'
    });
});
//# sourceMappingURL=lst.js.map