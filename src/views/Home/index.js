import React from "react";

import useGlobal from "../../store";

import Container from "../../components/Container";
import ContainerTitle from "../../components/Container/Title";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function({ updateGlobalState, history }) {
  const [globalState, globalActions] = useGlobal();

  const dailies = [
    {
      id: "habit--calories",
      type: "number",
      text: "Eat 3,500+ calories",
      tag: "fitness",
    },
    {
      id: "habit--water",
      type: "number",
      text: "Drink 8 glasses of water",
      tag: "fitness",
    },
    {
      id: "habit--yoga",
      type: "checkbox",
      text: "Do meditation and yoga",
      tag: "mental health",
    },
    {
      id: "habit--outside",
      type: "checkbox",
      text: "Find a reason to go outside every day",
      tag: "fun",
    },
  ];

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
        body={
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {dailies.map(({ id, type, text }) => (
              <li key={id}>
                <Input
                  type={type}
                  label={text}
                  value={globalState.habits[id] || 0}
                />
              </li>
            ))}
          </ul>
        }
        footer="Don't break the chain!"
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
