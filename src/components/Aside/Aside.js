// import React from 'react';
// import classes from './Aside.module.css';
// import NavigationItem from './NavigationItem/NavigationItem';



// function Aside() {
//    return <StoreContext.Consumer>
//       {
//          (store) => {
//             const menuList = () => {
//                const aside = store.getState().aside

//                return aside.menuList.map(
//                   menuItem => <NavigationItem linkName={menuItem.linkName} linkPath={menuItem.linkPath} key={menuItem.id} />
//                )
//             }

//             return (
//                <aside className={classes.aside}>
//                   <nav>
//                      <ul>
//                         {menuList()}
//                      </ul>
//                   </nav>
//                </aside>
//             )
//          }
//       }
//    </StoreContext.Consumer>
// }

// export default Aside;