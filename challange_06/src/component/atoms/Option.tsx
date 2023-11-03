import React, { FC } from "react";

interface OptipnProps {
  value: string;
  name: string;
}

const Option: FC<OptipnProps> = ({ value, name }: OptipnProps) => {
  return <option value={value}>{name}</option>;
};

export default Option;
