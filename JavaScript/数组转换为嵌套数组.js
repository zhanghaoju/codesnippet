let arr = [
	{
		describe: "描述1",
		imgKey: "https://tianshu.alicdn.com/84e8d93a-0743-4e2a-aace-ded73b47453c.png",
		showFlag: null,
		showOrder: 0,
		title: "资产政策",
		url: "https://tianshu.alicdn.com/84e8d93a-0743-4e2a-aace-ded73b47453c.png"
	}
]
let newArr=arr.map(item=>{
	return{
		title:item.title,
		src:item.imgKey,
		link:{
			type:"url",
			href:item.url,
			target:"_blank"
		}
	}
})
console.log(newArr)
