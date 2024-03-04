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
    "revision": "9051fb3b3f6124966e74e36b30f69243"
  },
  {
    "url": "assets/css/0.styles.6aa2258f.css",
    "revision": "846d0885fe8ec00ea1bd50137808e383"
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
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
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
    "url": "assets/js/1.6d9d128d.js",
    "revision": "6e53a0c0905c6da652429339ae9e87d9"
  },
  {
    "url": "assets/js/10.78aeb944.js",
    "revision": "8f11b2fb07adad88f6b93de027fe06f6"
  },
  {
    "url": "assets/js/11.49d033f2.js",
    "revision": "dc55e784e0fbe9eb05030423b6737e36"
  },
  {
    "url": "assets/js/12.88edd647.js",
    "revision": "34e2c36656f24122e3898d1e693b59ee"
  },
  {
    "url": "assets/js/13.a4470039.js",
    "revision": "e8b20f8fbe39e4051a8c53efcb1ebb56"
  },
  {
    "url": "assets/js/14.f58befd9.js",
    "revision": "f4968f053484d72c9f22f84b68810426"
  },
  {
    "url": "assets/js/15.184d2ebf.js",
    "revision": "2c1d57b85b0cab786a7806661d491168"
  },
  {
    "url": "assets/js/16.d2b234e1.js",
    "revision": "f0f78e4c81229a1176a9853c375e13f7"
  },
  {
    "url": "assets/js/17.1ae4fafa.js",
    "revision": "5277a955a8f7c2fcd69b0f2a5b57202c"
  },
  {
    "url": "assets/js/18.209b0842.js",
    "revision": "336582222b5d1422ccd88c0d2948adaa"
  },
  {
    "url": "assets/js/19.28e40a31.js",
    "revision": "2aec6e7a9e185098035c6efd581240ff"
  },
  {
    "url": "assets/js/2.1b0eb4b1.js",
    "revision": "9f35869a67fb551a60c5b0f06dd75f4c"
  },
  {
    "url": "assets/js/20.41bd0e2d.js",
    "revision": "ae3467ab45272ad1d686f7b90bca982b"
  },
  {
    "url": "assets/js/21.b0c4c5e4.js",
    "revision": "eb9eba2e118c455c02692ec4c52e5f91"
  },
  {
    "url": "assets/js/22.e44560bc.js",
    "revision": "7f0e18ee428ba505d2bfe36b01c35ea6"
  },
  {
    "url": "assets/js/23.594f8a5d.js",
    "revision": "2d293729f849c9f2ef76d7ae1dd5f168"
  },
  {
    "url": "assets/js/24.55a72b00.js",
    "revision": "c64d99e193711230a95bd9e843afcfba"
  },
  {
    "url": "assets/js/25.c7990641.js",
    "revision": "860d6c9294de82688577af70f26ca830"
  },
  {
    "url": "assets/js/26.7971252c.js",
    "revision": "d207190d4921e9a781a6f09343cc3cbc"
  },
  {
    "url": "assets/js/27.97ef0cb0.js",
    "revision": "428f18216319b0de9495ead117736407"
  },
  {
    "url": "assets/js/28.a06a35a3.js",
    "revision": "de2011b12ea73f026c0fa574c0c6c8b3"
  },
  {
    "url": "assets/js/4.0aa61d7a.js",
    "revision": "fc9bd2d01fb0faa81f3fdceee222be40"
  },
  {
    "url": "assets/js/5.13a053ea.js",
    "revision": "af493178a1f749af66dbb248d6d11550"
  },
  {
    "url": "assets/js/6.ed6df873.js",
    "revision": "0f05d09171db3b7051cb5705e1cc3a5a"
  },
  {
    "url": "assets/js/7.b33a82f1.js",
    "revision": "0f359451a71d995c066d8504a497249e"
  },
  {
    "url": "assets/js/8.8403a9c2.js",
    "revision": "8b6e1de938b4202bf78ec6721aab2ab3"
  },
  {
    "url": "assets/js/9.e59ff59f.js",
    "revision": "0286ae8a65fa42c22e5d4913dd5e8d55"
  },
  {
    "url": "assets/js/app.e0f2555b.js",
    "revision": "2e84862dec1f1f4f53d547330be89f9b"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/cc.html",
    "revision": "889a774383086a083070deb79a22bb5a"
  },
  {
    "url": "blogs/dujitang/luoxiang.html",
    "revision": "4376848ad1792337b7753cefc9c13e6e"
  },
  {
    "url": "blogs/installs/install.html",
    "revision": "9f6e6b2c087579e6877da891c7acf7d7"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "4255873a5f4a0a73ef293769980de175"
  },
  {
    "url": "blogs/other/恋爱告急.html",
    "revision": "e33fa44cee6d44cfd4e904dfd3d39436"
  },
  {
    "url": "blogs/other/示例二.html",
    "revision": "0c49d6d5e2221aafc4ed21a027a5687e"
  },
  {
    "url": "blogs/vuepress/github.html",
    "revision": "5c473027d1105a244b0f470a2deeb2c2"
  },
  {
    "url": "blogs/真寻bot/bot.html",
    "revision": "4b94547c6d81c93e5c3ab1d3edff6287"
  },
  {
    "url": "categories/Back-end/index.html",
    "revision": "6793dd7a00a96263e82e5cd3f1d14683"
  },
  {
    "url": "categories/bot机器人/index.html",
    "revision": "020d8e6c61274a5046d0ffc8b1046238"
  },
  {
    "url": "categories/index.html",
    "revision": "cf9551c3bea826356dc11c61a6ff0ae2"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "47e85c2033743e4fc2c78aa450009725"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1ca41932548e81c7cffa5ae3914a1637"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "d878038fb6897f5aa5bf49eab484fafd"
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
    "url": "tag/Freemarker/index.html",
    "revision": "ae0428bc6b76164f365836e06875227a"
  },
  {
    "url": "tag/index.html",
    "revision": "2dd5a01b60764fccf37dbc8d80f07ef4"
  },
  {
    "url": "tag/nonebot/index.html",
    "revision": "9dc24cce50980bd06f92427a75f1dc92"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1a7a082c5db929bda2063373f29e9742"
  },
  {
    "url": "timeline/index.html",
    "revision": "9eb68191f110b2d702791f8066475462"
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
