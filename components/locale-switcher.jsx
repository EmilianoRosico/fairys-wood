import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale, pathname, query, asPath } = router;

  const buttonStyle = {
    backgroundColor: "white", /* Green */
    border: "none",
    color: "white",
    padding: "3px 9px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div>
      {locales.map((locale) => (
        <button style={buttonStyle} key={locale} onClick={() => router.push(pathname, asPath, { locale })}>
          <Image
            src={`/${locale}.png`}
            alt="Lang"
            width={18}
            height={18}
          />
          {/* <span className="text-uppercase">{locale}</span> */}
        </button>
      ))}
    </div>
  );
}