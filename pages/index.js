import { Box, Divider, Typography } from "@mui/material";
import requireAuth from "../auth/requireAuth";
import UserComponent from "../Components/UserComponent";
import PostComponent from "../Components/PostComponent";
import { useTranslations } from "next-intl";
import RSideInfo from "../Components/RSideInfo";

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../locale/${context.locale}.json`)).default,
    },
  };
}
function Home() {
  const t = useTranslations("Index");
  return (
    <Box
      display="flex"
      width="100%"
      height="100%"
      bgcolor="white"
      justifyContent="flex-end"
    >
      <Box
        display="flex"
        flexDirection="column"
        maxWidth="70%"
        p="30px"
        gap="30px"
      >
        {/* SearchBar */}
        <Box
          display="flex"
          flexDirection="row-reverse"
          justifyContent="space-between"
        >
          <Box className="search">
            <Box className="search-box">
              <Box className="search-field">
                <input
                  placeholder="Search..."
                  className="input"
                  type="text"
                ></input>
                <Box className="search-box-icon">
                  <button className="btn-icon-content">
                    <i className="search-icon">
                      <svg
                        xmlns="://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </i>
                  </button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Typography fontSize="22px" fontWeight="bold">
            {t("articles")}
          </Typography>
        </Box>
        {/* SearchBar */}

        <Divider
          sx={{
            height: "auto",
            borderColor: "lightgrey",
          }}
        />

        <Box
          sx={{
            boxShadow: "0px 34px 114px rgba(0, 0, 0, 0.10)",
            padding: "22px",
            height: "220px",
            width: "100%",
            bgcolor: "#E5E4E4",
            borderRadius: "15px",
          }}
          gap="10px"
          flexDirection="column"
        >
          <UserComponent userId={1} />
          <PostComponent pageId={1} />
        </Box>
        <Divider
          sx={{
            height: "auto",
            borderColor: "lightgrey",
          }}
        />
        <Box
          sx={{
            boxShadow: "0px 34px 114px rgba(0, 0, 0, 0.10)",
            padding: "22px",
            height: "220px",
            width: "100%",
            bgcolor: "#E5E4E4",
            borderRadius: "15px",
          }}
          gap="10px"
          flexDirection="column"
        >
          <UserComponent userId={2} />
          <PostComponent pageId={2} />
        </Box>
        <Divider
          sx={{
            height: "auto",
            borderColor: "lightgrey",
          }}
        />
        <Box
          sx={{
            boxShadow: "0px 34px 114px rgba(0, 0, 0, 0.10)",
            padding: "22px",
            height: "220px",
            width: "100%",
            bgcolor: "#E5E4E4",
            borderRadius: "15px",
          }}
          gap="10px"
          flexDirection="column"
        >
          <UserComponent userId={3} />
          <PostComponent pageId={3} />
        </Box>
      </Box>
      <Divider
        orientation="vertical"
        sx={{
          height: "auto",
          borderColor: "lightgrey",
        }}
      />
      <RSideInfo />
    </Box>
  );
}
export default requireAuth(Home);
