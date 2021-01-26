/* 
Storage封装
三者区别

存储大小: cookie 4k , Storage 5M
有效期:cookie拥有有效期, Storage永久存储
cookie会发送到服务器端,存储在内存中, Storage只存储在浏览器端
路径: Cookie有路径的限制, Storage只存储在域名下
API : Cookie没有特定的API, Storage有对应的API
*/

const SRORAGE_KEY = 'mall'
export default {
    // 存储
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name)
            val[key] = value
            this.setItem(module_name, val)
        } else {
            let val = this.getStorage()
            val[key] = value
            window.sessionStorage.setItem(SRORAGE_KEY, JSON.stringify(val))
        }
    },
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name)
            if (val) return val[key]
        }
        return this.getStorage()[key]
    },
    getStorage() {
        // 把字符串转为json,方便操作
        return JSON.parse(window.sessionStorage.getItem(SRORAGE_KEY) || '{}')
    },
    // 删除某个
    clear(key, module_name) {
        let val = this.getStorage()
        if (module_name) {
            if (!val[module_name]) {
                return
            }
            delete val[module_name][key]
        } else {
            delete val[key]
        }
        window.sessionStorage.setItem(SRORAGE_KEY, JSON.stringify(val))
    }
}
