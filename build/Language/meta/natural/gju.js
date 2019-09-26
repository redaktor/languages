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
        name: 'Gujari',
        nameT: 'Gujari',
        iso3: 'gju',
        wiki: 'Gujari_language',
        names: 'Gojari,Gojri,Gujuri Rajasthani,Gogri,Gujar,Gujer,Gujjari,Gujuri,Gurjar,Hindki,Kashmir Gujuri,Parimu,Rajasthani Gujuri'
    });
});
//# sourceMappingURL=gju.js.map