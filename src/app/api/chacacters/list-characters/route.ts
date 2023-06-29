import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import MarvelHttpClient from "~/services/MarvelHttpClient";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const httpClient = new MarvelHttpClient();

  const httpResponse = await httpClient.request({
    url: "characters",
    method: "get",
    params: req.query,
  });

  return NextResponse.json(httpResponse);
}
