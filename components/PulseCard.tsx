import {
    CreditCard,
    CreditCardBack,
    CreditCardChip,
    CreditCardCvv,
    CreditCardExpiry,
    CreditCardFlipper,
    CreditCardFront,
    CreditCardLogo,
    CreditCardMagStripe,
    CreditCardName,
    CreditCardNumber,
    CreditCardServiceProvider,
} from '@/components/ui/shadcn-io/credit-card';
import Image from 'next/image';

const PulseCard = () => {
    return (
        <CreditCard>
            <CreditCardFlipper>
                <CreditCardFront className="bg-[#063573]">
                    <Image src="/logo-white.png" alt="Pulse Logo" className="font-bold" width={100} height={100} />
                    <CreditCardLogo>
                        <p>DEBIT</p>
                    </CreditCardLogo>
                    <CreditCardChip />
                    <CreditCardServiceProvider type="Mastercard" format="logo" />
                    <CreditCardName className="absolute bottom-0 left-0">
                        Collins Chikangwu
                    </CreditCardName>
                </CreditCardFront>
                <CreditCardBack className="bg-[#063573]">
                    <CreditCardMagStripe />
                    <CreditCardNumber className="absolute bottom-0 left-0">
                        0123 4567 8901 2345
                    </CreditCardNumber>
                    <div className="-translate-y-1/2 absolute top-1/2 flex gap-4">
                        <CreditCardExpiry>01/24</CreditCardExpiry>
                        <CreditCardCvv>123</CreditCardCvv>
                    </div>
                </CreditCardBack>
            </CreditCardFlipper>
        </CreditCard>
    )
}

export default PulseCard