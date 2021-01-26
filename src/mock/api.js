import Mock from 'mockjs'
// mock不会发送实际请求 而是直接拦截请求
Mock.mock('/api/user/login', {
    status: 0,
    data: {
        // 生成id 1-100区间
        'id|1-100': 0,
        // @name 随机英文名 @cname随机中文名
        username: '@cname',
        // @email
        email: 'admin@51purse.com',
        phone: '@integer(10000000000,19999999999)',
        role: 0,
        createTime: '@integer',
        updateTime: 1479048325000
    }
})
