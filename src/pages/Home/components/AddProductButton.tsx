import React from 'react';
import AddIcon from '../../../static/images/add.svg';
import Button from '../../../components/Button/Button';

const AddProductButton: React.FC = () => (
  <>
    <Button
      name="Novo Produto"
      Icon={AddIcon}
    />
  </>
);

export default AddProductButton;
