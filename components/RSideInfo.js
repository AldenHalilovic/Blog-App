import { Box, Button, Divider, Icon, Typography } from "@mui/material";
import React from "react";
import { useTranslations } from "next-intl";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import FacebookIcon from "@mui/icons-material/Facebook";
import { IconButton } from "@mui/material";

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../locale/${context.locale}.json`)).default,
    },
  };
}

const RSideInfo = () => {
  const t = useTranslations("Index");
  return (
    <Box width="50%" height="100%" p="30px">
      <Box
        sx={{
          padding: "32px",
          height: "220px",
          width: "100%",
          bgcolor: "#F6F6F6",
          borderRadius: "15px",
        }}
      >
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <Typography fontSize="25px" fontFamily="Rubik" sans-serif>
            {t("title")}
          </Typography>
          <Typography>{t("title2")}</Typography>
          <button className="cssbtn">{t("btnAccess")}</button>
        </Box>
      </Box>
      <Typography p="14px" display="flex" fontWeight="bold" fontSize="20px">
        {t("peopleyoulike")}
      </Typography>

      <Box>
        <Box display="flex" alignItems="flex-start" marginBottom="15px">
          <Box style={{ flexGrow: 1 }}>
            <Typography fontWeight="bold">Alden Halilovikj</Typography>
            <Typography fontSize="10px">{t("Creator")}</Typography>
          </Box>
          <Button>Follow</Button>
          <IconButton
            href="https://github.com/AldenHalilovic"
            target="_blank"
            rel="noopener"
            style={{ fontSize: 18 }}
          >
            <GitHubIcon />
          </IconButton>
        </Box>

        <Box display="flex" alignItems="flex-start" marginBottom="15px">
          <Box style={{ flexGrow: 1 }}>
            <Typography fontWeight="bold">Samil Asanoski</Typography>
            <Typography fontSize="10px">Masking Man</Typography>
          </Box>
          <Button>Follow</Button>
          <IconButton
            href="https://github.com/#"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon />
          </IconButton>
        </Box>

        <Box display="flex" alignItems="flex-start" marginBottom="15px">
          <Box style={{ flexGrow: 1 }}>
            <Typography fontWeight="bold">Halil Halilovikj</Typography>
            <Typography fontSize="10px">Mac Owner</Typography>
          </Box>
          <Button>Follow</Button>
          <IconButton
            href="https://github.com/HalilHalilovic"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon />
          </IconButton>
        </Box>

        <Box display="flex" alignItems="flex-start" marginBottom="15px">
          <Box style={{ flexGrow: 1 }}>
            <Typography fontWeight="bold">Mirsat Sefidanoski</Typography>
            <Typography fontSize="10px">Mid Senior</Typography>
          </Box>
          <Button>Follow</Button>
          <IconButton
            href="https://github.com/mirsat1"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon />
          </IconButton>
        </Box>

        <Box display="flex" alignItems="flex-start" marginBottom="15px">
          <Box style={{ flexGrow: 1 }}>
            <Typography fontWeight="bold">Gjuladin Serifoski</Typography>
            <Typography fontSize="10px">German guy</Typography>
          </Box>
          <Button>Follow</Button>
          <IconButton
            href="https://github.com/Gjuladin"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon />
          </IconButton>
        </Box>

        <Divider />
      </Box>

      {/* CategorysWeHave */}
      <Typography p="14px" fontWeight="bold" fontSize="20px">
        {t("FollowUs")}
      </Typography>

      <Box className="social-menu">
        <ul>
          <li>
            <IconButton
              href="https://www.instagram.com/#/"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon />
            </IconButton>
          </li>
          <li>
            <IconButton
              href="https://www.linkedin.com/in/alden-halilovic-66925a265/"
              target="_blank"
              rel="noopener"
            >
              <LinkedInIcon />
            </IconButton>
          </li>
          <li>
            <IconButton
              href="https://twitter.com/#"
              target="_blank"
              rel="noopener"
            >
              <TwitterIcon />
            </IconButton>
          </li>
          <li>
            <IconButton
              href="https://reddit.com/#"
              target="_blank"
              rel="noopener"
            >
              <RedditIcon />
            </IconButton>
          </li>
          <li>
            <IconButton
              href="https://Facebook.com/#"
              target="_blank"
              rel="noopener"
            >
              <FacebookIcon />
            </IconButton>
          </li>
        </ul>
      </Box>
      <Box></Box>

      {/* CategorysWeHave */}
    </Box>
  );
};

export default RSideInfo;
