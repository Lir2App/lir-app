import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Victor = (props) => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome Names
				</h1>
				<p><Link href="/names/uri">Uri</Link></p>
				<p><Link href="/names/victor">Victor</Link></p>
			</main>
		</div>
	);
}

export default Victor;