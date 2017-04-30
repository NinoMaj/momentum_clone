webpackHotUpdate(0,{

/***/ 624:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(28), RootInstanceProvider = __webpack_require__(29), ReactMount = __webpack_require__(20), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_lvhnlnyrj = function () {
  var path = 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\components\\MainFocus.js',
      hash = 'ffce38000c3053840c961b16fc5a341419841a8e',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\components\\MainFocus.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 17
        }
      },
      '1': {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 12,
          column: 7
        }
      },
      '2': {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 51
        }
      },
      '3': {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 20,
          column: 7
        }
      },
      '4': {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 29,
          column: 6
        }
      },
      '5': {
        start: {
          line: 33,
          column: 0
        },
        end: {
          line: 35,
          column: 2
        }
      },
      '6': {
        start: {
          line: 37,
          column: 24
        },
        end: {
          line: 41,
          column: 1
        }
      },
      '7': {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 40,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 3
          }
        },
        loc: {
          start: {
            line: 7,
            column: 21
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 7
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        loc: {
          start: {
            line: 17,
            column: 17
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 17
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 11
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 23
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 37,
            column: 24
          },
          end: {
            line: 37,
            column: 25
          }
        },
        loc: {
          start: {
            line: 37,
            column: 33
          },
          end: {
            line: 41,
            column: 1
          }
        },
        line: 37
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 11,
            column: 17
          },
          end: {
            line: 11,
            column: 48
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 11,
            column: 17
          },
          end: {
            line: 11,
            column: 42
          }
        }, {
          start: {
            line: 11,
            column: 46
          },
          end: {
            line: 11,
            column: 48
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
      '5': 0,
      '6': 0,
      '7': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
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

var _reactRedux = __webpack_require__(233);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint linebreak-style: ["error", "windows"] */

var MainFocus = function (_Component) {
  _inherits(MainFocus, _Component);

  function MainFocus(props) {
    _classCallCheck(this, MainFocus);

    ++cov_lvhnlnyrj.f[0];
    ++cov_lvhnlnyrj.s[0];

    var _this = _possibleConstructorReturn(this, (MainFocus.__proto__ || Object.getPrototypeOf(MainFocus)).call(this, props));

    ++cov_lvhnlnyrj.s[1];


    _this.state = {
      inputText: (++cov_lvhnlnyrj.b[0][0], _this.props.mainFocus.text) || (++cov_lvhnlnyrj.b[0][1], '')
    };

    ++cov_lvhnlnyrj.s[2];
    _this.handleInput = _this.handleInput.bind(_this);
    return _this;
  }

  _createClass(MainFocus, [{
    key: 'handleInput',
    value: function handleInput(e) {
      ++cov_lvhnlnyrj.f[1];
      ++cov_lvhnlnyrj.s[3];

      this.setState({
        inputText: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      ++cov_lvhnlnyrj.f[2];
      ++cov_lvhnlnyrj.s[4];

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          'What is your main focus of today?'
        ),
        _react2.default.createElement('input', { type: 'text', onChange: this.handleInput, value: this.state.inputText })
      );
    }
  }]);

  return MainFocus;
}(_react.Component);

++cov_lvhnlnyrj.s[5];


MainFocus.propTypes = {
  mainFocus: _react.PropTypes.object.isRequired
};

++cov_lvhnlnyrj.s[6];
var mapStateToProps = function mapStateToProps(state) {
  ++cov_lvhnlnyrj.f[3];
  ++cov_lvhnlnyrj.s[7];

  return {
    mainFocus: state.mainFocus
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MainFocus);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(30); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MainFocus.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }

})
//# sourceMappingURL=0.139772e898f4e951c508.hot-update.js.map