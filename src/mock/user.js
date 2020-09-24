import Mock from 'mockjs';
import { queryFormat } from './util';

Mock.mock(/mock\/setting\/user\/login/, (options) => {
  const body = JSON.parse(options.body);
  if (body.userName === 'admin' && body.password === '123456') {
    return Mock.mock({
      code: 200,
      message: '登录成功',
      data: {
        token: '1111111111111111111111111111111111111111',
        userInfo: {
          username: body.username
        }
      }
    });
  } else {
    return Mock.mock({
      code: 201,
      message: '账号密码或错误'
    });
  }
});
