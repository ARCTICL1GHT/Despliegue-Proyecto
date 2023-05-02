import styles from '@/styles/Capacidades.module.css'
import Link from 'next/link'
import Image from 'next/image'
import * as React from 'react';

export default function Capacidades () {
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
                <div className={styles.cuerpo}>
                    <div className={styles.corregir}>
                        <span className={styles.contenido}>He estudiado la carrera de Ingeniería en Informática y sistemas durante 4 
                        años en los cuales he aprobado cada uno de los cursos de programación, asi 
                        mismo he aprendido durante todo este tiempo diversos lenguajes, en los cuales 
                        han sido parte importante de mi aprendizaje debido a que me he formado y llegado 
                        a un nivel un poco mas avanzado con cada uno de ellos, de igual manera, manejo 
                        lenguajes de BD en los cuales incluyo lenguajes de con tablas relacionadas y no 
                        relacionadas. 
                        </span>
                        <span className={styles.contenido}>En el ámbito académico he de decir que me he formado tanto en 
                        programación como en la creación de redes, en las cuales de la misma manera que 
                        los lenguajes de programación e aprendido a manipular y programar routers y s
                        witches en los cuales en su composición llevan su propio lenguaje de 
                        programación aunque este no es tan complicado, el armado de las redes si lo es. 
                        </span>
                        <span className={styles.proyeccion}>
                        En los últimos proyectos en los cuales he contribuido se encuentra:
                        </span>
                        <div className={styles.imagendis}>
                            <div className={styles.imagendis1}>
                                <Link href='https://github.com/diego0023/Proyecto1_OS'>
                                    <div className={styles.fototxt}>
                                        <Image width={80} height={80} src='/image-13@2x.png' alt='' />
                                        <div>Proyecto1_SO</div>
                                    </div>
                                </Link>
                                <Link href='https://github.com/Alevsdl/Proyecto2_OS'>
                                    <div className={styles.fototxt}>
                                        <Image width={80} height={80} src='/image-13@2x.png' alt='' />
                                        <div>Proyecto2_SO</div>
                                    </div>
                                    </Link>
                                <Link href='https://github.com/Alevsdl/Proyecto3_OS'>
                                <div className={styles.fototxt}>
                                    <Image width={80} height={80} src='/image-13@2x.png' alt='' />
                                    <div>Proyecto3_SO</div>
                                </div>
                                </Link>
                            </div>
                            <div className={styles.anunciador}>
                                <Image width={300} height={300} src='/image-12@2x.png' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}