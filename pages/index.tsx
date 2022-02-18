import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

export default function Home({ repositories }) {
  // const [repositories, setRepositories] = useState<string[]>([]);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/taicout6/repos')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const repositoriesNames = data.map((item) => item.name);
  //       setRepositories(repositoriesNames);
  //     });
  // }, []);
  return (
    <ul>
      {repositories.map((repo) => (
          <li key={repo}>{repo}</li>
      ))}
    </ul>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch
  ('https://api.github.com/users/taicout6/repos');

  const data = await response.json();
  const repositoriesNames = data.map((item) => item.name);

  return {
    props: {
      repositories: repositoriesNames
    }
  }
}
