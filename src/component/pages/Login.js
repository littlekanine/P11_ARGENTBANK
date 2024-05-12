import Layout from "../layout/layout";
import Form from "../form/form";
import '../../index.css'

function Login () {
    return (
        <div className="height-full">
            <Layout>
                <div className="bg-dark height-full flex">
                    <section className="sign-in-content flex column center align-center">
                        <i className="fa fa-user-circle sign-in-icon"></i>
                        <h1>Sign In</h1>
                        <Form />
                    </section>
                </div>
            </Layout>
        </div>
    );
}

export default Login;