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
        name: 'Asu (Tanzania)',
        nameT: 'Asu (Tanzania)',
        iso3: 'asa',
        wiki: 'Pare_language',
        names: 'Ashu,Athu,Casu,Chasu,Chiasu,Kiathu,Kipare,Pare,Pare-Asu'
    });
});
//# sourceMappingURL=asa.js.map