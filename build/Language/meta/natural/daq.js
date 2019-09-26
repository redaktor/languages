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
        name: 'Maria, Dandami',
        nameT: 'Maria, Dandami',
        iso3: 'daq',
        wiki: 'Madiya_language',
        names: 'Bastar Koya,Bison Horn Maria,Dandami Madiya,Dhuru,Madiya,Maria Gond'
    });
});
//# sourceMappingURL=daq.js.map