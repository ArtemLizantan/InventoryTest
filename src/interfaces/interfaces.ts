export interface INavigationItem {
  id: number;
  name: string;
  path: string;
}

export interface INavigationItemProps {
  navigation: INavigationItem[];
}
