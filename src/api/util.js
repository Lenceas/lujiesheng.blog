import {
    ElMessage,
    ElNotification
} from 'element-plus'

// 消息提示
function $msg_info(msg) {
    ElMessage({
        message: msg,
        duration: 2000,
        showClose: true,
    })
}

function $msg_success(msg) {
    ElMessage({
        message: msg,
        type: 'success',
        duration: 2000,
        showClose: true,
    })
}

function $msg_warning(msg) {
    ElMessage({
        message: msg,
        type: 'warning',
        duration: 2000,
        showClose: true,
    })
}

function $msg_error(msg) {
    ElMessage({
        title: title,
        message: msg,
        type: 'error',
        duration: 2000,
        showClose: true,
    })
}

// 通知
function $notify_info(title, msg) {
    ElNotification({
        title: title,
        message: msg,
        duration: 2000,
        showClose: true,
    })
}

function $notify_success(title, msg) {
    ElNotification({
        title: title,
        message: msg,
        type: 'success',
        duration: 2000,
    })
}

function $notify_warning(title, msg) {
    ElNotification({
        title: title,
        message: msg,
        type: 'warning',
        duration: 2000,
    })
}

function $notify_error(title, msg) {
    ElNotification({
        title: title,
        message: msg,
        type: 'error',
        duration: 2000,
    })
}

export default {
    msg_info: function (msg) {
        return $msg_info(msg)
    },
    msg_success: function (msg) {
        return $msg_success(msg)
    },
    msg_warning: function (msg) {
        return $msg_warning(msg)
    },
    msg_error: function (msg) {
        return $msg_error(msg)
    },
    notify_info: function (title, msg) {
        return $notify_info(title, msg)
    },
    notify_success: function (title, msg) {
        return $notify_success(title, msg)
    },
    notify_warning: function (title, msg) {
        return $notify_warning(title, msg)
    },
    notify_error: function (title, msg) {
        return $notify_error(title, msg)
    },
}