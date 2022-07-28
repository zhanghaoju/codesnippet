let portalAdminister = [
	{
		children: [
			{
				children: [
					{
						label: "小明",
						value: "01380352611209037"
					},
					{
						label: "小红",
						value: "025609424537722615"
					}
				],
				disabled: true,
				label: "班主任老张",
				selectable: false,
				value: "515794864"
			},
			{
				label: "小白",
				value: "0116415710-843089919"
			},
			{
				label: "小绿",
				value: "01195630266932644008"
			},
			{
				label: "小黑",
				value: "025609424537722615"
			}
		],
		disabled: true,
		label: "一年级二班",
		selectable: false,
		value: "1"
	}
]
let nameArr = []
let keyArr = []
let findVal = "025609424537722615"
function flatLoop(item) {
	return item.map(x => {
		if (x instanceof Array) {
			flatLoop(x)
		} else if (x instanceof Object) {
			if (x.value) {
				nameArr.push(x.value)
				keyArr.push(x.label)
			}
			flatLoop(Object.values(x))
		}
	})
}
flatLoop(portalAdminister)
// 给字段赋值属性
let newAdminsters = keyArr.map((label, i) => (
	{
		label,
		value: nameArr[i]
	}
))
console.log('处理后的数组对象', newAdminsters)
// 将需要查找的值转换为字符串数组
let find = findVal.split(",")
const filterByKey = (find = [], newAdminsters = []) => {
	let res = [];
	// 筛选
	res = newAdminsters.filter(el => {
		const { value } = el;
		const index = find.indexOf(value);
		return index !== -1;
	});
	return res;
};
// 返回筛选后的数组对象
let arrAdminster = filterByKey(find, newAdminsters);
console.log('arrAdminster', arrAdminster)
for (let i = 0; i < arrAdminster.length; i++) {
	for (let j = i + 1; j < arrAdminster.length; j++) {
		if (arrAdminster[i].value == arrAdminster[j].value) {
			arrAdminster.splice(j, 1);
			j--;
		}
	}
}
console.log("去重后的数组：", arrAdminster)
let portalAdministerId = arrAdminster.map(item => item.value).join(",")
let portalAdministerName = arrAdminster.map(item => item.label).join(",")

console.log("筛选之后的结果：", portalAdministerId, portalAdministerName)
