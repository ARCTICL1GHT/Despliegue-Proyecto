import axios from 'axios';
import { GetServerSideProps } from 'next';
import styles from '@/styles/Blog.module.css'
import Link from 'next/link';

interface Props {
  id: string;
  title: string;
  author: string;
  datepublish: string;
  content: string;
}

interface Post {
  id: number,
    attributes: {
        Title: string,
        Content: string,
        Author: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string
    }
}

interface StrapiResponse {
  data: Post;
}

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const { id } = context.query;
  if (typeof id === 'string') {
    const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs/${id}`;
    const response = await axios.get<StrapiResponse>(endpoint, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
      },
    });
    console.log(response.data);

    return {
      props: {
        author: response.data.data.attributes.Author,
        content: response.data.data.attributes.Content,
        datepublish: response.data.data.attributes.publishedAt,
        title: response.data.data.attributes.Title,
        id,
      },
    };
  }

  return {
    props: {
      title: 'No hay publicación',
      id: '404',
    },
  };
};

export default function PostPage({ title, author, content, datepublish  }: Props) {
  return (
    <>
    <div className={styles.flexcolumna}>
        <header className = {styles.barra}>
            <div className={styles.letras}>
            <Link href='/' >INICIO</Link>
            </div>
            <div className={styles.letras}>
            <Link href='/capacidades' >CAPACIDADES</Link>
            </div>
            <div className={styles.letras}>
            <Link href='/habilidades' >
            HABILIDADES</Link>
            </div>
            <div className={styles.letras}>
            <Link href='/blog' >BLOG</Link>
            </div>
        </header>
        <div  className={styles.cuerpo}>
            <center className={styles.posteos}> {title} - {author}</center>
            <center className={styles.posteospub}> {datepublish}</center>
            <center className={styles.posteoscont}> {content}</center>
        </div>
    </div>
</>
  );
}