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
        name: 'Yale, Kosarek',
        nameT: 'Yale, Kosarek',
        iso3: 'kkl',
        wiki: 'Kosarek_language',
        names: 'In-lom,Kosarek,Wanam,Yale-Kosarek'
    });
});
//# sourceMappingURL=kkl.js.map