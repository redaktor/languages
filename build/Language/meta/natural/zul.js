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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Zulu',
        nameT: 'isiZulu',
        iso1: 'zu',
        iso2: 'zul',
        iso3: 'zul',
        wiki: 'Zulu_language',
        OT: 'ZUL',
        names: 'Isizulu,Kingoni,Ngoni,Zunda',
        hasDetect: true
    });
});
//# sourceMappingURL=zul.js.map