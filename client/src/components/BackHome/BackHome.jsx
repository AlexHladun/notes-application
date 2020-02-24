import React from 'react';
import { useHistory } from 'react-router-dom';
import Button  from 'react-bootstrap/Button'
import {useTranslation} from "react-i18next"


const BackHome = () => {
    let history = useHistory();
    const [t, i18n]  = useTranslation();
    return (
        <Button variant="outline-secondary" className={'backHomeButton'} onClick={() => history.push('/')}>{t("back_to_home")}</Button>
    )
}

export default BackHome;