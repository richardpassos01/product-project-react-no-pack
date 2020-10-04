import React from 'react';
import CheckIcon from '../../../static/images/check.svg';
import Button from '../../../components/Button/Button';

type ButtonProps = {
  name: string;
};

const ConfirmProductButton = ({
  name,
}: ButtonProps) => (
  <>
    <Button
      name={name}
      Icon={CheckIcon}
    />
  </>
);

export default ConfirmProductButton;
