import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'

const Victor = (props) => {
	const [name, setName] = useState('...');
	console.dir(props);

	useEffect(() => {
		//petició API hello;
		setTimeout(() => {
			setName('Victor');
		}, 1500)
	}, []);

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to {name}
				</h1>
				<button onClick={() => setName('Super Victor')}>evolution</button>
			</main>
		</div>
	);
}

export default Victor;