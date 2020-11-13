import Vue from 'vue';
import Router from 'vue-router';
import beforEach from './beforEach';
import afterEach from './afterEach';

Vue.use(Router);

/** modules폴더 안에 있는 js 자동 improt */
const modulesFiles = require.context('./modules', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  return !moduleName.includes('/') ? modules.concat(value.default) : modules;
}, []);

/* Avoided redundant navigation to current location 에러 처리 */
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: modules,
  scrollBehavior: (to, from, savedPosition) => (savedPosition || { x: 0, y: 0 })
});

router.beforeEach(beforEach);
router.afterEach(afterEach);

export default router;
