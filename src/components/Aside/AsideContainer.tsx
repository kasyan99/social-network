import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../reduxF/redux-store";
import Aside from "./Aside";
import NavigationItem from './NavigationItem/NavigationItem';

type MenuItemType = {
   id: number
   linkName: string
   linkPath: string
}

const mapStateToProps = (state: AppStateType) => {
   const menuList = state.aside.menuList
   const createItemList = (menuList: Array<MenuItemType>) => {
      return menuList.map(
         menuItem => <NavigationItem linkName={menuItem.linkName} linkPath={menuItem.linkPath} key={menuItem.id} />
      )
   }
   const itemList = createItemList(menuList)
   return {
      itemList
   }
}

export type ItemListType = ReturnType<typeof mapStateToProps>


const AsideContainer = connect(mapStateToProps, {})(Aside)
export default AsideContainer