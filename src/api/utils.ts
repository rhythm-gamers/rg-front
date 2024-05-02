/**
 * Object convert to FormData at POST method
 * @param req
 * @returns
 */
export const reqObjectToFormData = (req: { [type: string]: any }) => {
  const body = new FormData();
  for (let key in req) {
    if (req[key]) {
      body.append(key, JSON.stringify(req[key]));
    }
  }

  return body;
};

/**
 * Wrap JSON with Object and parse JSON
 * @param json
 * @returns
 */
export const parseJsonWithWrap = (json: string) => {
  const wrappedJson = JSON.stringify({ data: json });
  return JSON.parse(wrappedJson);
};

export const makePagingQueryString = (page: number, limit?: number) => {
  const defaultLimit = 10;
  return `?page=${page}?limit=${limit || defaultLimit}`;
};
