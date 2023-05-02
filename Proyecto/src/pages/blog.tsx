import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
import * as React from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next';

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
  data: Post[];
}

interface Props {
  posts: Post[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs`;
  const response = await axios.get<StrapiResponse>(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
    },
  });
  const posts = response.data.data;
  return {
    props: {
      posts,
    },
  };
};
export default function Blog (props: Props) {
    const { posts } = props;
    return(
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
                    {posts.map(post => (
                    <center key={post.id} className={styles.posteos}> 
                      <Link href={`/blogs/${post.id}`}>
                        {post.id} - {post.attributes.Title} - {post.attributes.publishedAt}
                      </Link>
                    </center>
                    ))}
                </div>
            </div>
        </>
    )
}