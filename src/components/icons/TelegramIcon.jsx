export default function TelegramIcon({ className = "size-5", ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      <path d="M21.94 4.4 19.2 19.1c-.2 1.05-.84 1.31-1.7.82l-4.72-3.48-2.28 2.19c-.25.26-.46.48-.95.48l.34-4.8 8.73-7.89c.38-.34-.08-.53-.59-.19l-10.8 6.8-4.65-1.46c-1.01-.32-1.03-1.01.21-1.5l18.16-7c.85-.31 1.6.2 1.32 1.05Z" />
    </svg>
  );
}