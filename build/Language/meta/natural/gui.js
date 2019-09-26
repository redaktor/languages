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
        name: 'Guarani, Bolivian',
        nameT: 'Guarani, Bolivian',
        iso3: 'gui',
        wiki: 'Eastern_Bolivian_Guaran%C3%AD',
        names: 'Eastern Bolivian Guaraní,Western Argentine Guaraní,Guaraní Occidental,Guasurango ("Chabanco","Chaguanco","Chawuncu","Chiriguano")',
        hasDetect: true
    });
});
//# sourceMappingURL=gui.js.map