// import React, { useEffect, useState } from "react";

// interface Meal {
//   calories: number;
//   protein: number;
//   carbohydrates: number;
//   fat: number;
// }

// interface MealPlanData {
//   breakfast?: Meal;
//   lunch?: Meal;
//   dinner?: Meal;
//   snacks?: Meal;
// }

// const mealPlanData: MealPlanData = {
//   breakfast: {
//     calories: 300,
//     protein: 20,
//     carbohydrates: 40,
//     fat: 10,
//   },
//   lunch: {
//     calories: 500,
//     protein: 30,
//     carbohydrates: 60,
//     fat: 20,
//   },
//   dinner: {
//     calories: 600,
//     protein: 40,
//     carbohydrates: 50,
//     fat: 30,
//   },
//   snacks: {
//     calories: 200,
//     protein: 10,
//     carbohydrates: 20,
//     fat: 5,
//   },
// };

// const TypewriterMealPlan: React.FC = () => {
//   const [displayText, setDisplayText] = useState<string[]>([]);

//   useEffect(() => {
//     const fullText = [
//       `Breakfast: ${mealPlanData.breakfast?.calories} calories, ${mealPlanData.breakfast?.protein}g protein, ${mealPlanData.breakfast?.carbohydrates}g carbohydrates, ${mealPlanData.breakfast?.fat}g fat`,
//       `Lunch: ${mealPlanData.lunch?.calories} calories, ${mealPlanData.lunch?.protein}g protein, ${mealPlanData.lunch?.carbohydrates}g carbohydrates, ${mealPlanData.lunch?.fat}g fat`,
//       `Dinner: ${mealPlanData.dinner?.calories} calories, ${mealPlanData.dinner?.protein}g protein, ${mealPlanData.dinner?.carbohydrates}g carbohydrates, ${mealPlanData.dinner?.fat}g fat`,
//       `Snacks: ${mealPlanData.snacks?.calories} calories, ${mealPlanData.snacks?.protein}g protein, ${mealPlanData.snacks?.carbohydrates}g carbohydrates, ${mealPlanData.snacks?.fat}g fat`,
//     ];

//     let index = 0;
//     let subIndex = 0;
//     let currentText = "";
//     let isDeleting = false;

//     function type() {
//       if (index === fullText.length) return;
//       if (!isDeleting) {
//         currentText = fullText[index].slice(0, ++subIndex);
//         setDisplayText((prev) => [...prev.slice(0, -1), currentText]);
//         if (currentText === fullText[index]) {
//           isDeleting = true;
//           setTimeout(type, 2000);
//         } else {
//           setTimeout(type, 100);
//         }
//       } else {
//         currentText = fullText[index].slice(0, --subIndex);
//         setDisplayText((prev) => [...prev.slice(0, -1), currentText]);
//         if (currentText === "") {
//           isDeleting = false;
//           index++;
//           setTimeout(type, 500);
//         } else {
//           setTimeout(type, 50);
//         }
//       }
//     }

//     setDisplayText([""]);
//     type();
//   }, []);

//   return (
//     <ul className="meal-plan-list">
//       {displayText.map((text, idx) => (
//         <li key={idx}>{text}</li>
//       ))}
//     </ul>
//   );
// };

// export default TypewriterMealPlan;
