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
        name: 'Guaraní, Mbyá',
        nameT: 'Guaraní, Mbyá',
        iso3: 'gun',
        wiki: 'Mby%C3%A1_Guaran%C3%AD_language',
        names: 'Eastern Argentina Guaraní,Mbua,Mbya,Mbyá,Bugre,Mbiá,Ka’yngua,Mbya-apytere'
    });
});
//# sourceMappingURL=gun.js.map