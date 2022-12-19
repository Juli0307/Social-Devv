import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      name: 'Maria Eduarda',
      role: 'Full-Stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto de rede social e o nome dele é OnBlock ☺️' },
      { type: 'link', content: 'jane.design/  OnBlock' },
    ],
    publishedAt: new Date('2022-12-12 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Carlos Antônio',
      role: 'Back-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hey Devs 👋' },
      { type: 'paragraph', content: 'Vocês viram o novo evento de Node.js? Já está disponível na comunidade, bora se inscrever!!!' },
      { type: 'link', content: 'jane.design/Node.js' },
    ],
    publishedAt: new Date('2022-12-01 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
