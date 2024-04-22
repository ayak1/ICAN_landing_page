import {useEffect, useState} from "react";
import i18n from '../i18n';

const LanguageSelector = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); 
    useEffect(() => {
        setSelectedLanguage(i18n.language);
    }, [i18n.language]);
    const chooseLanguage = (lang) => {
        i18n.changeLanguage(lang); 
        setSelectedLanguage(lang);
    }

    return (
        <button className="lang_btn tajawal-bold me-2" onClick={() => chooseLanguage(selectedLanguage === 'en' ? 'ar' : 'en')}>
            {selectedLanguage === 'en' ? 'AR' : 'EN'}
        </button>
    );
};

export default LanguageSelector;