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
        name: 'Frisian, Saterlandic',
        nameT: 'Frisian, Saterlandic',
        iso3: 'stq',
        wiki: 'Saterland_Frisian_language',
        names: 'Friesen,Saterfriesen,Saterfriesiesch,Saterlandic,Saterlandic Frisian,Saterländisch',
        hasDetect: true
    });
});
//# sourceMappingURL=stq.js.map