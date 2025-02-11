Page({
  data: {
    // 页面的初始数据
    animationHeader: {},
    animationSlogan: {},
    animationFeatures: [{}, {}, {}],
    animationButton: {},
    // 设置初始透明度和位置
    headerOpacity: 0,
    headerTranslateY: -50,
    sloganOpacity: 0,
    featuresOpacity: 0,
    buttonOpacity: 0,
    buttonTranslateY: 50
  },

  onLoad: function() {
    // 页面加载时执行
    this.startWelcomeAnimation();
  },

  onReady: function() {
    // 页面初次渲染完成时执行
  },

  onShow: function() {
    // 页面显示时执行
  },

  startWelcomeAnimation: function() {
    // 创建动画实例
    const headerAnim = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease-out',
      delay: 300
    });

    const sloganAnim = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease-out',
      delay: 800
    });

    const buttonAnim = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease-out',
      delay: 2000
    });

    // 设置动画
    headerAnim.opacity(1).translateY(0).step();
    sloganAnim.opacity(1).step();
    buttonAnim.opacity(1).translateY(0).step();

    // 特色介绍动画
    const featureAnims = this.data.animationFeatures.map((_, index) => {
      return wx.createAnimation({
        duration: 600,
        timingFunction: 'ease-out',
        delay: 1200 + index * 200
      }).opacity(1).step();
    });

    // 执行动画
    this.setData({
      animationHeader: headerAnim.export(),
      animationSlogan: sloganAnim.export(),
      animationFeatures: featureAnims.map(anim => anim.export()),
      animationButton: buttonAnim.export()
    });
  }
  },

  // 开启专业之旅按钮点击事件
  handleStartButtonTap: function() {
    // TODO: 实现跳转到下一个页面的逻辑
    wx.showToast({
      title: '即将开启专业之旅',
      icon: 'success',
      duration: 2000
    });
  }
})