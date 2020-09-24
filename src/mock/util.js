/**
 * 处理location.search的方法,将字符串转换成json
 * @param {string} search
 */
export function queryFormat(search = '') {
  let params = {};
  if (search && search.length) {
    search = search.indexOf('?') < 0 ? search : search.split('?')[1];
    let a = search.split('&');
    let b = a.map((v) => v.split('='));
    b.map((v) => (params[v[0]] = v[1]));
  }
  return params;
}
