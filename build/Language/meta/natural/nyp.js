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
        name: 'Nyang’i',
        nameT: 'Nyang’i',
        iso3: 'nyp',
        wiki: 'Nyangia_language',
        names: 'Gyangiya,Ngangea,Ngapore,Ngiangeya,Niporen,Nipori,Nuangeya,Nyangeya,Nyang’ia,Nyangiya,Nyuangia,Upale'
    });
});
//# sourceMappingURL=nyp.js.map