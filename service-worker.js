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
    "revision": "81d88cc271fc0a85f655c43741538af7"
  },
  {
    "url": "a.html",
    "revision": "5a4fbda34a9b2d977a88863bc1679f72"
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
    "url": "assets/js/19.10ad6d0a.js",
    "revision": "3a1007724f5d8d77287ac4a0f2bdd0e9"
  },
  {
    "url": "assets/js/2.63d082ae.js",
    "revision": "68bb3ca49cb002b5be41e9964b58823c"
  },
  {
    "url": "assets/js/20.fbd7679e.js",
    "revision": "b7620d2c5208947ed0b1d5afdcf21cda"
  },
  {
    "url": "assets/js/21.25bbe088.js",
    "revision": "6485bb78ec2f06a4887a8ae0d0951654"
  },
  {
    "url": "assets/js/22.41b66b51.js",
    "revision": "80b511993b23091a63770a0e225be9bf"
  },
  {
    "url": "assets/js/23.d61555c2.js",
    "revision": "4198e738d303cebc60220dcd20a574df"
  },
  {
    "url": "assets/js/24.f077f444.js",
    "revision": "1c1f54353ea314b92802344572529dde"
  },
  {
    "url": "assets/js/25.db408781.js",
    "revision": "765a99e750e4d45acfe55db963466057"
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
    "url": "assets/js/app.e283ee5c.js",
    "revision": "1e3daed82f79e438a41e0ae6cb465ef9"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/category1/2018/121501.html",
    "revision": "bb0ad897d2931ade9f95819bb4689c18"
  },
  {
    "url": "blogs/category1/2019/092101.html",
    "revision": "87770d04c684c33fa5ce3fadc55c7f5a"
  },
  {
    "url": "blogs/category2/2016/121501.html",
    "revision": "ce2e7c38d44a1955bcbaa84aa64a608f"
  },
  {
    "url": "blogs/category2/2017/092101.html",
    "revision": "abe2fe629d0687c83b19b2723649e9d6"
  },
  {
    "url": "blogs/cc.html",
    "revision": "e5998ab0581935a4617e7a69e7c5e8ba"
  },
  {
    "url": "blogs/dujitang/luoxiang.html",
    "revision": "b34f098537e9faf54c2e60e8ac7c0338"
  },
  {
    "url": "blogs/installs/install.html",
    "revision": "5db6b14acd6fa331f4ab55bb08e9e206"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "07448199aeda2c9f5e7d5200e9d66767"
  },
  {
    "url": "categories/Back-end/index.html",
    "revision": "ee96d9f9ade9bdefc9b1110bb3bc9b6e"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "4b29443ea2b22f410d63d40422612438"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "fed0f2882af57a55a8bf2fa8530549fc"
  },
  {
    "url": "categories/index.html",
    "revision": "8f33c7210540dc51a606e9ff439b3311"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "1a1d77d1e6640ce53c8636cc7c88f2b1"
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
    "revision": "176724d6dbf195d278068c8025197e01"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "cc14fbafdfdbf1cbfd71c997a8dee194"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "83e1d7c0738018140aaac3ec65673eef"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "0b9f5a1e24938b66141b006120ed35b5"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "43e10fb6f125bfa521d959ab16faff9b"
  },
  {
    "url": "timeline/index.html",
    "revision": "db84232a26552c1e17755376e665a1fa"
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
