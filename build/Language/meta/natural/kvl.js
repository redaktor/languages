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
        name: 'Kayaw',
        nameT: 'Kayaw',
        iso3: 'kvl',
        wiki: 'Kayaw_language',
        names: 'Deleh,Ka-yaw,Laku,Pramano ("Bre","Brec","Brek","Kayaw Brek","Paret","Pre","Pret")'
    });
});
//# sourceMappingURL=kvl.js.map