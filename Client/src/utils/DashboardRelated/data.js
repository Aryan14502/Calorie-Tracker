
import {
    FitnessCenterRounded,
    LocalFireDepartmentRounded,
    TimelineRounded,
  } from "@mui/icons-material";

export const counts =  [

    {
        name: "Calories Gained",
        icon: (
          <LocalFireDepartmentRounded sx={{ color: "inherit", fontSize: "26px" }} />
        ),
        desc: "Total calories Gained today",
        key: "totalCaloriesGained",
        unit: "kcal",
        color: "#eb9e34",
        lightColor: "#FDF4EA",
        key2: "gained",
    },
    {
        name: "Average Calories Gained",
        icon: <TimelineRounded sx={{ color: "inherit", fontSize: "26px" }} />,
        desc: "Average Calories Gained Since Last Week",
        key: "totalCaloriesBurnt",
        unit: "kcal",
        color: "#FF9AD5",
        lightColor: "#FEF3F9",
        key2:"gained"

    },


    {
        name: "Calories Burned",
        icon: (
          <LocalFireDepartmentRounded sx={{ color: "inherit", fontSize: "26px" }} />
        ),
        desc: "Total calories burned today",
        key: "totalCaloriesBurnt",
        unit: "kcal",
        color: "#eb9e34",
        lightColor: "#FDF4EA",
        key2: "burned",
    },
    {
        name: "Average  Calories Burned",
        icon: <TimelineRounded sx={{ color: "inherit", fontSize: "26px" }} />,
        desc: "Average Calories Burned Since last week",
        key: "avgCaloriesBurntPerWorkout",
        unit: "kcal",
        color: "#FF9AD5",
        lightColor: "#FEF3F9",
        key2: "burned"
      },

];