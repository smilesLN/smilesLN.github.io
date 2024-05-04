//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '😭燕子啊别走，我不能离开你';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '😄进来逛逛就不准走了哦～';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 3000);
  }
});