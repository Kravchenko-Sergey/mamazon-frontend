import { Header } from '../components/Header.tsx'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { TypeBar } from '../components/TypeBar.tsx'
import { BrandBar } from '../components/BrandBar.tsx'
import { DeviceList } from '../components/DeviceList.tsx'

export const ShopPage = observer(() => {
	return (
		<Root>
			<Container>
				<Header />
				<Main>
					<div>
						<TypeBar />
						<BrandBar />
					</div>
					<DeviceList />
				</Main>
			</Container>
		</Root>
	)
})

const Root = styled.div`
	padding: 0 24px;
`

const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const Main = styled.div`
	padding: 0 24px;
	display: flex;
`
