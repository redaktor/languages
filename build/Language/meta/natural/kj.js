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
        name: 'Kuanyama',
        nameT: 'Kuanyama',
        iso1: 'kj',
        iso2: 'kua',
        iso3: 'kua',
        wiki: 'Kwanyama_dialect',
        names: 'Cuanhama,Humba,Kuanjama,Kwancama,Kwanjama,Kwanyama,Ochikwanyama,Oshikuanjama,Oshikwanyama,Ovambo,Oxikuanyama,Wambo,Otjiwambo,Owambo'
    });
});
//# sourceMappingURL=kj.js.map