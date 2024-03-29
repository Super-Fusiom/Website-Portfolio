import React, { useState, useEffect } from "react";
import axios from "axios";
import "./languageList.css";

interface Props {
  username: string;
}

interface IRepo {
  language: string;
}

const languageList: React.FC<Props> = ({ username }) => {
  const [isLoading, setLoading] = useState(true);
  // Typing system for both variables
  const [languages, setLanguages] = useState<
    { name: string; percentage: number }[]
  >([]);

  useEffect(() => {
    const apiUrl = `https://api.github.com/users/${username}/repos`;
    // Using axios to get the data from the api by using a GET Request
    axios
      .get(apiUrl)
      .then((response) => {
        setLoading(false);
        const repositories = response.data;
        const languageCounts: { [key: string]: number } = {};

        repositories.forEach((repository: IRepo) => {
          const language = repository.language;
          if (language) {
            if (language in languageCounts) {
              languageCounts[language]++;
            } else {
              languageCounts[language] = 1;
            }
          }
        });

        const totalLanguages = Object.values(languageCounts).reduce(
          (a, b) => a + b,
          0
        );
        // Add and sort all languages
        const languagePercentages = Object.entries(languageCounts)
          .map(([language, count]) => ({
            name: language,
            percentage: (count / totalLanguages) * 100,
          }))
          .sort((a, b) => b.percentage - a.percentage);

        setLanguages(languagePercentages);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (isLoading) {
    return <p className="languages">loading...</p>;
  }

  return (
    <div className="languages">
      <ul>
        {languages.map((language) => (
          <li key={language.name}>
            {language.name} - {language.percentage.toFixed(2)}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default languageList;
