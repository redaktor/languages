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
        name: 'Philippine Sign Language',
        nameT: 'Philippine Sign Language',
        iso3: 'psp',
        wiki: 'Philippine_Sign_Language',
        names: 'FSL,Local Sign Language,Philippine Sign Language'
    });
});
//# sourceMappingURL=psp.js.map