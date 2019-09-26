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
        name: 'Assangori',
        nameT: 'Assangori',
        iso3: 'sjg',
        wiki: 'Sungor_language',
        names: 'Asong,Assoungor,Asungore,Azanguri,Bognak-Asungorung,Goran,Madungore,Soungor,Sungor'
    });
});
//# sourceMappingURL=sjg.js.map