"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap dropdown.js v5.2.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@popperjs/core'), require('./util/index'), require('./dom/event-handler'), require('./dom/manipulator'), require('./dom/selector-engine'), require('./base-component')) : typeof define === 'function' && define.amd ? define(['@popperjs/core', './util/index', './dom/event-handler', './dom/manipulator', './dom/selector-engine', './base-component'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Dropdown = factory(global["@popperjs/core"], global.Index, global.EventHandler, global.Manipulator, global.SelectorEngine, global.BaseComponent));
})(void 0, function (Popper, index, EventHandler, Manipulator, SelectorEngine, BaseComponent) {
  'use strict';

  var _interopDefaultLegacy = function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      "default": e
    };
  };

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null, _defineProperty({}, Symbol.toStringTag, {
      value: 'Module'
    }));

    if (e) {
      var _loop = function _loop(k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function get() {
              return e[k];
            }
          });
        }
      };

      for (var k in e) {
        _loop(k);
      }
    }

    n["default"] = e;
    return Object.freeze(n);
  }

  var Popper__namespace =
  /*#__PURE__*/
  _interopNamespace(Popper);

  var EventHandler__default =
  /*#__PURE__*/
  _interopDefaultLegacy(EventHandler);

  var Manipulator__default =
  /*#__PURE__*/
  _interopDefaultLegacy(Manipulator);

  var SelectorEngine__default =
  /*#__PURE__*/
  _interopDefaultLegacy(SelectorEngine);

  var BaseComponent__default =
  /*#__PURE__*/
  _interopDefaultLegacy(BaseComponent);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0-beta1): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */


  var NAME = 'dropdown';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var DATA_API_KEY = '.data-api';
  var ESCAPE_KEY = 'Escape';
  var TAB_KEY = 'Tab';
  var ARROW_UP_KEY = 'ArrowUp';
  var ARROW_DOWN_KEY = 'ArrowDown';
  var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  var EVENT_HIDE = "hide".concat(EVENT_KEY);
  var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
  var EVENT_SHOW = "show".concat(EVENT_KEY);
  var EVENT_SHOWN = "shown".concat(EVENT_KEY);
  var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY).concat(DATA_API_KEY);
  var EVENT_KEYDOWN_DATA_API = "keydown".concat(EVENT_KEY).concat(DATA_API_KEY);
  var EVENT_KEYUP_DATA_API = "keyup".concat(EVENT_KEY).concat(DATA_API_KEY);
  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPEND = 'dropend';
  var CLASS_NAME_DROPSTART = 'dropstart';
  var CLASS_NAME_DROPUP_CENTER = 'dropup-center';
  var CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  var SELECTOR_DATA_TOGGLE_SHOWN = "".concat(SELECTOR_DATA_TOGGLE, ".").concat(CLASS_NAME_SHOW);
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR = '.navbar';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = index.isRTL() ? 'top-end' : 'top-start';
  var PLACEMENT_TOPEND = index.isRTL() ? 'top-start' : 'top-end';
  var PLACEMENT_BOTTOM = index.isRTL() ? 'bottom-end' : 'bottom-start';
  var PLACEMENT_BOTTOMEND = index.isRTL() ? 'bottom-start' : 'bottom-end';
  var PLACEMENT_RIGHT = index.isRTL() ? 'left-start' : 'right-start';
  var PLACEMENT_LEFT = index.isRTL() ? 'right-start' : 'left-start';
  var PLACEMENT_TOPCENTER = 'top';
  var PLACEMENT_BOTTOMCENTER = 'bottom';
  var Default = {
    offset: [0, 2],
    boundary: 'clippingParents',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null,
    autoClose: true
  };
  var DefaultType = {
    offset: '(array|string|function)',
    boundary: '(string|element)',
    reference: '(string|element|object)',
    display: 'string',
    popperConfig: '(null|object|function)',
    autoClose: '(boolean|string)'
  };
  /**
   * Class definition
   */

  var Dropdown =
  /*#__PURE__*/
  function (_BaseComponent__defau) {
    _inherits(Dropdown, _BaseComponent__defau);

    function Dropdown(element, config) {
      var _this;

      _classCallCheck(this, Dropdown);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, element, config));
      _this._popper = null;
      _this._parent = _this._element.parentNode; // dropdown wrapper

      _this._menu = SelectorEngine__default["default"].findOne(SELECTOR_MENU, _this._parent);
      _this._inNavbar = _this._detectNavbar();
      return _this;
    } // Getters


    _createClass(Dropdown, [{
      key: "toggle",
      // Public
      value: function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (index.isDisabled(this._element) || this._isShown()) {
          return;
        }

        var relatedTarget = {
          relatedTarget: this._element
        };
        var showEvent = EventHandler__default["default"].trigger(this._element, EVENT_SHOW, relatedTarget);

        if (showEvent.defaultPrevented) {
          return;
        }

        this._createPopper(); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


        if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (_ref = []).concat.apply(_ref, _toConsumableArray(document.body.children))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _ref;

              var element = _step.value;
              EventHandler__default["default"].on(element, 'mouseover', index.noop);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        this._element.focus();

        this._element.setAttribute('aria-expanded', true);

        this._menu.classList.add(CLASS_NAME_SHOW);

        this._element.classList.add(CLASS_NAME_SHOW);

        EventHandler__default["default"].trigger(this._element, EVENT_SHOWN, relatedTarget);
      }
    }, {
      key: "hide",
      value: function hide() {
        if (index.isDisabled(this._element) || !this._isShown()) {
          return;
        }

        var relatedTarget = {
          relatedTarget: this._element
        };

        this._completeHide(relatedTarget);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        if (this._popper) {
          this._popper.destroy();
        }

        _get(_getPrototypeOf(Dropdown.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar();

        if (this._popper) {
          this._popper.update();
        }
      } // Private

    }, {
      key: "_completeHide",
      value: function _completeHide(relatedTarget) {
        var hideEvent = EventHandler__default["default"].trigger(this._element, EVENT_HIDE, relatedTarget);

        if (hideEvent.defaultPrevented) {
          return;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = (_ref2 = []).concat.apply(_ref2, _toConsumableArray(document.body.children))[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _ref2;

              var element = _step2.value;
              EventHandler__default["default"].off(element, 'mouseover', index.noop);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }

        if (this._popper) {
          this._popper.destroy();
        }

        this._menu.classList.remove(CLASS_NAME_SHOW);

        this._element.classList.remove(CLASS_NAME_SHOW);

        this._element.setAttribute('aria-expanded', 'false');

        Manipulator__default["default"].removeDataAttribute(this._menu, 'popper');
        EventHandler__default["default"].trigger(this._element, EVENT_HIDDEN, relatedTarget);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _get(_getPrototypeOf(Dropdown.prototype), "_getConfig", this).call(this, config);

        if (_typeof(config.reference) === 'object' && !index.isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
          // Popper virtual elements require a getBoundingClientRect method
          throw new TypeError("".concat(NAME.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        }

        return config;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper() {
        if (typeof Popper__namespace === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = this._parent;
        } else if (index.isElement(this._config.reference)) {
          referenceElement = index.getElement(this._config.reference);
        } else if (_typeof(this._config.reference) === 'object') {
          referenceElement = this._config.reference;
        }

        var popperConfig = this._getPopperConfig();

        this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this._menu.classList.contains(CLASS_NAME_SHOW);
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var parentDropdown = this._parent;

        if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
          return PLACEMENT_RIGHT;
        }

        if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
          return PLACEMENT_LEFT;
        }

        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
          return PLACEMENT_TOPCENTER;
        }

        if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
          return PLACEMENT_BOTTOMCENTER;
        } // We need to trim the value because custom properties can also include spaces


        var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
          return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
        }

        return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return this._element.closest(SELECTOR_NAVBAR) !== null;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this2 = this;

        var offset = this._config.offset;

        if (typeof offset === 'string') {
          return offset.split(',').map(function (value) {
            return Number.parseInt(value, 10);
          });
        }

        if (typeof offset === 'function') {
          return function (popperData) {
            return offset(popperData, _this2._element);
          };
        }

        return offset;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var defaultBsPopperConfig = {
          placement: this._getPlacement(),
          modifiers: [{
            name: 'preventOverflow',
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: 'offset',
            options: {
              offset: this._getOffset()
            }
          }]
        }; // Disable Popper if we have a static display or Dropdown is in Navbar

        if (this._inNavbar || this._config.display === 'static') {
          Manipulator__default["default"].setDataAttribute(this._menu, 'popper', 'static'); // todo:v6 remove

          defaultBsPopperConfig.modifiers = [{
            name: 'applyStyles',
            enabled: false
          }];
        }

        return _objectSpread({}, defaultBsPopperConfig, {}, typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref3) {
        var key = _ref3.key,
            target = _ref3.target;
        var items = SelectorEngine__default["default"].find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(function (element) {
          return index.isVisible(element);
        });

        if (!items.length) {
          return;
        } // if target isn't included in items (e.g. when expanding the dropdown)
        // allow cycling to get the last item in case key equals ARROW_UP_KEY


        index.getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
      } // Static

    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Dropdown.getOrCreateInstance(this, config);

          if (typeof config !== 'string') {
            return;
          }

          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config]();
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(event) {
        if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY) {
          return;
        }

        var openToggles = SelectorEngine__default["default"].find(SELECTOR_DATA_TOGGLE_SHOWN);
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = openToggles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var toggle = _step3.value;
            var context = Dropdown.getInstance(toggle);

            if (!context || context._config.autoClose === false) {
              continue;
            }

            var composedPath = event.composedPath();
            var isMenuTarget = composedPath.includes(context._menu);

            if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
              continue;
            } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


            if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
              continue;
            }

            var relatedTarget = {
              relatedTarget: context._element
            };

            if (event.type === 'click') {
              relatedTarget.clickEvent = event;
            }

            context._completeHide(relatedTarget);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(event) {
        // If not an UP | DOWN | ESCAPE key => not a dropdown command
        // If input/textarea && if key is other than ESCAPE => not a dropdown command
        var isInput = /input|textarea/i.test(event.target.tagName);
        var isEscapeEvent = event.key === ESCAPE_KEY;
        var isUpOrDownEvent = [ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key);

        if (!isUpOrDownEvent && !isEscapeEvent) {
          return;
        }

        if (isInput && !isEscapeEvent) {
          return;
        }

        event.preventDefault();
        var getToggleButton = SelectorEngine__default["default"].findOne(SELECTOR_DATA_TOGGLE, event.delegateTarget.parentNode);
        var instance = Dropdown.getOrCreateInstance(getToggleButton);

        if (isUpOrDownEvent) {
          event.stopPropagation();
          instance.show();

          instance._selectMenuItem(event);

          return;
        }

        if (instance._isShown()) {
          // else is escape and we check if it is shown
          event.stopPropagation();
          instance.hide();
          getToggleButton.focus();
        }
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }]);

    return Dropdown;
  }(BaseComponent__default["default"]);
  /**
   * Data API implementation
   */


  EventHandler__default["default"].on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown.dataApiKeydownHandler);
  EventHandler__default["default"].on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler__default["default"].on(document, EVENT_CLICK_DATA_API, Dropdown.clearMenus);
  EventHandler__default["default"].on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler__default["default"].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Dropdown);
  return Dropdown;
});