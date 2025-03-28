import { Box, Typography } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

const HeaderComponent = () => {
  return (
    <Box
      component={"header"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid var(--header-border-color)",
        p: 2,
      }}
    >
      <Box component={"div"}>
        <Typography sx={{ color: "var(--text-color)", fontSize: "16px" }}>
          Good Morning, Nidaant
        </Typography>
      </Box>
      <Box component={"div"} sx={{ display: "flex", alignItems: "center" }}>
        <SearchRoundedIcon sx={{ fontSize: "32px", mr: 4 }} />
        <NotificationsActiveOutlinedIcon sx={{ fontSize: "32px", mr: 4 }} />
        <Box component={"div"} sx={{ display: "flex" }}>
          <Box
            component={"img"}
            src="/public/assets/images/profile.svg"
            alt="profile"
            sx={{ height: "38px", width: "38px", mr: 2 }}
          />
          <Box>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              Nidaant
            </Typography>
            <Box
              sx={{
                fontWeight: "400",
                fontSize: "12px",
              }}
            >
              nidaant@gmail.com
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderComponent;
