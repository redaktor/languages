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
        name: 'Peere',
        nameT: 'Peere',
        iso3: 'pfe',
        wiki: 'Kutin_language',
        names: 'Kotofo,Kotopo,Kotpojo,Koutin,Koutine,Kutin,Kutine,Kutinn,Patapori,Peer,Pere,Potopo,Potopore,Pare'
    });
});
//# sourceMappingURL=pfe.js.map