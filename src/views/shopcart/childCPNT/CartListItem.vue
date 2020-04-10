<template>
  <li class="item">
    <div class="item-selector">
      <check-button
        @click.native="CheckButtonClick"
        :isChecked="itemInfo.isChecked"
      ></check-button>
    </div>
    <div class="item-wrap">
      <div class="item-img">
        <img :src="itemInfo.img" alt="商品图片" />
      </div>

      <div class="item-info">
        <div class="item-title">
          <span class="item-title-text">{{ itemInfo.title }}</span>
        </div>
        <div class="item-desc">
          <p class="item-desc-text">{{ itemInfo.desc }}</p>
        </div>
        <div class="info-bottom">
          <div class="item-price left">{{ itemInfo.price }}</div>
          <div class="item-count right">x{{ itemInfo.count }}</div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import CheckButton from "./CheckButton";

import * as type from "store/types";

export default {
  name: "CartListItem",
  data() {
    return {};
  },
  props: {
    itemInfo: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    CheckButton
  },
  methods: {
    CheckButtonClick() {
      this.$store.commit(type.ISCHECKED_CHANGE, this.itemInfo);
    }
  }
};
</script>

<style scoped>
.item {
  width: 100%;
  height: 200px;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.item-selector {
  position: absolute;
  left: 4px;
  top: 50%;
  margin-top: -10px;
}
.item-wrap {
  margin-left: 24px;
}
.item-img {
  width: 120px;
  height: 180px;
  border-radius: 10px;
  overflow: hidden;
}
.item-img img {
  height: 100%;
  display: block;
}
.item-title {
  padding-top: 8px;
}
.item-title-text,
.item-desc-text {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-info {
  font-size: 18px;
  color: #333;
  position: absolute;
  width: 290px;
  right: 0px;
  top: 0;
  bottom: 0;
  overflow: hidden;
  padding: 5px;
  padding-left: 30px;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 22px;
}
.info-bottom {
  overflow: hidden;
  margin-top: 60px;
  padding-right: 18px;
  font-size: 18px;
}
.info-bottom .item-price {
  color: orangered;
}
</style>
