import Vue from 'vue';
import VueLocalstorage from 'vue-localstorage';

// Plugin.install = (V) => {
//   Object.defineProperties(V.prototype, {
//     $localStorage: {
//       get() {
//         return false;
//       },
//     },
//   });
// };

Vue.use(VueLocalstorage);

export default VueLocalstorage;