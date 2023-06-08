import { RoutesURL } from "../navigation/types";

export const MainMenu = [
	{
		key: "1",
		title: "приход",
		link: RoutesURL.PARISHES,
		active: true
	},
	{
		key: "2",
		title: "продукты",
		link: RoutesURL.PRODUCTS
	},
	{
		key: "3",
		title: "пользователи",
		link: RoutesURL.USERS
	},
	{
		key: "4",
		title: "настройки",
		link: RoutesURL.SETTINGS
	},
];

