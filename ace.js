//
// This module is a passthru allowing clients to use AMD directly over the 'lib' folder.
//
// Being deployed as a sibling to the 'ace' folder works as follows:
//
// var ace = require('ace');
//
// 'ace' is first substituted with 'path-to/lib/ace', and then the AMD loader resolves 'path-to/lib/ace.js'.
//
// var foo = require('ace/bar/foo');
//
// 'ace' is first substituted with 'path-to/lib/ace', and then the AMD loader resolves 'path-to/lib/ace/bar/foo.js'.
//
define(['require','exports', 'ace/ace', 'ace/config'], function(require, exports, ace, config) {

exports.config = config;

exports.require = require;

exports.edit = function(el, workspace) {return ace.edit(el, workspace);};

exports.workspace = function() {return ace.workspace();};

exports.createEditSession = function(text, mode) {return ace.createEditSession(text, mode);};

exports.EditSession = ace.EditSession;

exports.UndoManager = ace.UndoManager;
});
