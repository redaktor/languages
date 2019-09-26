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
        name: 'Tokano',
        nameT: 'Tokano',
        iso3: 'zuh',
        wiki: 'Tokano_language',
        names: 'Gamuso,Tokama,Yufiyufa,Zaka,Zuhozuho,Zuhuzuho'
    });
});
//# sourceMappingURL=zuh.js.map