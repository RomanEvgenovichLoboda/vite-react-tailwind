import{BrowserRouter,Routes,Route} from 'react-router-dom'
import App from '../component/appComponent/App'
import Detail from '../component/detailComponent/detail'
function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />} path='/' />
                <Route element={<Detail />} path='/detail/:id' />
                <Route element={<div className=' flex items-center justify-center text-6xl text-red-700' style={{minHeight:'1000px'}}>Not Found !</div>} path='*' />
            </Routes>
        </BrowserRouter>
    )
}
export default Router