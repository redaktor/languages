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
        name: 'Senoufo, Cebaara',
        nameT: 'Senoufo, Cebaara',
        iso3: 'sef',
        wiki: 'Cebaara_language',
        names: 'Senadi,Senari,Syenere,Tiebaara,Tyebala'
    });
});
//# sourceMappingURL=sef.js.map