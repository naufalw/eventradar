export async function GET() {

    const videos = [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    ];
    return Response.json({ videos: [videos[Math.floor(Math.random()*4)]] })
}