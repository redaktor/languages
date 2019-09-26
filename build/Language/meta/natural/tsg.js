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
        name: 'Tausug',
        nameT: 'Tausug',
        iso3: 'tsg',
        wiki: 'Tausug_language',
        names: 'Joloano Sulu,Jolohano,Moro Joloano,Sinug Tausug,Sooloo,Sulu,Suluk,Taosug,Tausog,Taw Sug,Joloano,Sug,Tausug,Bahasa Sug,Sinug ("Moro")'
    });
});
//# sourceMappingURL=tsg.js.map