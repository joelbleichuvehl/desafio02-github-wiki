import styled from "styled-components";
import Logo from "./assets/github-icon.png";
import Input from "./components/Input";
import ItemRepo from "./components/ItemRepo";
import { useState } from "react";
import Button from "./components/Button";
import { api } from "./services/api";
function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data?.id) {
        const isExistRepo = repos.find((item) => item.id === data.id);

        if (!isExistRepo) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo("");
        }
      }
    } catch (error) {
      alert("Repositório não encontrado");
    }
  };

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter((item) => item.id !== id);

    setRepos(newRepos);
  };

  return (
    <Container>
      <img src={Logo} alt="Logo Git Hub" width={72} height={72} />

      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />

      <Button onClick={handleSearchRepo} disabled={!currentRepo} />

      {repos.map((repo, index) => (
        <ItemRepo key={index} repo={repo} handleRemoveRepo={handleRemoveRepo} />
      ))}
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin: 20px 0;
`;
