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
        name: 'Purepecha, Western Highland',
        nameT: 'Purepecha, Western Highland',
        iso3: 'pua',
        wiki: 'Pur%C3%A9pecha_language',
        names: 'P’orhe,P’orhépecha,P’urhe,P’urhépecha,Purépecha de la Meseta,Purépecha de las Sierras,Purépecha del Oeste de Sierra Occidental,Tarascan,Tarasco'
    });
});
//# sourceMappingURL=pua.js.map