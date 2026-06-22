# Prato Solidário

**Prato Solidário** é um aplicativo mobile de delivery desenvolvido em **React Native** com **Expo**. A proposta do app é unir a praticidade de pedir comida online com impacto social: **3% do valor de cada pedido é destinado a instituições que combatem a fome e apoiam pessoas em situação de vulnerabilidade**.

A cada prato comprado, o usuário não só se alimenta bem, como também contribui diretamente para causas sociais.

---

## Tecnologias utilizadas

- **React Native** com **Expo**
- **Supabase**

---

## Telas do aplicativo

Abaixo estão as telas que compõem o app.

<table>
  <tr>
    <td align="center"><strong>WelcomeScreen</strong><br><img src="" width="140" /></td>
    <td align="center"><strong>LoginScreen</strong><br><img src="" width="140" /></td>
    <td align="center"><strong>RegisterScreen</strong><br><img src="" width="140" /></td>
    <td align="center"><strong>HomeScreen</strong><br><img src="" width="140" /></td>
  </tr>
  <tr>
    <td align="center"><strong>ProdutosScreen</strong><br><img src="" width="140" /></td>
    <td align="center"><strong>DetalhesProdutoScreen</strong><br><img src="" width="140" /></td>
    <td align="center"><strong>CartScreen</strong><br><img src="" width="140" /></td>
    <td align="center"><strong>PedidoConfirmadoScreen</strong><br><img src="" width="140" /></td>
  </tr>
  <tr>
    <td align="center"><strong>ProfileScreen</strong><br><img src="" width="140" /></td>
    <td align="center"><strong>HistoryScreen</strong><br><img src="" width="140" /></td>
    <td align="center"><strong>SettingsScreen</strong><br><img src="" width="140" /></td>
    <td align="center"><strong>SobreNosScreen</strong><br><img src="" width="140" /></td>
  </tr>
  <tr>
    <td align="center"><strong>ControlScreen</strong><br><img src="" width="140" /></td>
    <td align="center"><strong>OfflineScreen</strong><br><img src="" width="140" /></td>
    <td></td>
    <td></td>
  </tr>
</table>

### Descrição das telas

| Tela | Descrição |
|---|---|
| WelcomeScreen | Tela de boas-vindas / introdução ao app |
| LoginScreen | Login com e-mail/senha e login com Google |
| RegisterScreen | Cadastro de novo usuário |
| HomeScreen | Tela inicial, com categorias, busca e destaque do impacto social |
| ProdutosScreen | Listagem de produtos por categoria |
| DetalhesProdutoScreen | Detalhes do produto, impacto social gerado e adição ao carrinho |
| CartScreen | Carrinho de compras |
| PedidoConfirmadoScreen | Confirmação do pedido, com QR Code para retirada |
| ProfileScreen | Perfil do usuário, nível de doador e impacto social acumulado |
| HistoryScreen | Histórico de pedidos realizados |
| SettingsScreen | Configurações da conta |
| SobreNosScreen | Sobre o projeto e as instituições parceiras |
| ControlScreen | Tela de controle/gestão |
| OfflineScreen | Tela exibida quando o app está sem conexão |

---

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- npm ou yarn
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli` ou uso via `npx`)
- App **Expo Go** (para testar em dispositivo físico) ou um emulador Android/iOS

---

## Instalação e execução

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/prato-solidario.git

# Acesse a pasta do projeto
cd prato-solidario

# Instale as dependências
npm install
# ou
yarn install

# Inicie o projeto com o Expo
npx expo start
```

Após iniciar, escaneie o QR Code exibido no terminal/navegador com o app **Expo Go**, ou abra em um emulador Android/iOS.

---

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as credenciais do Supabase:

```env
EXPO_PUBLIC_SUPABASE_URL=url-aqui
EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=chave-aqui
```
---

## Equipe

- João Gabriel Barros
- Marcelo Ribeiro
- Victor de Araújo
- Caio Lukas Monteiro
- Wenderson Azevedo
- José Ricardo Melo
- Emanuel Valinhos

---

## Sobre o impacto social

A cada pedido realizado no Prato Solidário, 3% do valor pago é revertido para instituições parceiras que atuam no combate à fome urbana e no apoio a pessoas em situação de vulnerabilidade. O app exibe o impacto gerado individualmente por pedido e coletivamente pela comunidade de usuários.
