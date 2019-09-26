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
        name: 'Purepecha',
        nameT: 'Purepecha',
        iso3: 'tsz',
        wiki: 'Pur%C3%A9pecha_language',
        names: 'Eastern Lake Purepecha,P’orhe,P’orhépecha,P’urhe,P’urhépecha,Phorhépecha,Porhé,P’orhepecha,Purépecha de la Zona Lacustre,P’urhepecha,Tarascan,Tarasco',
        hasDetect: true
    });
});
//# sourceMappingURL=tsz.js.map