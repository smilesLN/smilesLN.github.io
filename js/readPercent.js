
/* 阅读进度 start */
document.addEventListener('pjax:complete', function () {
    window.onscroll = percent;
  });
  document.addEventListener('DOMContentLoaded', function () {
    window.onscroll = percent;
  });
  // 页面百分比
  function percent() {
  
    // 先让菜单栏消失
    try {
      rmf.showRightMenu(false);
      $('.rmMask').attr('style', 'display: none');
    } catch (err) {
  
    }
  
    let a = document.documentElement.scrollTop, // 卷去高度
      b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
      result = Math.round(a / b * 100), // 计算百分比
      btn = document.querySelector("#go-up"); // 获取按钮
  
    if (result < 95) { // 如果阅读进度小于95% 就显示百分比
      btn.childNodes[0].style.display = 'none'
      btn.childNodes[1].style.display = 'block'
      btn.childNodes[1].innerHTML = result + '<span>%</span>';
    } else { // 如果大于95%就显示回到顶部图标
      btn.childNodes[1].style.display = 'none'
      btn.childNodes[0].style.display = 'block'
    }
  }
  /* 阅读进度 end */
