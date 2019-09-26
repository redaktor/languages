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
        name: 'Shambala',
        nameT: 'Shambala',
        iso3: 'ksb',
        wiki: 'Shambala_language',
        names: 'Kisambaa,Kishambaa,Kishambala,Sambaa,Sambala,Sambara,Schambala,Shambaa'
    });
});
//# sourceMappingURL=ksb.js.map