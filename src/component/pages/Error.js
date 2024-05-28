import Layout from '../layout/layout';
import './pages.css';

function Error() {
	return (
		<Layout>
			<h1 className="error flex center align-center">Error 404</h1>
			<h2 className="error-h2 flex center align-center">Page not found</h2>
		</Layout>
	);
}

export default Error;
