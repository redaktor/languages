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
        name: 'Nyambo',
        nameT: 'Nyambo',
        iso3: 'now',
        wiki: 'Nyambo_language',
        names: 'Ekinyambo,Karagwe,Kinyambo,Ragwe,Rukaragwe,Runyambo,Ururagwe'
    });
});
//# sourceMappingURL=now.js.map