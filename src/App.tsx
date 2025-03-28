import { Box } from "@mui/material";
import SidebarComponent from "./Components/SidebarComponent";
import HeaderComponent from "./Components/HeaderComponent";
import MainComponent from "./Components/MainComponent";

const App = () => {
  return (
    <Box component={"main"}>
      <SidebarComponent>
        <Box sx={{ flex: "1" }}>
          <HeaderComponent />
          <MainComponent />
        </Box>
      </SidebarComponent>
    </Box>
  );
};

export default App;
