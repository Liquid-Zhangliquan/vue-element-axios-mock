import Mock from 'mockjs';

Mock.mock(/mock\/setting\/role\/delete/, {
  code: 200,
  message: '删除成功'
});

Mock.mock(/mock\/setting\/role\/add/, {
  code: 200,
  message: '添加成功'
});

Mock.mock(/mock\/setting\/role\/update/, {
  code: 200,
  message: '修改成功'
});

Mock.mock(/mock\/setting\/role\/list/, (options) => {
  return Mock.mock({
    code: 200,
    message: '查询成功',
    'data|25': [
      {
        createTime: new Date().valueOf(),
        updateTime: new Date().valueOf(),
        createUser: '@cname',
        id: '@id',
        'roleId|1': [0, 1],
        sortCode: null,
        'status|1': [0, 1],
        menusIds: [],
        remark: '',
        phone: /1\d{10}/,
        roleName: '@cname'
      }
    ]
  });
});
