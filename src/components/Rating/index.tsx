function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const RatingStar = ({ percentage }: { percentage: number }) => {
  const percentStar = percentage > 5 ? 5 : percentage;

  const integerPart = Math.floor(percentStar);
  const decimalPart = percentStar - integerPart;

  const starElement = [];
  for (let i = 0; i < integerPart; i++) {
    starElement.push(
      <svg
        key={generateUUID()}
        className='w-4 h-4 text-[#ffacb2] me-1'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 22 20'
      >
        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
      </svg>
    );
  }

  if (decimalPart > 0) {
    const fillPercentage = `${(decimalPart * 100).toFixed(0)}%`;

    starElement.push(
      <svg
        key='partialStar'
        className='w-4 h-4 text-black me-1'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 22 20'
      >
        <defs>
          <linearGradient id='starGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset={`${fillPercentage}`} stopColor='#ffacb2' stopOpacity='1' />
            <stop offset={`${fillPercentage}`} stopColor='#333' stopOpacity='1' />
          </linearGradient>
        </defs>
        <path
          d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z'
          fill='url(#starGradient)'
        />
      </svg>
    );
  }

  return <div className='flex items-center'>{starElement}</div>;
};

export default RatingStar;
