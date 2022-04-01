Component({
  properties: {
    width: {
      type: String
    },
    height: {
      type: String
    },
    insertPicture: {
      type: Boolean,
      value: true
    },
    placeholder: {
      type: String,
      value: '输入文字...'
    }
  },
  data: {
    formats: {},
    readOnly: false,
    // editorHeight: 300,
    keyboardHeight: 0,
    isIOS: false
  },
  ready() {
    const platform = wx.getSystemInfoSync().platform
    const isIOS = platform === 'ios'
    this.setData({
      isIOS
    })
    const that = this
    this.updatePosition(0)
    let keyboardHeight = 0
    wx.onKeyboardHeightChange(res => {
      if (res.height === keyboardHeight) return
      const duration = res.height > 0 ? res.duration * 1000 : 0
      keyboardHeight = res.height
      setTimeout(() => {
        wx.pageScrollTo({
          scrollTop: 0,
          success() {
            that.updatePosition(keyboardHeight)
            that.editorCtx.scrollIntoView()
          }
        })
      }, duration)

    })
  },
  methods: {
    indentClick(){  // 点击缩进
      this.editorCtx.insertText({
        text: "ㅤㅤ"
      })
    },
    readOnlyChange() {
      this.setData({
        readOnly: !this.data.readOnly
      })
    },
    updatePosition(keyboardHeight) {
      const toolbarHeight = 100
      const {
        windowHeight,
        platform
      } = wx.getSystemInfoSync()
      // let editorHeight = keyboardHeight > 0 ? (windowHeight - keyboardHeight - toolbarHeight) : windowHeight
      this.setData({
        // editorHeight,
        keyboardHeight
      })
    },
    calNavigationBarAndStatusBar() {
      const systemInfo = wx.getSystemInfoSync()
      const {
        statusBarHeight,
        platform
      } = systemInfo
      const isIOS = platform === 'ios'
      const navigationBarHeight = isIOS ? 44 : 48
      return statusBarHeight + navigationBarHeight
    },
    onEditorReady() {
      const that = this
      //组件使用createSelectorQuery加上in(this)
      wx.createSelectorQuery().in(that).select('#editor').context(function (res) {
        that.editorCtx = res.context
      }).exec()
    },
    undo() {
      this.editorCtx.undo()
    },
    redo() {
      this.editorCtx.redo()
    },
    blur() {
      this.editorCtx.blur()
    },
    format(e) {
      let {
        name,
        value
      } = e.target.dataset
      if (!name) return
      // console.log('format', name, value)
      if (name === "backgroundColor" && value === "#ff0000") { //设置字体颜色为白色
        this.editorCtx.format("color", "#ffffff")
      }
      if (name === "backgroundColor" && value === "#ffffff") {
        this.editorCtx.format("color", "#000000")
      }
      if (name === "color") { //清除字体样式
        this.editorCtx.removeFormat()
      }
      this.editorCtx.format(name, value)

    },
    onStatusChange(e) {
      const formats = e.detail
      this.setData({
        formats
      })
    },
    insertDivider() {
      this.editorCtx.insertDivider({
        success: function () {
          console.log('insert divider success')
        }
      })
    },
    clear() {
      this.editorCtx.clear({
        success: function (res) {
          console.log("clear success")
        }
      })
    },
    removeFormat() {
      this.editorCtx.removeFormat()
    },
    insertDate() {
      const date = new Date()
      const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
      this.editorCtx.insertText({
        text: formatDate
      })
    },
    insertImage() {
      this.triggerEvent('insertImage'); //触发父组件方法
    },
    insertSrc(src) { //接受图片返回地址
      this.editorCtx.insertImage({
        src,
        data: {
          id: 'abcd',
          role: 'god'
        },
        width: '80%',
        fail: (err) => {
          console.log(`图片插入失败：${err}`);
        }
      })
    },
    getContent(e) { //获得文本内容
      this.triggerEvent('Content', {
        content: e.detail
      })
    },
    setHtml(html) { //回显
      if (html) {
        this.createSelectorQuery().select('#editor').context((res) => {
          this.editorCtx = res.context
          this.editorCtx.setContents({
            html,
            fail: (err) => {
              console.log(`内容回显失败：${err}`);
            }
          })
        }).exec()
      }
    },
  }
})