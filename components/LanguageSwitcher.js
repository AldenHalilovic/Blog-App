import {
  MenuItem,
  Select,
  SvgIcon,
} from "@mui/material";
import React from "react";
import { DE, GB } from "country-flag-icons/react/3x2";



const LanguageSwitcher = () => {
  return (
    <Select defaultValue="en" >
      <MenuItem value="en">
        <SvgIcon>
          <GB title="United Kingdom" className="..." />
        </SvgIcon>
      </MenuItem>
      <MenuItem value="de">
        <SvgIcon>
          <DE title="German" className="..." />
        </SvgIcon>
      </MenuItem>
    </Select>
  );
};

export default LanguageSwitcher;
