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
        name: 'Sami, Southern',
        nameT: 'saemi',
        iso2: 'sma',
        iso3: 'sma',
        wiki: 'Southern_Sami_language',
        OT: 'SSM',
        names: 'Saami,Same,Samic,Southern Lapp ("Northern Lappish","Norwegian Lapp","Lapp")'
    });
});
//# sourceMappingURL=sma.js.map