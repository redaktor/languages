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
        name: 'Nisga’a',
        nameT: 'Nisǥa’a',
        iso3: 'ncg',
        wiki: 'Nisga%27a_language',
        names: 'Nass,Nisgha,Nishga,Nishka,Nisk’a,Nisqa’a'
    });
});
//# sourceMappingURL=ncg.js.map