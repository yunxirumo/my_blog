/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b0ecce5ac38b909981f8a0e1ce8f1f93"
  },
  {
    "url": "a.html",
    "revision": "d49c9e5bcd9e4d40a7791ade22579881"
  },
  {
    "url": "assets/css/0.styles.897863d4.css",
    "revision": "0a30b2fd402a5d8e0807e652b455ec56"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/blackground.4c27653a.gif",
    "revision": "4c27653a95ba9b9adf147fd9290fadd7"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/js/1.6d3ab049.js",
    "revision": "a39ddcaea3d4c4122216937cc2259211"
  },
  {
    "url": "assets/js/10.74befca2.js",
    "revision": "e936ed2dd93e8f111b3f7d695643f1b4"
  },
  {
    "url": "assets/js/11.ac4b5799.js",
    "revision": "f532cacf7a0335f9f387394f3d7d33af"
  },
  {
    "url": "assets/js/12.ad1a3476.js",
    "revision": "bab48a3998715a0ffa31f2c7125d43fc"
  },
  {
    "url": "assets/js/13.810fa162.js",
    "revision": "518bce428f4e40b7b0a40b193170989a"
  },
  {
    "url": "assets/js/14.f59e23ff.js",
    "revision": "9620c9f32a85760ccca0a66e5e7cf7dd"
  },
  {
    "url": "assets/js/15.65e33ecf.js",
    "revision": "6dba28ccd66e6c3386a26a447cf223db"
  },
  {
    "url": "assets/js/16.ba8f1f2d.js",
    "revision": "0eefc8d6520a6691f7f916e91ead7bfe"
  },
  {
    "url": "assets/js/17.c99ca7e0.js",
    "revision": "edac9b82dc095d4e8203a99c98432f59"
  },
  {
    "url": "assets/js/18.8ce023c7.js",
    "revision": "748a8b7d074fd127c5675499ee84576c"
  },
  {
    "url": "assets/js/19.f5a5e501.js",
    "revision": "bf54cf98860103cb920ddd8ad12d3b5b"
  },
  {
    "url": "assets/js/2.63d082ae.js",
    "revision": "68bb3ca49cb002b5be41e9964b58823c"
  },
  {
    "url": "assets/js/20.5e5c0798.js",
    "revision": "bb5dd165a02e50b6be5e7143d40030c5"
  },
  {
    "url": "assets/js/21.b95c31d1.js",
    "revision": "8951ee089d2c89fb5232d2407141e44d"
  },
  {
    "url": "assets/js/22.e6281456.js",
    "revision": "289d4c81cea627a719abd8bd16a75bf9"
  },
  {
    "url": "assets/js/23.8cfbd9d2.js",
    "revision": "057ad0aebe74d513e91ce6173a97d05f"
  },
  {
    "url": "assets/js/24.34226816.js",
    "revision": "ed7ae3a1e62622807a27bc9e4060b2e0"
  },
  {
    "url": "assets/js/25.f47c0c66.js",
    "revision": "ac42eea301431990c754e2827530b7cd"
  },
  {
    "url": "assets/js/26.b58184a8.js",
    "revision": "0f8746ce6e170628f265bd48f67d0ebb"
  },
  {
    "url": "assets/js/27.46168810.js",
    "revision": "7543af910ccda96a0f2428a81a60c37f"
  },
  {
    "url": "assets/js/28.45d1c08a.js",
    "revision": "2e5dd4bbd09c66ff1d341d7b402cee08"
  },
  {
    "url": "assets/js/29.8ffcb163.js",
    "revision": "9f1fe3162fd8309e653e06d8e5d0a91d"
  },
  {
    "url": "assets/js/4.774b3c4d.js",
    "revision": "2de29b63e76fd46256c7d720fe09adc4"
  },
  {
    "url": "assets/js/5.e562664b.js",
    "revision": "fa7b60b00b50ca07d40d5a1e177f65b6"
  },
  {
    "url": "assets/js/6.01f7a91d.js",
    "revision": "b8a605784067c37845228e139d8d1dad"
  },
  {
    "url": "assets/js/7.994c8756.js",
    "revision": "ea3c48aea5ca40e508ee2066af6f5ae9"
  },
  {
    "url": "assets/js/8.d0c0e6c7.js",
    "revision": "63ba6dd22ca55701dee8e2207ad588aa"
  },
  {
    "url": "assets/js/9.0380d2d3.js",
    "revision": "8a11b7094e7c95b5a6baae72eac3ca29"
  },
  {
    "url": "assets/js/app.bfb15727.js",
    "revision": "09af6f7d11083583c5487db00836ebc3"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/category1/2018/121501.html",
    "revision": "3f22d5439f37fdc434bc5c62ee79fa30"
  },
  {
    "url": "blogs/category1/2019/092101.html",
    "revision": "88045d882a764a82438fb48d2a579891"
  },
  {
    "url": "blogs/category2/2016/121501.html",
    "revision": "d50f0808073a5ac98a2f2ff46d6b4fe9"
  },
  {
    "url": "blogs/category2/2017/092101.html",
    "revision": "c4dcdbaab35018bfb98c9b76b02e7051"
  },
  {
    "url": "blogs/cc.html",
    "revision": "675a91643650476db1603d2f8f808010"
  },
  {
    "url": "blogs/dujitang/luoxiang.html",
    "revision": "13416d620d7282a0207f6d56af8433f6"
  },
  {
    "url": "blogs/installs/install.html",
    "revision": "fc39574ecdf91aa935992c08c10d9c5b"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "44c5be3658c026c3ab91be76ec548eb9"
  },
  {
    "url": "categories/Back-end/index.html",
    "revision": "f6e18036834394d91b2951ceefe4e981"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "681850a46d9d86a4c34a913fffbc20a3"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "9b23b8ca2d6d3167c63aa58554ef8d69"
  },
  {
    "url": "categories/index.html",
    "revision": "3ecf99303ed2391f478ab73f7f7d1e68"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "06e35f42b2da680720158c6f87e32f15"
  },
  {
    "url": "js/bg.js",
    "revision": "1949eca026784c0d293fbf6d3f481d7b"
  },
  {
    "url": "js/mouseClick.js",
    "revision": "8c81a657d3fc5f3e21b0dbc85bf80fe5"
  },
  {
    "url": "logo.png",
    "revision": "c723a202863fd19f88b8581192fe9a22"
  },
  {
    "url": "tag/index.html",
    "revision": "1a0fe8505eb19afab41dfdd7c333e583"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "787be0b236f1fed0476fc5d98c0d01ac"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "e9f7890e72d674392b0456c5da8eabde"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "078fc010b2c36f09d1b80c7a553f71e5"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "7b039625be7613c31a111adec1b3b6bf"
  },
  {
    "url": "timeline/index.html",
    "revision": "114b4b0ffd94127f4a44dd83993eda63"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
