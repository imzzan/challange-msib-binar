import React, { FC } from 'react';

interface ItemProps {
    nameItem : string;
    href : string;
}

const ItemNav : FC<ItemProps> = ({nameItem, href} : ItemProps) => {
  return (
    <li className='nav-item'>
        <a href={href} className='nav-link text-dark'>{nameItem}</a>
    </li>
  )
}

export default ItemNav