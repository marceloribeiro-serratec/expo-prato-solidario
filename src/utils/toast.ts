import Toast from "react-native-toast-message"

export function toastSucesso(mensagem: string, titulo?: string ){
    Toast.show({
        type: "sucess",
        text1: titulo || "Sucesso",
        text2: mensagem,
        position: "top",
        visibilityTime: 3000,
    });
}

export function toastErro(mensagem: string, titulo?: string){
    Toast.show({
        type: "error",
        text1: titulo || "Erro",
        text2: mensagem,
        position: "top",
        visibilityTime: 4000,
    })
}

export function toastAviso(mensagem: string, titulo?: string) {
    Toast.show({
        type: "info",
        text1: titulo || "Atenção",
        text2: mensagem,
        position: "top",
        visibilityTime: 3000,
    });
}

export function toastLoginErro() {
    toastErro("Email ou senha incorretos.", "Falha no login");
}

export function toastLoginSucesso(nome: string) {
    toastSucesso(`Bem-vindo, ${nome}!`, "Login realizado");
}

export function toastProdutoAdicionado(nome: string) {
    toastSucesso(`"${nome}" adicionado ao carrinho!`);
}

export function toastProdutoRemovido(nome: string) {
    toastAviso(`"${nome}" removido do carrinho.`);
}

export function toastPedidoFinalizado() {
    toastSucesso("Seu pedido foi realizado com sucesso! 🎉", "Pedido confirmado");
}

export function toastErroBuscar(item: string = "dados") {
    toastErro(`Não foi possível carregar ${item}.`, "Erro");
}