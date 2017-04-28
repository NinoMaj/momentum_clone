webpackHotUpdate(0,{

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(28), RootInstanceProvider = __webpack_require__(29), ReactMount = __webpack_require__(20), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_2q3lhun33s = function () {
  var path = 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\containers\\App.js',
      hash = 'd424b4acdd3f896e1125c28b4d4b8c97d40651ae',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\containers\\App.js',
    statementMap: {
      '0': {
        start: {
          line: 26,
          column: 29
        },
        end: {
          line: 26,
          column: 39
        }
      },
      '1': {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 37,
          column: 6
        }
      },
      '2': {
        start: {
          line: 41,
          column: 0
        },
        end: {
          line: 44,
          column: 2
        }
      },
      '3': {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 49,
          column: 4
        }
      },
      '4': {
        start: {
          line: 53,
          column: 2
        },
        end: {
          line: 55,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        loc: {
          start: {
            line: 25,
            column: 11
          },
          end: {
            line: 38,
            column: 3
          }
        },
        line: 25
      },
      '1': {
        name: 'mapStateToProps',
        decl: {
          start: {
            line: 46,
            column: 9
          },
          end: {
            line: 46,
            column: 24
          }
        },
        loc: {
          start: {
            line: 46,
            column: 32
          },
          end: {
            line: 50,
            column: 1
          }
        },
        line: 46
      },
      '2': {
        name: 'mapDispatchToProps',
        decl: {
          start: {
            line: 52,
            column: 9
          },
          end: {
            line: 52,
            column: 27
          }
        },
        loc: {
          start: {
            line: 52,
            column: 38
          },
          end: {
            line: 56,
            column: 1
          }
        },
        line: 52
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    b: {},
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

var _redux = __webpack_require__(109);

var _reactRedux = __webpack_require__(233);

var _Header = __webpack_require__(562);

var _Header2 = _interopRequireDefault(_Header);

var _MainSection = __webpack_require__(563);

var _MainSection2 = _interopRequireDefault(_MainSection);

var _index = __webpack_require__(560);

var TodoActions = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// let xhr;

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',

    // componentDidMount() {
    //   xhr = new XMLHttpRequest();
    //   xhr.open('GET', 'https://ipinfo.io/json', true);
    //   xhr.send();

    //   xhr.addEventListener('loadend', this.getBackground, false);
    // }
    // getBackground() {
    //   if (xhr.readyState === 4 && xhr.status === 200) {
    //     const response = JSON.parse(xhr.responseText);
    //     console.log(response);
    //   }
    // }

    value: function render() {
      ++cov_2q3lhun33s.f[0];

      var _ref = (++cov_2q3lhun33s.s[0], this.props),
          todos = _ref.todos,
          actions = _ref.actions;

      ++cov_2q3lhun33s.s[1];

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, {
          addTodo: actions.addTodo
        }),
        _react2.default.createElement(_MainSection2.default, {
          todos: todos,
          actions: actions
        })
      );
    }
  }]);

  return App;
}(_react.Component);

++cov_2q3lhun33s.s[2];


App.propTypes = {
  todos: _react.PropTypes.array.isRequired,
  actions: _react.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  ++cov_2q3lhun33s.f[1];
  ++cov_2q3lhun33s.s[3];

  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  ++cov_2q3lhun33s.f[2];
  ++cov_2q3lhun33s.s[4];

  return {
    actions: (0, _redux.bindActionCreators)(TodoActions, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(30); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "App.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }

})
//# sourceMappingURL=0.fa1880994be8774a72d2.hot-update.js.map