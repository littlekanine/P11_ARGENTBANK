import Layout from "../layout/layout";
import LoginMain from "../login/loginMain";

function Login () {
    return (
        <div>
            <Layout>
                <main className="bg-dark"><LoginMain /></main>
            </Layout>
        </div>
    )
}

export default Login