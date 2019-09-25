import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import EmailPropTypes from "../../Proptypes";
import includeDataProps from "../../includeDataProps";

export const Grid = props => {
  const Table = styled.table`
    width: 100%;
  `;
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
export const Col = props => (
  <td
    {...includeDataProps(props)}
    className={props.className}
    align={props.align}
    valign={props.valign}
    bgcolor={props.bgcolor}
    style={props.style}
  >
    {props.children}
  </td>
);

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

Col.propTypes = {
  className: PropTypes.string,
  bgcolor: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right"]),
  valign: PropTypes.oneOf(["top", "middle", "bottom"]),
  style: EmailPropTypes.style,
  children: PropTypes.node
};

Col.defaultProps = {
  className: undefined,
  bgcolor: undefined,
  align: undefined,
  valign: undefined,
  style: undefined,
  children: undefined
};
