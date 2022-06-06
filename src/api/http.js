import axios from "axios"

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8079/api/v1/' : 'http://api.lujiesheng.cn/api/v1/'
const service = axios.create({
    baseURL: baseURL,
    timeout: 5000, // 超时时间5s
})

// 请求拦截
service.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        saveRefreshtime()
        // 判断是否存在token,如果存在将每个页面header添加token
        let tokeninfo = JSON.parse(localStorage.getItem('TokenInfo'))
        if (tokeninfo) {
            config.headers.Authorization = 'Bearer ' + tokeninfo.token
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// 响应拦截
service.interceptors.response.use(response => {
    // console.log('响应拦截', response)
    return response
}, error => {
    // console.log('error', error)
    if (error.response) {
        switch (error.response.status) {
            case 401:
                var curTime = new Date()
                var refreshtime = new Date(Date.parse(localStorage.getItem('refreshtime')))
                var tokeninfo = JSON.parse(localStorage.getItem('TokenInfo'))
                // 在用户操作的活跃期内
                if (localStorage.getItem('refreshtime') && (curTime <= refreshtime)) {
                    // 直接将整个请求 return 出去，不然的话，请求会晚于当前请求，无法达到刷新操作
                    return axios({
                        method: 'post',
                        url: '/Auth/RefreshToken',
                        params: {
                            token: tokeninfo.token
                        }
                    }).then(res => {
                        let {
                            status,
                            msg,
                            data
                        } = res.data
                        if (status == 200) {
                            localStorage.setItem('TokenInfo', JSON.stringify(data))
                            var newTokeninfo = JSON.parse(localStorage.getItem('TokenInfo'))
                            var curTime = new Date()
                            var expiredate = new Date(curTime.setSeconds(curTime.getSeconds() + newTokeninfo.expires_in))
                            localStorage.setItem('TokenExpire', expiredate)
                            error.config.__isRetryRequest = true
                            error.config.headers.Authorization = 'Bearer ' + newTokeninfo.token
                            // error.config 包含了当前请求的所有信息
                            return axios(error.config)
                        } else {
                            // 刷新token失败 清除token信息并跳转到登录页面
                            Message.error({
                                message: msg,
                                duration: 2000,
                                center: true
                            })
                            logOut()
                        }
                    })
                } else {
                    // 返回 401，并且不在用户操作活跃期内 清除token信息并跳转到登录页面
                    Message.error({
                        message: '登录超时请重新登录！',
                        duration: 2000,
                        center: true
                    })
                    logOut()
                }
        }
    }
    // 返回接口返回的错误信息
    return Promise.reject(error.response.data); // 返回接口返回的错误信息
})

// 保存刷新时间
const saveRefreshtime = () => {
    let nowtime = new Date()
    let TokenExpire = localStorage.getItem('TokenExpire')
    let refreshtime = localStorage.getItem('refreshtime')
    let lastRefreshtime = refreshtime ? new Date(refreshtime) : new Date(-1)
    let expiretime = new Date(Date.parse(TokenExpire))
    let refreshCount = 5 //滑动系数
    if (lastRefreshtime >= nowtime) {
        lastRefreshtime = nowtime > expiretime ? nowtime : expiretime
        lastRefreshtime.setMinutes(lastRefreshtime.getMinutes() + refreshCount)
        localStorage.setItem('refreshtime', lastRefreshtime)
    } else {
        localStorage.setItem('refreshtime', new Date(-1))
    }
}

// 退出登录
const logOut = () => {
    localStorage.clear()
    router.push('/login')
}

// 自定义判断元素类型JS
function toType(obj) {
    return {}.toString
        .call(obj)
        .match(/\s([a-zA-Z]+)/)[1]
        .toLowerCase();
}
// 参数过滤函数
function filterNull(o) {
    for (var key in o) {
        if (o[key] === null) {
            delete o[key];
        }
        if (toType(o[key]) === "string") {
            o[key] = o[key].trim();
        } else if (toType(o[key]) === "object") {
            o[key] = filterNull(o[key]);
        } else if (toType(o[key]) === "array") {
            o[key] = filterNull(o[key]);
        }
    }
    return o;
}

function apiAxios(method, url, params, success) {
    if (params) {
        params = filterNull(params);
    }
    service({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
        withCredentials: false
    }).then(function (res) {
        // console.log('apiAxios_res', res.data)
        success(res.data)
    }).catch(function (err) {
        console.log('apiAxios_err', err)
    })
}

export default {
    get: function (url, params, success) {
        return apiAxios('GET', url, params, success)
    },
    post: function (url, params, success) {
        return apiAxios('POST', url, params, success)
    },
    put: function (url, params, success) {
        return apiAxios('PUT', url, params, success)
    },
    delete: function (url, params, success) {
        return apiAxios('DELETE', url, params, success)
    }
}