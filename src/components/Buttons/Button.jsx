function Button({type, title, disable, onClick,icon,logo}) {
  return (
      <button className={`
      flex
      justify-center
      gap-2
      ${(type === 'booking' ? 'border-2 border-[#ffbf00] py-3 text-white':'bg-[#ff8800] text-white pt-4 pb-3')}
      pe-[1vh]
      rounded-xl 
      font-medium
      text-[15px]
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