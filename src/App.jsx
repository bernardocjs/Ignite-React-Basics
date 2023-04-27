import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import './global.css'
import styles from './App.module.css'
 
const posts = [
  {
    id: 1,
    author: {
      name: 'Ricardo',
      role: 'Front-end Developer',
      avatar: 'https://avatars.githubusercontent.com/u/74183607?v=4'
    },
    publishedAt: Date.now(),
    content: [
           {type: 'paragraph', content :'Aopa meus senhores'},
           {type: 'paragraph', content :'Esse é o meu primeiro post dentro desta plataforma'},
           {type: 'link', content : 'jane.design/doctorcore'}
  ],
  },
  {
    id: 2,
    author: {
      name: 'Luquinhas Telito',
      role: 'Back-end Developer',
      avatar: 'https://avatars.githubusercontent.com/u/74183607?v=4'
    },
    publishedAt: new Date('2022-08-01 10:00:00'),
    content: [
           {type: 'paragraph', content :'Aopa meus senhores'},
           {type: 'paragraph', content :'Esse é o meu primeiro post dentro desta plataforma foda'},
           {type: 'link', content : 'jane.design/teste'}
  ],
  },
]

export function App() {

  return (
    <div>
      <Header/>
    
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map((post) => {
            return  (
            <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt}/>
           )
        })}
        </main>
      </div>
    </div>

  )
}

export default App
