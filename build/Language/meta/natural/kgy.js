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
        name: 'Kyerung',
        nameT: 'Kyerung',
        iso3: 'kgy',
        wiki: 'Kyirong-Kagate_language',
        names: 'Kyerong,Kyirong,Kyirong kai,Gyirong,Kyerung,Kyirong-nga,Kyirung'
    });
});
//# sourceMappingURL=kgy.js.map