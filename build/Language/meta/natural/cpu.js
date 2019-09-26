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
        name: 'Ashéninka, Pichis',
        nameT: 'Ashéninka, Pichis',
        iso3: 'cpu',
        wiki: 'Ash%C3%A9ninka_language',
        names: 'Pichis Ashéninca ("Pichis Campa")',
        hasDetect: true
    });
});
//# sourceMappingURL=cpu.js.map