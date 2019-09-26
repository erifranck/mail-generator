import React, { useState } from "react";
import { Paper } from "../components/Paper/Paper";
import { Image } from "../components/Image/Image";
import { withTheme } from "styled-components";
import { Text } from "../components/Text/Text";
import {Grid, Row, Col} from "../components/Grid/Table.grid";
import {PopUpConsumer} from "../components/PopUp/PopUp";
import {Button} from "../components/Button/Button";

export const TitleSection = withTheme(props => {
  return (
      <PopUpConsumer>
          {
              ({toggle, items}) => (
                <Paper height="400px" position="relative" bg={props.theme.colors.black}>
                  <Image
                    src={items.titleImage || "https://images.unsplash.com/photo-1569191086551-b3606745884f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80" }
                    onDoubleClick={() => toggle('titleImage')}
                    height="100%"
                    width="100%"
                    styles="position: absolute; top: 0; left: 0;"
                  />
                  <Grid width="100%" style={{paddingTop: '85px'}}>
                      <Row>
                          <Col align="center" >
                              <Text
                                  size="large"
                                  color={props.theme.colors.white}
                                  onDoubleClick={() => toggle('title')}
                              >
                                  {items.title || 'Titulo'}
                              </Text>
                          </Col>
                      </Row>
                  </Grid>
                  <Grid width="100%" style={{paddingTop: '40px'}}>
                      <Row style={{paddingTop: '40px'}}>
                          <Col align="center" >
                              <Button
                                  primary
                                  onDoubleClick={() => toggle('titleButtonText')}
                              >
                                  {items.titleButtonText || 'Read More'}
                              </Button>
                          </Col>
                      </Row>
                  </Grid>
                </Paper>
          )
      }
      </PopUpConsumer>
  );
});
