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
        name: 'Otomi, Estado de México',
        nameT: 'Otomi, Estado de México',
        iso3: 'ots',
        wiki: 'San_Felipe_Otomi',
        names: 'Hñatho,Otomí de San Felipe Santiago,Otomí del Estado de México,State of Mexico Otomi'
    });
});
//# sourceMappingURL=ots.js.map