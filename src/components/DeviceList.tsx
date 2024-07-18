import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../main.tsx'
import { useNavigate } from 'react-router-dom'

export const DeviceList = observer(() => {
	const { device } = useContext(Context)
	const navigate = useNavigate()

	return (
		<Root>
			{device.devices.map(device => (
				<div key={device.id} onClick={() => navigate(`/device/${device.id}`)}>
					<img src={device.img} alt='' style={{ width: '160px', height: '160px' }} />
					<p>Samsung</p>
					<p>{device.rating}</p>
					<p>{device.name}</p>
				</div>
			))}
		</Root>
	)
})

const Root = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 24px;
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
`

const Li = styled.div`
	padding: 8px 24px;
	cursor: pointer;
`
