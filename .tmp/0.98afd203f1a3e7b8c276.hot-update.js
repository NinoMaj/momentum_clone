webpackHotUpdate(0,{

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(22), RootInstanceProvider = __webpack_require__(23), ReactMount = __webpack_require__(17), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_2q3lhun33s = function () {
  var path = 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\containers\\App.js',
      hash = '398083ea81ca13f7c00a6a809298773c0171da71',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\containers\\App.js',
    statementMap: {
      '0': {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 12
        }
      },
      '1': {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 17,
          column: 6
        }
      },
      '2': {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 73
        }
      },
      '3': {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 24,
          column: 7
        }
      },
      '4': {
        start: {
          line: 28,
          column: 29
        },
        end: {
          line: 28,
          column: 39
        }
      },
      '5': {
        start: {
          line: 29,
          column: 29
        },
        end: {
          line: 32,
          column: 6
        }
      },
      '6': {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 52,
          column: 6
        }
      },
      '7': {
        start: {
          line: 56,
          column: 0
        },
        end: {
          line: 60,
          column: 2
        }
      },
      '8': {
        start: {
          line: 63,
          column: 2
        },
        end: {
          line: 66,
          column: 4
        }
      },
      '9': {
        start: {
          line: 70,
          column: 2
        },
        end: {
          line: 72,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        loc: {
          start: {
            line: 12,
            column: 16
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 12
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        loc: {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 21
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        loc: {
          start: {
            line: 27,
            column: 11
          },
          end: {
            line: 53,
            column: 3
          }
        },
        line: 27
      },
      '3': {
        name: 'mapStateToProps',
        decl: {
          start: {
            line: 62,
            column: 9
          },
          end: {
            line: 62,
            column: 24
          }
        },
        loc: {
          start: {
            line: 62,
            column: 32
          },
          end: {
            line: 67,
            column: 1
          }
        },
        line: 62
      },
      '4': {
        name: 'mapDispatchToProps',
        decl: {
          start: {
            line: 69,
            column: 9
          },
          end: {
            line: 69,
            column: 27
          }
        },
        loc: {
          start: {
            line: 69,
            column: 38
          },
          end: {
            line: 73,
            column: 1
          }
        },
        line: 69
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 36,
            column: 9
          },
          end: {
            line: 46,
            column: 11
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 36,
            column: 9
          },
          end: {
            line: 36,
            column: 38
          }
        }, {
          start: {
            line: 37,
            column: 10
          },
          end: {
            line: 45,
            column: 16
          }
        }],
        line: 36
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
      '7': 0,
      '8': 0,
      '9': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
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

var _redux = __webpack_require__(110);

var _reactRedux = __webpack_require__(159);

var _Header = __webpack_require__(563);

var _Header2 = _interopRequireDefault(_Header);

var _MainSection = __webpack_require__(565);

var _MainSection2 = _interopRequireDefault(_MainSection);

var _MainFocus = __webpack_require__(564);

var _MainFocus2 = _interopRequireDefault(_MainFocus);

var _classnames = __webpack_require__(99);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(560);

var TodoActions = _interopRequireWildcard(_index);

var _mainFocus_actions = __webpack_require__(561);

var MainFocusActions = _interopRequireWildcard(_mainFocus_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    ++cov_2q3lhun33s.f[0];
    ++cov_2q3lhun33s.s[0];

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    ++cov_2q3lhun33s.s[1];


    _this.state = {
      todosOpen: false
    };
    ++cov_2q3lhun33s.s[2];
    _this.handleOpenOrCloseTodos = _this.handleOpenOrCloseTodos.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleOpenOrCloseTodos',
    value: function handleOpenOrCloseTodos() {
      ++cov_2q3lhun33s.f[1];
      ++cov_2q3lhun33s.s[3];

      this.setState({
        todosOpen: !this.state.todosOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      ++cov_2q3lhun33s.f[2];

      var _ref = (++cov_2q3lhun33s.s[4], this.props),
          todos = _ref.todos,
          actions = _ref.actions;

      var todosOpenPressed = (++cov_2q3lhun33s.s[5], (0, _classnames2.default)({
        openTodoLink: true,
        todosOpenPressed: this.state.todosOpen
      }));
      ++cov_2q3lhun33s.s[6];
      return _react2.default.createElement(
        'div',
        { style: '2px solid blue' },
        _react2.default.createElement(
          'div',
          { className: todosOpenPressed, onClick: this.handleOpenOrCloseTodos },
          'todos'
        ),
        (++cov_2q3lhun33s.b[0][0], this.state.todosOpen === true) && (++cov_2q3lhun33s.b[0][1], _react2.default.createElement(
          'div',
          { className: 'todoContainer' },
          _react2.default.createElement(_Header2.default, {
            addTodo: actions.addTodo
          }),
          _react2.default.createElement(_MainSection2.default, {
            todos: todos,
            actions: actions
          })
        )),
        _react2.default.createElement(_MainFocus2.default, {
          mainFocus: this.props.mainFocus,
          addMainFocus: actions.addMainFocus
        })
      );
    }
  }]);

  return App;
}(_react.Component);

++cov_2q3lhun33s.s[7];


App.propTypes = {
  todos: _react.PropTypes.array.isRequired,
  actions: _react.PropTypes.object.isRequired,
  mainFocus: _react.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  ++cov_2q3lhun33s.f[3];
  ++cov_2q3lhun33s.s[8];

  return {
    todos: state.todos,
    mainFocus: state.mainFocus
  };
}

function mapDispatchToProps(dispatch) {
  ++cov_2q3lhun33s.f[4];
  ++cov_2q3lhun33s.s[9];

  return {
    actions: (0, _redux.bindActionCreators)(Object.assign({}, TodoActions, MainFocusActions), dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(24); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "App.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)(module)))

/***/ }

})
//# sourceMappingURL=0.98afd203f1a3e7b8c276.hot-update.js.map