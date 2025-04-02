# Gerenciamento de Leads - SPA

## Descrição

Este projeto se trata de uma  Single Page Application (SPA) desenvolvida com **React** para gerenciar leads de uma empresa. A interface foi construída utilizando a biblioteca de componentes **Material-UI**, enquanto o **Axios** é usado para realizar chamadas aos endpoints da API. O desenvolvimento foi realizado no **Visual Studio Code**. Em resumo temos aqui a interface de usuário para visualização e gerenciamento das leads que nos é trazida pela api **LeadManagementApi**.

## Funcionalidades
- Listagem de leads existentes na aba Invited.
- Listagem de leads existentes na aba Accepted.
- Confirmação de um card de leads apresentado.
- Recusa de um card de leads apresentado.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:

- **Node.js** (versão 22)
- **Gerenciador de pacotes - NPM** (versão 10.9.2)
- **Git** (para clonar o repositório)

## Instalação

- Clone este repositório com o seguinte comando: git clone https://github.com/Mhellsing/lead-management-frontend.git
- Execute o VS Code
- clique no campo **Open Folder** conforme a imagem abaixo:  
  ![image](https://github.com/user-attachments/assets/3ba64ba2-ad8b-4f93-875d-1257d03410d5)
- Selecione a pasta onde o repositório foi clonado

## Iniciar o Servidor
1. Abra uma aba do terminal no VS Code
2. Execute o comando npm start
3. Esta api será disponibilizada no endereço: http://localhost:3000

### Endpoints consumidos pela aplicação
| Método | Endpoint                            | Descrição                                        |
|--------|-------------------------------------|--------------------------------------------------|
| GET    | `/Leads/GetLeadsWithStatusNew`      | Retorna todas as leads com status: New           |
| GET    | `/Leads/GetLeadsWithStatusAccepted` | Retorna todas as leads com status: Accepted      |
| POST   | `/Leads/AcceptLead`                 | Aceita uma lead                                  |
| POST   | `/Leads/DeclineLead`                | Recusa uma lead                                  |

## Estrutura de pastas
- src  
  - components (Armazena os componentes utilizados para criação da interface)  
  - services (Armazena o serviço para consumo da api via Axios)  
  - utils (Agrupa métodos uteis tais como formatação de data, strings e etc)  

## Tecnologias Utilizadas
- **React**: Biblioteca JavaScript para construção de interfaces.
- **Material-UI**: Biblioteca de componentes e ícones.
- **Axios**: Biblioteca para consumo de APIs REST.
- **Visual Studio Code**: Editor de texto utilizado no desenvolvimento.
