import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { useId } from "react";
import { useTheme } from "@mui/material/styles";

function CircularProgressWithLabel({ value, type }) {
  const theme = useTheme();
  const gradientId = useId();

  const createGradient = (colors) => (
    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
      {colors.map((color, index) => (
        <stop
          key={index}
          offset={`${index * 100}%`}
          style={{ stopColor: color }}
        />
      ))}
    </linearGradient>
  );

  // style
  const getStyles = (type) => {
    if (type === "usage") {
      return {
        gradientColors:
          theme.colors.gradients.medium.colors[theme.palette.mode],
        backgroundColor: theme.colors.gradients.medium.background,
        typographyGradient: theme.colors.gradients.medium.typographyGradient,
      };
    } else {
      return {
        gradientColors: theme.colors.gradients.low.colors[theme.palette.mode],
        backgroundColor: theme.colors.gradients.low.background,
        typographyGradient: theme.colors.gradients.low.typographyGradient,
      };
    }
  };

  const processedValue =
    value === Infinity ? 0 : value > 100 ? 100 : value > 0 ? value : 0;

  const { gradientColors, backgroundColor, typographyGradient } =
    getStyles(type);

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={processedValue}
        size={85}
        sx={{
          color: "transparent",
          zIndex: 1,
          "& .MuiCircularProgress-circle": {
            strokeLinecap: "round",
            stroke: `url(#${gradientId})`,
          },
        }}
      />
      <CircularProgress
        variant="determinate"
        size={85}
        value={100}
        sx={{
          position: "absolute",
          zIndex: 0,
          color: backgroundColor,
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          fontSize="larger"
          component="div"
          sx={{
            background: typographyGradient,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          {`${Math.round(processedValue)}%`}
        </Typography>
      </Box>

      <svg width="0" height="0">
        <defs>{createGradient(gradientColors)}</defs>
      </svg>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default CircularProgressWithLabel;
