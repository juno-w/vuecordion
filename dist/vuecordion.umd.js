(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue2-transitions')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue2-transitions'], factory) :
  (global = global || self, factory(global.Vuecordion = {}, global.vue2Transitions));
}(this, (function (exports, vue2Transitions) { 'use strict';

  //

  var script = {
    name: 'Vuecordion',
    components: { CollapseTransition: vue2Transitions.CollapseTransition },
    props: {
      faq: {
        type: Array,
        required: true
      },
      wrapperClass: {
        type: String,
        default: 'w-full space-y-2'
      },
      questionWrapper: {
        type: String,
        default: 'bg-gradient cursor-pointer flex flex-wrap font-semibold items-center px-2 py-1 py-2 rounded-sm text-white'
      },
      questionClass: {
        type: String,
        default: 'flex-1'
      },
      answerClass: {
        type: String,
        default: 'p-2 text-sm bg-gray-100 transition duration-500 ease-in-out transform bg-white'
      },
      iconClass: {
        type: String,
        default: 'w-4 h-4 text-2xl transition duration-200 delay-200 transform'
      }
    },
    data: function data() {
      return {
        qIndex: 0
      }
    },
    methods: {
      makeActive: function makeActive(index) {
         index === this.qIndex ? this.qIndex = -1 : this.qIndex = index;
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      var options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      var hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              var originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { class: _vm.wrapperClass },
      _vm._l(_vm.faq, function(item, index) {
        return _c(
          "div",
          { key: index },
          [
            _c(
              "div",
              {
                ref: "question",
                refInFor: true,
                class: _vm.questionWrapper,
                on: {
                  click: function($event) {
                    return _vm.makeActive(index)
                  }
                }
              },
              [
                _c("p", { class: _vm.questionClass }, [_vm._v(_vm._s(item.q))]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: [
                      _vm.iconClass,
                      _vm.qIndex === index ? " " : "rotate-45"
                    ]
                  },
                  [
                    _c(
                      "svg",
                      { attrs: { fill: "currentColor", viewBox: "0 0 20 20" } },
                      [
                        _c("path", {
                          attrs: {
                            "fill-rule": "evenodd",
                            d:
                              "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                            "clip-rule": "evenodd"
                          }
                        })
                      ]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("collapse-transition", [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.qIndex === index ? true : false,
                      expression: "qIndex === index ? true : false"
                    }
                  ],
                  class: _vm.answerClass
                },
                [_vm._v("\n        " + _vm._s(item.a) + "\n      ")]
              )
            ])
          ],
          1
        )
      }),
      0
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = undefined;
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__ = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      undefined,
      undefined,
      undefined
    );

  // Import vue component

  // Declare install function executed by Vue.use()
  function install(Vue) {
  	if (install.installed) { return; }
  	install.installed = true;
  	Vue.component('Vuecordion', __vue_component__);
  }

  // Create module definition for Vue.use()
  var plugin = {
  	install: install,
  };

  // Auto-install when vue is found (eg. in browser via <script> tag)
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
  	GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
  	GlobalVue = global.Vue;
  }
  if (GlobalVue) {
  	GlobalVue.use(plugin);
  }

  exports.default = __vue_component__;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
