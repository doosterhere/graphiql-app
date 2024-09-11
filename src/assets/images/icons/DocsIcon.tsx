interface IProps {
  className?: string;
}
function DocsIcon({ className }: IProps): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='45'
      height='45'
      viewBox='0 0 45 45'
      fill='none'
      className={className}
    >
      <rect width='45' height='45' rx='4' fill='none' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14 15V8H15V14.1169L16.7428 13.0713C16.9011 12.9762 17.0989 12.9762 17.2572 13.0713L19 14.1169V8H20V15C20 15.1801 19.9031 15.3463 19.7463 15.4351C19.5896 15.5239 19.3972 15.5214 19.2428 15.4287L17 14.0831L14.7572 15.4287C14.6028 15.5214 14.4104 15.5239 14.2537 15.4351C14.0969 15.3463 14 15.1801 14 15Z'
        fill='#6B99C3'
      />
      <path
        d='M13.4375 7H31.5625C33.5645 7 35.1875 8.69649 35.1875 10.7892V33.5246C35.1875 35.6173 33.5645 37.3138 31.5625 37.3138H13.4375C11.4355 37.3138 9.8125 35.6173 9.8125 33.5246V31.63H11.625V33.5246C11.625 34.5709 12.4365 35.4192 13.4375 35.4192H31.5625C32.5635 35.4192 33.375 34.5709 33.375 33.5246V10.7892C33.375 9.74286 32.5635 8.89461 31.5625 8.89461H13.4375C12.4365 8.89461 11.625 9.74286 11.625 10.7892V12.6838H9.8125V10.7892C9.8125 8.69649 11.4355 7 13.4375 7Z'
        fill='#6B99C3'
      />
      <path
        d='M9.8125 16.4731V15.5258C9.8125 15.0026 10.2182 14.5784 10.7188 14.5784C11.2193 14.5784 11.625 15.0026 11.625 15.5258V16.4731H12.5312C13.0318 16.4731 13.4375 16.8972 13.4375 17.4204C13.4375 17.9435 13.0318 18.3677 12.5312 18.3677H8.90625C8.40574 18.3677 8 17.9435 8 17.4204C8 16.8972 8.40574 16.4731 8.90625 16.4731H9.8125Z'
        fill='#6B99C3'
      />
      <path
        d='M9.8125 22.1569V21.2096C9.8125 20.6864 10.2182 20.2623 10.7188 20.2623C11.2193 20.2623 11.625 20.6864 11.625 21.2096V22.1569H12.5312C13.0318 22.1569 13.4375 22.581 13.4375 23.1042C13.4375 23.6274 13.0318 24.0515 12.5312 24.0515H8.90625C8.40574 24.0515 8 23.6274 8 23.1042C8 22.581 8.40574 22.1569 8.90625 22.1569H9.8125Z'
        fill='#6B99C3'
      />
      <path
        d='M9.8125 27.8407V26.8934C9.8125 26.3702 10.2182 25.9461 10.7188 25.9461C11.2193 25.9461 11.625 26.3702 11.625 26.8934V27.8407H12.5312C13.0318 27.8407 13.4375 28.2649 13.4375 28.788C13.4375 29.3112 13.0318 29.7353 12.5312 29.7353H8.90625C8.40574 29.7353 8 29.3112 8 28.788C8 28.2649 8.40574 27.8407 8.90625 27.8407H9.8125Z'
        fill='#6B99C3'
      />
    </svg>
  );
}

export default DocsIcon;