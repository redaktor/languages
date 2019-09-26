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
        name: 'Wongo',
        nameT: 'Wongo',
        iso3: 'won',
        wiki: 'Wongo_language',
        names: 'Bakong,Gongo,Ndjembe,Tukkongo,Tukongo,Tukungo'
    });
});
//# sourceMappingURL=won.js.map