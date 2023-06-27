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

  async getCharactersById(id: string) {
    const httpResponse = await this.httpClient.request({
      url: `characters/${id}`,
      method: "get",
    });

    return httpResponse;
  }
}

export default new CharactersService();
