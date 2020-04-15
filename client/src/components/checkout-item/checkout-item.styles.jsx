import styled, { css } from 'styled-components';

const quantityStyle = css`
    display: flex;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImgContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
`;

const getStyles = props => {
    if(props.quantity) {
        return quantityStyle;
    }
}

export const PropertyContainer = styled.span`
    width: 23%;
    ${getStyles}
`;

export const ArrowContainer = styled.div`
 cursor: pointer;
`;

export const ValueContainer = styled.span`
 margin: 0 10px;
`;

export const RemoveButtonContainer = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;