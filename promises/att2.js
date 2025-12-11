function verificarLogin(usuario, senha) {
    return new Promise((resolve, reject) => {
        const valido = usuario === "admin" && senha === "123"
        if (valido) resolve("Login bem-sucedido!")
        else reject("Credenciais inválidas.")
    })
}

verificarLogin("admin", "123")
    .then(r => console.log(r))
    .catch(e => console.log(e))
