(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _module = require("./module.js");

angular.module('demo', [_module.ComponentsModule]);
angular.module('umbraco').requires.push('demo');

},{"./module.js":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentsComponent = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Comments {
  constructor() {
    _defineProperty(this, "limitChars", () => {
      if (this.comment.length > this.limit) {
        this.info = this.maxLengthStr;
        this.comment = this.comment.substr(0, this.limit);
      } else {
        this.info = this.remainingStr.replace('%0%', this.limit - this.comment.length);
      }
    });

    this.limit = 250;
    this.maxLengthStr = `max length: ${this.limit}`;
    this.remainingStr = 'remaining characters: %0%';
    this.labelText = 'Comment';
    console.log(`I'm the ctor in the component`);
    debugger;
  }

}

var template = `
    <div class="umb-el-wrap">
        <label class="control-label">
            {{ $ctrl.labelText }}
            <small ng-bind="$ctrl.info"></small>
        </label>
        <div class="controls">
            <textarea 
                ng-model="$ctrl.comment" 
                ng-change="$ctrl.limitChars()"
                no-dirty-check
                umb-auto-focus
                rows="5"                     
                class="umb-property-editor umb-textarea"></textarea>
        </div>
    </div>`;
var CommentsComponent = {
  name: 'demoComments',
  transclude: true,
  bindings: {
    comment: '='
  },
  template: template,
  controller: Comments
};
exports.CommentsComponent = CommentsComponent;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentsModule = void 0;

var _component = require("./component.js");

var ComponentsModule = angular.module('demo.components', []).component(_component.CommentsComponent.name, _component.CommentsComponent).name;
exports.ComponentsModule = ComponentsModule;

},{"./component.js":2}]},{},[1,2,3])

//# sourceMappingURL=app.js.map
