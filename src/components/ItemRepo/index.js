import React from "react";
import styled from "styled-components";

const ItemRepo = ({ repo, handleRemoveRepo }) => {
  return (
    <ItemRepoContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>

      <div className="buttons">
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          Ver Repositório
        </a>
        <br />

        <button
          className="remover"
          rel="noreferrer"
          onClick={() => handleRemoveRepo(repo.id)}
        >
          Remover
        </button>
      </div>
      <hr />
    </ItemRepoContainer>
  );
};

export default ItemRepo;

const ItemRepoContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;

    &:hover {
      color: #01daf2;
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }

  button.remover {
    color: #ff0000;
    background-color: transparent;
    border: none;
    font-weight: 500;
    font-size: 14px;

    &:hover {
      color: #d20707;
      cursor: pointer;
    }
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;
