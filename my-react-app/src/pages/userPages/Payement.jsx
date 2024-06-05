import Header from "@/widgets/layout/header";
import FooterPages from "@/widgets/layout/footerPages";
import React, { useState } from 'react';

export const Payement = () => {
  const [cardholder, setCardholder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expired, setExpired] = useState({ month: '', year: '' });
  const [securityCode, setSecurityCode] = useState('');
  const [card, setCard] = useState('front');

  const formatCardNumber = (e) => {
    let value = e.target.value;
    value = value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    setCardNumber(value);
  };

  const isValid = () => {
    if (cardholder.length < 5) return false;
    if (cardNumber === '') return false;
    if (expired.month === '' || expired.year === '') return false;
    if (securityCode.length !== 3) return false;
    return true;
  };

  const onSubmit = () => {
    alert(`You did it ${cardholder}.`);
  };

  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
        <div className="credit-card w-80 mx-auto rounded-xl bg-white">
          <header className="flex flex-col justify-center items-center">
            <div className={`relative ${card === 'front' ? 'block' : 'hidden'}`}>
              <img
                className="w-80 h-auto"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
                alt="front credit card"
              />
              <div className="front bg-transparent text-lg w-full text-white px-8 absolute left-0 bottom-12">
                <p className="number mb-5 text-center sm:text-xl">
                  {cardNumber !== '' ? cardNumber : '0000 0000 0000 0000'}
                </p>
                <div className="flex flex-row justify-between px-2">
                  <p>{cardholder !== '' ? cardholder : 'Card holder'}</p>
                  <div>
                    <span>{expired.month}</span>
                    <span>{expired.month !== '' ? '/' : ''}</span>
                    <span>{expired.year}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`relative ${card === 'back' ? 'block' : 'hidden'}`}>
              <img
                className="w-80 h-auto"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png"
                alt="back credit card"
              />
              <div className="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8 sm:bottom-24 right-0 sm:px-12">
                <div className="border border-white w-16 h-9 flex justify-center items-center">
                  <p>{securityCode !== '' ? securityCode : 'code'}</p>
                </div>
              </div>
            </div>
            <ul className="flex mt-4">
              <li className="mx-2">
                <img className="w-16" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png" alt="" />
              </li>
              <li className="mx-2">
                <img className="w-14" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png" alt="" />
              </li>
              <li className="ml-5">
                <img className="w-7" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png" alt="" />
              </li>
            </ul>
          </header>
          <main className="mt-4 p-4 w-72 mx-auto">
            <h1 className="text-xl font-semibold text-black text-center">Card payment</h1>
            <div>
              <div className="my-3">
                <input
                  type="text"
                  className="block w-full px-3 py-1 border border-black rounded-lg bg-white placeholder-gray-400 text-gray-700 focus:ring-0 focus:outline-none"
                  placeholder="Card holder"
                  maxLength="22"
                  value={cardholder}
                  onChange={(e) => setCardholder(e.target.value)}
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  className="block w-full px-3 py-1 border border-black rounded-lg bg-white placeholder-gray-400 text-gray-700 focus:ring-0 focus:outline-none"
                  placeholder="Card number"
                  value={cardNumber}
                  onChange={formatCardNumber}
                  maxLength="19"
                />
              </div>
              <div className="my-3 flex flex-col">
                <div className="mb-2">
                  <label className="text-gray-700">Expired</label>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <select
                    className="form-select appearance-none block w-full px-3 py-1 border border-black rounded-lg bg-white placeholder-gray-400 text-gray-700 focus:ring-0 focus:outline-none"
                    value={expired.month}
                    onChange={(e) => setExpired({ ...expired, month: e.target.value })}
                  >
                    <option value="" disabled>MM</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select
                    className="form-select appearance-none block w-full px-3 py-1 border border-black rounded-lg bg-white placeholder-gray-400 text-gray-700 focus:ring-0 focus:outline-none"
                    value={expired.year}
                    onChange={(e) => setExpired({ ...expired, year: e.target.value })}
                  >
                    <option value="" disabled>YY</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                  </select>
                  <input
                    type="text"
                    className="block w-full col-span-2 px-3 py-1 border border-black rounded-lg bg-white placeholder-gray-400 text-gray-700 focus:ring-0 focus:outline-none"
                    placeholder="Security code"
                    maxLength="3"
                    value={securityCode}
                    onChange={(e) => setSecurityCode(e.target.value)}
                    onFocus={() => setCard('back')}
                    onBlur={() => setCard('front')}
                  />
                </div>
              </div>
            </div>
          </main>
          <footer className="mt-6 p-4 w-72 mx-auto">
            <button
              className="submit-button px-3 py-2 rounded-lg bg-black text-white focus:ring-0 focus:outline-none w-full text-lg font-semibold transition-colors"
              disabled={!isValid()}
              onClick={onSubmit}
            >
              Pay now
            </button>
          </footer>
        </div>
      </div>
      <FooterPages />
    </div>
  );
};

export default Payement;
