import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function Main() {
    return (
        <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            </Layout>
        </BrowserRouter>
        );
};