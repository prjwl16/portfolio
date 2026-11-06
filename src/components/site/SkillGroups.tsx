import { skillGroups } from "@/constants/site";

export function SkillGroups() {
	return (
		<dl className="mt-4 space-y-4">
			{skillGroups.map((group) => (
				<div key={group.label} className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
					<dt className="text-sm font-medium">{group.label}</dt>
					<dd className="text-soft">{group.items.join(", ")}</dd>
				</div>
			))}
		</dl>
	);
}
