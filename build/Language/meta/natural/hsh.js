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
        name: 'Hungarian Sign Language',
        nameT: 'Hungarian Sign Language',
        iso3: 'hsh',
        wiki: 'Hungarian_Sign_Language',
        names: 'Magyar Jelnyelv,Magyarországi jelnyelv'
    });
});
//# sourceMappingURL=hsh.js.map