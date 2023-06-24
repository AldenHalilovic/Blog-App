import { MenuItem, Select, SvgIcon } from "@mui/material";
import React from "react";
import { DE, GB } from "country-flag-icons/react/3x2";
import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const router = useRouter();
  return (
    <Select
      defaultValue="en"
      onChange={(e) => {
        router.push(router.asPath, router.asPath, { locale: e.target.value });
      }}
    >
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
