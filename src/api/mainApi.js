export async function _getTabot(params) {
  return request.get(process.env.REACT_APP_BASE_URL, {params});
}
