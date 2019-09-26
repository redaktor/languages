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
        name: 'Meyah',
        nameT: 'Meyah',
        iso3: 'mej',
        wiki: 'Meax_language',
        names: 'Arfak,Mansibaber,Meah,Meax,Mejach,Mejah,Meyach',
        hasDetect: true
    });
});
//# sourceMappingURL=mej.js.map