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
        name: 'XML',
        wiki: 'XML',
        type: 'data',
        languageId: 399,
        aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'rss', 'xsd', 'wsdl'],
        extensions: ['.xml', '.ant', '.axml', '.builds', '.ccxml', '.clixml', '.cproject', '.csl', '.csproj', '.ct', '.dita', '.ditamap', '.ditaval', '.dll.config', '.dotsettings', '.filters', '.fsproj', '.fxml', '.glade', '.gml', '.grxml', '.iml', '.ivy', '.jelly', '.jsproj', '.kml', '.launch', '.mdpolicy', '.mm', '.mod', '.mxml', '.nproj', '.nuspec', '.odd', '.osm', '.pkgproj', '.plist', '.pluginspec', '.props', '.ps1xml', '.psc1', '.pt', '.rdf', '.resx', '.rss', '.sch', '.scxml', '.sfproj', '.srdf', '.storyboard', '.stTheme', '.sublime-snippet', '.targets', '.tmCommand', '.tml', '.tmLanguage', '.tmPreferences', '.tmSnippet', '.tmTheme', '.ts', '.tsx', '.ui', '.urdf', '.ux', '.vbproj', '.vcxproj', '.vssettings', '.vxml', '.wsdl', '.wsf', '.wxi', '.wxl', '.wxs', '.x3d', '.xacro', '.xaml', '.xib', '.xlf', '.xliff', '.xmi', '.xml.dist', '.xproj', '.xsd', '.xul', '.zcml'],
        aceMode: 'xml',
        codemirrorMode: 'xml',
        codemirrorMimeType: 'text/xml',
        filenames: ['.classpath', '.project', 'App.config', 'NuGet.config', 'Settings.StyleCop', 'Web.Debug.config', 'Web.Release.config', 'Web.config', 'packages.config']
    };
    exports.default = meta;
});
//# sourceMappingURL=xml.js.map