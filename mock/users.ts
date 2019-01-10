import MockJS from 'mockjs';

export default {
    'GET /api/users': MockJS.mock({
        status: 'success',
        code: 0,
        message: '成功',
        data: {
            id: 1,
            name: 'CY',
        }
    })
}
