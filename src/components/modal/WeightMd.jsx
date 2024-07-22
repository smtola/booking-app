
function WeightMd({ data }) {
  const { weight } = data;
  
  return (
    <li className="flex justify-between py-2 border-b">
      <span>{weight}</span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-5 -7 24 24"
          width="28"
          fill="currentColor"
        >
          <path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path>
        </svg>
      </span>
    </li>
  );
}

export default WeightMd;
