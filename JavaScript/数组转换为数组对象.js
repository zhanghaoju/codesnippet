let arrTitle = ["热门1", "小贴士"]
let obj={}
for (let key in arrTitle){
	obj[key]=arrTitle[key]
}
let newObj=Object.keys(obj).map(e=>{
	return{
		title:obj[e]
	}
})
console.log(newObj)
