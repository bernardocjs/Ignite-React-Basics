import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
           
            <img className={styles.cover}
             src="https://images.unsplash.com/photo-1670356788141-0eb4e27b0bc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
             />
            <div className={styles.profile}>
                <Avatar hasBorder src ='https://avatars.githubusercontent.com/u/44501407?v=4'/>
                <strong>John Doe</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}