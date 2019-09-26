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
        name: 'Kavalan',
        nameT: 'Kavalan',
        iso3: 'ckv',
        wiki: 'Kavalan_language',
        names: 'Cabaran,Kabalan,Kabaran,Kamalan,Kavanan,Kavarauan,Kbalan,Kibalan,Kiwaraw,Kiwarawa,Kuvalan,Kuvarawan,Kuwarawan,Kvalan,Shekwan'
    });
});
//# sourceMappingURL=ckv.js.map