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
        name: 'Gimnime',
        nameT: 'Gimnime',
        iso3: 'gmn',
        wiki: 'Koma_language',
        names: 'Gimbe,Kadam,Koma Kadam,Komlama,Laame,Yotubo'
    });
});
//# sourceMappingURL=gmn.js.map