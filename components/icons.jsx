// Lucide-style line icons
const Icon = ({ name, size = 20, stroke = 1.7, ...props }) => {
  const paths = {
    dollar: <text x="12" y="17" textAnchor="middle" fontSize="18" fontWeight="800" fill="currentColor" stroke="none" fontFamily="Inter, sans-serif">$</text>,
    shield: <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z"/>,
    users: (<g><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.2"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M15 20c0-2 2-3.5 4-3.5s2 1 2 3.5"/></g>),
    fingerprint: (<g><path d="M6 11a6 6 0 0 1 12 0v1"/><path d="M6 13c0 4 2 7 4 8"/><path d="M9 11a3 3 0 0 1 6 0v3c0 2 .5 4 1 5"/><path d="M12 11v5"/></g>),
    key: (<g><circle cx="8" cy="15" r="3"/><path d="M10 13l8-8"/><path d="M16 7l3 3"/></g>),
    send: <path d="M22 2L11 13"/>,
    sendFill: (<g><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></g>),
    transfer: (<g><path d="M3 8h14"/><path d="M13 4l4 4-4 4"/><path d="M21 16H7"/><path d="M11 20l-4-4 4-4"/></g>),
    coin: (<g><circle cx="12" cy="12" r="9"/><path d="M12 7v10"/><path d="M14.5 9.5c0-1.4-1.1-2.5-2.5-2.5s-2.5 1-2.5 2.3 1 2 2.5 2.5 2.5 1.2 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5"/></g>),
    qr: (<g><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM18 18h3v3h-3z"/></g>),
    store: (<g><path d="M3 9l1-5h16l1 5"/><path d="M4 9v11h16V9"/><path d="M9 14h6v6H9z"/></g>),
    grid: (<g><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></g>),
    pickaxe: (<g><path d="M14 4l6 6"/><path d="M5 21l7-7"/><path d="M11 11l3 3"/><path d="M16 6c2-2 5-2 5-2s0 3-2 5"/></g>),
    code: (<g><path d="M8 6l-5 6 5 6"/><path d="M16 6l5 6-5 6"/><path d="M14 4l-4 16"/></g>),
    chart: (<g><path d="M21 12a9 9 0 1 1-9-9"/><path d="M21 12V3h-9"/></g>),
    pie: (<g><circle cx="12" cy="12" r="9"/><path d="M12 3v9l7 4"/></g>),
    db: (<g><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.6 3.6 3 8 3s8-1.4 8-3V5"/><path d="M4 11v6c0 1.6 3.6 3 8 3s8-1.4 8-3v-6"/></g>),
    card: (<g><rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 11h20"/></g>),
    calendar: (<g><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M8 3v4M16 3v4"/></g>),
    coins: (<g><circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/></g>),
    phone: (<g><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></g>),
    suitcase: (<g><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></g>),
    bar: (<g><path d="M3 21V10"/><path d="M9 21V4"/><path d="M15 21v-7"/><path d="M21 21V8"/></g>),
    file: (<g><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></g>),
    user: (<g><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></g>),
    chat: <path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9l-5 4v-4a3 3 0 0 1-1-2V6z"/>,
    arrowRight: (<g><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></g>),
    arrowUp: (<g><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></g>),
    play: <path d="M6 4l14 8L6 20V4z"/>,
    sparkle: (<g><path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z"/></g>),
    chevronDown: <path d="M6 9l6 6 6-6"/>,
    globe: (<g><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></g>),
    login: (<g><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="M10 17l5-5-5-5"/><path d="M15 12H3"/></g>),
    check: <path d="M5 13l4 4L19 7"/>,
    clock: (<g><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></g>),
    copy: (<g><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></g>),
    twitter: <path d="M4 4l7 9-7 7h3l5.5-5.5L17 20h3l-7.5-9L20 4h-3l-5 5L8 4H4z"/>,
    youtube: (<g><rect x="2" y="6" width="20" height="12" rx="3"/><path d="M10 9.5v5l5-2.5-5-2.5z" fill="currentColor" stroke="none"/></g>),
    mail: (<g><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></g>),
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={stroke}
      strokeLinecap="round" strokeLinejoin="round" {...props}>
      {paths[name]}
    </svg>
  );
};
window.Icon = Icon;
