import styled from 'styled-components'
import { Header } from '../components/Header.tsx'

export const DevicePage = () => {
	const device = {
		id: 2,
		name: 'User Store Name',
		price: 20000,
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyBkis5vqENCvb7a_D-kXV9f7x0KtTVTmlA&s'
	}

	return (
		<Root>
			<Header />
			<div>
				<img src={device.img} alt='' />
				<p>{device.name}</p>
				<p>{device.price}</p>
			</div>
		</Root>
	)
}

const Root = styled.div`
	padding: 0 24px;
`

const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
`
