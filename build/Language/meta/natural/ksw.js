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
        name: 'Karen, S’gaw',
        nameT: 'Kanyaw',
        iso3: 'ksw',
        wiki: 'S%27gaw_Karen_language',
        names: 'Burmese Karen,Kanyaw,Kayinpyu,Kyetho,Paganyaw,Pchcknya,Pwakanyaw,S’gau,S’gaw,S’gaw Kayin,White Karen,Yang Khao,Karen,White'
    });
});
//# sourceMappingURL=ksw.js.map