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
        name: 'Kunama',
        nameT: 'Kunama',
        iso3: 'kun',
        wiki: 'Kunama_language',
        names: 'Baada,Baaden,Baaza,Baazayn,Baazen,Bada,Baden,Baza,Bazen,Cunama,Diila'
    });
});
//# sourceMappingURL=kun.js.map