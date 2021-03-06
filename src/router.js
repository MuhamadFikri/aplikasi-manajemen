import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      component: Home,
      children: [{
          path: '',
          name: 'home',
        },
        {
          path: '/chart',
          name: 'chartlist',
          component: () => import( /* webpackChunkName: "chart" */ './views/Chart.vue')
        },
        {
          path: '/toko',
          name: 'toko',
          component: () => import( /* webpackChunkName: "toko" */ './views/Toko.vue')
        },
        {
          path: '/harga',
          name: 'harga',
          component: () => import( /* webpackChunkName: "harga" */ './views/Harga.vue')
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: () => import( /* webpackChunkName: "detailharga" */ './components/harga/Detail_Harga.vue')
        },
        {
          path: '/detaillaporan/:id',
          name: 'detaillaporan',
          component: () => import( /* webpackChunkName: "detaillaporan" */ './components/laporan_keuangan/Detail_Laporan.vue')
        },
        {
          path: '/pbgudang/:id',
          name: 'pbgudang',
          component: () => import( /* webpackChunkName: "persediaangudang" */ './components/persediaan_barang/Detail_Persediaan_Gudang.vue')
        },
        {
          path: '/pbtoko/:id',
          name: 'pbtoko',
          component: () => import( /* webpackChunkName: "persediaantoko" */ './components/persediaan_barang/Detail_Persediaan_Toko.vue')
        },
        {
          path: '/lbgudang/:id',
          name: 'lbgudang',
          component: () => import( /* webpackChunkName: "laporangudang" */ './components/laporan_barang/Detail_Laporan_Gudang.vue')
        },
        {
          path: '/lbtoko/:id',
          name: 'lbtoko',
          component: () => import( /* webpackChunkName: "laporantoko" */ './components/laporan_barang/Detail_Laporan_Toko.vue')
        },
        {
          path: '/karyawan',
          name: 'karyawan',
          component: () => import( /* webpackChunkName: "karyawan" */ './views/Karyawan.vue')
        },
        {
          path: '/laporanbarang',
          name: 'laporanbarang',
          component: () => import( /* webpackChunkName: "laporanbarang" */ './views/Laporan_Barang.vue')
        },
        {
          path: '/persediaanbarang',
          name: 'persediaanbarang',
          component: () => import( /* webpackChunkName: "persediaanbarang" */ './views/Persediaan_Barang.vue')
        },
        {
          path: '/laporankeuangan',
          name: 'laporankeuangan',
          component: () => import( /* webpackChunkName: "laporankeuangan" */ './views/Laporan_Keuangan.vue')
        },
        {
          path: '/about',
          redirect: 'about'
        }
      ]
    },
    {
      path: '/harga',
      component: () => import( /* webpackChunkName: "harga" */ './views/Harga.vue'),
      children: [{
          path: '',
          name: 'harga',
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: () => import( /* webpackChunkName: "persediaankeuangan" */ './components/harga/Detail_Harga.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})