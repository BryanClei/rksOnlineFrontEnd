import { padding, textAlign } from "@mui/system";

const heroStyles = {
  container: {
    display: "flex",
    flex: 1,
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 2,
    background: "linear-gradient(to left, #FF844b, #FF503b)",
    width: "100%",
  },
  container_div: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    padding: 0, // Ensure no extra padding is added
    margin: 0, // Reset margin if needed
  },
  container_image: {
    width: "100%",
    maxWidth: 1080,
    height: "auto",
    padding: 2,
    padding: 0, // Ensure no extra padding is added
    margin: 0, // Reset margin if needed
  },
  title: {},
  subtitle: {},
};

export default heroStyles;
