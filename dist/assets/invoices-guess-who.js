'use strict';



;define("invoices-guess-who/app", ["exports", "invoices-guess-who/resolver", "ember-load-initializers", "invoices-guess-who/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("invoices-guess-who/components/guessing-card", ["exports", "invoices-guess-who/utils/person-data"], function (_exports, _personData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function getRandomPerson() {
    const randomIndex = Math.floor(Math.random() * _personData.default.length);
    return _personData.default[randomIndex];
  }
  var _default = Ember.Component.extend({
    classNames: ['guessing-card'],
    init() {
      this._super(...arguments);
      this.set('selectedPerson', getRandomPerson());
    },
    selectedPerson: null,
    actions: {
      randomizePerson() {
        this.set('selectedPerson', getRandomPerson());
      }
    }
  });
  _exports.default = _default;
});
;define("invoices-guess-who/components/person-card", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = Ember.Component.extend({
    classNames: ['person-card']
  });
  _exports.default = _default;
});
;define("invoices-guess-who/components/person-grid", ["exports", "invoices-guess-who/utils/person-data"], function (_exports, _personData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = Ember.Component.extend({
    classNames: ['person-grid'],
    people: _personData.default
  });
  _exports.default = _default;
});
;define("invoices-guess-who/components/playing-card", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = Ember.Component.extend({
    classNames: ['playing-card'],
    classNameBindings: ['isFlipped:playing-card--is-flipped'],
    isFlipped: false,
    click() {
      this.toggleProperty('isFlipped');
    }
  });
  _exports.default = _default;
});
;define("invoices-guess-who/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("invoices-guess-who/controllers/gameboard", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  // import config from 'invoices-guess-who/config/environment';
  let GameboardController = (_dec = Ember._action, (_class = class GameboardController extends Ember.Controller {
    openPersonWindow() {
      window.open(`/your-card`, 'your card', 'height=350,width=350');
    }
  }, (_applyDecoratedDescriptor(_class.prototype, "openPersonWindow", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "openPersonWindow"), _class.prototype)), _class));
  _exports.default = GameboardController;
});
;define("invoices-guess-who/helpers/app-version", ["exports", "invoices-guess-who/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }
  var _default = Ember.Helper.helper(appVersion);
  _exports.default = _default;
});
;define("invoices-guess-who/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("invoices-guess-who/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("invoices-guess-who/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "invoices-guess-who/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("invoices-guess-who/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
  _exports.default = _default;
});
;define("invoices-guess-who/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /*
    This code initializes EmberData in an Ember application.

    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("invoices-guess-who/initializers/export-application-global", ["exports", "invoices-guess-who/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }
      var value = _environment.default.exportApplicationGlobal;
      var globalName;
      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }
      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }
  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("invoices-guess-who/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("invoices-guess-who/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("invoices-guess-who/router", ["exports", "invoices-guess-who/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('gameboard', {
      path: '/'
    });
    this.route('your-card');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("invoices-guess-who/routes/gameboard", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = Ember.Route.extend({});
  _exports.default = _default;
});
;define("invoices-guess-who/routes/your-card", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = Ember.Route.extend({});
  _exports.default = _default;
});
;define("invoices-guess-who/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("invoices-guess-who/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = Ember.HTMLBars.template({
    "id": "L73yflts",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "invoices-guess-who/templates/application.hbs"
    }
  });
  _exports.default = _default;
});
;define("invoices-guess-who/templates/components/guessing-card", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = Ember.HTMLBars.template({
    "id": "DjK1qe8o",
    "block": "{\"symbols\":[],\"statements\":[[5,\"person-card\",[],[[\"@person\"],[[23,0,[\"selectedPerson\"]]]]],[0,\"\\n\\n\"],[7,\"button\",false],[12,\"class\",\"guessing-card__button\"],[3,\"action\",[[23,0,[]],\"randomizePerson\"]],[8],[0,\"Shuffle\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "invoices-guess-who/templates/components/guessing-card.hbs"
    }
  });
  _exports.default = _default;
});
;define("invoices-guess-who/templates/components/person-card", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = Ember.HTMLBars.template({
    "id": "dzIJd4lG",
    "block": "{\"symbols\":[],\"statements\":[[7,\"img\",true],[10,\"class\",\"person-card__img\"],[11,\"src\",[24,[\"person\",\"img\"]]],[8],[9],[0,\"\\n\"],[7,\"p\",true],[10,\"class\",\"person-card__name\"],[8],[1,[24,[\"person\",\"name\"]],false],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "invoices-guess-who/templates/components/person-card.hbs"
    }
  });
  _exports.default = _default;
});
;define("invoices-guess-who/templates/components/person-grid", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = Ember.HTMLBars.template({
    "id": "pUOjKVDj",
    "block": "{\"symbols\":[\"person\"],\"statements\":[[4,\"each\",[[23,0,[\"people\"]]],null,{\"statements\":[[0,\"  \"],[5,\"playing-card\",[],[[\"@person\"],[[23,1,[]]]]],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "invoices-guess-who/templates/components/person-grid.hbs"
    }
  });
  _exports.default = _default;
});
;define("invoices-guess-who/templates/components/playing-card", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = Ember.HTMLBars.template({
    "id": "uu/vVgkk",
    "block": "{\"symbols\":[\"@person\"],\"statements\":[[7,\"div\",true],[8],[0,\"\\n\"],[4,\"unless\",[[23,0,[\"isFlipped\"]]],null,{\"statements\":[[0,\"      \"],[5,\"person-card\",[],[[\"@person\"],[[23,1,[]]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[1,[23,1,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "invoices-guess-who/templates/components/playing-card.hbs"
    }
  });
  _exports.default = _default;
});
;define("invoices-guess-who/templates/gameboard", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = Ember.HTMLBars.template({
    "id": "mjndCP+R",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"header-container\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"header-instructions\"],[8],[0,\"\\n    \"],[7,\"h1\",true],[8],[0,\"Invoices: Guess Who???\"],[9],[0,\"\\n    \"],[7,\"h2\",true],[8],[0,\"Goal: Guess the other player's Invoices team member before they guess yours!\"],[9],[0,\"\\n    \"],[7,\"ol\",true],[8],[0,\"\\n      \"],[7,\"li\",true],[8],[0,\"This is a 2 player game, have someone else pull up a board!\"],[9],[0,\"\\n      \"],[7,\"li\",true],[8],[0,\"Take turns asking yes or no questions to try and guess the other players card by process of elimination.\\n        \"],[7,\"ul\",true],[8],[0,\"\\n          \"],[7,\"li\",true],[8],[0,\"Ex. Is your team member from Canada?\"],[9],[0,\"\\n          \"],[7,\"li\",true],[8],[0,\"Ex. Is your team a mobile developer?\"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"li\",true],[8],[0,\"Use your board to flip over the cards of team members that you can eliminate\"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"get-person-button-container\"],[8],[0,\"\\n    \"],[7,\"button\",false],[12,\"class\",\"get-person-button\"],[3,\"on\",[\"click\",[23,0,[\"openPersonWindow\"]]]],[8],[0,\"\\n      Get team member\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\"],[5,\"person-grid\",[],[[],[]]],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "invoices-guess-who/templates/gameboard.hbs"
    }
  });
  _exports.default = _default;
});
;define("invoices-guess-who/templates/your-card", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = Ember.HTMLBars.template({
    "id": "cQ43TSaA",
    "block": "{\"symbols\":[],\"statements\":[[7,\"p\",true],[10,\"class\",\"guessing-card__text\"],[8],[0,\"Your team member is...\"],[9],[0,\"\\n\"],[5,\"guessing-card\",[],[[],[]]]],\"hasEval\":false}",
    "meta": {
      "moduleName": "invoices-guess-who/templates/your-card.hbs"
    }
  });
  _exports.default = _default;
});
;define("invoices-guess-who/utils/person-data", ["exports", "invoices-guess-who/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /** [TEMPLATE]
    {
      name: 'person',
      img: `${config.rootURL}assets/images/person.png`
    },
  */
  var _default = [{
    name: 'alyssa',
    img: `${_environment.default.rootURL}assets/images/alyssa.png`
  }, {
    name: 'amay',
    img: `${_environment.default.rootURL}assets/images/amay.png`
  }, {
    name: 'anthony',
    img: `${_environment.default.rootURL}assets/images/anthony.jpeg`
  }, {
    name: 'brad',
    img: `${_environment.default.rootURL}assets/images/brad.jpg`
  }, {
    name: 'carrie',
    img: `${_environment.default.rootURL}assets/images/carrie.jpg`
  }, {
    name: 'claire',
    img: `${_environment.default.rootURL}assets/images/claire.jpeg`
  }, {
    name: 'david',
    img: `${_environment.default.rootURL}assets/images/david.jpeg`
  }, {
    name: 'devany',
    img: `${_environment.default.rootURL}assets/images/devany.jpeg`
  }, {
    name: 'efe',
    img: `${_environment.default.rootURL}assets/images/efe.jpg`
  }, {
    name: 'emma',
    img: `${_environment.default.rootURL}assets/images/emma.jpeg`
  }, {
    name: 'hung',
    img: `${_environment.default.rootURL}assets/images/hung.jpg`
  }, {
    name: 'jae',
    img: `${_environment.default.rootURL}assets/images/jae.png`
  }, {
    name: 'jason',
    img: `${_environment.default.rootURL}assets/images/jason.jpeg`
  }, {
    name: 'jen',
    img: `${_environment.default.rootURL}assets/images/jen.png`
  }, {
    name: 'jess',
    img: `${_environment.default.rootURL}assets/images/jess.png`
  }, {
    name: 'jiaqi',
    img: `${_environment.default.rootURL}assets/images/jiaqi.jpeg`
  }, {
    name: 'joanne',
    img: `${_environment.default.rootURL}assets/images/joanne.jpeg`
  }, {
    name: 'jonathan',
    img: `${_environment.default.rootURL}assets/images/jonathan.jpeg`
  }, {
    name: 'jordan',
    img: `${_environment.default.rootURL}assets/images/jordan.png`
  }, {
    name: 'judy',
    img: `${_environment.default.rootURL}assets/images/judy.png`
  }, {
    name: 'kaitlyn',
    img: `${_environment.default.rootURL}assets/images/kaitlyn.jpg`
  }, {
    name: 'kalil',
    img: `${_environment.default.rootURL}assets/images/kalil.png`
  }, {
    name: 'karl',
    img: `${_environment.default.rootURL}assets/images/karl.jpeg`
  }, {
    name: 'margaret',
    img: `${_environment.default.rootURL}assets/images/margaret.jpg`
  }, {
    name: 'matt',
    img: `${_environment.default.rootURL}assets/images/mattb.jpg`
  }, {
    name: 'maya',
    img: `${_environment.default.rootURL}assets/images/maya.jpg`
  }, {
    name: 'mengqi',
    img: `${_environment.default.rootURL}assets/images/mengqi.png`
  }, {
    name: 'michael',
    img: `${_environment.default.rootURL}assets/images/michael.jpg`
  }, {
    name: 'michelle',
    img: `${_environment.default.rootURL}assets/images/michelle.jpeg`
  }, {
    name: 'monica',
    img: `${_environment.default.rootURL}assets/images/monica.png`
  }, {
    name: 'nestor',
    img: `${_environment.default.rootURL}assets/images/nestor.jpeg`
  }, {
    name: 'olivia',
    img: `${_environment.default.rootURL}assets/images/olivia.png`
  }, {
    name: 'paul',
    img: `${_environment.default.rootURL}assets/images/paul.png`
  }, {
    name: 'ramin',
    img: `${_environment.default.rootURL}assets/images/ramin.png`
  }, {
    name: 'rose',
    img: `${_environment.default.rootURL}assets/images/rose.png`
  }, {
    name: 'ryan l',
    img: `${_environment.default.rootURL}assets/images/ryanl.jpg`
  }, {
    name: 'ryan s',
    img: `${_environment.default.rootURL}assets/images/ryans.png`
  }, {
    name: 'sarang',
    img: `${_environment.default.rootURL}assets/images/sarang.jpeg`
  }, {
    name: 'sudheer',
    img: `${_environment.default.rootURL}assets/images/sudheer.jpg`
  }, {
    name: 'sukwon',
    img: `${_environment.default.rootURL}assets/images/sukwon.jpg`
  }, {
    name: 'wardell',
    img: `${_environment.default.rootURL}assets/images/wardell.png`
  }]; // Archive
  // {
  //   name: 'aaron',
  //   img: `${config.rootURL}assets/images/aaron.jpg`
  // },
  // {
  //   name: 'austin',
  //   img: `${config.rootURL}assets/images/austin.png`
  // },
  // {
  //   name: 'ben',
  //   img: `${config.rootURL}assets/images/ben.jpg`
  // },
  // {
  //   name: 'craig',
  //   img: `${config.rootURL}assets/images/craig.png`
  // },
  // {
  //   name: 'elan',
  //   img: `${config.rootURL}assets/images/elan.png`
  // },
  // {
  //   name: 'ini',
  //   img: `${config.rootURL}assets/images/ini.jpg`
  // },
  // {
  //   name: 'jesse',
  //   img: `${config.rootURL}assets/images/jesse.png`
  // },
  // {
  //   name: 'kushan',
  //   img: `${config.rootURL}assets/images/kushan.png`
  // },
  // {
  //   name: 'kyle',
  //   img: `${config.rootURL}assets/images/kyle.png`
  // },
  // {
  //   name: 'lesley',
  //   img: `${config.rootURL}assets/images/lesley.png`
  // },
  // {
  //   name: 'matt d',
  //   img: `${config.rootURL}assets/images/mattd.png`
  // },
  // {
  //   name: 'nik',
  //   img: `${config.rootURL}assets/images/nik.png`
  // },
  // {
  //   name: 'sam',
  //   img: `${config.rootURL}assets/images/sam.png`
  // },
  _exports.default = _default;
});
;

;define('invoices-guess-who/config/environment', [], function() {
  var prefix = 'invoices-guess-who';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("invoices-guess-who/app")["default"].create({"name":"invoices-guess-who","version":"0.0.0+cae69861"});
          }

//# sourceMappingURL=invoices-guess-who.map
