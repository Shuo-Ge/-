<template>
  <div>
    <!-- 头部导航 -->
    <el-menu
      mode="horizontal"
      :default-active="activeIndex"
      active-text-color="#EC4141"
      text-color="#373737"
    >
      <el-menu-item index="recommend" @click="selectIndex('recommend')"
        >个性推荐</el-menu-item
      >
      <el-menu-item index="customization" @click="selectIndex('customization')"
        >专属定制</el-menu-item
      >
      <el-menu-item index="musiclist" @click="selectIndex('musiclist')"
        >歌单</el-menu-item
      >
      <el-menu-item index="rankinglist" @click="selectIndex('rankinglist')"
        >排行榜</el-menu-item
      >
      <el-menu-item index="singer" @click="selectIndex('singer')"
        >歌手</el-menu-item
      >
      <el-menu-item index="newmusic" @click="selectIndex('newmusic')"
        >最新音乐</el-menu-item
      >
    </el-menu>
    <div class="auto">
      <div class="w">
        <!-- 个性推荐 -->
        <Recommend v-if="selectindex == 'recommend'"></Recommend>
        <!-- 专属定制 -->
        <Customization v-if="selectindex == 'customization'"></Customization>
        <!-- 歌单 -->
        <MusicList v-if="selectindex == 'musiclist'"></MusicList>
        <!-- 排行榜 -->
        <RankingList></RankingList>
      </div>
    </div>
  </div>
</template>
<script>
// 个性推荐
import Recommend from "@/components/home/homenav/Recommend";
// 专属定制
import Customization from "@/components/home/homenav/Customization";
// 歌单
import MusicList from "@/components/home/homenav/MusicList";
// 排行榜
import RankingList from "@/components/home/homenav/RankingList";
export default {
  data() {
    return {
      selectindex: "recommend",
      activeIndex: "recommend",
    };
  },
  components: {
    Recommend,
    Customization,
    MusicList,
    RankingList,
  },
  methods: {
    selectIndex(index) {
      this.selectindex = index;
    },
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
