"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "songList",
  props: {
    list: Array
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "right",
          size: "16"
        }),
        b: common_vendor.f(__props.list, (item, k0, i0) => {
          return {
            a: item.al.picUrl,
            b: common_vendor.t(item.name)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-29452354"], ["__file", "D:/工作台/codeplace/uniapp/music/components/songList/songList.vue"]]);
wx.createComponent(Component);
