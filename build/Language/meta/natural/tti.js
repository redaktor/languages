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
        name: 'Tobati',
        nameT: 'Tobati',
        iso3: 'tti',
        wiki: 'Tobati_language',
        names: 'Enggros,Humboldt Jotafa,Jayapura,Jotafa,Tobwadic,Yautefa,Yotafa'
    });
});
//# sourceMappingURL=tti.js.map