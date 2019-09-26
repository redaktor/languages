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
        name: 'Tuki',
        nameT: 'Tuki',
        iso3: 'bag',
        wiki: 'Ki_language',
        names: 'Bacenga,Baki,Batchenga,Betsinga,Betzinga,Ki,Oki,Osa Nanga,Sanaga'
    });
});
//# sourceMappingURL=bag.js.map