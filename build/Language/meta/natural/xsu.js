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
        name: 'Sanumá',
        nameT: 'Sanumá',
        iso3: 'xsu',
        wiki: 'Sanum%C3%A1_language',
        names: 'Sanema,Tsanuma,Chirichano,Guaika,Samatali,Samatari,Sanima,Xamatari'
    });
});
//# sourceMappingURL=xsu.js.map