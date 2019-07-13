import React from "react";

import useGlobal from "../../store";

import Container from "../../components/Container";
import ContainerTitle from "../../components/Container/Title";
import Button from "../../components/Button";

export default function({ updateGlobalState, history }) {
  const [] = useGlobal();

  return (
    <div className="view">
      <Container
        title={
          <ContainerTitle
            title="Dream Journal"
            action={
              <Button className="primary" text={<i class="fas fa-edit" />} />
            }
          />
        }
        body="Placeholder body here"
        footer="Explore your subconscious with dream work!"
      />

      <Container
        title={
          <ContainerTitle
            title="Goals for the Day"
            action={
              <Button className="primary" text={<i class="fas fa-tasks" />} />
            }
          />
        }
        footer="Select achievable goals for your day!"
        body="Placeholder body here"
      />

      <Container
        title={
          <ContainerTitle
            title="Self Care & Habits"
            action={
              <Button
                className="primary"
                text={<i class="fas fa-thumbs-up" />}
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
                className="primary"
                text={<i class="fas fa-feather-alt" />}
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
