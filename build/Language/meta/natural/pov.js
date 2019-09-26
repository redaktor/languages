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
        name: 'Crioulo, Upper Guinea',
        nameT: 'Crioulo, Upper Guinea',
        iso3: 'pov',
        wiki: 'Guinea-Bissau_Creole',
        names: 'Guinea-Bissau Creole,Guinea-Bissau Kriyol,Kriulo,Kriyol,Portuguese Creole,Casamançais,Créole afro-portugais de Casamance,Créole casamançais',
        hasDetect: true
    });
});
//# sourceMappingURL=pov.js.map