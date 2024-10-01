import returnFetch from "return-fetch";

const fetchExtended = returnFetch({
  baseUrl: process.env.NEXT_PUBLIC_API_SERVER_URL,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
  fetch: (url, init) =>
    fetch(url, {
      cache: process.env.NODE_ENV == "production" ? "default" : "no-store",
      credentials:
        process.env.NODE_ENV === "production" ? "include" : "same-origin",
      ...init,
    }),
  interceptors: {
    request: async (args) => {
      console.log("********* before sending request *********");
      console.log("url:", args[0].toString());
      console.log("requestInit:", args[1], "\n\n");
      return args;
    },

    response: async (response, requestArgs) => {
      try {
        if (response.status === 401) {
          const isAccept = confirm(
            "로그인이 필요한 서비스입니다.\n로그인 페이지로 이동하시겠습니까?",
          );
          if (isAccept) {
            history.replaceState(null, "", "/login");
            history.go();
          }
        }
        if (response.status === 500) throw new Error("Server went wrong!");

        console.log("********* after receiving response *********");
        console.log("url:", requestArgs[0].toString());
        console.log("requestInit:", requestArgs[1], "\n\n");
      } catch (error) {
        console.error(error);
      }
      return response;
    },
  },
});

export default fetchExtended;
