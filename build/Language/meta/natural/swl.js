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
        name: 'Swedish Sign Language',
        nameT: 'svenskt teckenspråk',
        iso3: 'swl',
        wiki: 'Swedish_Sign_Language',
        names: 'STS,Svenskt teckenspråk,SwedSL'
    });
});
//# sourceMappingURL=swl.js.map