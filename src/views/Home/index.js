import React from "react";

// import useGlobal from "../../store";

import Container from "../../components/Container";
import ContainerTitle from "../../components/Container/Title";
import Button from "../../components/Button";

export default function({ updateGlobalState, history }) {
  // const [] = useGlobal();

  return (
    <div className="view">
      <Container
        title={
          <ContainerTitle
            title="Dream Journal"
            action={
              <Button
                className="transparent"
                text={<i className="fas fa-edit" />}
              />
            }
          />
        }
        body="Explore your subconscious with dream work through recollective
        writing."
        footer="Seek to write vividly, concise, sensory and emotional oriented."
      />

      <Container
        title={
          <ContainerTitle
            title="Goals for the Day"
            action={
              <Button
                className="transparent"
                text={<i className="fas fa-tasks" />}
              />
            }
          />
        }
        footer="Select achievable goals for your day!"
        body={
          <ul>
            <li>The most important thing</li>
            <li>What comes next</li>
            <li>and the thing after that.</li>
          </ul>
        }
      />

      <Container
        title={
          <ContainerTitle
            title="Self Care & Habits"
            action={
              <Button
                className="transparent"
                text={<i className="fas fa-thumbs-up" />}
              />
            }
          />
        }
        footer="Don't break the chain!"
        body="Placeholder body here"
      />

      <Container
        title={
          <ContainerTitle
            title="Day in Review"
            action={
              <Button
                className="transparent"
                text={<i className="fas fa-feather-alt" />}
              />
            }
          />
        }
        footer="Reflection and preparation."
        body="Placeholder body here"
      />
    </div>
  );
}
