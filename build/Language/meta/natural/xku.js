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
        name: 'Kaamba',
        nameT: 'Kaamba',
        iso3: 'xku',
        wiki: 'Bembe_language_(Kibembe)',
        names: 'Kamba,Kikaamba'
    });
});
//# sourceMappingURL=xku.js.map