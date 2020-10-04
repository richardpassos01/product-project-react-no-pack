/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import * as styles from './Button.styles';

type ButtonProps = {
  name: string;
  Icon: string;
};

const Button = ({
  name,
  Icon,
}: ButtonProps) => (
  <>
    <styles.Button>
      <styles.Content>
        {name}
      </styles.Content>
      <styles.Icon>
        <img src={Icon} />
      </styles.Icon>
    </styles.Button>
  </>
);

export default Button;
