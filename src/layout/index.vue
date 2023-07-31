<template>
    <el-container>
      <el-aside width="200px">
        <app-aside />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>

          <meting-js
            id="2683746999"
            server="netease"
            type="playlist"
            auto="netease"
            fixed="true"
            autoplay="true"
            loop="all"
            order="list"
            preload="auto"
            list-folded="ture"
            list-max-height="500px"
            theme="#2382b9"
            lrc-type="1"
            storage-name="metingjs">
          </meting-js>

        </el-main>
      </el-container>
    </el-container>
</template>

<script lang="ts">
import Vue from 'vue'
import AppAside from './components/app-aside.vue'

export default Vue.extend({
  name: 'LayoutIndex',
  components: {
    AppAside
  }
})
</script>

<style lang="scss" scoped>
.el-container {
  min-height: 100vh;
  min-width: 980px;
}
.el-aside {
  background: #d3dce6;
}
.el-header {
  background: #b3c0d1;
}
.el-main {
  background: #e9eef3;
}
</style>
