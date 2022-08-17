import styled from 'styled-components';

export const Item = styled.li`
  width: 350px;
  display: flex;
  gap: 10px;
  list-style: none;
  border: 2px solid black;
  border-radius: 4px;
`;

export const Avatar = styled.img`
  display: block;
  margin: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 30px;
`;
export const ItemButton = styled.button`
  width: 50px;
  padding: 4px 8px;
  border-radius: 4px;
  color: white;
  background-color: rgba(245, 68, 59, 1);
  font-size: 12px;
  font-weight: 500;
  border: none;
`;
export const ContactInfo = styled.div`
  padding: 12px 10px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
`;

export const SideInfo = styled.div`
  display: flex;

  padding: 5px;

  flex-direction: column;
  align-items: center;
`;
