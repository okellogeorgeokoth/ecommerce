export const COUPON_CODES ={
    BFRIDAY: "BFRIDAY",
    XMASS2024: "XMASS2024",
    NY2025: "NYZ2025",
    DARICOM:"DARICOM"
} as const;
export type couponCode = keyof typeof COUPON_CODES;