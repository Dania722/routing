
// import React, {useState} from 'react'
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Login from '../components/login';
// import Signup from '../components/signup';
// import Dash from '../components/dashboard';
// import Paper from '@mui/material/Paper';

// const SignInOutDashContainer = () => {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     };
//     const paperstyle ={width:600,margin:"20px auto"}
//     function TabPanel(props) {
//       const { children, value, index, ...other } = props;
//       return (
//         <div
//           role="tabpanel"
//           hidden={value !== index}
//           id={`simple-tabpanel-${index}`}
//           aria-labelledby={`simple-tab-${index}`}
//           {...other}
//         >
//           {value === index && (
//             <Box sx={{ p: 3 }}>
//               <Typography>{children}</Typography>
//             </Box>
//           )}
//         </div>
//       );
//     }
    
//   return(
//     <div>
//       <Paper elevation = {20} style={paperstyle}>
//       <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
//       <Tabs value={value} onChange={handleChange} centered>
//         <Tab label="Sign UP" />
//         <Tab label="Sign In" />
//         <Tab label="Dash Board" />
//       </Tabs>
//       <TabPanel value={value} index={0}>
//       <Signup/>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//       <Login/>
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//       <Dash/>
//       </TabPanel>
//     </Box>
//       </Paper>
//     </div>
//   )  ;
// }
// export default SignInOutDashContainer;


