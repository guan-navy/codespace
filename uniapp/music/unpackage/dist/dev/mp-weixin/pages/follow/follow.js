"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_wyheader2 = common_vendor.resolveComponent("wyheader");
  _easycom_wyheader2();
}
const _easycom_wyheader = () => "../../components/wyheader/wyheader.js";
if (!Math) {
  _easycom_wyheader();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      icon: "plus-filled"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/工作台/codeplace/uniapp/music/pages/follow/follow.vue"]]);
wx.createPage(MiniProgramPage);
