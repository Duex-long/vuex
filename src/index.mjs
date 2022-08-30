<<<<<<< HEAD
import Vuex from '../dist/vuex.common.js'

const {
  Store,
  install,
  version,
=======
import Vuex from '../dist/vuex.cjs.js'

const {
  version,
  Store,
  storeKey,
  createStore,
  install,
  useStore,
>>>>>>> 01f87f0c3d59d0796a2535719dfa8328d1af390d
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  createNamespacedHelpers,
  createLogger
} = Vuex

export {
  Vuex as default,
<<<<<<< HEAD
  Store,
  install,
  version,
=======
  version,
  Store,
  storeKey,
  createStore,
  install,
  useStore,
>>>>>>> 01f87f0c3d59d0796a2535719dfa8328d1af390d
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  createNamespacedHelpers,
  createLogger
}
