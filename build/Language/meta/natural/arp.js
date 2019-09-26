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
        name: 'Arapaho',
        nameT: 'Hinono’eitiitt',
        iso2: 'arp',
        iso3: 'arp',
        wiki: 'Arapaho_language',
        names: 'Arrapahoe',
        hasDetect: true
    });
});
//# sourceMappingURL=arp.js.map