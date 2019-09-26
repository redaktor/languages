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
        name: 'Lingao',
        nameT: 'Lingao',
        iso3: 'onb',
        wiki: 'Ong_Be_language',
        names: 'Bê,Limkow,Linkow,Ongbe,Ong-Be,Vo Limkou'
    });
});
//# sourceMappingURL=onb.js.map