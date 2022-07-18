let list = [
	{
		customUrl: "www.aa.com",
		showFlag: null,
		showOrder: 0,
		title: "电脑维修1",
		titleTag: "热门1"
	},
	{
		customUrl: "www.bb.com",
		showFlag: null,
		showOrder: 0,
		title: "电脑维修2",
		titleTag: "热门1"
	},
	{
		customUrl: "www.cc.com",
		showFlag: null,
		showOrder: 0,
		title: "电脑自购1",
		titleTag: "其他"
	},
	{
		customUrl: "www.dd.com",
		showFlag: null,
		showOrder: 0,
		title: "电脑自购2",
		titleTag: "其他"
	}
]
const m = new Map();
list.map(item => {
	m.set(item.titleTag, [...(m.get(item.titleTag) || ''), item.customUrl])
})
const newList = Object.fromEntries(m.entries())
console.log(newList)
for (let key in newList) {
	if (key === Object.keys(newList)[0]) {
		console.log("热门的内容：", newList[key])
		const obj = newList[key]
		let newObj = Object.keys(obj).map(e => {
			return {
				title: obj[e]
			}
		})
		console.log('newObj', newObj)
	} else {
		console.log("其他的内容：", newList[key])
	}
}
