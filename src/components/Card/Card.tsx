/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import TrashIcon from '../../static/images/trash.svg';
import EditIcon from '../../static/images/edit.svg';
import {
  deleteProductById
} from '../../utils/requests/api';

import * as styles from './Card.styles';

const Card: React.FC<{
  id: string;
  cover: string;
  title: string;
  description: string;
  currency: string;
  price: number;
  EditDialog: any;
}> = (props: any) => {
  const {
    id,
    cover,
    title,
    description,
    currency,
    price,
    EditDialog,
  } = props;
  const deleteItem = async () => {
    await deleteProductById(id);
    window.location.reload();
  };

  return (
    <>
      <styles.Content>
        <styles.Cover>
          <styles.CoverContainer>
            <styles.Image src={cover} />
          </styles.CoverContainer>
        </styles.Cover>
        <styles.Information>
          <styles.InformationContent>
            <styles.Title>
              {title}
            </styles.Title>
            <styles.Description>
              {description}
            </styles.Description>
            <styles.Subdescription>
              <styles.Currency>
                {currency}
              </styles.Currency>
              <styles.Value>
                {price}
              </styles.Value>
            </styles.Subdescription>
          </styles.InformationContent>
        </styles.Information>
        <styles.Actions>
          <styles.ActionsContent>
            <styles.Icons>
              <EditDialog
                DialogButton={EditIcon}
                actionName="Atualizar"
                productId={id}
                title="Atualizar Produto"
              />
            </styles.Icons>
            <styles.Icons onClick={deleteItem}>
              <styles.deleteItemIcon src={TrashIcon} />
            </styles.Icons>
          </styles.ActionsContent>
        </styles.Actions>
      </styles.Content>
    </>
  );
};

export default Card;
