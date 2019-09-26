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
        name: 'Wambule',
        nameT: 'Wambule',
        iso3: 'wme',
        wiki: 'Wambule_language',
        names: 'Ambule,Caurasia,Chaurasia,Chaurasya,Chourase,Chourasia,Ombule,Radu Yor,Tsaurasya,Umbule,Vambucauras Raduyor,Vambule,Vambule Radu Yor,Vambule Yor'
    });
});
//# sourceMappingURL=wme.js.map