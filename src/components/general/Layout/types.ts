export interface PageProps {
	children: any;
}
export interface ComponentProps extends PageProps {
	timeToday: string;
	pathname: string;
};