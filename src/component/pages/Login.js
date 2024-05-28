import Layout from '../layout/layout';
import Form from '../form/login/FormLogin';
import '../../index.css';
import './pages.css';

function Login() {
	return (
		<div className="height-full">
			<Layout>
				<div className="bg-dark height-full flex">
					<section className="sign-in-content flex column center align-center">
						<i className="fa fa-user-circle sign-in-icon"></i>
						<h1>Sign In</h1>
						<Form />
						<p className="text-wrong none" id="wrong">
							The username or password is incorrect
						</p>
						<div className="flex row center">
							<input type="checkbox"></input>
							<p>Remember me</p>
						</div>
					</section>
				</div>
			</Layout>
		</div>
	);
}

export default Login;
