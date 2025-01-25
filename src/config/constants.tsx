import { CardInfo } from "./types";

export const PHONE_NUMBER = "123-456-7890";
export const EMAIL = "abc@xyz.com";
export const ICONS = {
  EMAIL: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-send size-full"
    >
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </svg>
  ),
  PHONE: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-phone size-full"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
} as const;

export const HERO_IMAGE_BUTTON_TEXT = "Learn about us";
export const CARD_INFO: CardInfo[] = [
  {
    title: "Advertising that converts",
    bodyText:
      "We invest our own marketing dollars into custom advertising campaigns for your brand on Amazon, increasing your sales and positioning your products ahead of your competitors.",
  },
  {
    title: "PRODUCT LISTING REFRESH",
    bodyText:
      "We invest our own marketing dollars into custom advertising campaigns for your brand on Amazon, increasing your sales and positioning your products ahead of your competitors.",
  },
  {
    title: 'WE GET AMAZON',
    bodyText:
      "We invest our own marketing dollars into custom advertising campaigns for your brand on Amazon, increasing your sales and positioning your products ahead of your competitors.",
  },
];

export const APP_ROUTES = {
  LANDING: "/",
  BRANDS: "/brands-we-carry",
  CONTACT: "/contact",
} as const;
