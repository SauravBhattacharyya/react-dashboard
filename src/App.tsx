import { Box } from "@mui/material";
import SidebarComponent from "./Components/SidebarComponent";
import HeaderComponent from "./Components/HeaderComponent";

const App = () => {
  return (
    <Box component={"main"}>
      <SidebarComponent>
        <Box sx={{ flex: "1" }}>
          <HeaderComponent />
          <div>Main Content</div>
        </Box>
      </SidebarComponent>
    </Box>
  );
};

export default App;
