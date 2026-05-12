function ShieldIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

function HeadphonesIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

const TRUST_ITEMS = [
  {
    id: 1,
    icon: <ShieldIcon />,
    title: "Quality Guaranteed",
    desc: "Premium products you can trust",
  },
  {
    id: 2,
    icon: <TruckIcon />,
    title: "Fast Delivery",
    desc: "Get your items quickly and safely",
  },
  {
    id: 3,
    icon: <RefreshIcon />,
    title: "Easy Returns",
    desc: "Hassle-free returns within 7 days",
  },
  {
    id: 4,
    icon: <HeadphonesIcon />,
    title: "Customer Support",
    desc: "We're here to help 24/7",
  },
];

export default function TrustBar() {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 px-17.5 py-5 my-6 rounded-2xl bg-(--color-product-box) shadow-(--color-product-shadow)">
      {TRUST_ITEMS.map((item, index) => (
        <div key={item.id} className="flex items-center gap-3 flex-1 min-w-40">
          {/* Icon */}
          <div style={{ color: "var(--color-special-text)" }}>{item.icon}</div>

          {/* Text */}
          <div>
            <p className="text-sm font-semibold text-(--color-primary-text)">
              {item.title}
            </p>
            <p className="text-xs text-(--color-secondary-text)">{item.desc}</p>
          </div>

          {index < TRUST_ITEMS.length - 1 && (
            <div className="hidden md:block w-px h-10 ml-auto bg-(--color-secondary-button)" />
          )}
        </div>
      ))}
    </div>
  );
}
