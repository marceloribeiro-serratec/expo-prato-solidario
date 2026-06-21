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

export function toastPerfilAtualizado() {
    toastSucesso("Suas informações foram atualizadas.", "Perfil atualizado");
}

export function toastErroAtualizarPerfil() {
    toastErro("Não foi possível atualizar seus dados.", "Erro ao atualizar");
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

export function toastProcutoCriado(nome: string) {
    toastSucesso(`Produto ${nome} criado com sucesso!`);
}

export function toastProdutoAtualizado(nome: string) {
    toastSucesso(`Produto ${nome} atualizado com sucesso!`);
}

export function toastProdutoDeletado(nome: string) {
    toastSucesso(`Produto ${nome} deletado com sucesso!`);
}

export function toastCategoriaCriada(nome: string) {
    toastSucesso(`Categoria ${nome} criada com sucesso!`);
}

export function toastErroCriar(item: string = "item") {
    toastErro(`Não foi possível criar o(a) ${item}. Tente novamente.`, "Erro ao criar");
}

export function toastErroAtualizar(item: string = "item") {
    toastErro(`Não foi possível atualizar o(a) ${item}. Verifique os dados.`, "Erro ao atualizar");
}

export function toastErroDeletar(item: string = "item") {
    toastErro(`Não foi possível deletar o produto.`, "Erro ao deletar");
}

export function toastCarrinhoVazio() {
    toastAviso("Adicione itens antes de finalizar o pedido.", "Carrinho vazio");
}

export function toastQuantidadeIndisponivel(nome: string) {
    toastErro(`Não há estoque suficiente de "${nome}".`, "Estoque insuficiente");
}

export function toastLogoutSucesso() {
    toastSucesso("Você saiu da sua conta.", "Até logo!");
}