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
        name: 'Kamayo',
        nameT: 'Kamayo',
        iso3: 'kyk',
        wiki: 'Kamayo_language',
        names: 'Davaweño,Davawenyo,Kadi,Kinadi,Kinamayo,Mandaya'
    });
});
//# sourceMappingURL=kyk.js.map