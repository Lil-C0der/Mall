<template>
  <div class="goods-comment">
    <div class="comment-hd">
      <span class="comment-hd-title">用户评价</span>
      <p class="comment-hd-more">更多</p>
      <i class="arrow-right"></i>
    </div>

    <div class="comment-bd">
      <div v-if="comment.user" class="comment-user">
        <img class="user-icon" :src="comment.user.avatar" alt="" />
        <span class="user-name">
          {{ comment.user.uname }}
        </span>
      </div>

      <div class="comment-content">
        <p>{{ comment.content }}</p>
      </div>

      <div class="comment-info">
        <span class="comment-date">{{ comment.created | showDate }}</span>
        <span class="comment-style">{{ comment.style }}</span>
      </div>
      <!-- <div  v-if="comment.images" class="comment-img"> -->
      <div class="comment-img">
        <img :src="n" v-for="(n, i) in comment.images" :key="i" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailComment",
  data() {
    return {};
  },
  props: {
    comment: {
      type: Object,
      default: () => {}
    }
  },
  components: {},
  filters: {
    showDate(stamp) {
      let time = new Date(stamp * 1000);
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      month = month < 10 ? "0" + month : month;
      let date = time.getDate();
      date = date < 10 ? "0" + date : date;
      let hrs = time.getHours();
      hrs = hrs < 10 ? "0" + hrs : hrs;
      let min = time.getMinutes();
      min = min < 10 ? "0" + min : min;
      return `${year}-${month}-${date} ${hrs}:${min}`;
    }
  }
};
</script>

<style scoped>
.goods-comment {
  padding: 20px 15px;
  background-color: #fff;
  border-top: 10px solid #f6f6f6;
}
.comment-hd {
  position: relative;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
.comment-hd .comment-hd-title {
  font-size: 16px;
  display: block;
  padding-left: 4px;
}
.comment-hd .comment-hd-more {
  position: absolute;
  right: 20px;
  top: 2px;
  display: block;
  font-size: 14px;
}
.comment-hd .arrow-right {
  position: absolute;
  top: 5px;
  right: 8px;
}
.comment-bd .comment-user {
  margin: 10px 0;
}
.comment-user .user-icon {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  vertical-align: middle;
}
.comment-user .user-name {
  font-size: 16px;
  display: inline-block;
  margin-left: 10px;
}
.comment-bd .comment-content {
  color: #666;
  font-size: 14px;
}
.comment-bd .comment-info {
  font-size: 12px;
  color: #999;
  margin: 10px 0 20px;
}
.comment-info span {
  margin-right: 10px;
}
.comment-img img {
  vertical-align: middle;
  margin-right: 20px;
  width: 80px;
}
</style>
