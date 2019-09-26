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
        name: 'Brazilian Sign Language',
        nameT: 'Brazilian Sign Language',
        iso3: 'bzs',
        wiki: 'Brazilian_Sign_Language',
        names: 'LIBRAS,Língua de Sinais Brasileira,LSB,São Paulo Sign Language'
    });
});
//# sourceMappingURL=bzs.js.map