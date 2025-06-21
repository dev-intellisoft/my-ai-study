const api = ''


try {
    const resp = await fetch("")

    if (resp.status === 200) {
        console.log(await resp.json())
    } else {
        console.log("some error occurred!")
    }
} catch(e) {
    console.log(e)
}