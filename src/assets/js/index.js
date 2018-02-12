
//全局变量
gData = {};
gData.route = new RouterMix(routeList);
gData.gIsPhone = function(mobile) {
    if (mobile.length != 11) {
        gAlert('手机号码应为11位');
        return false;
    }
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(mobile))) {
        gAlert('手机号码格式错误');
        return false;
    }
    return true;
}
window.gAlert = function(msg, t) {
    var dlg = BootstrapDialog.show({
        message: msg
    });
    setTimeout(function() {
        dlg.close();
    }, t || 1200);
}
axios.interceptors.request.use((config) => {
    //在发送请求之前的处理
    return config;
}, (error) => {
    gAlert("错误的传参", 'fail');
    return Promise.reject(error);
});

axios.interceptors.response.use((res) => {
    //响应之后的处理
    return res;
}, (error) => {
    gAlert("网络异常", 'fail');
    return Promise.reject(error);
});


function gGet(url, params) {

    return axios({
        method: 'get',
        url: url,
        params,
        withCredentials: true,
        timeout: 30000
    })
}

function gPost(url, data) {
    return axios({
        method: 'post',
        url: url,
        data: data,
        timeout: 30000,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
}