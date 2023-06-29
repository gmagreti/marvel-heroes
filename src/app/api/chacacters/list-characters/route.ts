import { NextResponse } from "next/server";
import MarvelHttpClient from "~/services/MarvelHttpClient";

export async function GET(req: any) {
  if (req.method !== "GET") {
    return NextResponse.json({ message: "Request invalid" });
  }

  const httpClient = new MarvelHttpClient();

  const httpResponse = await httpClient.request({
    url: "characters",
    method: "get",
    params: req.query,
  });

  return NextResponse.json(httpResponse);
}
