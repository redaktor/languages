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
        name: 'Murle',
        nameT: 'Murle',
        iso3: 'mur',
        wiki: 'Murle_language',
        names: 'Adkibba,Agiba,Ajibba,Beir,Merule,Mourle,Murelei,Murule',
        hasDetect: true
    });
});
//# sourceMappingURL=mur.js.map