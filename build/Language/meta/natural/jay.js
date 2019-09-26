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
        name: 'Yan-nhangu',
        nameT: 'Yan-nhangu',
        iso3: 'jay',
        wiki: 'Nhangu_language',
        names: 'Gokulu mana dhanguny’ bulthun,Jarnango,Nangu,Yanangu'
    });
});
//# sourceMappingURL=jay.js.map