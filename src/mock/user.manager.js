import Mock from 'mockjs';
import { queryFormat } from './util';

Mock.mock(/mock\/setting\/user\/delete/, {
  code: 200,
  message: '删除成功'
});

Mock.mock(/mock\/setting\/user\/add/, {
  code: 200,
  message: '添加成功'
});

Mock.mock(/mock\/setting\/user\/update/, {
  code: 200,
  message: '修改成功'
});

Mock.mock(/mock\/setting\/user\/list/, (options) => {
  const pageSize = queryFormat(options.url).pageSize;
  let data = {};
  data[`list|${pageSize}`] = [
    {
      createTime: new Date().valueOf(),
      id: '@id',
      'roleId|1': [0, 1],
      sortCode: null,
      'status|1': [0, 1],
      phone: /1\d{10}/,
      userName: '@cname',
      realName: '@cname',
      email: '@email'
    }
  ];
  return Mock.mock({
    code: 200,
    message: '查询成功',
    data: {
      currentPage: 1,
      pageCount: 1,
      pageNo: 1,
      pageSize: pageSize,
      total: '@natural(60, 100)',
      ...data
    }
  });
});
