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
        name: 'Agta, Mt. Iriga',
        nameT: 'Agta, Mt. Iriga',
        iso3: 'agz',
        wiki: 'Mount_Iriga_Agta_language',
        names: 'Lake Buhi West,Mount Iriga Negrito,San Ramon Inagta'
    });
});
//# sourceMappingURL=agz.js.map