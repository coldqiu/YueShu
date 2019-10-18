import marked from 'marked'
(function () {
  let me = marked('## title')
  console.log('asdf', marked('## title'), me)
})()
export function markedData (data) {
  let list = []
  data.forEach((currentValue) => {
    let item = marked(currentValue.content ? currentValue.content : 'NO data')
    list.push({id: currentValue._id, content: item})
  })
  return list
}

// error, why?, 是因为数组的元素是对象？ 奇怪
// Array.prototype.map() 处理数组元素为对象时的情况：
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
export function markedData2 (data) {
  console.log('data-in-utils', data)
  data.map((currentValue) => {
    currentValue.content = marked(currentValue.content ? currentValue.content : 'NO data')
    console.log('currentValue.content', currentValue.content)
  })
  console.log('data-after-marked', data)
}

export function markedData3 (data) {
  console.log('data-in-utils', data)
  let arr = data.map((currentValue) => {
    currentValue.content = marked(currentValue.content ? currentValue.content : 'NO data')
  })
  console.log('data-after-marked', data)
  console.log('arr', arr)
  return data
}
