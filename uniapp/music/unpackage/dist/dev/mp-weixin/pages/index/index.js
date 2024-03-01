"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
require("../../api/request.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_wyheader2 = common_vendor.resolveComponent("wyheader");
  const _easycom_menuLeft2 = common_vendor.resolveComponent("menuLeft");
  const _easycom_songList2 = common_vendor.resolveComponent("songList");
  (_easycom_uni_search_bar2 + _easycom_wyheader2 + _easycom_menuLeft2 + _easycom_songList2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_wyheader = () => "../../components/wyheader/wyheader.js";
const _easycom_menuLeft = () => "../../components/menuLeft/menuLeft.js";
const _easycom_songList = () => "../../components/songList/songList.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_wyheader + _easycom_menuLeft + _easycom_songList)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const state = common_vendor.reactive({
      banners: [],
      balls: [],
      recommendList: []
    });
    common_vendor.onLoad(() => {
      getBanner();
      getBall();
      getRecommendList();
    });
    const getBanner = () => {
      api_index.apiGetBanner({ type: 2 }).then((res) => {
        state.banners = res.data.banners;
      });
    };
    const getBall = () => {
      api_index.apiGetBall().then((res) => {
        state.balls = res.data.data;
      });
    };
    const getRecommendList = async () => {
      const res = await api_index.apiGetRecommendList();
      state.recommendList = res.data.data.dailySongs;
      console.log(res);
      console.log(state.recommendList);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(_ctx.search),
        b: common_vendor.o(_ctx.input),
        c: common_vendor.p({
          placeholder: "歌曲"
        }),
        d: common_vendor.f(state.banners, (item, k0, i0) => {
          return {
            a: item.pic,
            b: item.encodeId
          };
        }),
        e: common_vendor.f(state.balls, (item, k0, i0) => {
          return {
            a: item.iconUrl,
            b: common_vendor.t(item.name)
          };
        }),
        f: common_vendor.p({
          list: state.recommendList
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/工作台/codeplace/uniapp/music/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
