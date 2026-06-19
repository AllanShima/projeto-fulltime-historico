# Projeto de Recursos de Comunicação entre Softwares da Fulltime
> Implementação de Recursos de Comunicação entre os Softwares FullCenter e F/Safe da Fulltime.

#### Empresa: FullTime

#### Unimar BCC - TM4, A 2025

#### Integrantes:
- Allan Shinhama (Líder): Encarregado pela ideia, desenvimento front + montageme encaixe dos outros componentes.
- Emanuelly: Encarregada pela ingessão da webcam na plataforma.
- Gabriel Claus: Elaboração dos Protocolos de Segurança e Exportação em Pdf;
- Carlos Eduardo: Auxiliar com os testes e ideias;
- Maria Eduarda: Encarregada do código boilerplate de CRUD do Backend no Firebase;
- Enzo Brumatee: Encarregado do código boilerplate de CRUD do Backend no Firebase;

Apresentação realizada dia 26/11/25 - antes da versão final.

## Preview
> Software FullCenter Desktop

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

#### Modelo e Design do site no Figma: https://www.figma.com/make/7dUkP1EXmsNFcUiUyluHUv/Camera-Event-List-Website?node-id=0-1&p=f&t=OkLz57h0AY02nwVi-0

OBS: Modelo inflenciado pelo software "Moni Softwares". Design elaborado pelo figma AI.

### Instalação do Projeto:
Instale as dependencias: 'npm install';

Ligar ambiente de desenvolvimento: 'npm run dev';

### Build e Deploy
construção do projeto (build): 'npm run build';
implatação do proejeto (deploy): 'firebase deploy'; 

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

## Anotações

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
