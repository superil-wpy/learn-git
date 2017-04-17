//冒泡排序，从第一个元素开始分别跟隔壁元素对比大小更换位置，每更换一趟就可以找到一个最值，一直对比直到倒数第二个值。
function bubble_sort(arr) {
	for (var i = 1; i < arr.length; i++) {
		for (var j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	console.log(arr);
	return arr;
}