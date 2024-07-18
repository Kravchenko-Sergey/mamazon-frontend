import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../main.tsx'

export const BrandBar = observer(() => {
	const { device } = useContext(Context)

	return (
		<Root>
			{device.types.map(type => (
				<Li key={type.id} onClick={() => device.setSelectedType(type)}>
					{type.name}
				</Li>
			))}
		</Root>
	)
})

const Root = styled.ul`
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 24px;
`

const Li = styled.li`
	padding: 8px 24px;
	cursor: pointer;
`
