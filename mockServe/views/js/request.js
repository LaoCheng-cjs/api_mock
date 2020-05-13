(function (win) {
    // 定义请求
    var request = function (options) {
        var option = options || {};
        option.dataType = 'JSON'
        option.contentType = "application/json;charset=utf-8";
        option.data = JSON.stringify(option.data?option.data:{})
        if (!option.url && typeof option.url != 'string') {
            console.error(['视图view 请求的url不存在：' + option.url])
            return;
        }
        $.ajax(option)
    }
    // 定义
    win.mockApi = {
        getListApi(cb) { // 获取请求接口列表
            request({
                url: '/__api/getConfig',
                method: 'POST',
                success(res) {
                    console.log(1221,'');
                    if (typeof cb === 'function') {
                        cb(res)
                    }
                },
                error(err) {
                    if(err.status === 401) {
                        location.href = '/login.html'
                    }
                }
            })
        },
        getAllApi(cb) { // 请求所有
            request({
                url: '/__api/getAllApi',
                method: 'POST',
                success(res) {
                    if (typeof cb === 'function') {
                        cb(res)
                    }
                }
            })
        },
        getDoc() { // 获取操作文档及代码

        },
        login() { // 登录
            request({
                url: '/__api/getAllApi',
                method: 'POST',
                success(res) {
                    if (typeof cb === 'function') {
                        cb(res)
                    }
                }
            })
        }
    }
})(window)