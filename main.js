console.log("Lets write some js");

async function main() {
    let a = await fetch("http://127.0.0.1:3000/frontend/spotify_clone/songs/")
    let response = await a.text()
    console.log("")

}
main()