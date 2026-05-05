// Reusable hand-drawn border-radius shapes.
// Use as inline `style={{ borderRadius: wobbly.md }}` so each instance
// is consistent and tweakable from one place.

export const wobbly = {
	lg: "255px 15px 225px 15px / 15px 225px 15px 255px",
	md: "30px 8px 28px 6px / 8px 30px 6px 28px",
	sm: "12px 4px 14px 5px / 4px 12px 5px 14px",
	pill: "60px 18px 80px 16px / 22px 70px 18px 60px",
	// Alternate variants so neighbouring elements don't look identical.
	mdAlt: "8px 28px 6px 30px / 28px 8px 30px 6px",
	smAlt: "4px 14px 5px 12px / 14px 4px 12px 5px",
} as const;

export type WobblyKey = keyof typeof wobbly;
