import axios, { AxiosResponse } from "axios";
import md5 from "md5";

class MarvelHttpClient {
  async request(data: any): Promise<any> {
    const publicKey = process.env.NEXT_PUBLIC_MARVELAPI_PUBLIC_TOKEN ?? "";
    const privateKey = process.env.NEXT_PUBLIC_MARVELAPI_PRIVATE_TOKEN ?? "";

    const timestamp = new Date().getTime();
    const hash = md5(timestamp + privateKey + publicKey);

    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url: `${process.env.NEXT_PUBLIC_MARVELAPI_URL}${data.url}`,
        method: data.method,
        data: data.body,
        headers: data.headers,
        params: {
          ts: timestamp,
          apikey: publicKey,
          hash,
          ...data.params,
        },
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
export default MarvelHttpClient;
