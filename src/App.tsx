import { Box } from "@mui/material";
import SidebarComponent from "./Components/SidebarComponent";

const App = () => {
  return (
    <Box component={"main"}>
      <SidebarComponent>
        <div>Header</div>
        <div>Main Content</div>
      </SidebarComponent>
    </Box>
  );
};

export default App;
