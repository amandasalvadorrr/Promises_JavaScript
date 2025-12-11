const pedido = new Promise((resolve, reject) => {
    const ok = true
    setTimeout(() => {
        if (ok) resolve("Pedido aprovado e enviado!")
        else reject("Erro no pedido.")
    }, 2000)
})

pedido
    .then(r => console.log(r))
    .catch(e => console.log(e))
