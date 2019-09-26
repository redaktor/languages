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
        name: 'Wiradhuri',
        nameT: 'Wiradhuri',
        iso3: 'wrh',
        wiki: 'Wiradjuri_language',
        names: 'Berrembeel,Warandgeri,Werogery,Wiiratheri,Wira-Athoree,Wiradhurri,Wiradjuri,Wiraduri,Wiraidyuri,Wirajeree,Wirashuri,Wiratheri,Wirracharee,Wirrai’yarrai,Wooragurie,Wordjerg'
    });
});
//# sourceMappingURL=wrh.js.map