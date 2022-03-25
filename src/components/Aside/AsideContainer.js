import { connect } from "react-redux";
import Aside from "./Aside";
import NavigationItem from './NavigationItem/NavigationItem';

const mapStateToProps = (state) => {
   const menuList = state.aside.menuList
   function createItemList(menuList) {
      return menuList.map(
         menuItem => <NavigationItem linkName={menuItem.linkName} linkPath={menuItem.linkPath} key={menuItem.id} />
      )
   }
   const itemList = createItemList(menuList)
   return {
      itemList
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
   }
}

const AsideContainer = connect(mapStateToProps, mapDispatchToProps)(Aside)
export default AsideContainer