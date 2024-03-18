import {NextRequest} from "next/server";

export async function GET (request: NextRequest): Promise<Response>
{
	return Response.json({
		"url": {
			"actual": request.url.toString(),
			"but": "it should use the proxy settings.",
		},
		"headers": Array.from(request.headers.entries()),
	});
}
