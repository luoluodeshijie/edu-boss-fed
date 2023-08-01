<template>
    <el-container>
      <el-aside width="200px">
        <app-aside />
      </el-aside>
      <el-container>
        <el-header>
          <app-header />
        </el-header>
        <el-main>
          <!-- 子路由出口 -->
          <router-view></router-view>

          <meting-js
            id="7252241404"
            server="netease"
            type="playlist"
            auto="netease"
            fixed="true"
            autoplay="true"
            loop="all"
            order="list"
            preload="auto"
            list-folded="ture"
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
import AppHeader from './components/app-header.vue'

export default Vue.extend({
  name: 'LayoutIndex',
  components: {
    AppAside,
    AppHeader
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
  background: #fff;
  display: flex;
  align-items: center;
}
.el-main {
  background: #e9eef3;
}
</style>
