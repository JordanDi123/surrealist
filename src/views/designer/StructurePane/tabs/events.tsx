import { SchemaTabProps } from "./helpers";

export function EventsTab(props: SchemaTabProps) {
	return (
		<div>
			{JSON.stringify(props.table?.events)}
		</div>
	)
}