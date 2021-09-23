<template>
  <div>
    <template>
      <el-carousel :interval="5000" type="card" indicator-position="none">
        <el-carousel-item v-for="item in banners" :key="item.id">
          <h3 class="medium">
            <img :src="item.imageUrl" alt="" />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banners: "",
    };
  },
  created() {
    this.getLunBoData();
  },
  methods: {
    async getLunBoData(type = 0) {
      const { data: res } = await this.$http.get(`/banner?type=${type}`);
      this.banners = res.banners;
    },
  },
};
</script>

<style scoped>
.medium img {
  width: 100%;
  border-radius: 10px;
}
</style>