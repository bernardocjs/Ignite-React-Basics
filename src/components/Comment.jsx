import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
export function Comment({content, deleteComment}) {

    function onDeleteComment() {
        deleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/44501407?v=4" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>John Doe</strong>
                            <time dateTime='2023-10-01 08:10:30'>Cerca há 1h atrás</time>
                        </div>               
                        <button onClick={onDeleteComment} title='Deletar Comentario'>
                            <Trash size={22}/>
                        </button>
                    </header>
                     <p>{content}</p>
                </div>
                <footer>
                    <button><ThumbsUp/>Aplaudir <span>20</span></button>
                </footer>
               
            </div>
        </div>
    );
}