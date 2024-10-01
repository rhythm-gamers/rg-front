interface IQueryObject {
  [key: string]: number | string | string[];
}

export const toQueryString = (objects: IQueryObject[]) => {
  const queryStringParts: string[] = [];

  for (const obj of objects) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const values = obj[key];

        if (Array.isArray(values)) {
          if (values.length === 0) continue;
          queryStringParts.push(
            `${encodeURIComponent(key)}=${values
              .map(encodeURIComponent)
              .join(",")}`,
          );
        } else {
          if (typeof values === "string" && values.length === 0) continue;
          queryStringParts.push(
            `${encodeURIComponent(key)}=${encodeURIComponent(values)}`,
          );
        }
      }
    }
  }

  return "?" + queryStringParts.join("&");
};
