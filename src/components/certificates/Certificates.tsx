import React from 'react';
import { certificates } from '../../utils/constants/constants';
import { useTranslation } from 'react-i18next';

interface CertificatesProps {
    className: string;
}

export default function Certificates({ className }: CertificatesProps) {
    const { t } = useTranslation();

    return (
        <div className='sm:hidden md:hidden lg:flex w-[100%] items-center justify-center lg:gap-[2rem] xl:gap-[5rem] mb-[2rem]'>
            <h3 className='flex text-basicWhite opacity-[0.5] lg:text-[25px] xl:tewt-[35px] font-normal'>
                {t('experience.certificats')}
            </h3>
            <select
                className='flex justify-center text-basicWhite font-space-grotesk bg-basicOnyx border-[1px] border-borderGlass rounded-[10px] py-[0.5rem] px-[1rem] pr-[30px] w-[500px] cursor-pointer transition duration-100 ease-in-out hover:bg-borderGlass'
                onChange={(e) => window.open(e.target.value)}
            >
                <option className=' bg-basicOnyx'>Sélectionnez un certificat</option>
                {certificates.map((certificate, index) => (
                    <option className=' bg-basicOnyx' key={index} value={certificate.url}>
                        {certificate.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
