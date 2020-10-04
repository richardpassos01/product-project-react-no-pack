import React from 'react';
import ConfirmProductButton from './ConfirmProductButton';
import Dialog from '../../../components/Dialog/Dialog';

const ProductDialog = ({
  productId,
  title,
  actionName,
  DialogButton,
  DialogButtonIsAComponent,
}: any) => (
  <Dialog
    productId={productId}
    title={title}
    actionName={actionName}
    DialogButton={DialogButton}
    ActionButton={ConfirmProductButton}
    DialogButtonIsAComponent={DialogButtonIsAComponent}
  />
);

export default ProductDialog;
