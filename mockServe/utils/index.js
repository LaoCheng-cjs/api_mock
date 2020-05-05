
import city from './city'

let names = {
    surnamesCN = "王李张刘陈杨赵黄周吴徐孙胡朱高林何郭马罗梁宋郑谢韩唐冯于董萧程曹袁邓许傅沈曾彭吕苏卢蒋蔡贾丁魏薛叶阎余潘杜戴夏钟汪田任姜范方石姚谭廖邹熊金陆郝孔白崔康毛邱秦江史顾侯邵孟龙万段雷钱汤尹黎易常武乔贺赖龚文庞樊兰殷施陶洪翟安颜倪严牛温芦季俞章鲁葛伍韦申尤毕聂丛焦向柳邢路岳齐沿梅莫庄辛管祝左涂谷祁时舒耿牟卜肖詹关苗凌费纪靳盛童欧甄项曲成游阳裴席卫查屈鲍位覃霍翁隋植甘景薄单包司柏宁柯阮桂闵欧阳解强柴华车冉房边净阴闫佘练骆付代麦容悲初瞿褚班全名井米谈宫虞奚佟符蒲穆漆卞东储党从艾苻厉岑燕吉冷仇伊首郁娄楚邝历狄简胥连帅封危支原滕苑信索栗官沙池藏师国巩刁茅杭巫居窦皮戈麻饶习巴旷宗荆荣孝蔺廉员西寇刃见底区郦卓琚续朴蒙敖花应喻冀尚顿菅嵇雒弓忻权谌卿扈海冼伦鹿宿山桑裘达么智宣尉迟东方幺郎农戚屠楼步鞠仲尉蓝招攀栾籍寿邬荚税逄加勾由福缑钦鲜于但邸逢况鄢古乐斯钮盖旦毅邰哈鄂商英迟仝亓玄黑腾晏禹诸苟湛殳亢奉占闻粟种匡宾劳申屠伏过水真宇巢计羌相辜展丑银丰矫上昝绳臧舍郅布糜乌衣来恒那满门司徒皋旺公言藤释尧缪干阚靖渠契晋六束良鹗贝邴沃竺扬励归上官荃焉多都果郜隆诸葛令狐慕礼祖翦力朗撖修呼富明站虢冶茹禚笪云肇平弋盘候尔姬宝畅冒邾延禅浦敬颉南巍补",
    surnamesUS: ['Admirind','Aerum','Ehhum','Fiskan','Garan','Gimik','Hakil','Terikan','Tander','Suker','Rastagan'], // 姓氏
    name(type) { // 获取name
        let str = ''
        if(type  && isType(type)) {
            if(type == 'us') { // 英文
                // 名字
                arr = ['Lena','Lillian','Miriam','Monica','Maxine','Rebecca','Serena','Melissa','Miranda','Ariel','Candice','Becky','Christine','Carrie','Emma','Jamie','Philomena']
                var len = randomN(1,0),
                name = '';

            }
        }else {
            // 名字
            str = '成美眉梅素宗忠玲彩财辉慧晖徽卫军碧仁义意衣亿艺伊佳俊肖笑箫智织芝凯清贝博彦宇春景亚汉'
            var len = randomN(2,1),
                name = ''
            for(var i=0;i<len;i++) {
                name += str[randomN(str.length-1,0)]
            }
        }
        name = names.surnamesCN[randomN(randomN.length-1, 0)] + name;
        return name;
    },
    surname() { // 获取姓氏
        var len = names.surnamesCN.length;
        return names.surnamesCN[randomN(len.length-1, 0)]
    },
    cname(str) {
       return  names.surnamesCN()
    }
}
// 获取姓名。返回的 type 为可选项
function name (keys, type) {
    return names[keys]?name[keys](type):false;
}


// 金钱格式化转数字
function moneyStrToNum(str) { //str 金钱字符串
    if (str) {
      let strTemp = str.replace(",", "")
      return Number(strTemp)
    } else {
      return str
    }
}
// 金钱数字转换格式化
function toMoney(val) { //val 数字number
    var str = (val / 100 * 100).toFixed(2) + ''
    var intSum = str.substring(0, str.indexOf(".")).replace(/\B(?=(?:\d{3})+$)/g, ',') //取到整数部分
    var dot = str.substring(str.length, str.indexOf(".")) //取到小数部分搜索
    var ret = intSum + dot
    return ret
}
// 类型判断
function isType (obj) {
    const map = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Object]': 'object',
    }
    return map[Object.prototype.toString.call(obj)]
}
// 随机
function randomN(m,n){
    return Math.round(Math.random()*(n-m)+m);
}

// 手机号
function phoneTel () {
    var num = [3,4,5,8],
    tel = '1' + num[randomN(num.length-1,0)]
    for(let i=0;i<9;i++) {
        tel += randomN(9,0)
    }
    return tel;
}

// 随机ip地址
function ip () {
    return randomN(255,0) + '.' + randomN(255,0) + '.' + randomN(255,0) + '.' + randomN(255,0);
}

// 随机一串字符串
function ids (length) {
    return Number(Math.random().toString().substr(3,length || 6) + Date.now()).toString(36)
}

// email ，常用的也就是 163、qq、yahoo、gmail、msn 
var emails = ['@qq.com','@163.com','@yahoo.com','gmail.com','@msn.com'],
    emailsLen = emails.length-1;
function email () {
    return  ids(randomN(16,6)) + emails[randomN(emailsLen,0)]
}

// 城市选择


export {
    isType,
    randomN,
    toMoney,
    moneyStrToNum,
    name,
    phoneTel,
    city,
    ip,
    email
}