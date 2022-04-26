
import { useContext } from 'react';
import SidebarWithHeader from '../components/sidebar/SidebarWithHeader';
import '../styles/home.scss';

export function Home(){
    return(
        <SidebarWithHeader>
            <div id="page-home">
                <h1></h1>
            </div>
        </SidebarWithHeader>
    );
}