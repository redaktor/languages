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
        name: 'Ersu',
        nameT: 'Ersu',
        iso3: 'ers',
        wiki: 'Ersu_languages',
        names: 'Bu’erci,Bu’erzi,Bu’erzi Ersu,Doxu,Duoxu,Erhsu,Lizu,Lusu,T’osu'
    });
});
//# sourceMappingURL=ers.js.map