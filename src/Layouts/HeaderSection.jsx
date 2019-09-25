import React from "react";
import { Paper } from "../components/Paper/Paper";
import { withTheme } from "styled-components";
import { Image } from "../components/Image/Image";
import { Link } from "../components/Link/Link";
import { Grid, Row, Col } from "../components/Grid/Table.grid";

export const HeaderSection = withTheme(props => {
  return (
    <Paper
      bg={props.theme.colors.black}
      color={props.theme.colors.white}
      height={"70px"}
      padding={"10px 70px"}
    >
      <Grid>
        <Row>
          <Col>
            <Image
              width="197px"
              src="https://www.belatrixsf.com/wp-content/themes/Belatrix/images/logo-belatrix.png"
            />
          </Col>
          <Col align="right">
            <Link> Información Legal </Link>
          </Col>
        </Row>
      </Grid>
    </Paper>
  );
});
