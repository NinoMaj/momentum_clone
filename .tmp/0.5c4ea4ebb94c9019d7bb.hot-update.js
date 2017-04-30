webpackHotUpdate(0,{

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(28), RootInstanceProvider = __webpack_require__(29), ReactMount = __webpack_require__(20), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_10hzuoydu4 = function () {
  var path = 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\components\\Header.js',
      hash = '82643385a0146323fcf397ceacd4a655c2f85351',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\components\\Header.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 17
        }
      },
      '1': {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 49
        }
      },
      '2': {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 13,
          column: 5
        }
      },
      '3': {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 31
        }
      },
      '4': {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 25,
          column: 6
        }
      },
      '5': {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 31,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 3
          }
        },
        loc: {
          start: {
            line: 5,
            column: 21
          },
          end: {
            line: 8,
            column: 3
          }
        },
        line: 5
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        loc: {
          start: {
            line: 10,
            column: 19
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 10
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        },
        loc: {
          start: {
            line: 16,
            column: 11
          },
          end: {
            line: 26,
            column: 3
          }
        },
        line: 16
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        }, {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        }],
        line: 11
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _TodoTextInput = __webpack_require__(228);

var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    ++cov_10hzuoydu4.f[0];
    ++cov_10hzuoydu4.s[0];

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    ++cov_10hzuoydu4.s[1];

    _this.handleSave = _this.handleSave.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'handleSave',
    value: function handleSave(text) {
      ++cov_10hzuoydu4.f[1];
      ++cov_10hzuoydu4.s[2];

      if (text.length !== 0) {
        ++cov_10hzuoydu4.b[0][0];
        ++cov_10hzuoydu4.s[3];

        this.props.addTodo(text);
      } else {
        ++cov_10hzuoydu4.b[0][1];
      }
    }
  }, {
    key: 'render',
    value: function render() {
      ++cov_10hzuoydu4.f[2];
      ++cov_10hzuoydu4.s[4];

      return _react2.default.createElement(
        'header',
        { className: 'header' },
        _react2.default.createElement(_TodoTextInput2.default, {
          newTodo: true,
          onSave: this.handleSave,
          placeholder: 'What needs to be done?'
        })
      );
    }
  }]);

  return Header;
}(_react.Component);

++cov_10hzuoydu4.s[5];


Header.propTypes = {
  addTodo: _react.PropTypes.func.isRequired
};

exports.default = Header;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(30); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Header.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }

})
//# sourceMappingURL=0.5c4ea4ebb94c9019d7bb.hot-update.js.map