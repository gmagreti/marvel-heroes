/* eslint-disable import/no-anonymous-default-export */
import { api } from "~/lib/axios";
import MarvelHttpClient from "../MarvelHttpClient";

class CharactersService {
  httpClient: MarvelHttpClient;

  constructor() {
    this.httpClient = new MarvelHttpClient();
  }

  async listCharacters(params?: any) {
    const response = await api.get(`/chacacters/list-characters`, {
      params,
    });

    return response;
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
