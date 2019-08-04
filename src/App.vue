<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none; 
}
html,body,#app{
  width: 100%;
  height: 100%;
}
html{
  font-size: 13.333333vw;
}
body{
  font-size: 16px;
}
#app{
  display: flex;
  flex-flow: column;
}

</style>