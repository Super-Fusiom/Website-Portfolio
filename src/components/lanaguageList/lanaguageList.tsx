import React, { useState, useEffect } from "react";
import axios from "axios";
import "./lanaguageList.css";

interface Props {
  username: string;
}

const lanaguageList: React.FC<Props> = ({ username }) => {
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    const apiUrl = `https://api.github.com/users/${username}/repos`;
    // Using axios to get the data from the api by using a GET Request
    axios
      .get(apiUrl)
      .then((response) => {
        const repositories = response.data;
        const languages: { [key: string]: number } = {};

        repositories.forEach((repository: any) => {
          const language = repository.language;

          if (language) {
            if (language in languages) {
              languages[language]++;
            } else {
              languages[language] = 1;
            }
          }
        });

        const sortedLanguages = Object.entries(languages)
          .sort((a, b) => b[1] - a[1])
          .map(([language]) => language);

        setLanguages(sortedLanguages);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [username]);

  return (
    <ul>
      {languages.map((language) => (
        <li key={language}>{language}</li>
      ))}
    </ul>
  );
};

export default lanaguageList;
