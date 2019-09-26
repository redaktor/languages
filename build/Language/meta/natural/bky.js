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
        name: 'Bokyi',
        nameT: 'Bokyi',
        iso3: 'bky',
        wiki: 'Boki_language',
        names: 'Boki,Byoki,Nfua,Nki,Okii,Osikom,Osukam,Uki,Vaaneroki'
    });
});
//# sourceMappingURL=bky.js.map