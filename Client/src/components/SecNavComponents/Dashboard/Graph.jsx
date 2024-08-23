import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from "styled-components";
import { useEffect ,useState,useContext} from 'react';
import UsersInfoContext from '../../../contexts/usersInfoContext';


Chart.register(...registerables);
const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border: 1px solid black;
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px black;
  display: flex;
  flex-direction: column;
  gap: 16px;
  opacity : 0.5;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;
// const data = {
//   labels: ['Daily Intake', 'Calories', 'Carbs', 'Fats', 'Proteins'],
//   datasets: [
//     {
//       label: 'Todays Goal',
//       data: [1652, 500, 300, 200, 400],
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgba(255, 99, 132, 1)',
//       borderWidth: 1,
//     },
//     {
//       label:'Remaining',
//       data :[500,200,100,150,100],
//       backgroundColor: 'rgba(54, 162, 235, 0.2)',
//       borderColor: 'rgba(54, 162, 235, 1)',
//       borderWidth: 1,
        


//     },
    // {
    //   label: 'Calories',
    //   data: [500, 250, 350, 450, 550],
    //   backgroundColor: 'rgba(54, 162, 235, 0.2)',
    //   borderColor: 'rgba(54, 162, 235, 1)',
    //   borderWidth: 1,
    // },
    // {
    //   label: 'Carbs',
    //   data: [300, 300, 400, 500, 600],
    //   backgroundColor: 'rgba(255, 206, 86, 0.2)',
    //   borderColor: 'rgba(255, 206, 86, 1)',
    //   borderWidth: 1,
    // },
    // {
    //   label: 'Fats',
    //   data: [200, 350, 450, 550, 650],
    //   backgroundColor: 'rgba(75, 192, 192, 0.2)',
    //   borderColor: 'rgba(75, 192, 192, 1)',
    //   borderWidth: 1,
    // },
    // {
    //   label: 'Proteins',
    //   data: [400, 400, 500, 600, 700],
    //   backgroundColor: 'rgba(153, 102, 255, 0.2)',
    //   borderColor: 'rgba(153, 102, 255, 1)',
    //   borderWidth: 1,
    // },
//   ],
// };

// const options = {
//   scales: {
//     x: {
//       type: 'category',
//       labels: ['Daily Intake', 'Calories', 'Carbs', 'Fats', 'Proteins'],
//     },
//     y: {
//       type: 'linear',
//       beginAtZero: true,
//     },
//   },
// };

const Graph = () => {

  const [usersInfo, setUsersInfo] = useState({});
  const [dailyNeeds ,setDailyNeeds]= useState({
    calories:1,
    carbs:1,
    protein:1,
    fat:1
  });
  const {remainingGoal,dailyneeds} = useContext(UsersInfoContext)
  const [remaininggoal,setremaininggoal] = useState({})

  useEffect(()=>{

    // setDailyNeeds({
    //   calories:usersInfo.calorie_needs,
    //   carbs:usersInfo.carbs,
    //   protein:usersInfo.protein,
    //   fat:usersInfo.fat
    // })
    setremaininggoal(remainingGoal)
  
  },[remainingGoal])


  useEffect(() => {

    // if(!isUserIdReady){return}
    console.log("useEffect called")
    console.log("hello")
    // setStoredUsersInfo(JSON.parse(localStorage.getItem("usersInfo")))
    const storedUsersInfo =  localStorage.getItem("usersInfo");
    console.log("storedUsersInfo",storedUsersInfo)
          if(storedUsersInfo) {

            const parsedUsersInfo = JSON.parse(storedUsersInfo)

            setUsersInfo(parsedUsersInfo);
       



            // setUsersGoal(parsedUsersInfo.users_goal);
            // console.log("usersGoal",usersGoal);

    
          } 
          else{

            // fetchUsersInfofromDatabase(userId);
            
          
          }
  }, []); 

  const data = {
    labels: ['Daily Intake', 'Calories', 'Carbs', 'Fats', 'Proteins'],
    datasets: [
      {
        label: 'Todays Goal',
        data: [
          // 1652, 500, 300, 200, 400
         0,
          dailyneeds.calories,
          dailyneeds.carbs,
          dailyneeds.fat,
          dailyneeds.protein,
          
          
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Remaining',
        data: [
          // 234,
          // 445,
          // 200,
          // 150,
          // 300
          0,
          remainingGoal.calories,
          remainingGoal.carbs,
          remainingGoal.fat,
          remainingGoal.protein,
          
           // assuming no remaining value for 'Daily Intake'
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        labels: ['Daily Intake', 'Calories', 'Carbs', 'Fats', 'Proteins'],
      },
      y: {
        type: 'linear',
        beginAtZero: true,
      },
    },
  };






  return (
    // <Card>
      <Line data={data} options={options} />
    // </Card>
  );
};

export default Graph;