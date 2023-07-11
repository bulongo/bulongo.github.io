import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <button className={styles.home}><Link href='/'>Home</Link></button>
      <button className={styles.back}><Link href='/pages/signup'>Back</Link></button>
    </div>
  )
}

export default Footer
