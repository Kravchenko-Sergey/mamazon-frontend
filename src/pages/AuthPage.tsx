import styled from 'styled-components'
import { Header } from '../components/Header.tsx'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts.ts'
import { useLocation } from 'react-router-dom'

export const AuthPage = () => {
	const location = useLocation()

	const isLogin = location.pathname === LOGIN_ROUTE

	return (
		<Root>
			<Header />
			<Container>
				<Card>
					<Form>
						<Title>{isLogin ? 'Authorization' : 'Registration'}</Title>
						<input placeholder='Email' />
						<input placeholder='Password' />
						{isLogin ? (
							<p>
								Don't have an account?
								<a href={REGISTRATION_ROUTE}>Register!</a>
							</p>
						) : (
							<p>
								Already have an account?
								<a href={LOGIN_ROUTE}>Login!</a>
							</p>
						)}
						<Button>{isLogin ? 'SIGN IN' : 'SIGN UP'}</Button>
					</Form>
				</Card>
			</Container>
		</Root>
	)
}

const Root = styled.div`
	padding: 0 24px;
`

const Container = styled.div`
	max-width: 1440px;
	height: calc(100vh - 84px);
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Card = styled.div``

const Form = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`

const Title = styled.h2``

const Button = styled.button``
