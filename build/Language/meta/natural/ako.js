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
        name: 'Akurio',
        nameT: 'Akurio',
        iso3: 'ako',
        wiki: 'Akurio_language',
        names: 'Akoerio,Akuliyo,Akuri,Akurijo,Akuriyo,Oyaricoulet,Triometesem,Triometesen,Wama,Wayaricuri'
    });
});
//# sourceMappingURL=ako.js.map