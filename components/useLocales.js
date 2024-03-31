import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export const useLocales = (path) => {
   const router = useRouter();
   const { locale } = router;
   const [text, setText] = useState({});
   useEffect(() => {
      if (path) {
         import(`../lib/${path}/${locale}`).then((t) => {
         setText(t.default);
      });
   }
   }, [locale, path]);
return text;
};