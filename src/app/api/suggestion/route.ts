import {Response} from "next/dist/compiled/@edge-runtime/primitives/fetch";

export async function GET(request: Request) {
    const response: Response = await fetch('...', {
        cache: 'no-store',
    })

    const textData = await response.text()

    return new Response(JSON.stringify(textData.trim()), {
        status: 200,
    })
}
