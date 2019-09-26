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
        name: 'Santali',
        nameT: 'संथाली',
        iso2: 'sat',
        iso3: 'sat',
        wiki: 'Santali_language',
        OT: 'SAT',
        names: 'Har,Har Rar,Hor,Sandal,Sangtal,Santal,Santali,Satar,Sonthal,Samtali,Santhiali,Sentali,Sainti,Santhal'
    });
});
//# sourceMappingURL=sat.js.map