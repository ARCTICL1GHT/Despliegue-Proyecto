import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import * as React from 'react';

export default function Home() {
  
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
      <div className={styles.sombra}/>
      <div  className={styles.intro}>
        <div className={styles.color}>
          <div className={styles.ajustefoto}>
          <div className={styles.foto}>
            <Image className={styles.foto} layout='responsive' width={300} height={300} src='/foto.png' alt=''/>
          </div>
          </div>
            <div className={styles.introtxt}>
            <span className={styles.saludo}>
              <span>¡HOLA!</span>
              <span className={styles.soy}> SOY</span>
            </span>
            <span className={styles.corregir}>
              <span className={styles.apellido}>DAMIÁN MARTINEZ</span>
              <span className={styles.nombre}>LUIS HERVERT</span>
            </span>
              <div className={styles.carrera}>
                ESTUDIANTE DE ING. EN INFORMATICA Y SISTEMAS
              </div>
            </div>
            <div className={styles.demi}>
          <div>Sobre Mi:</div>
          <div className={styles.mi}>
            Me considero una persona proactiva, la cual le gusta enfrentarse a
            nuevos retos, en los cuales ejerza notablemente mi capacidades físicas
            como mentales
          </div>
        </div>
          </div>
        </div>
        <div className={styles.separadorg}/>
        <div className={styles.frameconocimiento}>
          <div className={styles.conocimientos}>MIS CONOCIMIENTOS</div>
          <div className={styles.alineacion1}>
          <div className={styles.imagendis}>
            <Link href='https://www.java.com/es/' >
              <div className={styles.imagenregular} >
                <Image layout='responsive' width={90} height={90} src='/image-7@2x.png' alt='' />
              </div>
            </Link>

            <Link href='https://www.python.org/' >
            <div className={styles.imagenregular}>
              <Image layout='responsive'  width={90} height={90} src='/image-9@2x.png' alt='' />
            </div>
            </Link>
            <Link href='https://www.bloodshed.net/' >
            <div className={styles.imagenregular}>
          <Image layout='responsive'  width={90} height={90} src='/image-10@2x.png' alt=''/>
          </div>
          </Link>
            <Link href='https://www.mysql.com/' >
            <div className={styles.imagenregular}>
          <Image layout='responsive'  width={90} height={90} src='/image-11@2x.png' alt=''/>
          </div>
          </Link>
          </div>
        </div>
        </div>
        <div className={styles.separadorp}/>
        <div className={styles.frameredes}>
          <div className={styles.conocimientos}>MIS REDES SOCIALES</div>
          <div className={styles.alineacion}>
          <div className={styles.imagendis}>
        <CopyToClipboard text={"luis2009hervert@gmail.com"} >
          <div className={styles.ajustefoto1} >
            <Image layout='responsive'  width={80} height={80} alt="" src="/image-2@2x.png" />
          </div>
          </CopyToClipboard>
          <Link href='https://github.com/ARCTICL1GHT' >
            <div className={styles.ajustefoto1}>
              <Image layout='responsive' 
              width={80} height={80}
                alt=""
                src="/image-3@2x.png"
              />
            </div>
          </Link>
          <Link href='https://www.youtube.com/channel/UCauuPMwD0jsr_SPGZOc-Zdw'>
            <div className={styles.ajustefoto1}>
              <Image layout='responsive' 
              width={80} height={80}
                alt=""
                src="/image-4@2x.png"
              />
            </div>
            </Link>
          <Link href='https://www.linkedin.com/in/luis-dami%C3%A1n-49092673/'>
            <div className={styles.ajustefoto1}>
              <Image layout='responsive' 
              width={80} height={80}
                alt=""
                src="/image-5@2x.png"
              />
            </div>
            </Link>
              <CopyToClipboard text={"luis2009hervert@hotmail.com"} >
                <div className={styles.ajustefoto1}>
                  <Image layout='responsive'  width={80} height={80} alt="" src="/image-6@2x.png" />
                </div>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
