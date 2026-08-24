import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container not-found">
      <p className="error-code">404</p>
      <h1>Page not found</h1>
      <p className="secondary-text">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link className="btn-primary" to="/">
        Back to Home
      </Link>
    </main>
  );
}

export default NotFound;
