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
        name: 'Akebu',
        nameT: 'Akebu',
        iso3: 'keu',
        wiki: 'Kebu_language',
        names: 'Akebou,Akébou,Ekpeebhe,Ekpeebhibhe,Gakagba,Kabu,Kébou,Kebu,Kegberike,kekpeeke,kekpeerike'
    });
});
//# sourceMappingURL=keu.js.map