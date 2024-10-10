import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../pages/homePage/home'
import Detail from '../pages/detailPage/detail'
import Create from '../pages/createPage/create'

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<Detail />} path='/detail/:id' />
                <Route element={<Create/>} path='/create'/>
                <Route element={<div className=' flex items-center justify-center text-6xl text-purple-700' style={{minHeight:'1000px'}}>About</div>} path='/about' />
                <Route element={<div className=' flex items-center justify-center text-6xl text-red-700' style={{minHeight:'1000px'}}>Not Found !</div>} path='*' />
            </Routes>
        </BrowserRouter>
    )
}
export default Router