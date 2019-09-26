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
        name: 'Nadëb',
        nameT: 'Nadëb',
        iso3: 'mbj',
        wiki: 'Nad%C3%ABb_language',
        names: 'Anodöub,Kabari,Kabori,Makú Nadëb,Makunadöbö,Nadeb Macu,Nadöb,Nadöbö,Xiriwai,Xuriwai'
    });
});
//# sourceMappingURL=mbj.js.map