import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <div>
      <ul className="list-group">
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <li className="list-group-item" key={locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <a>
                  <Image
                    src={`/${locale == "en" ? locale : "es"}.png`}
                    alt="Lang"
                    width={18}
                    height={18}
                  />
                  <span className="text-uppercase">{locale}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
