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
        name: 'Andoque',
        nameT: 'Andoque',
        iso3: 'ano',
        wiki: 'Andoque_language',
        names: 'Andoke,Businka,Cha’oie,Paasi-ahá,Paasiaja,Paatsiaja,Poosioho'
    });
});
//# sourceMappingURL=ano.js.map