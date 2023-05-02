import styles from '@/styles/Capacidades.module.css'
import Link from 'next/link'
import Image from 'next/image'
import * as React from 'react';

export default function Habilidades () {
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
                    <div className={styles.corregir}>
                        <span className={styles.contenido}>Mis habilidades principales puedo 
                        considerarlas practicas, siendo una de las mas especificas es el 
                        mantenimiento de equipos. Así mismo, los estudios me han ayudado a tener 
                        una mayor lógica en las cuales se decir con certeza que en la creación de 
                        proyectos los cuales sean orientado a empresas me he desempeñado en mayor 
                        manera, tal es asi que en conjunto con las BD he podido crear aplicaciones 
                        a baja escala pero con mayor optimización en las cuales mi lenguaje fuerte
                        es JAVA y MYSQL.
                        </span>
                        <span className={styles.contenido}>
                        En esta etapa de formación académica como programación de pensum hemos 
                        estado aprendiendo HTML durante las ultimas semanas en las cuales se ha 
                        utilizado TYPESCRIPT y TYPEORM.
                        </span>
                        <div className={styles.imagendis}>
                            <div className={styles.imagendis1}>
                            <Link href='https://www.typescriptlang.org/'>
                                <div className={styles.fototxt}>
                                    <Image width={80} height={80} src='/image-16@2x.png' alt='' />
                                </div>
                                </Link>
                                <Link href='https://lenguajehtml.com/html/'>
                                <div className={styles.fototxt}>
                                <Image width={80} height={80} src='/image-17@2x.png' alt='' />
                                </div>
                                </Link>
                                <Link href='https://www.java.com/es/'>
                                <div className={styles.fototxt}>
                                <Image width={80} height={80} src='/image-18@2x.png' alt='' />
                                </div>
                                </Link>
                                <Link href='https://www.mysql.com/'>
                                <div className={styles.fototxt}>
                                <Image width={80} height={80} src='/image-19@2x.png' alt='' />
                                </div>
                                </Link>
                            </div>
                            <div className={styles.anunciador}>
                                <Image width={300} height={300} src='/image-12@2x.png' alt='' />
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}