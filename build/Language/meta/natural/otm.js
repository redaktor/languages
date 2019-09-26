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
        name: 'Otomi, Eastern Highland',
        nameT: 'Otomi, Eastern Highland',
        iso3: 'otm',
        wiki: 'Sierra_Otomi',
        names: 'Eastern Otomi,Otomí de Huehuetla,Otomí de la Sierra,Otomí de la Sierra Madre Oriental,Otomí de la Sierra Oriental,Otomí del Oriente,Sierra Oriental Otomi,Sierra Otomi,Yuhu'
    });
});
//# sourceMappingURL=otm.js.map