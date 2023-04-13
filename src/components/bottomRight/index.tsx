import { useAtomValue } from "jotai";
import { atomWithDefault } from "jotai/utils";
import { AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const FETCHUSERS_ATOM = atomWithDefault(async () => {
  const fetching = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await fetching.json();
  return result as User[];
});

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

const BottomRight: FC<Props> = (props) => {
  const users = useAtomValue(FETCHUSERS_ATOM);
  return (
    <AtomWrapper height="auto2">
      <AtomText>DATA FETCHING USERS</AtomText>
      <AtomText as="ul">
        {users?.map((item) => (
          <AtomText as="li" key={item.id}>
            {item.id}. {item.name}
          </AtomText>
        ))}
      </AtomText>
    </AtomWrapper>
  );
};

export default BottomRight;
