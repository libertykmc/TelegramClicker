export const tg = window.Telegram?.WebApp || null;

export function initTelegram() {
  if (tg) {
    tg.ready();
  } else {
    console.warn("Telegram WebApp SDK is not available.");
  }
}
