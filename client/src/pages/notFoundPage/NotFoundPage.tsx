import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
	const navigate = useNavigate();

	return (
		<div className="page404">
			<div className="notfound">
				<h1>Page introuvable</h1>
				<h3>Oups ! Cette page semble s’être volatilisée…</h3>
				<p>Erreur 404</p>

				<button type="button" onClick={() => navigate("/")}>
					Retour à l'accueil
				</button>
			</div>
		</div>
	);
}

export default NotFoundPage;
