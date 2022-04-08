export default {
	//特殊字符验证
	isSpecial(str) {
		var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]");
		return pattern.test(str);
	},
	//表情符验证
	isEmojiCharacter(substring) {
		for (var i = 0; i < substring.length; i++) {
			var hs = substring.charCodeAt(i);
			if (0xd800 <= hs && hs <= 0xdbff) {
				if (substring.length > 1) {
					var ls = substring.charCodeAt(i + 1);
					var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
					if (0x1d000 <= uc && uc <= 0x1f77f) {
						return true;
					}
				}
			} else if (substring.length > 1) {
				var ls = substring.charCodeAt(i + 1);
				if (ls == 0x20e3) {
					return true;
				}
			} else {
				if (0x2100 <= hs && hs <= 0x27ff) {
					return true;
				} else if (0x2B05 <= hs && hs <= 0x2b07) {
					return true;
				} else if (0x2934 <= hs && hs <= 0x2935) {
					return true;
				} else if (0x3297 <= hs && hs <= 0x3299) {
					return true;
				} else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030 ||
					hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b ||
					hs == 0x2b50) {
					return true;
				}
			}
		}
		return false;
	},
	/**
	 * 0是 无网络，1是wifi,2是移动网络。
	 */
	checkNetwork() {
		return  new Promise(function(resolve, reject) {
			uni.getNetworkType({
				success: function(res) {
					let type = res.networkType;
					//var value = "none"
					var value = "0"
					 if (type == "3g" || type == "2g" || type == "4g" || type == "5g") {
						value = "2";
					} else if (type == "wifi") {
						value = "1";
					}
					resolve(value);
					// console.log(res.networkType); //wifi  4g  none
				},
				fail(error) {
					reject(error);
				}
			});
		})
	},
	//返回年月日时分秒
	timestamptodatestr(timestampStr) {
		var timestamp = parseInt(timestampStr);
		if (timestampStr.length < 11) {
			timestamp = parseInt(timestampStr) * 1000;
		}
		var d = new Date(timestamp);
		var jstimestamp = (d.getFullYear()) + "年" + (d.getMonth() + 1) + "月" + (d.getDate()) + " 日";
		return jstimestamp;
    },
    formatDate(date){
        var date = new Date(date);
        var YY = date.getFullYear() + '-';
        var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
        var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return YY + MM + DD + " " + hh + mm + ss;
	},
	//返回年月日时分秒
	getTime(time, type = 1) {
		var date = new Date(time);
		var year = date.getFullYear();
		var month = date.getMonth();
		var day = date.getDay();
		var hour = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();
		month = month < 10 ? ('0' + month) : month,
			day = day < 10 ? ('0' + day) : day,
			hour = hour < 10 ? ('0' + hour) : hour
		minute = minute < 10 ? ('0' + minute) : minute;
		second = second < 10 ? ('0' + second) : second;
		if (type == 1) {
			return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second; //年月日时分秒
		} else if (type == 2) {
			return hour + ':' + minute; //时分
		} else if (type == 3) {
			return year + '年' + month + '月' + day + '日'; //年月日时分秒
		}

	},
	getFileTypeFor(filePath) {
		var file = getFilesuffixName(filePath);
		if(["jpg","png","gif","jpeg"].includes(file)){
			return 1
		}else if(["mp4","avi","3gp","flv","mkv","mov","rmvb","rm"].includes(file)){
			return 2;
		}else if(["pdf"].includes(file)){
			return 5;
		}else if(["mp3"].includes(file)){
			return 4;
		}else{
			return 3
		}
	},
	getFilesuffixName(filePath) {
		var startIndex = filePath.lastIndexOf('.');
		if (startIndex != -1) return filePath.substring(startIndex + 1, filePath.length).toLowerCase();
		else return '';
	},
	getFileType(filePath) {
		var file = getFilesuffixName(filePath);
		if(["jpg","png","gif","jpeg"].includes(file)){
			return 1
		}else if(["mp4","avi","3gp","flv","mkv","mov","rmvb","rm"].includes(file)){
			return 2;
		}else{
			return 3
		}
	},
	getFilesuffixNames(filePath) {
		var startIndex = filePath.lastIndexOf('.');
		if (startIndex != -1) return filePath.substring(startIndex + 1, filePath.length).toLowerCase();
		else return '';
	}
	
}
function getFilesuffixName(filePath) {
	var startIndex = filePath.lastIndexOf('.');
	if (startIndex != -1) return filePath.substring(startIndex + 1, filePath.length).toLowerCase();
	else return '';
}