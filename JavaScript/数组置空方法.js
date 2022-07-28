let arr = [1, 2, 3]
// 方式一：splice方法
arr.splice(0, arr.length)
console.log("数组为空：", arr)

// 方式二：length方法
arr.length = 0;
console.log("数组为空：", arr)

// 方式三：直接赋值为空
arr = []
console.log("数组为空：", arr)
