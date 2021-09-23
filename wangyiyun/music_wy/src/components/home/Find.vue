<template>
  <div>
    <!-- 头部导航 -->
    <el-menu
      mode="horizontal"
      default-active="1"
      active-text-color="#EC4141"
      text-color="#373737"
    >
      <el-menu-item index="1">个性推荐</el-menu-item>
      <el-menu-item index="2">专属定制</el-menu-item>
      <el-menu-item index="3">歌单</el-menu-item>
      <el-menu-item index="4">排行榜</el-menu-item>
      <el-menu-item index="5">歌手</el-menu-item>
      <el-menu-item index="6">最新音乐</el-menu-item>
    </el-menu>
    <div class="auto">
      <div class="w">
        <!-- 轮播图 -->
        <Swiper></Swiper>
        <!-- 推荐歌单 -->
        <MusicList class="musiclist"></MusicList>
        <!-- 独家放送 -->
        <MeSend></MeSend>
        <!-- 最新音乐 -->
        <NewMusic></NewMusic>
      </div>
    </div>
  </div>
</template>
<script>
// 导入轮播图插件
import Swiper from "./children/Swiper.vue";
// 导入推荐歌单
import MusicList from "./children/MusilcList.vue";
// 导入独家放送
import MeSend from "./children/MeSend.vue";
// 导入最新音乐
import NewMusic from "./children/NewMusix.vue";
export default {
  components: {
    Swiper,
    MusicList,
    MeSend,
    NewMusic,
  },
  methods: {
    selectColor() {},
  },
};
</script>

<style scoped>
.w {
  width: 1200px;
  margin: 50px auto;
}
.auto {
  margin-left: 200px;
}
.el-menu {
  position: fixed;
  top: 60px;
  left: 200px;
  width: 100%;
  z-index: 9;
}
.musiclist {
  margin-top: -50px;
}
</style>
