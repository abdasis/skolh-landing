import { ShimmerButton } from "@/components/ui/shimmer-button";

interface MulaiGratisButtonProps {
  href?: string;
}

const MulaiGratisButton = ({ href = "#cta" }: MulaiGratisButtonProps) => {
  return (
    <a href={href}>
      <ShimmerButton
        background="rgb(91, 108, 255)"
        borderRadius="12px"
        shimmerColor="rgba(255,255,255,0.6)"
        shimmerDuration="2.5s"
        className="gap-2 px-7 py-3.5 text-base font-semibold"
      >
        Mulai Gratis
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: 16, height: 16 }}
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </ShimmerButton>
    </a>
  );
};

export default MulaiGratisButton;
