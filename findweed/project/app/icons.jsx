// FindWeed — minimal icon set (mobile-first, sketch-friendly)
function _ic(s, c, kids) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      {kids}
    </svg>
  );
}
function HomeIcon({ size = 20, color = "currentColor" }) { return _ic(size, color, <><path d="M3 11 12 4 21 11 21 20 14 20 14 14 10 14 10 20 3 20 Z"/></>); }
function MapIcon({ size = 20, color = "currentColor" }) { return _ic(size, color, <><path d="M9 4 3 6 3 20 9 18 15 20 21 18 21 4 15 6 9 4 Z"/><path d="M9 4 9 18"/><path d="M15 6 15 20"/></>); }
function SearchIcon({ size = 20, color = "currentColor" }) { return _ic(size, color, <><circle cx="11" cy="11" r="7"/><path d="M20 20 16 16"/></>); }
function BookmarkIcon({ size = 20, color = "currentColor", filled = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : "none"} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M6 3 18 3 18 21 12 17 6 21 Z"/>
    </svg>
  );
}
function UserIcon({ size = 20, color = "currentColor" }) { return _ic(size, color, <><circle cx="12" cy="8" r="4"/><path d="M4 21 C 4 16, 8 14, 12 14 C 16 14, 20 16, 20 21"/></>); }
function FilterIcon({ size = 20, color = "currentColor" }) { return _ic(size, color, <><path d="M3 6 21 6"/><path d="M6 12 18 12"/><path d="M10 18 14 18"/></>); }
function LocateIcon({ size = 20, color = "currentColor" }) { return _ic(size, color, <><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="9"/><path d="M12 1 12 4"/><path d="M12 20 12 23"/><path d="M1 12 4 12"/><path d="M20 12 23 12"/></>); }
function ChevronLeftIcon({ size = 20, color = "currentColor" }) { return _ic(size, color, <path d="M15 5 8 12 15 19"/>); }
function ChevronRightIcon({ size = 20, color = "currentColor" }) { return _ic(size, color, <path d="M9 5 16 12 9 19"/>); }
function CloseIcon({ size = 20, color = "currentColor" }) { return _ic(size, color, <><path d="M5 5 19 19"/><path d="M19 5 5 19"/></>); }
function PlusIcon({ size = 20, color = "currentColor" }) { return _ic(size, color, <><path d="M12 5 12 19"/><path d="M5 12 19 12"/></>); }
function ShareIcon({ size = 20, color = "currentColor" }) { return _ic(size, color, <><path d="M12 4 12 16"/><path d="M7 9 12 4 17 9"/><path d="M5 14 5 20 19 20 19 14"/></>); }
function PhoneIcon({ size = 20, color = "currentColor" }) { return _ic(size, color, <path d="M5 3 8 3 10 8 7 10 C 8 13, 11 16, 14 17 L 16 14 21 16 21 19 C 21 20, 20 21, 19 21 C 10 21, 3 14, 3 5 C 3 4, 4 3, 5 3 Z"/>); }
function DirectionIcon({ size = 20, color = "currentColor" }) { return _ic(size, color, <><path d="M12 2 L 22 12 L 12 22 L 2 12 Z"/><path d="M8 12 16 12"/><path d="M13 9 16 12 13 15"/></>); }
function ClockIcon({ size = 20, color = "currentColor" }) { return _ic(size, color, <><circle cx="12" cy="12" r="9"/><path d="M12 7 12 12 16 14"/></>); }
function StarIcon({ size = 20, color = "currentColor", filled = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : "none"} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9 Z"/>
    </svg>
  );
}
function HeartIcon({ size = 20, color = "currentColor", filled = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : "none"} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M12 21 C 12 21, 3 15, 3 9 C 3 5, 6 3, 9 3 C 11 3, 12 5, 12 5 C 12 5, 13 3, 15 3 C 18 3, 21 5, 21 9 C 21 15, 12 21, 12 21 Z"/>
    </svg>
  );
}
function CameraIcon({ size = 20, color = "currentColor" }) { return _ic(size, color, <><path d="M3 8 L 7 8 L 9 5 L 15 5 L 17 8 L 21 8 L 21 19 L 3 19 Z"/><circle cx="12" cy="13" r="4"/></>); }
function CheckIcon({ size = 20, color = "currentColor" }) { return _ic(size, color, <path d="M4 12 10 18 20 6"/>); }

window.HomeIcon = HomeIcon; window.MapIcon = MapIcon; window.SearchIcon = SearchIcon;
window.BookmarkIcon = BookmarkIcon; window.UserIcon = UserIcon; window.FilterIcon = FilterIcon;
window.LocateIcon = LocateIcon; window.ChevronLeftIcon = ChevronLeftIcon; window.ChevronRightIcon = ChevronRightIcon;
window.CloseIcon = CloseIcon; window.PlusIcon = PlusIcon; window.ShareIcon = ShareIcon;
window.PhoneIcon = PhoneIcon; window.DirectionIcon = DirectionIcon; window.ClockIcon = ClockIcon;
window.StarIcon = StarIcon; window.HeartIcon = HeartIcon; window.CameraIcon = CameraIcon; window.CheckIcon = CheckIcon;
