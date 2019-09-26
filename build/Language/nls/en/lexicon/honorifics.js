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
    zip = ['jr',
        'mr',
        'mrs',
        'ms',
        'dr',
        'prof',
        'sr',
        'sen',
        'corp',
        'rep',
        'gov',
        'atty',
        'supt',
        'det',
        'rev',
        'col',
        'gen',
        'lt',
        'cmdr',
        'adm',
        'capt',
        'sgt',
        'cpl',
        'maj',
        'misses',
        'mister',
        'sir',
        'esq',
        'mstr',
        'phd',
        'adj',
        'adv',
        'asst',
        'bldg',
        'brig',
        'comdr',
        'hon',
        'hc',
        'messrs',
        'mlle',
        'mme',
        'op',
        'ord',
        'pvt',
        'reps',
        'res',
        'sens',
        'sfc',
        'surg'];
    return zip;
});
//# sourceMappingURL=honorifics.js.map