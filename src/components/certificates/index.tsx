import React from 'react';
import { certificates } from '../../utils/constants/constants';
import { useTranslation } from 'react-i18next';
import './style.scss';

interface CertificatesProps {
    className: string;
}

export default function Certificates({ className }: CertificatesProps) {
    const { t } = useTranslation();

    return (
        <div className='dropdown-certificates-container'>
            <h3 className='dropdown-certificates-title'>{t('experience.certificats')}</h3>
            <select onChange={(e) => window.open(e.target.value)}>
                <option className='dropdown-option-title'>Sélectionnez un certificat</option>
                {certificates.map((certificate, index) => (
                    <option className='dropdown-option' key={index} value={certificate.url}>
                        {certificate.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
