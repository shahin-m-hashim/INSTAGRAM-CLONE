import CheckboxInput from "components/CheckboxInput";
import SearchField from "components/fields/SearchField";
import Footer from "components/Footer";

export default function LanguageSettingsPage() {
  return (
    <>
      <div className="flex flex-col justify-between p-4 max-w-[600px] w-full">
        <div className="flex flex-col w-full gap-6">
          <div className="hidden mt-14 md:block">
            <h1 className="text-xl font-bold">Language Preferences</h1>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-semibold">App language</h2>
            <p className="text-sm text-[rgb(138,138,138)]">
              See buttons, titles, and other texts on Instagram in your
              preferred language.
            </p>
          </div>

          <SearchField />

          <div className="flex flex-col h-[270px] pr-4 gap-6 overflow-y-auto">
            {[
              "English",
              "Afrikaans",
              "العربية",
              "Čeština",
              "Dansk",
              "Deutsch",
              "Ελληνικά",
              "English (UK)",
              "Español (España)",
              "Español",
              "فارسی",
              "Suomi",
              "Français",
              "עברית",
              "Bahasa Indonesia",
              "Italiano",
              "日本語",
              "한국어",
              "Bahasa Melayu",
              "Norsk",
              "Nederlands",
              "Polski",
              "Português (Brasil)",
              "Português (Portugal)",
              "Русский",
              "Svenska",
              "ภาษาไทย",
              "Filipino",
              "Türkçe",
              "中文(简体)",
              "中文(台灣)",
              "বাংলা",
              "ગુજરાતી",
              "हिन्दी",
              "Hrvatski",
              "Magyar",
              "ಕನ್ನಡ",
              "മലയാളം",
              "मराठी",
              "नेपाली",
              "ਪੰਜਾਬੀ",
              "සිංහල",
              "Slovenčina",
              "தமிழ்",
              "తెలుగు",
              "اردو",
              "Tiếng Việt",
              "中文(香港)",
              "Български",
              "Français (Canada)",
              "Română",
              "Српски",
              "Українська",
            ].map((lang, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span
                  className={
                    idx === 0 ? "text-white" : "text-[rgb(138,138,138)]"
                  }
                >
                  {lang}
                </span>
                <CheckboxInput checked={idx === 0} />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden w-full px-5 my-5 md:flex md:my-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
