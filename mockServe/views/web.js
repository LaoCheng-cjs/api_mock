// 获取css某个属性值
function getStyle (element, styleName) {
    if (!element || !styleName) return null
    try {
      const computed = document.defaultView.getComputedStyle(element, '')
      return element.style[styleName] || computed ? computed[styleName] : null
    } catch (e) {
      return element.style[styleName]
    }
}
