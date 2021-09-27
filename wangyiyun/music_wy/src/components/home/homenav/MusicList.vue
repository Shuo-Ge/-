<template>
  <div>
    <div class="head">
      <div class="img"></div>
      <div class="right">
        <p class="btn"><i class="el-icon-present"></i>精品歌单</p>
        <p class="title">[居家古风]如何把生活过成诗</p>
        <p class="detal">围着发搭搭撒撒</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.head {
  display: flex;
  width: 1200px;
  height: 170px;
  background: pink;
  border-radius: 10px;
  padding-top: 15px;
  padding-left: 18px;
  box-sizing: border-box;
}
.right {
  margin-left: 20px;
}
.img {
  width: 140px;
  height: 140px;
  background: chocolate;
  border-radius: 10px;
  /* padding-top: 15px; */
}
.btn {
  width: 100px;
  height: 33px;
  border-radius: 16px;
  border: 1px solid #c59451;
  text-align: center;
  line-height: 33px;
  color: #c59451;
}
.title {
  color: #fff;
}
.detal {
  font-size: 14px;
  color: #939994;
}
</style>