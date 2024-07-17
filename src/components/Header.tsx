import styled from 'styled-components'
import { BsEmojiGrin } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../main.tsx'
import { observer } from 'mobx-react-lite'

export const Header = observer(() => {
	const navigate = useNavigate()

	const { user } = useContext(Context)

	console.log(user)

	return (
		<Root>
			<Container>
				<LogoBox onClick={() => navigate('/')}>
					<LogoImg />
					<LogoText>Mamazon</LogoText>
				</LogoBox>
				<BtnBox>
					<SignInBtn>SIGN IN</SignInBtn>
					<SignUpBtn>ADMIN</SignUpBtn>
				</BtnBox>
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
	justify-content: space-between;
`

const LogoBox = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`

const LogoImg = styled(BsEmojiGrin)`
	width: 24px;
	height: 24px;
	color: #005bfe;
`

const LogoText = styled.h1`
	color: #005bfe;
`

const BtnBox = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`

const SignInBtn = styled.button`
	padding: 8px 16px;
	color: #fff;
	background-color: #005bfe;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: #2171ff;
	}
`

const SignUpBtn = styled.button`
	padding: 8px 16px;
	color: #fff;
	background-color: #005bfe;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: #2171ff;
	}
`
