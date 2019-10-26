import marked from 'marked'
// marked文档：https://marked.js.org/#/USING_ADVANCED.md#options
marked.setOptions({
  gfm: true,
  breaks: true
})

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
// export function markedData2 (data) {
//   data.map((currentValue) => {
//     currentValue.content = marked(currentValue.content ? currentValue.content : 'NO data')
//   })
// }

// export function markedData3 (data) {
//   let arr = data.map((currentValue) => {
//     currentValue.content = marked(currentValue.content ? currentValue.content : 'NO data')
//   })
//   return data
// }

export function markedIssues (data) {
  let list = []
  console.log()
  data.forEach((currentItem) => {
    let id = currentItem.html_url.split('/').pop()
    list.push({fakeId: id, title: currentItem.title, body: marked(currentItem.body), html_url: currentItem.html_url})
  })
  return list
}

export function markedIssuesDetail (data) {
  data.body = marked(data.body)
  return data
}
