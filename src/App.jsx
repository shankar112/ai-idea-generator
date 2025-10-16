import { useState } from "react";
import Header from "./components/Header.jsx";
import IdeaForm from "./components/IdeaForm.jsx";
import IdeaList from "./components/IdeaList.jsx";
import "./styles/App.css";

function App() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="container">
      <Header />
      <IdeaForm
        onStartLoading={() => setLoading(true)}
        onStopLoading={() => setLoading(false)}
        onIdeas={(list) => setIdeas(list)}
        loading={loading}
      />
      <IdeaList ideas={ideas} loading={loading} />
      <footer className="footer">
        <span>Built with React • AI-assisted workflow</span>
      </footer>
    </div>
  );
}

export default App;
