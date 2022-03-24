import React from 'react';
// import Posts from './Posts/Posts';
import PostsContainer from './Posts/PostsContainer';
import classes from './Profile.module.css';

function Profile(props) {
   return (
      <div className={classes.profile}>
         <h2>Volodymyr Zelensky</h2>
         <div className={classes.profile__describe}>
            <img src='https://icdn.lenta.ru/images/2022/03/08/22/20220308220837948/square_320_858222ef0fba0597cdcf20b096ec57a8.jpg' alt='avatar'></img>
            <p>Founded “The League of laughter” NGO. Produced 10 feature length movies, won more than 30 awards of the National Television Award of Ukraine "Teletriumph”. President Zelenskyy is a prize-winner of numerous international film festivals and media forums.

               From the outset of the hostilities in Donbas Volodymyr Zelenskyy and “KVARTAL 95” rendered support to the Armed Forces with funds, equipment and arranged shows on the front line and in different military units.

               Married to Mrs Olena Zelenska, with 2 children - daughter Oleksandra and son Kyrylo.</p>
         </div>
         <PostsContainer
            profile={props.profile}
            dispatch={props.dispatch}
         />
      </div>
   )
}

export default Profile;