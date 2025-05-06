import { SiteLogo } from '../SiteLogo'
import styles from './Footer.module.scss'

export const Footer: React.FC = () => {
	return <footer className={styles.footer}>
		<SiteLogo whiteColor />
		<h2>КРЕАТИВНОЕ АГЕНСТВО 500NA700</h2>
	</footer>
}
