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
        name: 'Toba',
        nameT: 'Toba',
        iso3: 'tob',
        wiki: 'Toba_Qom_language',
        names: 'Chaco Sur,Namqom,Qom,Qoml’ek,Toba Qom,Toba Sur,Emok-Lik,Takshika,Toba-Qom',
        hasDetect: true
    });
});
//# sourceMappingURL=tob.js.map