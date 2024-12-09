import { Grid, Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import BoxS from "./Box";
import CircularProgressWithLabel from "./CircularWithValueLabel";
import { useTranslation } from "react-i18next";

const UsageBox = ({ type, value, total, remaining }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const parseValue = (input) => {
    const numericMatch = input.match(/\d+/);
    const number = numericMatch ? numericMatch[0] : "0";
    const text = input.replace(/\d+/g, "").trim();
    return { number, text };
  };

  // const getTypographyGradient = (v) => {
  //   if (v === Infinity) {
  //     return theme.colors.gradients.low.typographyGradient;
  //   } else if (v <= 30 || v > 100) {
  //     return theme.colors.gradients.low.typographyGradient;
  //   } else if (v <= 70) {
  //     return theme.colors.gradients.medium.typographyGradient;
  //   } else {
  //     return theme.colors.gradients.medium.typographyGradient;
  //   }
  // };

  const labels = {
    usage: {
      title: t("remaining_volume"),
      totaltitle: t("initial_volume"),
      unit: t("gigabytes"),
    },
    time: {
      title: t("remaining_time"),
      totaltitle: t("initial_time"),
      unit: t("days"),
    },
  };

  const { title, totaltitle } = labels[type];

  const remainingParsed = parseValue(remaining);
  const totalParsed = parseValue(total || "");

  return (
    <BoxS>
      <Grid item xs={4} display="flex" justifyContent="center">
        <CircularProgressWithLabel value={value} type={type} />
      </Grid>

      <Grid
        item
        xs={type === "usage" ? 4 : 8}
        display="flex"
        flexDirection={"column"}
        textAlign={"center"}
        sx={{ gap: ".3rem" }}
      >
        <Typography
          variant="p"
          component="div"
          fontSize={"small"}
          sx={{
            fontWeight: "300",
            opacity: 0.6,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            background:
              type === "usage"
                ? theme.colors.gradients.medium.typographyGradient
                : theme.colors.gradients.low.typographyGradient,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          {remainingParsed.number}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            textAlign: "center",
            fontWeight: "300",
            fontSize: "medium",
            opacity: 0.6,
          }}
          fontWeight={"lighter"}
        >
          {remainingParsed.text}
        </Typography>
      </Grid>
      {type === "usage" && (
        <Grid
          item
          xs={4}
          display="flex"
          flexDirection={"column"}
          textAlign={"center"}
          sx={{ gap: ".3rem" }}
        >
          <Typography
            variant="p"
            component="div"
            fontSize={"small"}
            sx={{
              fontWeight: "300",
              opacity: 0.6,
            }}
          >
            {totaltitle}
          </Typography>
          <Typography variant="h6" component="div">
            {totalParsed.number}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "300",
              fontSize: "medium",
              opacity: 0.6,
            }}
          >
            {totalParsed.text}
          </Typography>
        </Grid>
      )}
    </BoxS>
  );
};

UsageBox.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  total: PropTypes.string,
  remaining: PropTypes.string.isRequired,
};

export default UsageBox;