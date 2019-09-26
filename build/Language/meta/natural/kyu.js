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
        name: 'Kayah, Western',
        nameT: 'Kayah, Western',
        iso3: 'kyu',
        wiki: 'Red_Karen_language',
        names: 'Karenni,Karennyi,Karieng Daeng,Kayah Li,Red Karen,Yang Daeng'
    });
});
//# sourceMappingURL=kyu.js.map