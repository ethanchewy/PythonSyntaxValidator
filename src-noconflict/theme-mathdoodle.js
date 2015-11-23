ace.define("ace/theme/mathdoodle",["require","exports","module","ace/lib/dom"], function(require, exports, module) {
"no use strict";
exports.isDark = true;
exports.cssClass = "ace-mathdoodle";
exports.cssText = ".ace-mathdoodle .ace_gutter {\
background: #232323;\
color: #E2E2E2\
}\
.ace-mathdoodle .ace_print-margin {\
width: 1px;\
background: #232323\
}\
.ace-mathdoodle {\
background-color: #141414;\
color: #F8F8F8\
}\
.ace-mathdoodle .ace_cursor {\
color: #A7A7A7\
}\
.ace-mathdoodle .ace_marker-layer .ace_selection {\
background: rgba(221, 240, 255, 0.20)\
}\
.ace-mathdoodle.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #141414;\
}\
.ace-mathdoodle .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-mathdoodle .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgba(255, 255, 255, 0.25)\
}\
.ace-mathdoodle .ace_marker-layer .ace_active-line {\
background: rgba(255, 255, 255, 0.031)\
}\
.ace-mathdoodle .ace_gutter-active-line {\
background-color: rgba(255, 255, 255, 0.031)\
}\
.ace-mathdoodle .ace_marker-layer .ace_selected-word {\
border: 1px solid rgba(221, 240, 255, 0.20)\
}\
.ace-mathdoodle .ace_invisible {\
color: rgba(255, 255, 255, 0.25)\
}\
.ace-mathdoodle .ace_keyword,\
.ace-mathdoodle .ace_meta {\
color: #CDA869\
}\
.ace-mathdoodle .ace_constant,\
.ace-mathdoodle .ace_constant.ace_character,\
.ace-mathdoodle .ace_constant.ace_character.ace_escape,\
.ace-mathdoodle .ace_constant.ace_other,\
.ace-mathdoodle .ace_heading,\
.ace-mathdoodle .ace_markup.ace_heading,\
.ace-mathdoodle .ace_support.ace_constant {\
color: #CF6A4C\
}\
.ace-mathdoodle .ace_invalid.ace_illegal {\
color: #F8F8F8;\
background-color: rgba(86, 45, 86, 0.75)\
}\
.ace-mathdoodle .ace_invalid.ace_deprecated {\
text-decoration: underline;\
font-style: italic;\
color: #D2A8A1\
}\
.ace-mathdoodle .ace_support {\
color: #9B859D\
}\
.ace-mathdoodle .ace_fold {\
background-color: #AC885B;\
border-color: #F8F8F8\
}\
.ace-mathdoodle .ace_support.ace_function {\
color: #DAD085\
}\
.ace-mathdoodle .ace_list,\
.ace-mathdoodle .ace_markup.ace_list,\
.ace-mathdoodle .ace_storage {\
color: #F9EE98\
}\
.ace-mathdoodle .ace_entity.ace_name.ace_function,\
.ace-mathdoodle .ace_meta.ace_tag,\
.ace-mathdoodle .ace_variable {\
color: #AC885B\
}\
.ace-mathdoodle .ace_string {\
color: #8F9D6A\
}\
.ace-mathdoodle .ace_string.ace_regexp {\
color: #E9C062\
}\
.ace-mathdoodle .ace_comment {\
font-style: italic;\
color: #5F5A60\
}\
.ace-mathdoodle .ace_variable {\
color: #7587A6\
}\
.ace-mathdoodle .ace_xml-pe {\
color: #494949\
}\
.ace-mathdoodle .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQERFpYLC1tf0PAAgOAnPnhxyiAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
