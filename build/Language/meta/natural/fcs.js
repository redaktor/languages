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
        name: 'Quebec Sign Language',
        nameT: 'Quebec Sign Language',
        iso3: 'fcs',
        wiki: 'Quebec_Sign_Language',
        names: 'Langue des signes,Langue des signes du Québec,Langue des signes québécoise,Langue Signe Quebecars,LSQ,Québécoise'
    });
});
//# sourceMappingURL=fcs.js.map