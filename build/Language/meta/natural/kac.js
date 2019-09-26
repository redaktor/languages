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
        name: 'Kachin',
        nameT: 'Kachin',
        iso2: 'kac',
        iso3: 'kac',
        wiki: 'Jingpho_language',
        names: 'Chingpaw,Chingp’o,Dashanhua,Jinghpaw,Jingpo,Marip,Aphu,Jinghpo,Jingphaw,Phu',
        hasDetect: true
    });
});
//# sourceMappingURL=kac.js.map