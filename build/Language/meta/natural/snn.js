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
        name: 'Siona',
        nameT: 'Siona',
        iso3: 'snn',
        wiki: 'Siona_language',
        names: 'Ceona,Ganteya,Ganteyabain,Kanú,Koka,Pioche-Sioni,Pioje,Sioni,Zeona,Baicoca',
        hasDetect: true
    });
});
//# sourceMappingURL=snn.js.map