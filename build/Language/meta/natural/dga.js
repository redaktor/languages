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
        name: 'Dagaare, Southern',
        nameT: 'Dagaare, Southern',
        iso3: 'dga',
        wiki: 'Dagaare_language',
        names: 'Dagaare,Dagara,Dagare,Dagari,Dagati,Degati,Dogaari,Southern Dagari',
        hasDetect: true
    });
});
//# sourceMappingURL=dga.js.map