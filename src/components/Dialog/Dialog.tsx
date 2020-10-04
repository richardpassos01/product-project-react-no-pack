/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import {
  getProductById,
  updateProductById,
  createProduct,
} from '../../utils/requests/api';

import * as styles from './Dialog.styles';

export type DialogProps = {
  productId?: string;
  title: string;
  actionName: string;
  DialogButton: any;
  ActionButton: any;
  DialogButtonIsAComponent?: boolean;
};

const Dialog = ({
  productId,
  title,
  actionName,
  DialogButton,
  DialogButtonIsAComponent,
  ActionButton,
}: DialogProps) => {
  const [open, setOpen] = useState(false);
  const [productName, setUrlproductNameValue] = useState('');
  const [productDescription, setUrlproductDescriptionValue] = useState('');
  const [productPrice, setUrlproductPriceValue] = useState('');
  const [productCover, setProductCoverValue] = useState('');

  const handleDataLoad = async () => {
    try {
      const response = await getProductById(productId);
      const [product] = response.data;

      const {
        productName: name,
        productDescription: description,
        productPrice: price,
        productCover: cover,
      } = product;

      setUrlproductNameValue(name);
      setUrlproductDescriptionValue(description);
      setUrlproductPriceValue(price);
      setProductCoverValue(cover);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickOpen = async () => {
    if (productId) {
      await handleDataLoad();
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createOrUpdateProduct = async () => {
    const product = {
      id: productId,
      name: productName,
      description: productDescription,
      price: productPrice,
      cover: productCover,
    };

    if (productId) {
      await updateProductById(product);

      handleClose();

      return window.location.reload();
    }

    await createProduct(product);

    handleClose();

    return window.location.reload();
  };

  return (
    <>
      <styles.ButtonContainer onClick={handleClickOpen}>
        {DialogButtonIsAComponent ? <DialogButton /> : <img src={DialogButton} /> }
      </styles.ButtonContainer>
      <styles.StyledDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <styles.ModalHeader>
          <styles.ModalTitle>{title}</styles.ModalTitle>
        </styles.ModalHeader>
        <styles.ModalContent>
          <styles.ModalInputContent>
            <styles.ModalLabel>
              URL da imagem
              </styles.ModalLabel>
            <styles.ModalInput
              placeholder="Cole o link aqui"
              onChange={(event) => setProductCoverValue(event.target.value)}
              value={productCover}
            />
          </styles.ModalInputContent>

          <styles.TwoInputsInLine>
            <styles.ModalInputContent>
              <styles.ModalLabel>
                Nome do produto
              </styles.ModalLabel>
              <styles.ModalInput
                onChange={(event) => setUrlproductNameValue(event.target.value)}
                value={productName}
              />
            </styles.ModalInputContent>
            <styles.ModalInputSmallContent>
              <styles.ModalLabel>
                Preço
              </styles.ModalLabel>
              <styles.ModalInput
                onChange={(event) => setUrlproductPriceValue(event.target.value)}
                value={productPrice}
              />
            </styles.ModalInputSmallContent>
          </styles.TwoInputsInLine>

          <styles.ModalInputContent>
            <styles.ModalLabel>
              Descrição do produto
            </styles.ModalLabel>
            <styles.ModalInput
              onChange={(event) => setUrlproductDescriptionValue(event.target.value)}
              value={productDescription}
            />
          </styles.ModalInputContent>

        </styles.ModalContent>
        <styles.ModalFooter>
          <styles.ButtonContainer onClick={createOrUpdateProduct}>
            <ActionButton
              name={actionName}
            />
          </styles.ButtonContainer>
        </styles.ModalFooter>
      </styles.StyledDialog>
    </>
  );
};

export default Dialog;
