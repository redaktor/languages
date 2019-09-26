(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const meta = {
        name: 'Nix package manager',
        wiki: 'Nix_package_manager',
        type: 'programming',
        languageId: 252,
        color: '#7e7eff',
        aliases: ['nixos'],
        extensions: ['.nix'],
        aceMode: 'nix',
        tmScope: 'source.nix'
    };
    exports.default = meta;
});
//# sourceMappingURL=nix.js.map