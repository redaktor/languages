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
        name: 'Nanai',
        nameT: 'нанай',
        iso3: 'gld',
        wiki: 'Nanai_language',
        OT: 'NAN',
        names: 'Gold,Goldi,Hezhe,Hezhen,Juchen,Nanay,Sushen,Heche,Nanaj'
    });
});
//# sourceMappingURL=gld.js.map