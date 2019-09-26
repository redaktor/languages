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
        name: 'Lokoya',
        nameT: 'Lokoya',
        iso3: 'lky',
        wiki: 'Lokoya_language',
        names: 'Ellyria,Koyo,Loirya,Lokoiya,Lokoja,Loquia,Lowoi,Oirya,Owoi,Oxoriok'
    });
});
//# sourceMappingURL=lky.js.map