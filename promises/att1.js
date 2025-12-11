const download = new Promise((resolve, reject) => {
    const erro = false
    setTimeout(() => {
        if (!erro) resolve("Download concluído!")
        else reject("Erro no download.")
    }, 3000)
})

download
    .then(r => console.log(r))
    .catch(e => console.log(e))
