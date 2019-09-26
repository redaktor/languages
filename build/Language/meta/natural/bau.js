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
        name: 'Bada (Nigeria)',
        nameT: 'Bada (Nigeria)',
        iso3: 'bau',
        wiki: 'Jarawa_language_(Nigeria)',
        names: 'Bada’,Badanchi,Badawa,Bat,Garaka,Jar,Jarawan Kogi,Kanna,Mbada,Mbadawa,Plains Jarawa,River Jarawa'
    });
});
//# sourceMappingURL=bau.js.map