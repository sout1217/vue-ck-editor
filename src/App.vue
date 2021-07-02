<template>
  <div id="app">
    <router-link class="link" to="/">기본</router-link>
    <router-link class="link" to="/config">콘픽</router-link>
    <router-link class="link" to="/build">빌드</router-link>
    <router-link class="link" to="/localization">현지화</router-link>
    <router-link class="link" to="/file-upload">파일업로드</router-link>
    <router-link class="link" to="/event">이벤트</router-link>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}
.container {
  margin-top: 128px;
  padding-left: 128px;
  padding-right: 128px;
}

.divider {
  margin-bottom: 30px;
  margin-top: 30px;
}

.link:nth-child(1n + 2):before {
  content: ' | ';
}
</style>
