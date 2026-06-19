import TabCamera from './components/TabCamera'
import { createBrowserRouter, Outlet, redirect, RouterProvider } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage'
import TabHistory from './components/TabHistory'
import HeaderMonitor from './components/HeaderMonitor'
import Login from './components/Login'
import Register from './components/Register'
import LandingPage from './components/LandingPage'
import HeaderUser from './components/HeaderUser'
import WindowUser from './components/WindowUser'
import { useUserContext } from './contexts/user-context'
import TabChat from './components/TabChat'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import Loading from './components/Loading'
import { firestoreGetAlertOnByUid, firestoreGetUserById } from './services/api/FirebaseGetFunctions'
import { auth } from './services/firebase'
import { APIProvider } from '@vis.gl/react-google-maps';

// Certifique-se de que sua chave de API esteja configurada aqui
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function App() {
  const { userState, userDispatch } = useUserContext();
  // Armazenar o usuário logado ou não no data layer
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      // se estiver logado
      if (user){
        // OBS: NÃO PODE PASSAR USERSTATE PORQUE ELE AINDA NÃO FOI CONFIGURADO
        const userData = await firestoreGetUserById(user.uid);
        const currentAlert = await firestoreGetAlertOnByUid(user.uid);
        //const userLocation = await firestoreGetLocationByUid(userState);
        // Armazenando o usuário logado no data layer
        await userDispatch({ type: "LOGIN", payload: 
        {
          uid: userData.uid, 
          first: userData.first ?? "",         // Adiciona fallback para string vazia
          last: userData.last ?? "",           // Adiciona fallback para string vazia
          usertype: userData.usertype ?? "",   // Adiciona fallback para string vazia
          location: userData.location ?? null,  // Mantém null, se for um objeto complexo, ou usa ""
          alertOn: currentAlert,               // Não apaga isso, é importante p usuario f/safe
          email: userData.email,
          phone_number: userData.phone_number,
          can_record: userData.can_record ? true : false,
          can_send_email: userData.can_send_email
        }});
      } else {
        userDispatch({ type: "LOGOUT" })
      }
    })
  }, []);

  const mainRouter = createBrowserRouter([
    // Caminho Padrão
    {
      //index: true, // Default child route
      path: '/',
      element: <LandingPage/>,
      errorElement: <NotFoundPage/>,
    },
    {
      path: '/monitor',
      element: (
        <div className="flex flex-col w-full h-screen max-h-screen overflow-hidden bg-white">
          <HeaderMonitor/>
          <main className="flex-1 min-h-0 w-full overflow-hidden">
            <Outlet/>
          </main>
        </div>
      ),
      children: [
        {
          path: 'cameras',
          element: <TabCamera/>
        },
        {
          path: 'history',
          element: <TabHistory/>
        },
        {
          path: 'chat',
          element: <TabChat/>
        },
      ]
    },
    {
      path: '/user',
      element: (
        <div className="flex flex-col w-full h-screen max-h-screen overflow-hidden bg-white">
          <HeaderUser/>
          <main className="flex-1 min-h-0 w-full overflow-hidden">
            <Outlet/>            
          </main>
        </div>
      ),
      children: [
        {
          index: true, // Default child route
          path: 'home',
          element: <WindowUser/>
        }
      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    },
    {
      path: '/loading',
      element: <Loading/>
    },
  ])

  return (
    // O componente APIProvider é CRUCIAL
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY} libraries={['marker', 'geometry']}>
      <div className='flex-1 min-h-0 w-full overflow-hidden'>
        <RouterProvider router={mainRouter}/>
      </div>      
    </APIProvider>
  )
}

export default App
