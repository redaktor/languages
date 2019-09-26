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
        name: 'Nahuatl, Isthmus-Cosoleacaque',
        nameT: 'Nahuatl, Isthmus-Cosoleacaque',
        iso3: 'nhk',
        wiki: 'Isthmus_Nahuatl',
        names: 'Cosoleacaque Aztec,Náhuatl del Istmo-Cosoleacaque'
    });
});
//# sourceMappingURL=nhk.js.map