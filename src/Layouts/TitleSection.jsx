import React, { useState } from "react";
import { Paper } from "../components/Paper/Paper";
import { Image } from "../components/Image/Image";
import { withTheme } from "styled-components";
import { Position } from "../components/Positions/Positions";
import { Text } from "../components/Text/Text";
import { Field } from "../components/Field/Field";

export const TitleSection = withTheme(props => {
  const [title, setTitle] = useState("Titulo");
  const [edit, editTitle] = useState(false);
  return (
    <Paper height="400px" position="relative" bg={props.theme.colors.black}>
      <Image
        src="https://images.unsplash.com/photo-1569191086551-b3606745884f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
        height="100%"
        width="100%"
        styles="position: absolute; top: 0; left: 0;"
      />
      <Position vertical="space-between" horizontal="center" zIndex="10">
        <Text
          size="large"
          color={props.theme.colors.white}
          onDoubleClick={() => editTitle(true)}
        >
          {!edit && title}
          {edit && (
            <Field
              type="text"
              value={title}
              onChange={ev => setTitle(ev.target.value)}
              onBlur={() => editTitle(false)}
            />
          )}
        </Text>
      </Position>
    </Paper>
  );
});
