/* eslint-disable import/no-anonymous-default-export */
import MarvelHttpClient from "../MarvelHttpClient";

class CharactersService {
  httpClient: MarvelHttpClient;

  constructor() {
    this.httpClient = new MarvelHttpClient();
  }

  async listCharacters(params?: any) {
    const httpResponse = await this.httpClient.request({
      url: "characters",
      method: "get",
      params: params,
    });

    return httpResponse;
  }
}

export default new CharactersService();
