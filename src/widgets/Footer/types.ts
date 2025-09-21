export type FooterLink = {
  label: string;
  url: string;
  additionalText?: string
};

export type FooterGroup = {
  title: string;
  links: FooterLink[];
};
