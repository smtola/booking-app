function Button({type, title, disable, onClick,icon,logo}) {
  return (
      <button className={`
      flex
      justify-center
      gap-2
      ${(type === 'booking' ? 'border-2 border-[#ffbf00] text-white':'bg-[#ff8800] text-white')}
      pe-[1vh] py-3
      rounded-xl 
      font-medium
      text-[17px]
      outline-none
      w-[30vh]
      `}
        disabled={disable}
        onClick={onClick}
      >
          { logo }
          { icon }
          {title}
      </button>    
  )
}

export default Button