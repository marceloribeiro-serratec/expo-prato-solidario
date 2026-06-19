import Toast from "react-native-toast-message";

export function toastSucesso(mensagem: string, titulo?: string) {
    Toast.show({
        type: "success",
        text1: titulo || "Sucesso",
        text2: mensagem,
        position: "top",
        visibilityTime: 5000,
    });
}

export function toastErro(mensagem: string, titulo?: string) {
    Toast.show({
        type: "error",
        text1: titulo || "Erro",
        text2: mensagem,
        position: "top",
        visibilityTime: 5000,
    });
}

export function toastAviso(mensagem: string, titulo?: string) {
    Toast.show({
        type: "info",
        text1: titulo || "Atenção",
        text2: mensagem,
        position: "top",
        visibilityTime: 5000,
    });
}

export function toastLoginErro() {
    toastErro("Email ou senha incorretos.", "Falha no login");
}

export function toastLoginContaNaoMigrada() {
    toastErro(
        "Esta conta ainda não tem senha no Supabase Auth. Crie a conta novamente com email e senha, ou use o login com Google se foi assim que você entrou antes.",
        "Conta não encontrada no Auth"
    );
}

export function toastLoginSucesso(nome: string) {
    toastSucesso(`Bem-vindo, ${nome}!`, "Login realizado");
}

export function toastCadastroSucesso() {
    toastSucesso("Cliente cadastrado com sucesso.", "Cadastro realizado");
}

export function toastCadastroErro() {
    toastErro(
        "Não foi possível cadastrar o cliente. Verifique os dados e tente novamente.",
        "Erro no cadastro"
    );
}

export function toastCadastroDuplicado() {
    toastErro(
        "Este e-mail ou CPF já está cadastrado. Tente fazer login ou use outros dados.",
        "Cadastro já existe"
    );
}

export function toastProdutoAdicionado(nome: string) {
    toastSucesso(`"${nome}" adicionado ao carrinho!`);
}

export function toastProdutoRemovido(nome: string) {
    toastAviso(`"${nome}" removido do carrinho.`);
}

export function toastPedidoFinalizado() {
    toastSucesso("Seu pedido foi realizado com sucesso!", "Pedido confirmado");
}

export function toastErroBuscar(item: string = "dados") {
    toastErro(`Não foi possível carregar ${item}.`, "Erro");
}
