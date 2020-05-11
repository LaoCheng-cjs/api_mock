(function () {
    // 定义请求
    var request = function (options) {
        var option = options || {},
            formal = {
                url: '/__api/index',
                method: 'POST',
                dataType: 'JSON',
                contentType: "application/json;charset=utf-8",
                data: JSON.stringify({
                    myTest: 2222222222
                }),
                success() {

                }
            }
        if (!option.url && typeof option.url != 'string') {
            console.error(['视图view 请求的url不存在：' + option.url])
            return;
        }
        // 进行设置形参
        // for (var str in option) {
        //     if (str == formal) {

        //     }
        //     option[str] =
        // }
        // $.ajax()
    }
    // 定义
    window.mockApi = {
        index() { // index请求
            request('')
        }
    }
})()