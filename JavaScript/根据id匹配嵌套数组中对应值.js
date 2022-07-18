let portalAdminister = [
	{
		children: [
			{
				children: [
					{
						label: "镜岩",
						value: "01380352611209037"
					},
					{
						label: "陈孝敬",
						value: "025609424537722615"
					}
				],
				disabled: true,
				label: "开发测试人员",
				selectable: false,
				value: "515794864"
			},
			{
				label: "叶晟.战破",
				value: "0116415710-843089919"
			},
			{
				label: "胡玉兰",
				value: "01195630266932644008"
			},
			{
				label: "陈孝敬",
				value: "025609424537722615"
			}
		],
		disabled: true,
		label: "聚橙体验组织1",
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
console.log('newAdminsters', newAdminsters)
let find = findVal.split(",")
console.log(find)
const filterByKey = (find = [], newAdminsters = []) => {
	let res = [];
	res = newAdminsters.filter(el => {
		const { value } = el;
		const index = find.indexOf(value);
		return index !== -1;
	});
	return res;
};
// 筛选后的数组对象
let arrAdminster = filterByKey(find, newAdminsters);
console.log('arrAdminster', arrAdminster)
for (let i = 0; i < arrAdminster.length; i++) {
	for (let j = i + 1; j < arrAdminster.length; j++) {
		if (arrAdminster[i].value == arrAdminster[j].value) {
			arrAdminster.splice(j, 1);
			j--;
		};
	};
};
console.log("去重后的数组：",arrAdminster)
let portalAdministerId = arrAdminster.map(item => item.value).join(",")
let portalAdministerName = arrAdminster.map(item => item.label).join(",")

console.log(portalAdministerId, portalAdministerName)
