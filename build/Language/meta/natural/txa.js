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
        name: 'Tombonuo',
        nameT: 'Tombonuo',
        iso3: 'txa',
        wiki: 'Tombonuwo_language',
        names: 'Lobu,Paitan,Sungai,Sungei,Tambanua,Tambanuo,Tambanuva,Tambanwas,Tambenua,Tambunwas,Tangar nu Tombonuo,Tembenua,Tombonuva,Tombonuwo,Tumbunwha,Tunbumohas ("Lobou nu Tindal","Pagan")'
    });
});
//# sourceMappingURL=txa.js.map