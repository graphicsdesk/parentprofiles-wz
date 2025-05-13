// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"images/jotera_v2.jpg":[function(require,module,exports) {
module.exports = "/jotera_v2.d2b9f9a3.jpg";
},{}],"images/jotera-phone.jpg":[function(require,module,exports) {
module.exports = "/jotera-phone.c16a4c8b.jpg";
},{}],"images/vien_v2.jpg":[function(require,module,exports) {
module.exports = "/vien_v2.53aca81a.jpg";
},{}],"images/vien-phone.jpg":[function(require,module,exports) {
module.exports = "/vien-phone.c7f36929.jpg";
},{}],"images/malky_v2.jpg":[function(require,module,exports) {
module.exports = "/malky_v2.de71c9ac.jpg";
},{}],"images/malky-phone.jpg":[function(require,module,exports) {
module.exports = "/malky-phone.b0c7143d.jpg";
},{}],"images/david_v2.jpg":[function(require,module,exports) {
module.exports = "/david_v2.6646e6ce.jpg";
},{}],"images/david-phone.jpg":[function(require,module,exports) {
module.exports = "/david-phone.e964da0f.jpg";
},{}],"scrolly4.js":[function(require,module,exports) {
"use strict";

var _jotera_v = _interopRequireDefault(require("./images/jotera_v2.jpg"));

var _joteraPhone = _interopRequireDefault(require("./images/jotera-phone.jpg"));

var _vien_v = _interopRequireDefault(require("./images/vien_v2.jpg"));

var _vienPhone = _interopRequireDefault(require("./images/vien-phone.jpg"));

var _malky_v = _interopRequireDefault(require("./images/malky_v2.jpg"));

var _malkyPhone = _interopRequireDefault(require("./images/malky-phone.jpg"));

var _david_v = _interopRequireDefault(require("./images/david_v2.jpg"));

var _davidPhone = _interopRequireDefault(require("./images/david-phone.jpg"));

function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }

function getResponsiveImage(name) {
  var width = window.innerWidth;
  var device = width <= 500 ? 'mobile' : 'desktop';
  var imageMap = {
    jotera: {
      desktop: _jotera_v.default,
      mobile: _joteraPhone.default,
      courtesy: 'Courtesy of Jotera Webster',
      photographer: null
    },
    vien: {
      desktop: _vien_v.default,
      mobile: _vienPhone.default,
      courtesy: 'Courtesy of Vien Nguyen',
      photographer: 'Photo by Morgan Desfosses'
    },
    malky: {
      desktop: _malky_v.default,
      mobile: _malkyPhone.default,
      courtesy: 'Courtesy of Malky Schwartz',
      photographer: null
    },
    david: {
      desktop: _david_v.default,
      mobile: _davidPhone.default,
      courtesy: 'Courtesy of David Benson',
      photographer: 'Photo by Morgan Desfosses'
    }
  };
  var entry = imageMap[name];
  return {
    url: entry && entry[device],
    courtesy: entry && entry.courtesy,
    photographer: entry && entry.photographer
  };
}

function handleStepEnter(element) {
  var imgFrame = document.getElementById("sticky-img-frame");
  var newImageKey = element.getAttribute("data-image");
  var newColor = element.getAttribute("data-color");

  var _getResponsiveImage = getResponsiveImage(newImageKey),
      newImage = _getResponsiveImage.url,
      courtesy = _getResponsiveImage.courtesy,
      photographer = _getResponsiveImage.photographer;

  if (newImage && imgFrame) {
    imgFrame.style.backgroundImage = "url('".concat(newImage, "')");
  }

  var leftCredit = document.getElementById("photo-credit-left");
  var rightCredit = document.getElementById("photo-credit-right");
  if (leftCredit) leftCredit.textContent = photographer || "";
  if (rightCredit) rightCredit.textContent = courtesy || "";

  if (window.innerWidth <= 500 && element.classList.contains("step")) {
    document.querySelectorAll(".step").forEach(function (step) {
      step.style.backgroundColor = "transparent";
    });
    element.style.backgroundColor = newColor ? "".concat(newColor, "80") : "rgba(0, 0, 0, 0.5)";
  }

  if (element.classList.contains("title-section") || element.classList.contains("intro-section") || element.classList.contains("concluding-section")) {
    document.getElementById("fade-overlay").style.opacity = 0.4;
    setTimeout(function () {
      document.body.style.backgroundColor = newColor || "#264653";
      document.getElementById("fade-overlay").style.opacity = 0;
    }, 200);
  } else if (newColor) {
    document.body.style.backgroundColor = newColor;
  }
}

var scroller = scrollama();
scroller.setup({
  step: ".step, .title-section, .intro-section, .concluding-section",
  offset: 0.5
}).onStepEnter(function (response) {
  handleStepEnter(response.element);
}); // Preload all images

["jotera", "vien", "malky", "david"].forEach(function (name) {
  var _getResponsiveImage2 = getResponsiveImage(name),
      url = _getResponsiveImage2.url;

  if (url) {
    var img = new Image();
    img.src = url;
  }
});
window.addEventListener("load", function () {
  if (!window.location.hash.includes('#refreshed')) {
    window.location.hash = '#refreshed';
    window.location.href = window.location.href; // force refresh once
  } // Wait a moment after load so layout stabilizes (fonts, images, etc.)


  setTimeout(function () {
    // Recalculate Scrollama trigger positions
    scroller.resize(); // Wait one animation frame to be safe

    requestAnimationFrame(function () {
      var firstVisible = document.querySelector(".step, .title-section, .intro-section, .concluding-section");

      if (firstVisible) {
        handleStepEnter(firstVisible);
      }
    });
  }, 250); // You can increase to 300–400ms if layout still isn't stable
});
window.addEventListener("resize", function () {
  scroller.resize();
});
},{"./images/jotera_v2.jpg":"images/jotera_v2.jpg","./images/jotera-phone.jpg":"images/jotera-phone.jpg","./images/vien_v2.jpg":"images/vien_v2.jpg","./images/vien-phone.jpg":"images/vien-phone.jpg","./images/malky_v2.jpg":"images/malky_v2.jpg","./images/malky-phone.jpg":"images/malky-phone.jpg","./images/david_v2.jpg":"images/david_v2.jpg","./images/david-phone.jpg":"images/david-phone.jpg"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50026" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scrolly4.js"], "script")
//# sourceMappingURL=/scrolly4.3362ba8d.js.map