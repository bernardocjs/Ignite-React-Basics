import styles from './Post.module.css'
import {formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {Comment} from './Comment'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Post({author, content, publishedAt, role}){
    const dateFormated = 
        new Date(publishedAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
    const [comments, setComments] = useState([
        'post foda',
    ])

    const[newCommentText, setNewCommentText] = useState('')

    const publishedDateRelative =
        formatDistanceToNow(publishedAt, {
            locale: ptBR,
            addSuffix: true
        })

        function handleComment(){
            event.preventDefault()
            const newComment = event.target[0].value
            setComments([...comments, newComment])
            setNewCommentText('')

        }

        function handleNewCommentChange(){
            event.target.setCustomValidity('')
            setNewCommentText(event.target.value)
        }

        function deleteComment(commentToDelete){
            const commentWithoutDeleted = comments.filter((comment) => {
                return comment !== commentToDelete
            })
            setComments(commentWithoutDeleted)
        }

        function handleNewCommentInvalid(){
            event.target.setCustomValidity('Digite um comentario')
        }



    return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar hasBorder src={author.avatar}  />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time dateTime={dateFormated}>{publishedDateRelative}</time>
        </header>

        <div className={styles.content}>
            {content.map((item) => {
                if(item.type === 'paragraph'){
                    return <p key={item.content}>{item.content}</p>
                }
                if(item.type === 'link'){
                return <p key={item.content}><a href=''>{item.content}</a></p>
                }
            })}
    
        </div>

        <form onSubmit={handleComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea type="text" onChange={handleNewCommentChange} value={newCommentText} required onInvalid={handleNewCommentInvalid} placeholder="Comentário"/>
            <button type="submit">Publicar</button>
        </form>
        <div className={styles.commentList}>
            {
                comments.map(comments => {
                    return <Comment key={comments} deleteComment={deleteComment} content={comments}/>
                })
            }
        </div>


    </article>
    )
}