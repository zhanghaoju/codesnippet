let portalQuestionConfigDTOList = [
	{
		"title": '热门1',
		"portalQuestionDetailConfigDTOList": [
			{
				"customUrl": "www.aa.com",
				"showFlag": null,
				"showOrder": 0,
				"title": "电脑维修"
			}
		]
	},
	{
		"title": '其他',
		"portalQuestionDetailConfigDTOList": [
			{
				"customUrl": "www.aa.com",
				"showFlag": null,
				"showOrder": 0,
				"title": "电脑维修2"
			}
		]
	},
	{
		"title": '其他',
		"portalQuestionDetailConfigDTOList": [
			{
				"customUrl": "www.aa.com",
				"showFlag": null,
				"showOrder": 0,
				"title": "电脑维修3"
			}
		]
	},

]

let result = [];
for (let i = 0; i < portalQuestionConfigDTOList.length; i++) {
	let titleTag = portalQuestionConfigDTOList[i].title;
	for (let j = 0; j < portalQuestionConfigDTOList[i].portalQuestionDetailConfigDTOList.length; j++) {
		let resultOne = portalQuestionConfigDTOList[i].portalQuestionDetailConfigDTOList[j];
		resultOne.titleTag = titleTag;
		result.push(resultOne);
	}
}
console.log('result', result);
