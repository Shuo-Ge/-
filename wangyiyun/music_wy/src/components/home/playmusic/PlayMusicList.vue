<template>
  <div class="body">
    <div class="header">
      <i class="el-icon-arrow-down down"></i>
    </div>
    <div class="main">
      <div class="left">
        <img class="oneimg" src="@/assets/img/needle-ab.png" alt="" />
        <img class="twoimg" src="@/assets/img/jiaopian.png" alt="" />
        <img
          class="threeimg"
          :src="playlist[playCurrentIndex].al.picUrl"
          alt=""
        />
      </div>
      <div class="center">
        <div class="top">
          <div class="name">{{ playlist[playCurrentIndex].name }}</div>
          <div class="author">
            {{ playlist[playCurrentIndex].ar[0].name }}
          </div>
        </div>
        <div class="center-down">
          <div>
            <ul>
              <li>{{ lyric.lrc.lyric }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">3</div>
    </div>
    <!-- 评论 -->
    <div class="footer">
      <h5>全部评论({{ comment.total }})</h5>
      <div
        v-for="(item, index) in comment.comments"
        :key="index"
        class="author2"
      >
        <img :src="item.user.avatarUrl" alt="" class="img2" />
        <div class="name2">
          <div class="left2">
            <div class="top2">
              <span class="nickname2">{{ item.user.nickname }}:</span>
              <span class="contnet2">{{ item.content }}</span>
            </div>
            <div class="down2">
              {{ item.time | dataFormate1 }}
            </div>
          </div>
          <div class="right2"></div>
        </div>
      </div>
      <el-button @click="add">加载更多</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      // 获取所用评论用户信息
      comment: {},
      // 获取歌词
      lyric: {
        lrc: {},
      },
      show3: true,
    };
  },
  created() {
    this.getComment();
    this.getMusicLyric();
    // console.log(this.$router.params.id);
  },
  computed: {
    ...mapState(["playlist", "playCurrentIndex"]),
  },
  methods: {
    async getComment() {
      const { data: res } = await this.$http.get(
        `/comment/music?id=${
          this.$store.state.playlist[this.$store.state.playCurrentIndex].id
        }`
      );
      this.comment = res;
      console.log(this.comment);
    },
    // 获取歌词
    async getMusicLyric() {
      const { data: res } = await this.$http.get(
        `/lyric?id=${
          this.$store.state.playlist[this.$store.state.playCurrentIndex].id
        }`
      );
      this.lyric = res;
      console.log(this.lyric);
    },
    add() {
      this.i++;
      console.log(this.i);
      return this.i;
    },
  },
};
</script>

<style scoped>
.body {
  width: 100%;
  height: 100%;
  background: linear-gradient(#d6ddde, #fff);
  /* position: fixed;
  top: 0;
  left: 0; */
}
.down {
  font-size: 30px;
  margin: 20px;
  cursor: pointer;
}
.main {
  position: relative;
  width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.oneimg {
  position: absolute;
  top: 0;
  left: 130px;
  width: 100px;
  height: 150px;
  z-index: 1;
  transform-origin: top left;
  transform: rotate(320deg);
}
.twoimg {
  position: absolute;
  top: 50px;
  width: 300px;
  height: 300px;
  z-index: 1;
}
.threeimg {
  position: absolute;
  top: 106px;
  left: 56px;
  z-index: 0;
  width: 190px;
  height: 190px;
}
.name {
  font-size: 30px;
  color: #303131;
  width: 500px;
  overflow: hidden;
  white-space: nowrap;
  /* text-overflow: ellipsis; */
  margin: 0 auto;
}
.author {
  font-size: 14px;
  color: #8c8f90;
}
.center .top {
  text-align: center;
}
.center-down {
  width: 600px;
  margin-top: 20px;
  text-align: center;
  height: 300px;
  overflow: auto;
  padding: 50px;
}

.img2 {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
.author2 {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}
.name2 {
  margin-left: 10px;
  /* padding-bottom: 20px; */
}
.left2 .down2 {
  padding-top: 10px;
  padding-bottom: 20px;
}
.nickname2 {
  color: #507daf;
  font-size: 12px;
}
.contnet2 {
  color: #747474;
  font-size: 14px;
}
.down2 {
  font-size: 12px;
  color: #9f9f9f;
}
.footer {
  width: 960px;
  margin: 30px auto;
}
</style>