# Projeto de Recursos de Comunicação entre Softwares da Fulltime
> Implementação de Recursos adicionais de Comunicação entre os Softwares FullCenter e F/Safe da Fulltime.
> Projeto é uma plataforma web desktop de uma versão base dos softwares já existentes FullCenter e F/Safe, em conjunto dos novos recursos e funcionalidades adicionados.

---

#### Curso: FÁBRICA DE PROJETOS ÁGEIS
#### Classe: 4º Termo - A, Bacharel em Ciências da Computação, UNIMAR, 2025
#### Empresa: FullTime Marília
#### Prazo e Data: 08/08/2025 - 26/11/2025

#### Integrantes e Responsabilidades:
- Allan Shinhama (Líder): Ideia, Front + Montagem do Projeto.
- Emanuelly: Simulação das câmeras na plataforma.
- Gabriel Claus: Documento dos Protocolos de Segurança F/Safe;
- Carlos Eduardo: Auxiliar com os testes e ideias;
- Maria Eduarda: Código boilerplate das funções Firestore;
- Enzo Brumatee: Código boilerplate das funções Firestore;

## Tabela de Conteúdo
- [Tecnologias Principais](#tecnologias-principais)
- [Bibliotecas e Extensões](#bibliotecas-e-extensões)
- [Preview](#preview)
- [Empresa](#empresa)
- [Problema](#problema)
- [Solução](#solução)
- [Projeto](#projeto)
- [Navegação na Plataforma](#navegação-na-plataforma)

## Tecnologias Principais
- React;
- Figma;
- Vite;
- Tailwind;
- Firebase (Auth, Firestore, Storage, ...).

## Bibliotecas e Extensões
- Rombo Motion (Abandonado - Não funciona)
- Firebase
    - Hooks;
    - Authentication;
    - Firestore;
- React Icons
- React Router
- npm install jspdf html2canvas (pdf)
- ES7 React/Redux/GraphQL/React-Native snippets;
- Tailwind CSS Intellisense;

## Preview
> Visualização das telas dos softwares 

- FullCenter, Aba de Câmeras
<img width="1919" height="870" alt="image" src="https://github.com/user-attachments/assets/906d5971-f941-450d-bd71-d49dc07bdb97" />

- FullCenter, Aba de Histórico de Eventos
<img width="1919" height="870" alt="image" src="https://github.com/user-attachments/assets/6c5feb9d-f950-4288-b0c9-4658bf8df59d" />

- FullCenter, Aba de Live Chat + Maps
<img width="1919" height="869" alt="image" src="https://github.com/user-attachments/assets/0727aabb-55a4-49df-acc0-39da0ec690b7" />

---
> Software F/Safe Desktop

- F/Safe, Aba de Notificações
<img width="1919" height="866" alt="image" src="https://github.com/user-attachments/assets/e7c4fca6-5761-4bef-acb5-fcddd9825c56" />

- F/Safe, Aba de Live Chat
<img width="1919" height="871" alt="image" src="https://github.com/user-attachments/assets/054b0609-7e80-4fc2-b7a0-5c730ce78ab9" />

#### Modelo e Design do site no Figma: 

<img width="1493" height="810" alt="image" src="https://github.com/user-attachments/assets/5d83b0c4-ecb1-4967-ac00-fc1cf922c9f3" />

OBS: Modelo inflenciado pelo software "Moni Softwares". Design elaborado pelo Figma Make.

### Site-preview
> Em particular

## Empresa
> "A Fulltime é uma multinacional fundada há 15 anos. Com presença em todo o território latino americano, conta com unidades na Argentina, México e Estados Unidos.
> Primeira empresa do país a desenvolver a solução M2M/GPRS para monitoramento, a Fulltime é líder nacional e referência no setor. O DNA pioneiro da Fulltime pode ser identificado em cada detalhe das suas mais modernas soluções de automação IoT, rastreamento GPS, monitoramento e CFTV." (https://fulltime.com.br/sobre/)

## Problema
A FullTime possui várias soluções de segurança, e para o projeto foram destacados duas:
- FullCenter: O FullCenter é responsável por receber eventos de painéis de alarme, receptores de linha telefônica, câmeras, DVR/NVR, equipamentos de rastreamento e automação.
- F/Safe: O F/Safe elenca uma série de soluções com botoeiras de emergência customizáveis que comunicam às centrais de monitoramento e usuários sobre os perigos locais.

> A Fulltime, além de muitas outras empresas de monitoramento e rastreamento, possuem um software em comum que centraliza todos as outras soluções, funcionando como uma central. A FullCenter, tem como papel centralizar os serviçoes e softwares específicos de monitoramento da empresa, com ele é possível receber e fazer o tratamento adequado dos eventos de alertas, e o monitoramento das câmeras. No entanto, um dos softwares elaborados recentemente, o F/Safe, ainda possui uma falta de funcionalidades essenciais que efetivam a comunicação entre os dois softwares. Já que em seu estado atual, atua somente como um emissor de alerta para o monitor, impossibilitando qualquer outro meio de comunicação entre o monitor e o usuário sujeito.

## Solução
> A solução encontrada pelo grupo, foi elaborar várias funcionalidades e recursos diferentes que se complementam no mesmo ambiente da plataforma.

## Projeto
> Para a elaboração do projeto, foi necessário "copiar" e elaborar uma versão similar dos softwares FullCenter e F/Safe.
> Com base nos designs, o projeto foi desenvolvido em cima de uma plataforma online web, utilizando tecnologias como o React e o Firebase que facilitam a estrutura.
- Para fazer o teste entre os dois softwares, na tela de cadastro foi posicionado uma opção de escolher entre qual tipo de usuário ele quer para acessar a plataforma (para fins de teste)
    - F/Center (Tela FullCenter);
    - F/Safe (Tela F/Safe);

Foram desenvolvidos as seguintes funcionalidades (print do landing page):
<img width="1530" height="318" alt="image" src="https://github.com/user-attachments/assets/e43ce553-f3fb-4f6e-9248-31f94a807232" />

## Navegação na Plataforma
> FullCenter
<img width="1525" height="511" alt="image" src="https://github.com/user-attachments/assets/9061370e-3c9e-4a13-8cfc-259e73e3f12d" />

> F/Safe
<img width="1493" height="464" alt="image" src="https://github.com/user-attachments/assets/05985195-bfc8-4d46-9ab8-db12351b33d0" />

---

## Anotações

### Instalação do Projeto:
- Instale as dependencias: 'npm install';
- Ligar ambiente de desenvolvimento: 'npm run dev';

#### Progresso:
- Instalando Vite com react: https://tailwindcss.com/docs/installation/using-vite
- Instalando Tailwind css
- Instalando Firebase: "npm install firebase"
    - firebase.js
    - Instalando ferramentas: "npm install -g firebase-tools"
    - "firebase login"
    - "firebase init hosting"
    - buildando o projeto com vite: "npm run build"
    - emitindo o projeto: "firebase deploy"
- Instalando os icons de react: 'npm install react-icons --save'
- Instalando rombo motion (https://rombo.co/tailwind/)
- Instalando react router: "npm install react-router-dom@6.22.1"
- Setando Firebase Authentication
    - Firebase website: authentication > on
    - Firebase website: settings > authorized domains
- useContext: user-context.jsx
- Instalando react fireabse hooks (useAuthState em user-context): npm install react-firebase-hooks firebase
- Login do usuário pelo App.jsx
- Correção de erro de sintaxe antiga do firestore: 
    O objeto db do Firebase v9 não tem o método .collection(). Em vez disso, você deve usar as funções collection() e addDoc().
- firebase emulators:start
- Trocando o modo do Firestore para Teste;
- (Não foi necessário usar o emulator);
- Instalando o Google Maps para react 'npm install @vis.gl/react-google-maps' via git bash
    - React Google Maps, é uma biblioteca que contém hooks e components do gmaps p react que facilita

### Build e Deploy
construção do projeto (build): 'npm run build';
implatação do proejeto (deploy): 'firebase deploy'; 
 
#### Design Figma Make: https://www.figma.com/make/7dUkP1EXmsNFcUiUyluHUv/Camera-Event-List-Website?node-id=0-1&p=f&t=OkLz57h0AY02nwVi-0
