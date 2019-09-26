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
        name: 'Tarahumara, Central',
        nameT: 'Ralámuli',
        iso3: 'tar',
        wiki: 'Tarahumara_language',
        names: 'Alta Tarahumara,Ralámuli de la Tarahumara Alta,Ralámuli raicha,Samachique Tarahumara,Tarahumara de Cumbres,Tarahumara del Centro'
    });
});
//# sourceMappingURL=tar.js.map