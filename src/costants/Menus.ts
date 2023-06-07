import { RoutesURL } from "../navigation/types";

export const MainMenu = [
	{
		key: "1",
		title: "приход",
		link: RoutesURL.PROFIT,
		active: true
	},
	{
		key: "2",
		title: "группы",
		link: RoutesURL.GROUPS,
		danger: true
	},
	{
		key: "3",
		title: "продукты",
		link: RoutesURL.PRODUCTS
	},
	{
		key: "4",
		title: "пользователи",
		link: RoutesURL.USERS
	},
	{
		key: "5",
		title: "настройки",
		link: RoutesURL.SETTINGS
	},
];

