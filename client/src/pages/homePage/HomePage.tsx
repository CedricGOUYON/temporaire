import Header from "../../components/header/Header";
import "./HomePage.css";

const rootFolderName = "app_poulet";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <h1>Bienvenue sur votre application web</h1>
      <p>Cette page d'accueil est prête à accueillir vos utilisateurs.</p>
      <h2>{rootFolderName}</h2>
      <p>sera bientot disponible </p>
    </div>
  );
}

export default HomePage;
