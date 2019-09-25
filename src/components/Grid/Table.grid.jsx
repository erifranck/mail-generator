import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import EmailPropTypes from "../../Proptypes";

export const Grid = props => {
  const Table = styled.table``;
  const TBody = styled.tbody``;
  return (
    <Table>
      {/* for the footer <div dangerouslySetInnerHTML={{__html: `
      {{ site_settings.company_name }}&nbsp;
      {{ site_settings.company_street_address_1 }}&nbsp;
      {{ site_settings.company_street_address_2 }}&nbsp;
      {{ site_settings.company_city }}&nbsp;
      {{ site_settings.company_state }}&nbsp;
      {{ site_settings.company_zip }}&nbsp;
      {{ site_settings.company_country }}&nbsp;
      `}}></div> */}
      <TBody>{props.children}</TBody>
    </Table>
  );
};
export const Row = styled.tr``;
export const Col = styled.td``;

Grid.propTypes = {
  cellPadding: PropTypes.number,
  cellSpacing: PropTypes.number,
  border: PropTypes.string,
  bgcolor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right"]),
  valign: PropTypes.oneOf(["top", "middle", "bottom"]),
  style: EmailPropTypes.style,
  children: PropTypes.node
};

Grid.defaultProps = {
  cellPadding: 0,
  cellSpacing: 0,
  border: "0",
  align: "left",
  valign: "top",
  bgcolor: undefined,
  width: undefined,
  height: undefined,
  style: undefined,
  children: undefined
};
