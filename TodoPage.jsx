import { Box } from "@mui/material";
import Home from "../components/Home";
import BottomNav from "../components/Bottomnav";
import Todo from "../components/Todo";
function TodoPage() {
  return (
    <Box
      sx={{
        display: { md: "flex" },
        flexDirection: { md: "row" },
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <Home />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20px",
          backgroundColor: "#a08bff",
          margin: { md: "20px" },
          height: { xs: "90%", md: "604px" },
          width: { xs: "100%", md: "580px" },
        }}
      >
        <Todo />
      </Box>
      <Box
        sx={{
          display: { md: "none" },
        }}
      >
        <BottomNav />
      </Box>
    </Box>
  );
}
export default TodoPage;
