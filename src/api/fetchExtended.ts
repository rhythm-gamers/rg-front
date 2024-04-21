import returnFetch from "return-fetch";

const fetchExtended = returnFetch({
  baseUrl: process.env.NEXT_PUBLIC_API_SERVER_URL,
  headers: { Accept: "application/json" },
  interceptors: {
    request: async (args) => {
      console.log("********* before sending request *********");
      console.log("url:", args[0].toString());
      console.log("requestInit:", args[1], "\n\n");
      return args;
    },

    response: async (response, requestArgs) => {
      try {
        if (response.status === 403)
          throw new Error("You are not authorized to this action");
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
