import { Breadcrumbs, Link, Typography } from "@mui/material";

const CustomBreadcrumbs = () => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{ fontSize: "14px", fontWeight: "400" }}
    >
      <Link
        underline="hover"
        href="#"
        sx={{ color: "var(--sidebar-light-text-color)" }}
      >
        Dashboards
      </Link>

      <Typography sx={{ color: "var(--black)" }}>Default</Typography>
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
