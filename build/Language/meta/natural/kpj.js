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
        name: 'Karajá',
        nameT: 'Karajá',
        iso3: 'kpj',
        wiki: 'Karaj%C3%A1_language',
        names: 'Caraiauna,Chambioa,Iraru Mahadu,Ixbyowa,Karaja do Norte,Ynã'
    });
});
//# sourceMappingURL=kpj.js.map