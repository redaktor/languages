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
        name: 'Mazatec, Ixcatlán',
        nameT: 'Mazatec, Ixcatlán',
        iso3: 'mzi',
        wiki: 'Ixcatl%C3%A1n_Mazatec',
        names: 'En ningotsie,Mazateco de presa bajo,Mazateco de San Pedro Ixcatlán',
        hasDetect: true
    });
});
//# sourceMappingURL=mzi.js.map